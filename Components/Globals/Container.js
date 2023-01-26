import React from "react"
import { StatusBar } from "react-native"

const Container = (props) => {

    return (
      React.createElement(props.element, {...props, style:{paddingRight: 10, paddingLeft: 10, flex: 1, backgroundColor: "#081c3c",  marginTop: StatusBar.currentHeight}}, props.children)  
    )
}

export default Container