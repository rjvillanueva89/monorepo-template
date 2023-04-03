import "next-auth"
import "next-auth/jwt"

interface UserTrader {
  id: string
  role: Omit<Roles_Enum, "ADMIN" | "USER">
}

declare module "next-auth/jwt" {
  interface JWT {
    sub: string
    exp: number
    iat?: number
    "https://hasura.io/jwt/claims": HasuraClaim
  }
}

declare module "next-auth" {
  interface User {
    role: Role
    trader: UserTrader | null
  }

  interface Session {
    user: Omit<User, "trader">
    token: string
  }
}
