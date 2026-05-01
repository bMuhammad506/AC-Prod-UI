import { useState } from "react"
import { registerUser } from "./auth.api"
import Button from "../../components/ui/Button"

export default function RegisterForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await registerUser({ email, name, password })
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-10 px-6 rounded-xl border border-[#1E1C30] bg-[#0A0917]">
        <div className="w-10 h-10 rounded-full bg-[#6C5DD3]/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-[#A99FF0]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-[#EDE9FF] mb-1">You're in.</h2>
        <p className="text-sm text-[#524E6B]">
          Your acprod account is ready. Start building your system.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {[
        { label: "Name", type: "text", value: name, set: setName, placeholder: "Ada Lovelace" },
        { label: "Email", type: "email", value: email, set: setEmail, placeholder: "ada@acprod.app" },
        { label: "Password", type: "password", value: password, set: setPassword, placeholder: "at least 8 characters", min: 8 },
      ].map(({ label, type, value, set, placeholder, min }) => (
        <div key={label} className="flex flex-col gap-1.5">
          <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#6A6487]">
            {label}
          </label>
          <input
            type={type}
            className="bg-[#0A0917] border border-[#1E1C30] rounded-[10px] px-3.5 py-3 text-sm text-[#EDE9FF] placeholder:text-[#3A3655] outline-none transition-all focus:border-[#5A4FBB] focus:ring-2 focus:ring-[#6C5DD3]/10"
            placeholder={placeholder}
            value={value}
            onChange={(e) => set(e.target.value)}
            minLength={min}
            required
          />
        </div>
      ))}

      {error && (
        <div className="text-sm text-red-300/90 bg-red-500/8 border border-red-500/15 px-3.5 py-2.5 rounded-[10px]">
          {error}
        </div>
      )}

      <div className="mt-1">
        <Button type="submit" loading={loading}>
          Create account
        </Button>
      </div>
    </form>
  )
}