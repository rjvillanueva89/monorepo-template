import classnames from "classnames"

export type TypographyVariant =
  | "title-page"
  | "title-section"
  | "title-subsection"
  | "paragraph-large"
  | "paragraph-medium"
  | "paragraph-small"
  | "label-large"
  | "label-medium"
  | "label-small"
  | "label-extra-small"
  | "label-error"
  | "sidebar-label"
  | "sidebar-link"
  | "input-prepend"
  | "input-symbol-append"
  | "button"

export interface TypographyProps<T extends React.ElementType>
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  as?: T
  variant: TypographyVariant
}

export const Typography = <T extends React.ElementType = "span">({
  as: As,
  className,
  variant,
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const Component = As || "span"
  return (
    <Component
      className={classnames(
        {
          "text-4xl font-medium leading-tight": variant === "title-page",
          "text-3xl font-medium leading-10": variant === "title-section",
          "text-2xl font-bold leading-10": variant === "title-subsection",
          "text-2xl font-normal leading-8": variant === "paragraph-large",
          "text-base font-normal leading-6": variant === "paragraph-medium",
          "text-xs font-normal leading-5": variant === "paragraph-small",
          "text-2xl font-medium leading-8": variant === "label-large",
          "text-xl font-medium leading-6": variant === "label-medium",
          "text-sm font-medium leading-5": variant === "label-small",
          "text-xs font-light leading-5": variant === "label-extra-small",
          "text-xs font-light leading-none text-red-400":
            variant === "label-error",
          "mt-sm p-sm text-xs font-extrabold uppercase tracking-wide opacity-50":
            variant === "sidebar-label",
          "text-md font-light tracking-wide": variant === "sidebar-link",
          "inline-flex items-center whitespace-nowrap border border-gray-300 bg-gray-200 px-3 text-sm text-gray-900":
            variant === "input-prepend",
          "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-xl":
            variant === "input-symbol-append",
          "rounded-standard px-md py-st relative inline-block min-h-[42] cursor-pointer border border-slate-600 bg-slate-600 text-base leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-600/75 hover:bg-slate-600/75":
            variant === "button",
        },
        className
      )}
      {...props}
    />
  )
}
