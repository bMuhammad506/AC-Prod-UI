import RegisterForm from "../features/auth/RegisterForm"
import Logo from "../assets/acprod-logo.svg?react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0917] px-4 relative overflow-hidden">

      {/* glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(124,110,230,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* card */}
      <div className="relative w-full max-w-md bg-[#100E1C] border border-[#1F1D30] rounded-2xl p-10 flex flex-col gap-7">

        {/* logo */}
        <div>
          <Logo className="w-40 h-auto" />
        </div>

        {/* heading */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[#EDE9FF] text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="text-[#6B6488] text-sm">
            One system for everything that matters.
          </p>
        </div>

        {/* form */}
        <RegisterForm />

        {/* footer */}
        <p className="text-center text-sm text-[#6B6488]">
          Already have an account?{" "}
          <a href="/login" className="text-[#A99FF0] font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}