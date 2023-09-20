import { FC } from 'react'
import { COLORS } from './constants'

interface CureProps {
  color: string
}

const Cure: FC<CureProps> = ({ color }) => {
  return (
    <div
      className={`absolute
        bottom-[3px]
        left-[421px]
        w-[22px]
        h-[18px]
        ${COLORS[color]}
        rounded-sm
        before:absolute
        before:w-[18px]
        before:h-[8px]
        before:rounded-sm
        before:-top-[10px]
        before:left-[2px]
        after:absolute
        after:w-[12px]
        after:h-[2px]
        after:-top-[2px]
        after:left-[5px]`}
    ></div>
  )
}

export default Cure
