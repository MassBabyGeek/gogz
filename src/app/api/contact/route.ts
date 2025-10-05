import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route - Envoi d'email de contact
 * POST /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Email de destination (à configurer dans .env.local)
    const destinationEmail = process.env.CONTACT_EMAIL || 'contact@btp-excellence.fr';

    // Construction du corps de l'email en HTML
    const emailBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #1f2937; }
            .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📬 Nouveau message de contact</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nom :</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email :</span>
                <span class="value">${email}</span>
              </div>
              ${phone ? `
              <div class="field">
                <span class="label">Téléphone :</span>
                <span class="value">${phone}</span>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Sujet :</span>
                <span class="value">${subject}</span>
              </div>
              <div class="field">
                <span class="label">Message :</span>
                <div class="value" style="white-space: pre-wrap; margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #38bdf8; border-radius: 4px;">
                  ${message}
                </div>
              </div>
            </div>
            <div class="footer">
              Ce message a été envoyé depuis le formulaire de contact du site BTP Excellence
            </div>
          </div>
        </body>
      </html>
    `;

    // Option 1: Utiliser Resend (recommandé)
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact BTP Excellence <onboarding@resend.dev>',
          to: [destinationEmail],
          reply_to: email,
          subject: `[Contact Site] ${subject}`,
          html: emailBody,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Erreur Resend:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email');
      }

      return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });
    }

    // Option 2: Utiliser SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: destinationEmail }],
            subject: `[Contact Site] ${subject}`,
          }],
          from: { email: process.env.SENDGRID_FROM_EMAIL || 'contact@btp-excellence.fr' },
          reply_to: { email },
          content: [{
            type: 'text/html',
            value: emailBody,
          }],
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Erreur SendGrid:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email');
      }

      return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });
    }

    // Si aucun service n'est configuré, logger les données
    console.log('📧 EMAIL NON ENVOYÉ - Aucun service configuré');
    console.log('Données du formulaire:', { name, email, phone, subject, message });

    return NextResponse.json({
      success: true,
      message: 'Message reçu (mode développement)',
      dev: true
    });

  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
