import { Icon, IconType } from '@/components/Other'
import clsx from 'clsx'
import { CSSProperties, ReactNode } from 'react'
import styles from './index.module.scss'

interface Props {
  /** ボタンのラベルを指定 **/
  children?: ReactNode | undefined
  /** アイコンを指定 **/
  icon?: IconType
  /** アイコンを挿入する位置を指定 **/
  iconPosition?: 'prefix' | 'suffix'
  /** ボタンに枠線を入れるか否かを指定 **/
  hasBorder?: boolean
  /** 非活性か否かを指定 **/
  disabled?: boolean
  /** ボタンのサイズを指定 **/
  size?: 'small' | 'medium' | 'large'
  /** style属性を直接入れたい時に指定 **/
  style?: CSSProperties
  /** CSSモジュールのクラスを指定 **/
  className?: string
  /** クリックイベント **/
  onClick?: () => void
}

const ActionButton = ({
  children,
  icon,
  iconPosition = 'prefix',
  hasBorder,
  disabled,
  size,
  style,
  className,
  onClick,
}: Props) => {
  const handleClick = (): void => {
    onClick?.()
  }

  const getSizeProperty = (): {
    fontSize: string
    padding: string
    iconSize: string
  } => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.8rem',
          padding: '0.4rem 0.8rem',
          iconSize: '1rem',
        }
      case 'medium':
        return {
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          iconSize: '1.5rem',
        }
      default:
        return {
          fontSize: '1.2rem',
          padding: '0.6rem 1.2rem',
          iconSize: '2rem',
        }
    }
  }

  const { iconSize, padding, fontSize } = getSizeProperty()
  const IconWrapper = ({ children }: { children: ReactNode }) => {
    if (icon && iconPosition === 'prefix') {
      return (
        <>
          <Icon type={icon} size={iconSize} />
          {children}
        </>
      )
    } else if (icon && iconPosition === 'suffix') {
      return (
        <>
          {children}
          <Icon type={icon} size={iconSize} />
        </>
      )
    }
    return <>{children}</>
  }

  return (
    <button
      className={clsx(styles.ActionButton, hasBorder && styles['has-border'], className)}
      disabled={disabled}
      style={{ fontSize, padding, ...style }}
      onClick={handleClick}
    >
      <IconWrapper>{children}</IconWrapper>
    </button>
  )
}

export { ActionButton }
