import { INFECTION } from '../../constants'

import InfectionSvg from '../../assets/infection.svg'
import OutbreakSvg from '../../assets/outbreak.svg'
import { MarkerProps } from './interfaces'

export const getMarkerIcon = (type: MarkerProps['type']): string => {
  if (type === INFECTION) return InfectionSvg
  return OutbreakSvg
}

export const getClassName = (type: MarkerProps['type']): string => {
  if (type === INFECTION) return 'rounded-full'
  return 'rotate-45'
}
