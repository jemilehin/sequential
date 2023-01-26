import { SafeAreaView, Text, View } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Icon from "react-native-vector-icons/Ionicons"
import Container from "../../Components/Globals/Container"
import { TopItemMenu } from "../../Components/Globals/Menu"
import Button from "../../Components/Button/Button"


const InterviewDone = ({ navigation}) => {

    const SubmitInterview = () => {
        navigation.navigate('job')
    }

    return(
        <Container element={SafeAreaView}>
        <TopItemMenu isIcon={true} nav={() => navigation.goBack()} drawer={navigation} />
            <View style={[tw`flex-col content-center items-center`,{flex: 1}]} >
                <View style={[tw`my-auto`]}>
                    <Icon style={tw`mx-auto`} name="checkmark-circle" color='white' size={30} />
                    <Text style={tw`text-center text-white my-2 text-2xl`}>Interview Scheduled</Text>
                    <View >
                    <Text style={[tw`text-center mx-auto text-white text-base`,{width: '50%', }]}>
                        A link to the interview has been sent to your email
                    </Text>
                    </View>
                    <Button
                    onPress={() => SubmitInterview()}
                    style={[tw`py-3 px-10 mx-auto mt-2`,{
                        borderRadius: 10, backgroundColor: '#a5f3fc',
                    }]}
                    text='Go Home'
                />
                </View>
            </View>
        </Container>
    )
}

export default InterviewDone