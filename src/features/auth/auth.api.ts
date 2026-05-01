import type { RegisterRequest, RegisterResponse } from "./auth.types"
import config from "../../utils/config"

export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const res = await fetch(`${config.API_BASE_URL}/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}))

    // ✅ Handle structured errors
    if (errorBody?.errors) {
      const messages = Object.values(errorBody.errors).join(", ")
      throw new Error(messages)
    }

    // fallback
    throw new Error(errorBody?.detail ?? "Registration failed")
  }

  return res.json()
}