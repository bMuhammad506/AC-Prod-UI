import { useState } from "react"
import { registerUser } from "./auth.api"

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
      <div className="text-center py-10 px-6 rounded-xl border border-[#2A2640] bg-gradient-to-br from-[#13111E] to-[#1A1730]">
        <div className="text-3xl mb-3 text-[#A99FF0]">✦</div>
        <h2 className="text-xl font-semibold text-[#EDE9FF] mb-2">
          You're in.
        </h2>
        <p className="text-sm text-[#8B85A8]">
          Your acprod account is ready. Start building your system.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs uppercase tracking-wider text-[#8B85A8]">
          Name
        </label>
        <input
          className="bg-[#13111E] border border-[#2A2640] rounded-lg px-3 py-3 text-[#EDE9FF] outline-none focus:border-[#7C6EE6]"
          placeholder="Ada Lovelace"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* email */}
      <div className="flex flex-col gap-1">
        <label className="text-xs uppercase tracking-wider text-[#8B85A8]">
          Email
        </label>
        <input
          type="email"
          className="bg-[#13111E] border border-[#2A2640] rounded-lg px-3 py-3 text-[#EDE9FF] outline-none focus:border-[#7C6EE6]"
          placeholder="ada@acprod.app"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* password */}
      <div className="flex flex-col gap-1">
        <label className="text-xs uppercase tracking-wider text-[#8B85A8]">
          Password
        </label>
        <input
          type="password"
          className="bg-[#13111E] border border-[#2A2640] rounded-lg px-3 py-3 text-[#EDE9FF] outline-none focus:border-[#7C6EE6]"
          placeholder="at least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>

      {error && (
        <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-md">
          {error}
        </div>
      )}

      <button
        disabled={loading}
        className="mt-2 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7C6EE6] to-[#A99FF0] disabled:opacity-60"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  )
}