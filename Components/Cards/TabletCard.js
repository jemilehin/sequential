import React from "react";
import { View } from "react-native"
import tw from 'tailwind-react-native-classnames'

const TabletCard = (props) => {
    return(
        <View key={props.index} style={[tw`flex-row bg-gray-300 rounded-2xl p-1 justify-between ${props.width}`,props.style]}>
            {props.icon !== undefined
             ? props.icon 
            : null}
            {React.createElement(props.element, {...props}, props.children)}
        </View>
    )
}

export default TabletCard;