import { Text, TextInput, View } from "react-native"
import tw from 'tailwind-react-native-classnames'
import CardContainer from "../../../Components/Cards/CardContainer"

const Organization = (props) => {

    switch (props.steps) {
        case 1:
            return (
                <View style={tw`my-3`}>
                    <View>
                        <Text style={tw`my-2`}>Organization Name</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')} onChangeText={(text) => props.setCredentials({ ...props.credentials, phone: text })} placeholder="+234" />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Industry</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')} onChangeText={(text) => props.setCredentials({ ...props.credentials, password: text })} />
                        </View>
                    </View>
                </View>
            )
        case 2:
            return (
                <View style={tw`my-3`}>
                    <View>
                        <Text style={tw`my-2`}>Organization Size</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')}  onChangeText={(text) => props.setCredentials({ ...props.credentials, phone: text })} placeholder="+234" />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Location</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')} onChangeText={(text) => props.setCredentials({ ...props.credentials, password: text })} />
                        </View>
                    </View>
                </View>
            )
            case 3:
                return(
                    <View style={tw`my-3`}>
                    <View>
                        <Text style={tw`my-2`}>Email Address(Official)</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')} onChangeText={(text) => props.setCredentials({ ...props.credentials, phone: text })} />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Phone Number (Official)</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')} onChangeText={(text) => props.setCredentials({ ...props.credentials, password: text })} />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Password</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput onEndEditing={() => props.setCurrentState('Organization')} onChangeText={(text) => props.setCredentials({ ...props.credentials, password: text })} />
                        </View>
                    </View>
                </View>
                )

            case 4:
                return(
                    <CardContainer>
                        <Text style={tw`mb-2`}>An email with authorization code has been sent to 
                            the company official phone number
                        </Text>
                        <Text style={tw`mb-2`}>An email with authorization code has been sent to 
                            the company official phone number
                        </Text>
                        <View style={[tw`flex-row justify-between px-6 mt-3`]}>
                            <TextInput style={[tw`border text-center`, {borderRadius: 5}]} placeholder="1" />
                            <TextInput style={[tw`border text-center`, {borderRadius: 5}]} placeholder="1" />
                            <TextInput style={[tw`border text-center`, {borderRadius: 5}]} placeholder="1" />
                            <TextInput style={[tw`border text-center`, {borderRadius: 5}]} placeholder="1" />
                        </View>
                    </CardContainer>
                )
        default:
            break;
    }
}

export default Organization