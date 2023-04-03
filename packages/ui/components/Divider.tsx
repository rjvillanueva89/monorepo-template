import classnames from 'classnames'

export type DividerProps = React.HtmlHTMLAttributes<HTMLHRElement>

export const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={classnames(
        'my-sm border-t border-neutral-100 bg-white',
        className
      )}
    />
  )
}
