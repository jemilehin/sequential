import React from 'react';
import { Text,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import CardContainer from './CardContainer';
import TabletCard from './TabletCard';
import Button from '../Button/Button';


const JobsCardItem = (props) => {

    return(
        <CardContainer key={props.index} >
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-2xl`}>{props.role}</Text>
                <Icon
                    onPress={props.favourite}
                    name={!props.like ? 'heart-outline' : 'ios-heart'}
                    size={25}
                    color={!props.like ? 'black' : '#D7CBF6'}
                />
            </View>
            <View>
                <Text style={tw`text-lg font-bold`}>{props.company}</Text>
                <Text>{props.state},{props.country}</Text>
            </View>

            <View style={tw`flex-row justify-between my-2 w-9/12`}>
                <TabletCard
                    width='w-2/5 mr-2'
                    icon={
                        <Icon 
                            name='md-briefcase-outline'
                            size={15}
                        />
                    }
                    element={Text}
                    children={props.workType}
                />
                <TabletCard
                    width='w-3/5 pr-2'
                    icon={
                        <FontIcon 
                            name='money'
                            size={15}
                        />
                    }
                    element={Text}
                    children={props.salaryRange}
                />
            </View>
            <View>
                <View style={tw`mb-2`}>
                <TabletCard
                    width='w-2/4 pr-2'
                    icon={
                        <Icon 
                            name='send-sharp'
                            size={15}
                        />
                    }
                    element={Text}
                    children='Apply from your phone'
                />
                </View>
                <TabletCard
                    width='w-7/12 pr-2'
                    icon={
                        <Icon 
                            name='person-circle-outline'
                            size={15}
                        />
                    }
                    element={Text}
                    children='Hiring multiple candidates'
                />
                <View style={tw`flex-row justify-between my-5 mr-5`}>
                    <Text>{props.date}</Text>
                    <Button onPress={props.action}  text='Apply'/>
                </View>
            </View>
        </CardContainer>
    )
}

export default JobsCardItem;