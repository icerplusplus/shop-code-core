import React from "react"

interface DeviderProps {
  className?: string
}
export const Devider: React.FC<DeviderProps> = ({className}) => {
  return (
    <div className={`h-[1px] bg-[#3c5994] ${className}`}/>
  )
}
