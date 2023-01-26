import React, { Component } from "react";
import { View } from "react-native";


class CardContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            React.createElement(View, 
                {...this.props, 
                    style: {padding: this.props.containerPadding || 5, borderRadius: 10, backgroundColor: 'white', marginBottom: 10}
                }, 
                this.props.children
            )
        )
    }
}

export default CardContainer