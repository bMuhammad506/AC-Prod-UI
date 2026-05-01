import RegisterForm from "../features/auth/RegisterForm"
import Logo from "../assets/acprod.svg?react"

export default function RegisterPage() {
  return (
    <div style={styles.page}>
      {/* Ambient background glow */}
      <div style={styles.glow} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrap}>
          <Logo style={{ width: 160, height: "auto" }} />
        </div>

        {/* Heading */}
        <div style={styles.heading}>
          <h1 style={styles.title}>Create your account</h1>
          <p style={styles.subtitle}>
            One system for everything that matters.
          </p>
        </div>

        <RegisterForm />

        {/* Footer link */}
        <p style={styles.footer}>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0B0917",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
  },
  glow: {
    position: "absolute",
    top: "-120px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(124,110,230,0.18) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  card: {
    position: "relative",
    width: "100%",
    maxWidth: "420px",
    background: "#100E1C",
    border: "1px solid #1F1D30",
    borderRadius: "20px",
    padding: "40px 36px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  logoWrap: {
    display: "flex",
    justifyContent: "flex-start",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  title: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#EDE9FF",
    margin: 0,
    letterSpacing: "-0.3px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6B6488",
    margin: 0,
  },
  footer: {
    fontSize: "13px",
    color: "#6B6488",
    textAlign: "center",
    margin: 0,
  },
  link: {
    color: "#A99FF0",
    textDecoration: "none",
    fontWeight: 500,
  },
}
