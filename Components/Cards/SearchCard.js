import { View } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import Ionicon from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';

export const SearchCard = (props) => {
    
    return(
        <View style={tw`mt-4`}>
            <View style={[tw`w-7/12 px-3 justify-between py-2 h-10 flex-row mx-auto`,{borderWidth: 1, borderColor: 'white', borderRadius: 90}]}>
                <Ionicon name="search" size={20} color="white"/>
                <TextInput 
                    placeholder="Search Members"
                    style={tw`w-10/12 text-white`}
                    placeholderTextColor='white'
                    onChangeText={(text) => props.setSearch(text)}
                />
            </View>
        </View>
    )
}