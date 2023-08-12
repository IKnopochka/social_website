import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import s from 's1-main/m1-ui/common/SuperButton/SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: 'secondary' | 'red'
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps
}) => {
  const finalClassName =
    s.button +
    (disabled ? ' ' + s.disabled : '') +
    (xType === 'red' ? ' ' + s.red : '') +
    (xType === 'secondary' ? ' ' + s.secondary : ' ' + s.default) +
    (className ? ' ' + className : '')

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps}
    />
  )
}
