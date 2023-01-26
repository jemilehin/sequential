import React from 'react';
import { Text,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import CardContainer from './CardContainer';
import TabletCard from './TabletCard';


const DateCard = (props) => {


    return(
        // <CardContainer key={props.index}>
            <View style={[tw`flex-row justify-between items-center px-2 py-6 mr-3 `,{borderRadius: 10, backgroundColor: props.bgcolor === undefined ? 'white' : props.bgcolor, width: props.width}]}>
                <Text style={[tw`text-sm`, props.textStyle]}>{props.date}</Text>
            </View>
        // </CardContainer>
    )
}

export default DateCard