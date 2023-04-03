import classnames from 'classnames'

export type ToggleSize = 'sm' | 'md' | 'lg'
export interface ToggleProps {
  alternative?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  size?: ToggleSize
}

export const Toggle = ({
  alternative,
  defaultChecked,
  disabled,
  size = 'md',
}: ToggleProps) => {
  return (
    <label
      className={classnames(
        'relative inline-flex',
        !disabled && 'cursor-pointer'
      )}
    >
      <input
        type="checkbox"
        value=""
        defaultChecked={!!defaultChecked}
        disabled={disabled}
        className="peer sr-only"
      />
      <div
        className={classnames(
          "rounded-full border after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:border after:transition-all after:duration-300 after:content-[''] peer-checked:after:translate-x-full",
          {
            'h-5 w-9 after:h-4 after:w-4': size === 'sm',
            'h-6 w-11 after:h-5 after:w-5': size === 'md',
            'h-7 w-[3.25rem] after:h-6 after:w-6': size === 'lg',
          },
          disabled && 'opacity-50',
          alternative
            ? 'border-purple-600 bg-white after:border-white after:bg-purple-600'
            : 'border-gray-200 bg-gray-200 after:border-gray-300 after:bg-white peer-checked:bg-purple-600 peer-checked:after:border-white'
        )}
      ></div>
    </label>
  )
}
