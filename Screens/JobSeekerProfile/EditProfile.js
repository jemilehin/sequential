import React, { useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Container from '../../Components/Globals/Container'
import { TopItemMenu } from "../../Components/Globals/Menu"
import HeadingText from "../../Components/Typography/HeadingTypography";
import Input from '../../Components/Input';
import moment from 'moment/moment';
import Button from '../../Components/Button/Button';



const EditProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({})
    const currentDateTime =  new moment().format('MMMM D, YYYY')
    const marginPadding = {marginBtwElement: 60, containerMargin: 80}

    return (
        <Container element={SafeAreaView}>
            <TopItemMenu isIcon={true} nav={() => navigation.goBack()} drawer={navigation} />
            <HeadingText textColor='text-white' align='text-center' text='Profile' />

            <View style={tw`mt-7 mb-9`}>
                <View 
                    style={[tw`h-20 w-20 rounded-full mb-3 mt-5 bg-gray-300 mx-auto`,{borderColor: '#24cde2', borderWidth: 2}]} >
                    <Ionicon name='camera' size={20} color='white' style={[tw`absolute bottom-0 rounded-full right-0`,{backgroundColor: '#24cde2', paddingHorizontal: 4, paddingVertical: 3}]}  />
                </View>
            </View>
            <ScrollView contentContainerStyle={{paddingBottom: marginPadding.containerMargin}}>
            <View style={[tw`mx-auto`,{width: '70%', marginBottom: marginPadding.marginBtwElement}]}>
                <Input 
                    label='Name'
                    setCredentials={setProfile}
                    name='name'
                    credentials={profile}
                />
                <Input 
                    label='Email Address'
                    setCredentials={setProfile}
                    name='email'
                    credentials={profile}
                />
                <Input 
                    label='Email Address'
                    setCredentials={setProfile}
                    name='Email'
                    credentials={profile}
                />
                <Input 
                    label='Password'
                    setCredentials={setProfile}
                    name='password'
                    credentials={profile}
                />
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-white`}>{currentDateTime}</Text>
                <Button style={[tw`w-14 rounded`,{backgroundColor: 'rgba(255, 255, 255, 0.14)',}]} text='Logout'/>
            </View>
            </ScrollView>
        </Container>
    )
}

export default EditProfile