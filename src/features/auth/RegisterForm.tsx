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
      <div style={styles.successCard}>
        <div style={styles.successIcon}>✦</div>
        <h2 style={styles.successTitle}>You're in.</h2>
        <p style={styles.successSub}>
          Your acprod account is ready. Start building your system.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label}>Name</label>
        <input
          style={styles.input}
          placeholder="Ada Lovelace"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          placeholder="ada@acprod.app"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          placeholder="at least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
        />
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <button
        type="submit"
        disabled={loading}
        style={{
          ...styles.button,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  )
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#8B85A8",
  },
  input: {
    background: "#13111E",
    border: "1px solid #2A2640",
    borderRadius: "8px",
    padding: "12px 14px",
    fontSize: "15px",
    color: "#EDE9FF",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    marginTop: "8px",
    padding: "14px",
    background: "linear-gradient(135deg, #7C6EE6 0%, #A99FF0 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "0.02em",
    transition: "opacity 0.2s, transform 0.1s",
  },
  error: {
    fontSize: "13px",
    color: "#F09595",
    margin: 0,
    padding: "10px 14px",
    background: "rgba(240,149,149,0.08)",
    borderRadius: "6px",
    border: "1px solid rgba(240,149,149,0.2)",
  },
  successCard: {
    textAlign: "center",
    padding: "40px 24px",
    background: "linear-gradient(135deg, #13111E 0%, #1A1730 100%)",
    border: "1px solid #2A2640",
    borderRadius: "16px",
  },
  successIcon: {
    fontSize: "32px",
    color: "#A99FF0",
    marginBottom: "16px",
  },
  successTitle: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#EDE9FF",
    margin: "0 0 8px",
  },
  successSub: {
    fontSize: "15px",
    color: "#8B85A8",
    margin: 0,
    lineHeight: 1.6,
  },
}
