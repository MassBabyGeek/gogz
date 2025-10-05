"use client";

/**
 * Section Contact - Formulaire de contact
 * Avec validation et feedback utilisateur
 */

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { getCompanyInfo } from "@/lib/constants";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const tCompany = useTranslations("company");
  const COMPANY_INFO = getCompanyInfo(tCompany);

  /**
   * Validation du formulaire
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("form.errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.errors.emailRequired");
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t("form.errors.emailInvalid");
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = t("form.errors.phoneInvalid");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("form.errors.subjectRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.errors.messageRequired");
    } else if (formData.message.length < 10) {
      newErrors.message = t("form.errors.messageMinLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Gestion de la soumission
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("info.address"),
      content: COMPANY_INFO.address
    },
    {
      icon: Phone,
      title: t("info.phone"),
      content: COMPANY_INFO.phone,
      link: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: Mail,
      title: t("info.email"),
      content: COMPANY_INFO.email,
      link: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: Clock,
      title: t("info.hours"),
      content: t("info.schedule")
    }
  ];

  return (
    <Section
      id="contact"
      title={t("title")}
      subtitle={t("subtitle")}
      background="darker"
    >
      <div className="grid lg:grid-cols-2 gap-[var(--spacing-2xl)] lg:gap-[var(--spacing-3xl)]">
        {/* Colonne gauche : Informations */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)]">
            {t("heading")}
          </h3>
          <p className="text-foreground-secondary text-lg mb-10 leading-relaxed">
            {t("description")}
          </p>

          {/* Informations de contact */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 glass rounded-xl flex items-center justify-center flex-shrink-0 glow-on-hover">
                  <info.icon size={24} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-foreground-secondary hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground-secondary whitespace-pre-line">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 relative h-64 rounded-2xl overflow-hidden shadow-xl hidden lg:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop&q=80"
              alt={t("title")}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Colonne droite : Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-10 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                {t("form.name")} *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-sm border ${
                  errors.name ? "border-red-500" : "border-border"
                } text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300`}
                placeholder={t("form.namePlaceholder")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                {t("form.email")} *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-sm border ${
                  errors.email ? "border-red-500" : "border-border"
                } text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300`}
                placeholder={t("form.emailPlaceholder")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                {t("form.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-sm border ${
                  errors.phone ? "border-red-500" : "border-border"
                } text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300`}
                placeholder={t("form.phonePlaceholder")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Sujet */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                {t("form.subject")} *
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-sm border ${
                  errors.subject ? "border-red-500" : "border-border"
                } text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 cursor-pointer`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              >
                <option value="">{t("form.subjectPlaceholder")}</option>
                <option value="quote">{t("form.subjects.quote")}</option>
                <option value="construction">{t("form.subjects.construction")}</option>
                <option value="renovation">{t("form.subjects.renovation")}</option>
                <option value="masonry">{t("form.subjects.masonry")}</option>
                <option value="other">{t("form.subjects.other")}</option>
              </select>
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                {t("form.message")} *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-5 py-4 rounded-xl bg-background/50 backdrop-blur-sm border ${
                  errors.message ? "border-red-500" : "border-border"
                } text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none`}
                placeholder={t("form.messagePlaceholder")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Bouton submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8"
              size="lg"
              variant="gold"
            >
              {isSubmitting ? t("form.submitting") : (
                <>
                  {t("form.submit")}
                  <Send size={20} />
                </>
              )}
            </Button>

            {/* Messages de feedback */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
              >
                <CheckCircle2 size={20} />
                <span>{t("form.success")}</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
              >
                <AlertCircle size={20} />
                <span>{t("form.error")}</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
