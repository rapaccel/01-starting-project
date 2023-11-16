import React from 'react'

export default function TabButton({children,onSelect,isSelected}) {
  return (
    <div>
      <li><button onClick={onSelect} className={isSelected ? 'active' : null}> {children}</button></li>
    </div>
  )
}
