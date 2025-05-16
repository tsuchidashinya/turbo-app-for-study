import { useEffect, useRef } from "react"
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../const"
import styles from "./index.module.scss"
// import clsx from 'clsx'
// import { useState } from 'react'

interface Props {}

const CanvasPanel = ({}: Props) => {
  const cancasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (cancasRef.current === null) {
      return
    }
    cancasRef.current.width = CANVAS_WIDTH
    cancasRef.current.height = CANVAS_HEIGHT
    const ctx = cancasRef.current.getContext("2d")
  }, [])

  const handleMouseUp = (): void => {
    // 処理を記述
  }
  const calcSelectedShapeId = (): string | undefined => {
    // 処理を記述
  }
  const handleMouseDown = (): void => {
    // 処理を記述
  }
  const handleMouseMove = (): void => {
    // 処理を記述
  }
  return (
    <canvas
      ref={cancasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className={styles.canvasPanel}
    >
      {/** JSXを記述 **/}
    </canvas>
  )
}

export { CanvasPanel }
