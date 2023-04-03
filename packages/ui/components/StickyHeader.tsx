import classnames from "classnames"
import { PropsWithChildren, ReactNode } from "react"

export interface StickyHeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    PropsWithChildren {
  alternative?: boolean
  profile?: ReactNode
}

export const StickyHeader = ({
  children,
  alternative,
  className,
  profile,
  ...otherProps
}: StickyHeaderProps) => {
  return (
    <header
      className={classnames(
        "align-between sticky top-0 left-0 flex w-full items-center",
        "px-md py-sm",
        "shadow-sm",
        "z-40",
        alternative ? "bg-slate-600 text-white" : "bg-white text-slate-600",
        className
      )}
      {...otherProps}
    >
      <div className="flex grow items-center justify-end gap-2">{children}</div>
      <div className="ml-sm shrink-0">{profile}</div>
    </header>
  )
}
