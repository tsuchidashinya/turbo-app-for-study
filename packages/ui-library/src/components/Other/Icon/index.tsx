import AdsClickIcon from '@mui/icons-material/AdsClick'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import FormatColorFillIcon from '@mui/icons-material/FormatCOlorFill'
import clsx from 'clsx'
import { CSSProperties } from 'react'
import styles from './index.module.scss'

type IconType = 'category' | 'borderColor' | 'fillColor' | 'adsClick'

interface Props {
  /** アイコンのタイプ **/
  type: IconType
  /** アイコンのサイズ。アイコンを囲む正方形の1辺の長さを指定する **/
  size?: string
  /** アイコンの色 **/
  color?: 'black' | 'disabled' | 'white' | 'gray'
  /** style属性を直接入れたい時に指定 **/
  style?: CSSProperties
  /** CSSモジュールのクラスを指定 **/
  className?: string
}

const MuiIcon = ({ type, size }: { type: IconType; size: string }) => {
  switch (type) {
    case 'fillColor':
      return <FormatColorFillIcon sx={{ fontSize: size }} />
    case 'borderColor':
      return <BorderColorIcon sx={{ fontSize: size }} />
    case 'category':
      return <CategoryOutlinedIcon sx={{ fontSize: size }} />
    case 'adsClick':
      return <AdsClickIcon sx={{ fontSize: size }} />
    default:
      return
  }
}

/**
 * Iconを表示するコンポーネント
 * @param type {IconType} アイコンのタイプ
 * @param size {string} アイコンのサイズ。アイコンを囲む正方形の1辺の長さを指定する
 * @param color {"black" | "disabled" | "white"} アイコンの色
 * @param style {CSSProperty} style属性を直接入れたい時に指定
 * @param className {string} CSSモジュールのクラスを指定
 */
const Icon = ({ type, size = '2rem', color = 'gray', style, className }: Props) => {
  return (
    <div className={clsx(styles.Icon, className)} style={{ color, ...style }}>
      <MuiIcon type={type} size={size} />
    </div>
  )
}

export { Icon }
export type { IconType }
