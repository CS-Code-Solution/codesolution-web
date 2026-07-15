'use client'

import { useState, type FormEvent } from 'react'
import { Info, Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/section-title'
import { company, mailto } from '@/lib/site-data'

type Fields = {
  name: string
  email: string
  organization: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const initial: Fields = {
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactSection() {
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(values: Fields): Errors {
    const next: Errors = {}
    if (values.name.trim().length < 2) next.name = 'Informe seu nome.'
    if (!emailRegex.test(values.email.trim())) next.email = 'Informe um e-mail válido.'
    if (values.subject.trim().length < 2) next.subject = 'Informe o assunto.'
    if (values.message.trim().length < 10)
      next.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
    return next
  }

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validation = validate(fields)
    setErrors(validation)
    if (Object.keys(validation).length > 0) {
      const firstError = Object.keys(validation)[0]
      document.getElementById(`contact-${firstError}`)?.focus()
      return
    }

    const body = [
      `Nome: ${fields.name}`,
      `E-mail: ${fields.email}`,
      fields.organization ? `Empresa/Organização: ${fields.organization}` : null,
      '',
      fields.message,
    ]
      .filter((line) => line !== null)
      .join('\n')

    const url = `${mailto}?subject=${encodeURIComponent(
      fields.subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = url
    setSent(true)
  }

  const inputClass =
    'mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20'

  return (
    <section id="contato" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contato"
          title="Entre em contato"
          description="Estamos disponíveis para conversar sobre ideias, necessidades e como a tecnologia pode apoiar o seu negócio."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-bold text-navy">Canais de atendimento</h3>

              <a
                href={mailto}
                className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/30 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-navy">E-mail</span>
                  <span className="text-sm break-all text-muted-foreground">{company.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-navy">Localização</span>
                  <span className="text-sm text-muted-foreground">{company.city}</span>
                </span>
              </div>

              <div className="mt-auto flex items-start gap-2 rounded-xl bg-navy/[0.04] p-4 text-sm text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Atendimento: contato inicial por e-mail.</span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-semibold text-foreground">
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={fields.name}
                    onChange={(e) => update('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    className={inputClass}
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p id="error-name" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-sm font-semibold text-foreground">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => update('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={inputClass}
                    placeholder="voce@empresa.com"
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-organization"
                  className="text-sm font-semibold text-foreground"
                >
                  Empresa ou organização{' '}
                  <span className="font-normal text-muted-foreground">(opcional)</span>
                </label>
                <input
                  id="contact-organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={fields.organization}
                  onChange={(e) => update('organization', e.target.value)}
                  className={inputClass}
                  placeholder="Nome da empresa ou organização"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="text-sm font-semibold text-foreground">
                  Assunto
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={fields.subject}
                  onChange={(e) => update('subject', e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                  className={inputClass}
                  placeholder="Como podemos ajudar?"
                />
                {errors.subject && (
                  <p id="error-subject" className="mt-1.5 text-xs text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="text-sm font-semibold text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={fields.message}
                  onChange={(e) => update('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className={`${inputClass} resize-y`}
                  placeholder="Conte um pouco sobre o seu projeto ou necessidade..."
                />
                {errors.message && (
                  <p id="error-message" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  size="lg"
                  className="h-11 bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Enviar mensagem
                </Button>
                <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
                  {sent
                    ? 'Abrimos seu aplicativo de e-mail para concluir o envio.'
                    : 'Canal de envio em configuração — sua mensagem abrirá no aplicativo de e-mail.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
