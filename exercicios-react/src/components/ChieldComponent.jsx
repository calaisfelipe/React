import React from 'react'

export default function ChieldComponent({action}) {
  return (
    <button onClick={() => action('chield')}>Greet Parent</button>
  )
}
