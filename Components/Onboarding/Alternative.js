import { Text,  View } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'


const Alternative = () => {

    return (
        <View style={tw`mt-5`}>
            <View>
                <Text style={tw`text-white text-center`}>Or Sign in with</Text>
            </View>
            <View style={[tw`border border-white mt-2 px-10 py-3 flex-row justify-between`]}>
                <Ionicon name='logo-google' size={30} color="white" />
                <Ionicon name='logo-linkedin' size={30} color="white" />
                <Ionicon name='logo-apple' size={30} color="white" />
            </View>
        </View>
    )
}

export default Alternative