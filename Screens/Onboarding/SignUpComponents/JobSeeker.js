
import { Text, TextInput, View } from "react-native"
import tw from 'tailwind-react-native-classnames'

const Jobseeker = (props) => {
    switch (props.steps) {
        case 1:
            return (
                <View style={tw`my-3`}>
                    <View>
                        <Text style={tw`my-2`}>Full Name</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput
                                defaultValue={props.credentials.full_name !== undefined ? props.credentials.full_name : null}
                                onEndEditing={(e) => props.textInputListener('full_name', e.nativeEvent.text)}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Education Qualification</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput defaultValue={props.credentials.education_qualification !== undefined ? props.credentials.education_qualification : null}  onEndEditing={(e) => props.setCredentials({ ...props.credentials, education_qualification: e.nativeEvent.text })} />
                        </View>
                    </View>
                </View>
            )
        case 2:
            return (
                <View style={tw`my-3`}>
                    <View>
                        <Text style={tw`my-2`}>Course of Study</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput defaultValue={props.credentials.course_study !== undefined ? props.credentials.course_study : null}  onEndEditing={(e) => props.setCredentials({ ...props.credentials, course_study: e.nativeEvent.text })} />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Professional/Career Path</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput defaultValue={props.credentials.career !== undefined ? props.credentials.career : null}  onEndEditing={(e) => props.setCredentials({ ...props.credentials, career: e.nativeEvent.text })} />
                        </View>
                    </View>
                </View>
            )
            case 3:
                return(
                    <View style={tw`my-3`}>
                    <View>
                        <Text style={tw`my-2`}>Email Address</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput defaultValue={props.credentials.email !== undefined ? props.credentials.email : null}  onEndEditing={(e) => props.setCredentials({ ...props.credentials, email: e.nativeEvent.text })} />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Phone Number</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput defaultValue={props.credentials.phone_number !== undefined ? props.credentials.phone_number : null}  onEndEditing={(e) => props.setCredentials({ ...props.credentials, phone_number: e.nativeEvent.text })} />
                        </View>
                    </View>
                    <View>
                        <Text style={tw`my-2`}>Password</Text>
                        <View style={[tw`px-2 py-2 `, { backgroundColor: '#f1f5f9', borderRadius: 5 }]}>
                            <TextInput defaultValue={props.credentials.password !== undefined ? props.credentials.password : null}  onEndEditing={(e) => props.setCredentials({ ...props.credentials, password: e.nativeEvent.text })} />
                        </View>
                    </View>
                </View>
                )
        default:
            break;
    }
}

export default Jobseeker