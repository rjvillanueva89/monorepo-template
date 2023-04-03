import classnames from "classnames"
import { IconPerson } from "../Icons"

export type AvatarSize = "sm" | "md" | "lg"

export interface AvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  rounded?: boolean
  size?: AvatarSize
}

export const Avatar = ({
  rounded,
  size = "md",
  src,
  ...otherProps
}: AvatarProps) => {
  return (
    <div
      className={classnames(
        "overflow-hidden bg-slate-200",
        rounded ? "rounded-full" : "rounded",
        {
          "h-8 w-8": size === "sm",
          "h-12 w-12": size === "md",
          "h-14 w-14": size === "lg",
        }
      )}
    >
      {src ? (
        <img src={src} className="h-full w-full" {...otherProps} />
      ) : (
        <IconPerson
          className="h-full w-full text-slate-400"
          viewBox="8 0 4 15"
        />
      )}
    </div>
  )
}
