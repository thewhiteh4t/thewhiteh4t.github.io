import { easeInOut, motion } from 'motion/react'

export default function AnimLogo() {
  const circleSize = 150
  const cellSize = circleSize / 3
  const targetDiamondPoints = {
    top: { x: 0, y: -50 }, // Top edge of circle
    right: { x: 50, y: 0 }, // Right edge of circle
    bottom: { x: 0, y: 50 }, // Bottom edge of circle
    left: { x: -50, y: 0 }, // Left edge of circle
  }
  const initialGridPositions = {
    topDiv: { x: 0, y: -cellSize }, // Center of (col-2, row-1) -> (0, -50) relative to circle center
    leftDiv: { x: -cellSize, y: 0 }, // Center of (col-1, row-2) -> (-50, 0) relative to circle center
    bottomDiv: { x: 0, y: cellSize }, // Center of (col-2, row-3) -> (0, 50) relative to circle center
    rightDiv: { x: cellSize, y: 0 }, // Right 'H' starts in the middle-right grid cell (relative to center: 50, 0)
    centerDiv: { x: 0, y: 0 }, // Center of (col-2, row-2) -> (0, 0) relative to circle center
  }
  const rotationKeyframes = [0, 360, 720, 1080, 1440]
  const commonTransition = {
    duration: 5,
    ease: easeInOut,
    repeat: Infinity,
    repeatDelay: 2,
  }
  const topX = [
    targetDiamondPoints.top.x - initialGridPositions.topDiv.x, // 0 - 0 = 0
    targetDiamondPoints.right.x - initialGridPositions.topDiv.x, // 75 - 0 = 75
    targetDiamondPoints.bottom.x - initialGridPositions.topDiv.x, // 0 - 0 = 0
    targetDiamondPoints.left.x - initialGridPositions.topDiv.x, // -75 - 0 = -75
    targetDiamondPoints.top.x - initialGridPositions.topDiv.x, // 0 - 0 = 0
  ]
  const topY = [
    targetDiamondPoints.top.y - initialGridPositions.topDiv.y, // -75 - (-50) = -25
    targetDiamondPoints.right.y - initialGridPositions.topDiv.y, // 0 - (-50) = 50
    targetDiamondPoints.bottom.y - initialGridPositions.topDiv.y, // 75 - (-50) = 125
    targetDiamondPoints.left.y - initialGridPositions.topDiv.y, // 0 - (-50) = 50
    targetDiamondPoints.top.y - initialGridPositions.topDiv.y, // -75 - (-50) = -25
  ]
  const leftX = [
    targetDiamondPoints.left.x - initialGridPositions.leftDiv.x, // -50 - (-50) = 0
    targetDiamondPoints.top.x - initialGridPositions.leftDiv.x, // 0 - (-50) = 50
    targetDiamondPoints.right.x - initialGridPositions.leftDiv.x, // 50 - (-50) = 100
    targetDiamondPoints.bottom.x - initialGridPositions.leftDiv.x, // 0 - (-50) = 50
    targetDiamondPoints.left.x - initialGridPositions.leftDiv.x, // -50 - (-50) = 0
  ]
  const leftY = [
    targetDiamondPoints.left.y - initialGridPositions.leftDiv.y, // 0 - 0 = 0
    targetDiamondPoints.top.y - initialGridPositions.leftDiv.y, // -50 - 0 = -50
    targetDiamondPoints.right.y - initialGridPositions.leftDiv.y, // 0 - 0 = 0
    targetDiamondPoints.bottom.y - initialGridPositions.leftDiv.y, // 50 - 0 = 50
    targetDiamondPoints.left.y - initialGridPositions.leftDiv.y, // 0 - 0 = 0
  ]
  const bottomX = [
    targetDiamondPoints.bottom.x - initialGridPositions.bottomDiv.x, // 0 - 0 = 0
    targetDiamondPoints.left.x - initialGridPositions.bottomDiv.x, // -50 - 0 = -50
    targetDiamondPoints.top.x - initialGridPositions.bottomDiv.x, // 0 - 0 = 0
    targetDiamondPoints.right.x - initialGridPositions.bottomDiv.x, // 50 - 0 = 50
    targetDiamondPoints.bottom.x - initialGridPositions.bottomDiv.x, // 0 - 0 = 0
  ]
  const bottomY = [
    targetDiamondPoints.bottom.y - initialGridPositions.bottomDiv.y, // 50 - 50 = 0
    targetDiamondPoints.left.y - initialGridPositions.bottomDiv.y, // 0 - 50 = -50
    targetDiamondPoints.top.y - initialGridPositions.bottomDiv.y, // -50 - 50 = -100
    targetDiamondPoints.right.y - initialGridPositions.bottomDiv.y, // 0 - 50 = -50
    targetDiamondPoints.bottom.y - initialGridPositions.bottomDiv.y, // 50 - 50 = 0
  ]
  const rightX = [
    targetDiamondPoints.right.x - initialGridPositions.rightDiv.x, // 50 - 50 = 0
    targetDiamondPoints.bottom.x - initialGridPositions.rightDiv.x, // 0 - 50 = -50
    targetDiamondPoints.left.x - initialGridPositions.rightDiv.x, // -50 - 50 = -100
    targetDiamondPoints.top.x - initialGridPositions.rightDiv.x, // 0 - 50 = -50
    targetDiamondPoints.right.x - initialGridPositions.rightDiv.x, // 50 - 50 = 0
  ]
  const rightY = [
    targetDiamondPoints.right.y - initialGridPositions.rightDiv.y, // 0 - 0 = 0
    targetDiamondPoints.bottom.y - initialGridPositions.rightDiv.y, // 50 - 0 = 50
    targetDiamondPoints.left.y - initialGridPositions.rightDiv.y, // 0 - 0 = 0
    targetDiamondPoints.top.y - initialGridPositions.rightDiv.y, // -50 - 0 = -50
    targetDiamondPoints.right.y - initialGridPositions.rightDiv.y, // 0 - 0 = 0
  ]
  return (
    <div className="alias_circle w-[150px] h-[150px] contain-strict grid grid-cols-3 grid-rows-3 transform-cpu">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: rotationKeyframes,
          x: topX,
          y: topY,
        }}
        transition={commonTransition}
        className="alias_text text-cyan-300 col-start-2 row-start-1 transform-cpu"
      >
        T
      </motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: rotationKeyframes,
          x: leftX,
          y: leftY,
        }}
        transition={commonTransition}
        className="alias_text text-cyan-300 col-start-1 row-start-2 transform-cpu"
      >
        T
      </motion.div>
      <div className="alias_text text-white col-start-2 row-start-2 transform-cpu">
        W
      </div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: rotationKeyframes,
          x: rightX,
          y: rightY,
        }}
        transition={commonTransition}
        className="alias_text text-cyan-300 col-start-3 row-start-2 transform-cpu"
      >
        H
      </motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: rotationKeyframes,
          x: bottomX,
          y: bottomY,
        }}
        transition={commonTransition}
        className="alias_text text-cyan-300 col-start-2 row-start-3 transform-cpu"
      >
        H
      </motion.div>
    </div>
  )
}
