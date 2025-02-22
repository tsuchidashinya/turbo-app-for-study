import styles from "./index.module.scss"
// import clsx from 'clsx'
// import { useState } from 'react'
import { CanvasPanel } from "./CanvasPanel"
import { FunctionPanel } from "./FunctionPanel"

interface Props {}

const SlidePage = ({}: Props) => {
  return (
    <div className={styles.SlidePage}>
      {/** JSXを記述 **/}
      <FunctionPanel />
      <CanvasPanel />
    </div>
  )
}

export { SlidePage }
