import React,{Component} from "react";
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView, ScrollView, Text } from "react-native";
import Container from "../../Components/Globals/Container";
import { TopItemMenu } from "../../Components/Globals/Menu";
import ListItem from "../../Components/ListViews/ListItem";

const data = [
    {
        messageType: 'invited', 
        message: 'You have been invited for an interview by ABC Company'
    },
    {
        messageType: 'job notification', 
        message: 'BDC company just uploaded an opening that fits your job preference'
    },
    {
        messageType: 'job notification', 
        message: 'BDC company just uploaded an opening that fits your job preference'
    },
    {
        messageType: 'job notification', 
        message: 'BDC company just uploaded an opening that fits your job preference'
    },
    {
        messageType: 'job notification', 
        message: 'BDC company just uploaded an opening that fits your job preference'
    },
]

class Notifications extends Component{
    constructor(props){
        super(props)
        this.state = {
            notifications: data
        }
    }

    readMessage = (item) => {
        this.props.navigation.navigate('viewmessage', {message:item})
    }

    render(){
        return(
            <Container element={SafeAreaView}>
                <TopItemMenu drawer={this.props.navigation}/>
                <Text style={tw`text-2xl text-white mb-7`}>Notification</Text>
                <ScrollView>
                    {
                        this.state.notifications.length > 0 ?
                        this.state.notifications.map((item, index) => (
                            <ListItem
                                index={index}
                                messageType={item.messageType}
                                message={item.message}
                                action={() => this.readMessage(item)}
                            />
                        )) : <Text>No Notifications</Text>
                    }
                </ScrollView>
            </Container>
        )
    }
}

export default Notifications