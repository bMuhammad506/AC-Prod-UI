import RegisterForm from "../features/auth/RegisterForm"
import Logo from "../assets/acprod-logo.svg?react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080612] px-4 relative overflow-hidden">

      {/* top purple glow */}
      <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[560px] h-[560px]
        bg-[radial-gradient(circle,rgba(108,93,211,0.22)_0%,transparent_68%)] pointer-events-none" />

      {/* bottom-right accent glow */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px]
        bg-[radial-gradient(circle,rgba(169,159,240,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* card with gradient border */}
      <div className="relative w-full max-w-[420px]">
        {/* gradient border ring */}
        <div className="absolute inset-0 rounded-[20px] p-px bg-gradient-to-br from-[#6C5DD3]/35 via-transparent to-[#A99FF0]/10 pointer-events-none" />

        <div className="relative bg-[#0D0B1A] border border-[#1C1A2E] rounded-[20px] px-9 py-9 flex flex-col gap-0">

          {/* logo */}
          <div className="mb-7">
            <Logo className="h-14 w-auto" />
          </div>

          {/* heading */}
          <div className="mb-7">
            <h1 className="text-[#EDE9FF] text-[21px] font-semibold tracking-[-0.4px] mb-1.5">
              Create your account
            </h1>
            <p className="text-[14px] text-[#524E6B]">
              One system for everything that matters.
            </p>
          </div>

          {/* form */}
          <RegisterForm />

          {/* footer */}
          <p className="text-center text-[13px] text-[#4A4668] mt-5">
            Already have an account?{" "}
            <a href="/login" className="text-[#9B95E0] font-medium hover:text-[#C5BEFF] transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}