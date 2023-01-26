import React from "react"
import tw from 'tailwind-react-native-classnames'
import Icon from "react-native-vector-icons/Ionicons"
import { Text, View } from "react-native"

const Header = (props) => {

    return(
        <View style={tw`flex-row justify-between `}>
            <Icon name='chatbubbles' size={props.size} color='white'/>
            <Text style={tw`text-lg text-white leading-5`}>{props.title}</Text>
        </View>
    )
}

export default Header