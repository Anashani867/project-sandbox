import React from 'react'

function Title({classes,text}) {
  return (
    <div>
      <h1 className={!classes ?' titler':classes && "text-cente"}>{!text ?"Title" : text}</h1>
    </div>
  )
}

export default Title
