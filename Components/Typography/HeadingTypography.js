import { Text } from "react-native"
import tw from 'tailwind-react-native-classnames'

const HeadingText = (props) => {
    return(
        <Text {...props} style={[tw`text-2xl ${props.align}`,{color: props.textColor}]}>{props.text}</Text>
    )
}

export default HeadingText