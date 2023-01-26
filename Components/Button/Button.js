import tw from 'tailwind-react-native-classnames'
import { Text, TouchableOpacity } from "react-native"


const Button = (props) => {

    return(
        <TouchableOpacity {...props}>
            {props.children === undefined ? <Text style={[tw`text-center`,props.textStyle]}>{props.text}</Text> : props.children}
        </TouchableOpacity>
    )
}

export default Button