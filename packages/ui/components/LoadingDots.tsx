import classnames from "classnames"

interface LoadingDotsProps {
  alternative?: boolean
  danger?: boolean
}
export const LoadingDots = ({ danger, alternative }: LoadingDotsProps) => {
  const className = "w-xxs h-xxs mx-xxxs rounded-full"
  const color = danger
    ? "bg-red-600"
    : alternative
    ? "bg-white"
    : "bg-slate-600"
  return (
    <div className="flex items-center">
      <div className={classnames(className, color, "animate-loading-dot-1")} />
      <div className={classnames(className, color, "animate-loading-dot-2")} />
      <div className={classnames(className, color, "animate-loading-dot-3")} />
    </div>
  )
}
