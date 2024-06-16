import React from 'react'
import { IconType } from 'react-icons/lib';

interface AppIconProps {
    Icon: IconType
    size?: number
    color?: string
}

export const AppIcon: React.FC<AppIconProps> = (props) => {
    const {Icon, ...p} = props
  return (
    <Icon size={p.size || 24} color={p.color || 'white'} />
  )
}
