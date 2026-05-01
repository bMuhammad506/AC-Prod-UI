import { useRef } from "react"
import { cn } from "../../utils/utils"

type ButtonProps = {
    children: React.ReactNode
    loading?: boolean
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    variant?: "primary" | "ghost"
    className?: string
    onClick?: () => void
}

export default function Button({
    children,
    loading = false,
    disabled = false,
    type = "button",
    variant = "primary",
    className,
    onClick,
}: ButtonProps) {
    const rippleRef = useRef<HTMLSpanElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        if (rippleRef.current) {
            rippleRef.current.style.left = `${x}px`
            rippleRef.current.style.top = `${y}px`
        }
    }

    const handleMouseEnter = () => {
        if (rippleRef.current) {
            rippleRef.current.style.transform = "translate(-50%, -50%) scale(1)"
            rippleRef.current.style.opacity = "1"
        }
    }

    const handleMouseLeave = () => {
        if (rippleRef.current) {
            rippleRef.current.style.transform = "translate(-50%, -50%) scale(0)"
            rippleRef.current.style.opacity = "0"
        }
    }

    const isPrimary = variant === "primary"

    return (
        <button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative w-full overflow-hidden rounded-[11px] px-4 py-[13px]",
                "text-sm font-semibold tracking-[0.01em] text-white",
                "transition-all duration-150 ease-out",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                isPrimary && [
                    "bg-[#5A4FBB]",
                    "hover:-translate-y-px hover:shadow-[0_4px_28px_rgba(108,93,211,0.45)]",
                    "active:translate-y-0 active:scale-[0.985] active:shadow-[0_2px_12px_rgba(108,93,211,0.3)]",
                ],
                !isPrimary && [
                    "bg-transparent border border-[#1E1C30] text-[#9590B8]",
                    "hover:bg-[#0F0D1F] hover:border-[#2E2B48] hover:text-[#C5BEFF]",
                ],
                className
            )}
        >
            {/* static gradient base */}
            {isPrimary && (
                <span className="absolute inset-0 bg-gradient-to-br from-[#6C5DD3] to-[#A99FF0] z-0" />
            )}

            {/* magnetic cursor fill */}
            {isPrimary && (
                <span
                    ref={rippleRef}
                    className={cn(
                        "pointer-events-none absolute z-[1]",
                        "w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "bg-white/[0.16]",
                        "scale-0 opacity-0",
                        "transition-[transform,opacity] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "group-hover:scale-100 group-hover:opacity-100"
                    )}
                    style={{ left: "50%", top: "50%" }}
                />
            )}

            <span className="relative z-[2] flex items-center justify-center gap-2">
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4 opacity-80"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                className="opacity-25"
                                cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="3"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                        </svg>
                        Creating account…
                    </>
                ) : (
                    children
                )}
            </span>
        </button>
    )
}