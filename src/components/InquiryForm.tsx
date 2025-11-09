import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle, XCircle, Send } from 'lucide-react'
import config from '../site.config'

const inquirySchema = z.object({
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  grade: z.string().min(1, 'Please select a grade'),
  subjects: z.array(z.string()).min(1, 'Please select at least one subject'),
  preferredTime: z.string().optional(),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  nickname: z.string().optional(), // Honeypot field
})

type InquiryFormData = z.infer<typeof inquirySchema>

interface InquiryFormProps {
  type: 'contact' | 'demo' | 'fee-quote'
  onSuccess?: () => void
  title?: string
  description?: string
  className?: string
  headingAlign?: 'center' | 'left'
}

export function InquiryForm({ type, onSuccess, title, description, className, headingAlign = 'center' }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      subjects: [],
      preferredTime: '',
      nickname: ''
    }
  })

  const onSubmit = async (data: InquiryFormData) => {
    // Check honeypot
    if (data.nickname) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(config.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          ...data,
        }),
      })

      const result = await response.json()

      if (result.ok) {
        setSubmitStatus('success')
        reset()
        onSuccess?.()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFormTitle = () => {
    switch (type) {
      case 'contact':
        return 'Get in Touch'
      case 'demo':
        return 'Book Free Demo Class'
      case 'fee-quote':
        return 'Request Fee Quote'
      default:
        return 'Contact Us'
    }
  }

  const getFormDescription = () => {
    switch (type) {
      case 'contact':
        return 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
      case 'demo':
        return 'Experience our teaching methods with a free 30-minute demo class. Limited slots available weekly.'
      case 'fee-quote':
        return 'Tell us your subjects & timing preferences, and we\'ll create a flexible fee plan that works for you.'
      default:
        return 'Get in touch with us'
    }
  }

  const resolvedTitle = title ?? getFormTitle()
  const resolvedDescription = description ?? getFormDescription()
  const containerClass = className ?? 'max-w-2xl mx-auto'
  const headingClass = headingAlign === 'left' ? 'text-left' : 'text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={containerClass}
    >
      <div className="card">
        <div className={`${headingClass} mb-8`}>
          <h3 className="text-2xl font-display font-bold text-ink mb-2">
            {resolvedTitle}
          </h3>
          <p className="text-neutral-600">
            {resolvedDescription}
          </p>
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6 text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-green-800 mb-2">
              Thank you for your inquiry!
            </h4>
            <p className="text-green-700">
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6 text-center"
          >
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-red-800 mb-2">
              Something went wrong
            </h4>
            <p className="text-red-700">
              {errorMessage}
            </p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field - hidden */}
          <input
            type="text"
            {...register('nickname')}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parent Name */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Parent Name *
              </label>
              <input
                type="text"
                {...register('parentName')}
                className="input-field"
                placeholder="Enter parent's name"
              />
              {errors.parentName && (
                <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
              )}
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Student Name *
              </label>
              <input
                type="text"
                {...register('studentName')}
                className="input-field"
                placeholder="Enter student's name"
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grade */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Grade *
              </label>
              <select
                {...register('grade')}
                className="input-field"
              >
                <option value="">Select Grade</option>
                {config.grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.grade && (
                <p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="input-field"
                placeholder="+91 9876543210"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register('email')}
              className="input-field"
              placeholder="parent@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subjects */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-3">
              Subjects of Interest *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {config.subjects.map((subject) => (
                <label key={subject} className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    value={subject}
                    {...register('subjects')}
                    className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary focus:ring-2 transition-all duration-200"
                  />
                  <span className="text-sm text-neutral-700 group-hover:text-primary transition-colors">{subject}</span>
                </label>
              ))}
            </div>
            {errors.subjects && (
              <p className="text-red-500 text-sm mt-1">{errors.subjects.message}</p>
            )}
          </div>

          {/* Preferred Time (for demo and fee-quote) */}
          {(type === 'demo' || type === 'fee-quote') && (
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Preferred Time
              </label>
              <select
                {...register('preferredTime')}
                className="input-field"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (3 PM - 6 PM)</option>
                <option value="night">Night (6 PM - 8 PM)</option>
              </select>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Message *
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className="input-field resize-none"
              placeholder={
                type === 'demo'
                  ? "Tell us about your child's current academic level and any specific areas they need help with..."
                  : type === 'fee-quote'
                  ? "Tell us about your preferred subjects, schedule, and any specific requirements..."
                  : "Tell us how we can help you..."
              }
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>
                  {type === 'demo' ? 'Book Demo Class' : type === 'fee-quote' ? 'Request Quote' : 'Send Message'}
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  )
}
