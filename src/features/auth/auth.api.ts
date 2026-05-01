import type { RegisterRequest, RegisterResponse } from "./auth.types"

export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const res = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}))
    throw new Error(errorBody?.detail ?? "Registration failed")
  }

  return res.json()
}
