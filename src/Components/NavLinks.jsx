import React from 'react'

function NavLinks(props) {
  return (
    <a href={props.url} className=' border-2 w-[90%] border-white rounded-xl text-center sm:border-none font-bold'>{props.linkName}</a>
  )
}

export default NavLinks