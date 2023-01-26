import { Text, TextInput, View } from "react-native"
import tw from 'tailwind-react-native-classnames'

const Input = (props) => {

    const setValue = (text) => {
        if(props.name !== undefined){
            props.setCredentials({...props.credentials, [props.name] : text})
        }else props.setCredentials(text)
    }

    return (
        <View>
            <Text style={tw`my-2 ${props.color !== undefined ? props.color : 'text-white'}`}>{props.label}</Text>
            <View style={[tw`px-2 py-2`, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                <TextInput {...props} onChangeText={(text) => setValue(text)} placeholder={props.placeholder} />
            </View>
        </View>
    )
}

export default Input