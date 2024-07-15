
import React from 'react'

function ButtonCom(prop) {
    
    const buttonStyle={color:"white",backgroundColor:"blue"}
    const{text="button",onPress}=prop
    console.log("child re-render")
  return (
    <div>
    <button onClick={onPress}style={buttonStyle}>{text}</button>
    </div>
  )
}

export default React.memo(ButtonCom)
