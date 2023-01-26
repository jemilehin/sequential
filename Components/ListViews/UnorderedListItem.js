import React from "react"
import tw from 'tailwind-react-native-classnames'
import Icon from "react-native-vector-icons/Ionicons"
import { Text, View } from "react-native"

const UnorderedListItem = (props) => {

    return(
        <View key={props.index} style={tw`flex-row justify-between items-center`}>
           {props.reverse === undefined ? <Icon onPress={props.press} name={props.iconName === undefined ? 'ellipse' : props.iconName} size={props.size === undefined ? 5 : props.size}  color="white"/> : <Text style={tw`text-white`}>{props.text}</Text>}
           {props.reverse === undefined ? <Text style={tw`text-white`}>{props.text}</Text> :<Icon onPress={() => props.press} name={props.iconName === undefined ? 'ellipse' : props.iconName} size={props.size === undefined ? 5 : props.size} color="white"/>}
        </View>
    )
}

export default UnorderedListItem