import { useState } from "react"
import { Text, TextInput, View, ActivityIndicator } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardContainer from "../../Components/Cards/CardContainer"
import Container from "../../Components/Globals/Container"
import HeadingText from "../../Components/Typography/HeadingTypography"
import Button from "../../Components/Button/Button"
import Alternative from "../../Components/Onboarding/Alternative"
import ApiRequestInstance from "../../BASE_API_URL/ApiCall_Instance"


const SignIn = ({navigation}) => {
    const [credentials, setCredentials] = useState({})
    const [ready,setReady] = useState(false)
    const [isSubmit,setSubmitted] = useState(false)


    const onEndText= () => {
        if(credentials.email !== undefined && credentials.password !== undefined){
            setReady(true)
        }else{
            setReady(false)
            for (const property in credentials) {
                if(credentials[property] === ''){
                    alert(property + 'is empty')
                }
            }
        }
    }

    const callback = (response) => {
        setSubmitted(false)
        navigation.navigate('home', {
            screen: 'dashboard', 
                params: {screen: 'job', 
                    params: {screen: 'setupcv', initial: false}
                }
            }
        )
    }

    const errCallback = (err) => {
        setSubmitted(false)
        // console.log('err',err)
        alert(err.message)
    }

    const Login = () => {
        if(ready){
            setSubmitted(true)
            ApiRequestInstance('post',credentials,callback,errCallback, 'auth/login/', null, true)
        }
    }

    return(
    <Container element={View}>
        <View style={tw`mb-5 mt-9`}>
            <View>
                <Ionicon name='chevron-back' size={30} color="white" onPress={() => navigation.goBack()} />
            </View>
            <View>
                <HeadingText text='Sign In' textColor='text-white' align='text-center' />
            </View>
        </View>

        <View>
            <CardContainer>
                <View style={tw` p-4`}>
                    <View style={tw`flex-row justify-between`}>
                        <HeadingText textColor='#23D685' text="Get Started" />
                        <Button textStyle={{color: '#D7CBF6'}} text="Sign in" style={[tw`px-5 py-2 `,{backgroundColor: '#E9FAFC', borderRadius: 10}]}/>
                        <Button
                            onPress={() => navigation.navigate('signup')}
                            text="Sign Up" style={[tw`px-5 py-2 text-white`,{backgroundColor: '#a5f3fc', borderRadius: 10}]}/>
                    </View>
                    <View style={tw`my-3`}>
                        <View>
                            <Text style={tw`my-2`}>Email</Text>
                            <View style={[tw`px-2 py-2 `,{backgroundColor: '#f1f5f9',borderRadius: 5}]}>
                                <TextInput keyboardType="email-address" onEndEditing={() => onEndText()} onChangeText={(text) => setCredentials({...credentials, email: text})}  />
                            </View>
                        </View>
                        <View>
                            <Text style={tw`my-2`}>Password</Text>
                            <View style={[tw`px-2 py-2 `,{backgroundColor: '#f1f5f9',borderRadius: 5}]}>
                                <TextInput  onEndEditing={() => onEndText()} onChangeText={(text) => setCredentials({...credentials, password: text})} />
                            </View>
                        </View>
                        <View style={tw`mt-5`}>
                            <Button onPress={() =>Login()}
                            style={[tw`px-2 py-4 rounded-lg`,{backgroundColor: !ready ? '#f1f5f9' : '#a5f3fc'}]}
                            children={!isSubmit ? <Text style={[tw`text-center`,{color: !ready ? 'black' : 'white'}]}>SignIn</Text> : <ActivityIndicator color={'white'}/>} 
                            />
                        </View>
                    </View>
                </View>
            </CardContainer>
            
            <Alternative />
        </View>
    </Container>
    )
}

export default SignIn