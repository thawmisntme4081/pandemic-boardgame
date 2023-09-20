import { FC } from 'react'

import { MarkerProps } from './interfaces'
import { getClassName, getMarkerIcon } from './helpers'

const Marker: FC<MarkerProps> = ({ type }) => {
  return (
    <div className={`${getClassName(type)} w-8 h-8 bg-[#1e7443] absolute`}>
      <img
        src={getMarkerIcon(type)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5"
      />
    </div>
  )
}

export default Marker
