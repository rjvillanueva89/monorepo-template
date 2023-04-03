import classnames from "classnames"
import { LoadingDots } from "./LoadingDots"

export type ButtonVariant = "primary" | "secondary" | "text"

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant
  danger?: boolean
  size?: "small" | "regular" | "large"
  wide?: boolean
  loading?: boolean
}

export const Button = ({
  wide = false,
  variant = "primary",
  size = "regular",
  type = "button",
  danger,
  children,
  className,
  loading,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const isDisabled = disabled || loading
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={classnames(
        "relative",
        "transition-all duration-200 ease-in-out",
        "inline-block cursor-pointer border leading-none",
        {
          "px-sm py-xs min-h-[32] text-sm": size === "small",
          "px-md py-st min-h-[42] text-base": size === "regular",
          "px-lg py-sm min-h-[52] text-lg": size === "large",
          "w-full": wide,
        },
        danger && isDisabled
          ? {
              "border-red-100 bg-red-100 text-red-600/75":
                variant === "primary",
              "border-red-100 bg-transparent text-red-600/75":
                variant === "secondary",
              "border-transparent bg-transparent text-red-600/75":
                variant === "text",
            }
          : danger
          ? {
              "border-red-600 bg-red-600 text-white hover:border-red-600/75 hover:bg-red-600/75":
                variant === "primary",
              "border-red-600 bg-transparent text-red-600 hover:border-red-600/75 hover:text-red-600/75":
                variant === "secondary",
              "border-transparent bg-transparent text-red-600 hover:text-red-600/75":
                variant === "text",
            }
          : isDisabled
          ? {
              "border-slate-100 bg-slate-100 text-slate-600/75":
                variant === "primary",
              "border-slate-100 bg-transparent text-slate-600/75":
                variant === "secondary",
              "border-transparent bg-transparent text-slate-600/75":
                variant === "text",
            }
          : {
              "border-slate-600 bg-slate-600 text-white hover:border-slate-600/75 hover:bg-slate-600/75":
                variant === "primary",
              "border-slate-600 bg-transparent text-slate-600 hover:border-slate-600/75":
                variant === "secondary",
              "border-transparent bg-transparent text-slate-600":
                variant === "text",
            },
        className
      )}
      {...otherProps}
    >
      {loading && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <LoadingDots danger={danger} />
        </div>
      )}
      <span className={classnames({ invisible: loading })}>{children}</span>
    </button>
  )
}
