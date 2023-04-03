type Role = RolesEnum | "PUBLIC"

type OrderBy = [string, CursorOrdering]

type AppPage = NextPage & {
  getLayout?: React.FC<PropsWithChildren>
  allowedRoles?: Role[]
}
