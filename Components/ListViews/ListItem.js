import React from "react"
import tw from 'tailwind-react-native-classnames'
import  Icon  from "react-native-vector-icons/Ionicons"
import { Text, TouchableOpacity } from "react-native"

const ListItem = (props) => {

    return(
        <TouchableOpacity onPress={props.action} key={props.index} style={[tw`flex-row justify-between items-center`, {
            backgroundColor: "#081c3c", borderColor: 'white', borderBottomWidth: 1
        }]}>
            <Icon
                name={props.messageType === 'invited' ? 'chatbubbles' : 'briefcase-outline'}
                color="white"
                size={20}
            />
            <Text style={tw`text-white`}>{props.message}</Text>
        </TouchableOpacity>
    )
}

export default ListItem