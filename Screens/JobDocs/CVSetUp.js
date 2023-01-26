import { useEffect, useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { View, TextInput, Text, SafeAreaView, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Container from "../../Components/Globals/Container"
import { TopItemMenu } from "../../Components/Globals/Menu"
import Input from '../../Components/Input';
import Button from '../../Components/Button/Button';
import HeadingText from '../../Components/Typography/HeadingTypography';
import ModalAddToCV from '../../Components/CV_Component/Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemData = [
    'Education', 'Experience', 'Certiicate', 'Reference'
]

const Headings = {
    Education: ['Institution', 'Course of Study', 'Entry Year', 'Graduation Year'],
    Experience: ['Company Name', 'Start Date', 'End Date', 'Responsibilities']
}

const CVSetUp = ({ navigation, route }) => {
    const [cv, setCv] = useState()
    const [itemDropdown, setItemDropDown] = useState();
    const [sectionType, setSectionType] = useState('')
    const [displayModal, setDisplayModal] = useState(false)
    const [data, setData] = useState({ Education: [], Experience: [] })
    const [user,setUser] =useState()


    useEffect(() =>{
        let user
        navigation.addListener('focus',async() =>{
            user = await AsyncStorage.getItem('userInfo')
            setUser(user)
        })
        
    },[])

    const ToggleDropDown = (item) => {
        if (item !== itemDropdown) {
            setItemDropDown(item)
        } else {
            setItemDropDown(null)
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            console.log('cv', route.params)
        })
    }, [])

    const addToCv = (type) => {
        if (!displayModal) {
            setSectionType(type)
            setDisplayModal(true)
        }
    }

    const DropdownHeading = ({ type }) => {
        return (
            <View style={tw`flex-row justify-between item-align`}>
                {Headings[type].map(text => (
                    <Text style={tw`text-xs text-white text-center`}>{text}</Text>
                ))}
            </View>
        )
    }

    const DisplayData = ({ item }) => {
        let arr = Array()
        for (const key in item) {
            arr.push(item[key])
        }

        return (
            <View style={tw`flex-row justify-between my-2`}>
                {
                    arr.map(value => (<Text style={tw`text-xs text-white text-center`}>{value}</Text>))}
            </View>
        )

    }

    return (
        <Container element={SafeAreaView}>
            <TopItemMenu drawer={navigation} />
            {displayModal ? <ModalAddToCV
                setVisible={setDisplayModal}
                type={sectionType}
                setItem={setData}
                item={data[sectionType]}
            /> : null}
            <View><HeadingText align='text-center' textColor='text-white' text='Set Up CV' /></View>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: '20%' }}>
                {/* <UploadCV /> */}
                <View style={tw`my-3`}>
                    {/* <View style={tw``}> */}
                    <TextInput placeholder='Address' placeholderTextColor='white' style={[tw`my-1 border h-10 rounded-3xl border-white text-left pl-2`, { color: 'white' }]} />
                    <TextInput placeholder='Email Adress' placeholderTextColor='white' style={[tw`my-1 h-10 border rounded-3xl border-white text-left pl-2 `, { color: 'white' }]} />
                    {/* </View> */}
                    <TextInput placeholder='Phone number' placeholderTextColor='white' style={[tw`my-1 h-10 border rounded-3xl border-white text-left pl-2`, { color: 'white' }]} />
                </View>
                <View>
                    <Input multiline={true} label='Introduction' style={[tw``, { height: 100, textAlignVertical: 'top' }]} />
                    <View style={tw`mt-4`}>
                        {ItemData.map((item, index) =>
                        (<View key={index}>
                            <View style={[tw`flex-row justify-between my-2 items-center`]}>
                                <Text style={tw`text-white`}>{item}</Text>
                                <View style={[tw`bg-white w-3/5`, { height: 2 }]} />
                                <Ionicon name='create' color={'white'} onPress={() => addToCv(item)} />
                                <Ionicon name={itemDropdown === item ? 'chevron-down' : 'chevron-up'} size={13} style={tw`px-2`} color="white" onPress={() => ToggleDropDown(item)} />
                            </View>
                            {itemDropdown === item ? <View>
                                <DropdownHeading type={itemDropdown} />
                                {data[itemDropdown].length > 0 ?
                                    data[itemDropdown].map(set =>
                                        (<DisplayData item={set} />))
                                    : null}
                            </View> : null}
                        </View>
                        ))
                        }
                    </View>
                    <View style={tw`mt-3`}>
                        <Text style={tw`text-center text-white`}>Or Upload CV</Text>
                        <View style={tw`py-7`}>
                            <AntIcon onPress={() => navigation.navigate('uploadcv')} style={tw`mx-auto`} size={35} name='upload' color='white' />
                        </View>
                        <Button style={[tw`py-3 w-1/2 mx-auto rounded-lg`, { backgroundColor: '#E9FAFC' }]} text='Finish' />
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default CVSetUp