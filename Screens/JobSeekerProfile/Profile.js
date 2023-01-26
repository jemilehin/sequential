import React,{Component} from "react";
import { SafeAreaView, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";
import tw from 'tailwind-react-native-classnames'
import Button from "../../Components/Button/Button";
import Container from "../../Components/Globals/Container";
import { TopItemMenu } from "../../Components/Globals/Menu";
import HeadingText from "../../Components/Typography/HeadingTypography";

const Options = (props) => {
    return(
        <View  style={tw`flex-row justify-between items-center my-3`} key={props.index}>
            <View style={tw`flex-row justify-between items-center`}>
                <Icon style={[tw`p-2 rounded-md mr-4`,{backgroundColor: '#0089ce', width: 40}]} name={props.iconType} size={25} color="white"/>
                <Text style={tw`text-white text-xl`}>{props.text}</Text>
            </View>
            <AntIcon name='right' size={25} color="white" />
        </View>
    )
}

const configOption = [
    {text: 'Settings', icon: 'settings-outline'},
    {text: 'Help', icon: 'ios-help-circle-outline'},
    {text: 'Logout', icon: 'ios-power'}
]

class Profile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container element={SafeAreaView}>
                <TopItemMenu drawer={this.props.navigation} />
                    <HeadingText textColor='text-white' align='text-center' text='Profile'/>
                <View style={tw`mt-7 mb-9`}>
                    <View style={[{borderColor: '#24cde2', borderWidth: 2},tw`h-20 w-20 rounded-full mb-3 mt-5 bg-gray-300 mx-auto`]} />
                    <Text style={tw`text-center text-white`}>Tom Brad</Text>
                    <Button onPress={() => this.props.navigation.navigate('editprofile')} style={{backgroundColor: '#0089ce', width: '30%', borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', padding: 5, marginTop: 10}} text='Edit Profile'/>
                </View>
                <View style={tw`mt-6`}>
                    {
                        configOption.map((item,index) => (
                            <Options 
                                index={index}
                                text={item.text}
                                iconType={item.icon}
                            />
                        ))
                    }
                </View>
            </Container>
        )
    }
}

export default Profile