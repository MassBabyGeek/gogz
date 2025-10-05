# 📧 Configuration de l'envoi d'emails

Le formulaire de contact est maintenant configuré pour envoyer de vrais emails ! Voici comment le configurer.

## 🚀 Configuration rapide

### 1. Créer le fichier `.env.local`

Copiez le fichier `.env.example` en `.env.local` :

```bash
cp .env.example .env.local
```

### 2. Choisir un service d'envoi d'email

Vous avez **3 options** (choisissez-en une) :

---

## Option 1 : Resend (Recommandé) 🌟

**Avantages :**
- ✅ **Gratuit** jusqu'à 3 000 emails/mois
- ✅ Très simple à configurer
- ✅ Interface moderne
- ✅ Parfait pour les projets

### Configuration :

1. Créez un compte sur [resend.com](https://resend.com)
2. Obtenez votre clé API
3. Ajoutez dans `.env.local` :

```env
CONTACT_EMAIL=votre-email@gmail.com
RESEND_API_KEY=re_votre_cle_api
```

**C'est tout !** 🎉

---

## Option 2 : SendGrid

**Avantages :**
- ✅ Gratuit jusqu'à 100 emails/jour
- ✅ Service fiable et établi

### Configuration :

1. Créez un compte sur [sendgrid.com](https://sendgrid.com)
2. Créez une clé API
3. Ajoutez dans `.env.local` :

```env
CONTACT_EMAIL=votre-email@gmail.com
SENDGRID_API_KEY=SG.votre_cle_api
SENDGRID_FROM_EMAIL=noreply@votre-domaine.com
```

---

## Option 3 : SMTP (Gmail, Outlook, etc.)

**Pour Gmail :**

1. Activez la validation en 2 étapes sur votre compte Google
2. Créez un "Mot de passe d'application" :
   - Allez sur [myaccount.google.com/security](https://myaccount.google.com/security)
   - Recherchez "Mots de passe des applications"
   - Créez un nouveau mot de passe pour "Mail"

3. Ajoutez dans `.env.local` :

```env
CONTACT_EMAIL=votre-email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre_mot_de_passe_app
SMTP_FROM=noreply@votre-domaine.com
```

**Note :** Pour utiliser SMTP, vous devez installer nodemailer :
```bash
npm install nodemailer
```

---

## 🧪 Tester l'envoi d'emails

### Mode développement (sans configuration)

Si aucune variable d'environnement n'est configurée, les messages seront **affichés dans la console** du serveur.

### Avec configuration

1. Démarrez le serveur :
```bash
npm run dev
```

2. Allez sur le formulaire de contact
3. Remplissez et envoyez
4. Vérifiez votre email ! 📬

---

## 📁 Structure des fichiers

```
src/
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          # API route pour l'envoi d'emails
├── sections/
│   └── Contact.tsx               # Formulaire de contact
.env.local                         # Variables d'environnement (à créer)
.env.example                       # Exemple de configuration
```

---

## 🔒 Sécurité

- ⚠️ **Ne jamais commiter** le fichier `.env.local` sur Git
- ✅ Le fichier `.gitignore` est déjà configuré pour l'ignorer
- ✅ Les clés API sont sécurisées côté serveur
- ✅ Validation des données avant envoi

---

## 🐛 Dépannage

### Les emails ne sont pas envoyés

1. Vérifiez que `.env.local` existe et contient les bonnes variables
2. Redémarrez le serveur après avoir modifié `.env.local`
3. Vérifiez les logs dans la console du serveur
4. Vérifiez vos quotas d'envoi (Resend/SendGrid)

### Erreur "Unauthorized"

- Vérifiez que votre clé API est correcte
- Vérifiez qu'elle n'a pas expiré

### Les emails arrivent en spam

- Configurez SPF/DKIM pour votre domaine
- Utilisez une adresse email avec votre propre domaine
- Évitez les mots "spam" dans le sujet/message

---

## 💡 Recommandation

Pour un projet en production, utilisez **Resend** :
- Interface moderne et simple
- Gratuit jusqu'à 3 000 emails/mois
- Support des domaines personnalisés
- Statistiques d'envoi

---

## 📞 Support

Si vous avez besoin d'aide :
- Documentation Resend : [resend.com/docs](https://resend.com/docs)
- Documentation SendGrid : [sendgrid.com/docs](https://sendgrid.com/docs)
- Documentation Nodemailer : [nodemailer.com](https://nodemailer.com)
