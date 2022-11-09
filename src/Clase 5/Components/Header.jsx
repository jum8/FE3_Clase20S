import React from "react"

const Header = ({titulo, text}) => {
  return (
    <React.Fragment>
        <h2>Bienvenidos a {titulo}</h2>
        {text ? <p>{text}</p> : null}
        {/* {text && <p>{text}</p>} */}
    </React.Fragment>
  )
}

export default Header