import React from 'react'

function NavLinks(props) {
  return (
    <a href={props.url} className='font-bold'>{props.linkName}</a>
  )
}

export default NavLinks