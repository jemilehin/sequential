import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CardContainer from "../../Components/Cards/CardContainer"
import Container from "../../Components/Globals/Container"
import HeadingText from "../../Components/Typography/HeadingTypography"
import Button from "../../Components/Button/Button"

import Alternative from "../../Components/Onboarding/Alternative"
import UnorderedListItem from "../../Components/ListViews/UnorderedListItem"
import Organization from "./SignUpComponents/Organization"
import Jobseeker from "./SignUpComponents/JobSeeker"
import ApiRequestInstance from "../../BASE_API_URL/ApiCall_Instance"

const SignUp = ({ navigation }) => {
    const [credentials, setCredentials] = useState({})
    const [state, setState] = useState('start')
    const [steps, setSteps] = useState(1)
    const [currentState, setCurrentState] = useState('')
    const [Submitted,setSubmitted] = useState(false)
    const [error, setError] = useState()

    const callback = (response) => {
        setSubmitted(false)
        alert(response.message)
        navigation.navigate('signin')
    }

    useEffect(()=>{
        navigation.addListener('focus', async () => {
            await AsyncStorage.multiRemove(['tokens','userInfo'])
        })
    },[])

    const errCallback = (err) => {
        if(err.hasOwnProperty('errors')){
            setError(err.errors)
        }else if(err.hasOwnProperty('error')) {
            for (const key in err.error) {
                setError(err.error[key])
            }
        }else{
            setError(err.message)
        }
        setSubmitted(false)
        console.log(err)
    }

    const DisplayErrorMessage = () => {
        if (Array.isArray(error)){
            return(
                <View style={tw`flex-row`}>
                <Text >Fields Can't be empty: </Text>
                {error.map(name => <Text style={[tw`mr-1`,{color: 'red'}]}>{name.field},</Text>)}
                </View >
            )
        }else return<View><Text>{error}</Text></View>
    }

    const onTextChange = (key,value) =>{
        setCredentials({...credentials, [key]: value})
    }

    const RegisterCredentials = () => {
        setSubmitted(true)
        ApiRequestInstance('post',credentials,callback,errCallback,state === 'organization' ? 'auth/create-company/' : 'auth/create-seeker/',null,true)
    }

    const ScreenState = () => {
        if (state === 'start') {
            return (
                <>
                    <TouchableOpacity onPress={() => setState('Organization')} style={[tw`py-2 px-3 `, { marginBottom: 10, borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'white' }]}>
                        <UnorderedListItem
                            reverse="yes"
                            text="Signup as an organization"
                            iconName='chevron-forward'
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setState('JobSeeker')} style={[tw`py-2 px-3 `, { borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'white' }]}>
                        <UnorderedListItem
                            reverse="yes"
                            text="Signup as a Jobseeker"
                            iconName='chevron-forward'
                            size={30}
                        />
                    </TouchableOpacity>
                </>
            )
        } if (state === 'Organization') {
            return (
                <View>
                    <HeadingText text={state} align='text-center' textColor={'text-white'}/>
                    <CardContainer>
                        {steps === 4 ? null : <View style={tw` p-4`}>
                            <View style={tw`flex-row justify-between`}>
                                <HeadingText text="Sign Up" />
                                <Button onPress={() => setSteps(prev => prev < 4 ? prev + 1 : null)} text="Next" style={[tw`px-5 py-2 `, { backgroundColor: 'grey', borderRadius: 10 }]} />
                            </View>
                        </View>}
                        {error !== undefined ? <DisplayErrorMessage /> : null}
                        <Organization 
                            credentials={credentials} 
                            setCredentials={setCredentials} 
                            setCurrentState={setCurrentState} 
                            steps={steps}/>
                    </CardContainer>
                    {steps === 4 ? null : <Alternative />}
                </View>
            )
        }else{
            return (
                <View>
                    <HeadingText text={'Job Seeker'} align='text-center' textColor={'text-white'}/>
                    <CardContainer>
                        <View style={tw` p-4`}>
                            <View style={tw`flex-row justify-between`}>
                                <HeadingText text="Sign Up" />
                                <Button 
                                textStyle={{color: 'white'}} onPress={() => setSteps(prev => prev < 3 ? prev + 1 : prev)} text="Next" style={[tw`px-5 py-2 `, { backgroundColor: '#24CDE2', borderRadius: 10 }]} />
                            </View>
                        </View>
                        {error !== undefined ? <DisplayErrorMessage /> : null}
                        {!Submitted ? <Jobseeker 
                            steps={steps}
                            credentials={credentials} 
                            setCredentials={setCredentials}
                            textInputListener={onTextChange}
                        /> : <View style={tw`m-auto`}><ActivityIndicator size={30} color="#24CDE2" /></View>}
                        {steps === 3 ? 
                            <Button 
                                onPress={() => RegisterCredentials()}
                                text="Submit"
                                textStyle={{color: 'white'}}
                                style={[tw`px-5 py-3 my-2`, { backgroundColor: '#24CDE2', borderRadius: 10 }]}
                            /> : null
                        }
                    </CardContainer>
                    <Alternative />
                </View>
            )
        }
    }

    return (
        <Container element={View}>
            <View style={tw`mb-5 mt-9`}>
                <View>
                    <Ionicon name='chevron-back' size={30} color="white" onPress={() => navigation.goBack()} />
                </View>
                <View>
                    <HeadingText text='Sign Up' textColor='text-white' align='text-center' />
                </View>
            </View>
            <ScreenState />
        </Container>
    )
}

export default SignUp