import tw from 'tailwind-react-native-classnames'
import {View } from "react-native";

const DragBar = (props) => {
    return(
        <View><View style={[tw`mx-auto my-3 rounded-lg`,{height: 5, width: "15%",backgroundColor: props.bgColor}]}></View></View>
    )
}

export default DragBar