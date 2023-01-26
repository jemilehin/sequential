import { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntIcon from 'react-native-vector-icons/AntDesign'
import { View, Text, SafeAreaView,Alert,ActivityIndicator } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Container from "../../Components/Globals/Container"
import { TopItemMenu } from "../../Components/Globals/Menu"
import HeadingText from "../../Components/Typography/HeadingTypography";
import Button from '../../Components/Button/Button';
import ApiRequestInstance from '../../BASE_API_URL/ApiCall_Instance';

const ItemData = [
    'Education', 'Experience', 'Certiicate', 'Reference'
]

const UploadCV = ({navigation}) => {
    const [file, SetFile] = useState()
    const [isSubmit,setSubmitted] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [fileURL,SetFileURL] = useState({})
    let formdata = new FormData();
    
    const pickDocument = async() => {
        let result = await DocumentPicker.getDocumentAsync({})
        if (result.type === 'success') {
            SetFile(result)
        }
    }

    const getUserInfo =async () => {
        let userInfo = await AsyncStorage.getItem('userInfo')
        setUserInfo(JSON.parse(userInfo))
    }

    useEffect(() => {
        getUserInfo()
    },[])

    const callback = (response) => {
        setSubmitted(false)
        SetFile()
        SetFileURL(response)
        Alert.alert('Success', 'CV Uploadeded Successfully' , [], { cancelable: true })
    }

    const errCallback = (err) => {
        let errMsg
        setSubmitted(false)
        console.log('cverr',err)
        // if (err.hasOwnProperty('error')) {
        //     for (const key in err.error) {
        //         errMsg = err.error[key]
        //     }
        // } else { errMsg = err.message }

        // Alert.alert('Error', errMsg , [], { cancelable: true })
    }

    const SubmitCV = () => {
        // let fileExtension = file.mimeType.split('/')[1]
        if(file !== undefined){
            setSubmitted(true)
            formdata.append('cv',{name:file.name, type:file.mimeType, uri: file.uri})
            ApiRequestInstance('post',formdata,callback,errCallback,`jobs/cv_upload/${userInfo.user_id}/`,'formdata',false)
        }
    }

    return (
        <Container element={SafeAreaView}>
            <TopItemMenu drawer={navigation}/>
            <View>
                <View style={tw`mt-5`}>
                    <HeadingText textColor='white' align='text-center' text='Upload CV' />
                </View>
                <View style={[tw``,{marginTop: '50%', marginBottom: '65%'}]}>
                    <View style={tw`py-7`}>
                        <AntIcon onPress={() => pickDocument()} style={tw`mx-auto`} size={35} name='upload' color='white'/>
                    </View>
                    {file === undefined ? null : <View style={[tw`flex-row pb-1 mx-auto mb-1 rounded w-1/2`,{borderWidth: 1,borderStyle: 'dashed'}]}>
                        <AntIcon style={tw``} name='file1' size={20} color='white'/>
                     <Text style={tw`text-white`}>{file.name}</Text>
                    </View> }
                    <Button 
                        onPress={() => SubmitCV()}
                        style={[tw`py-3 w-1/2 mx-auto rounded-lg`,{backgroundColor: '#24CDE2'}]} 
                        // text="Submit CV"
                        children={!isSubmit ? <Text style={tw`text-white text-center`}>Submit CV</Text> : <ActivityIndicator color='white' size={20} />}
                    />
                </View>
                <View style={tw``}>
                    <Button onPress={() => navigation.navigate('setupcv',{'cv':fileURL.cv})}
                        style={[tw`py-3 w-1/2 mx-auto rounded-lg`,{backgroundColor: '#24CDE2'}]} 
                        text='Finish'
                    />
                </View>
            </View>
        </Container>
    )
}

export default UploadCV