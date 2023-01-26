import { useState } from "react"
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign'
import tw from 'tailwind-react-native-classnames'
import Animated, { event, useAnimatedStyle,useSharedValue,useAnimatedGestureHandler, withSpring, color } from 'react-native-reanimated';
import { Text, View,ScrollView, Alert,ActivityIndicator } from "react-native"
import DragAble from "../../Components/Dragables/Dragable"
import Container from "../../Components/Globals/Container"
import UnorderedListItem from "../../Components/ListViews/UnorderedListItem"
import Button from "../../Components/Button/Button";
import { PanGestureHandler } from "react-native-gesture-handler";
import ApiRequestInstance from "../../BASE_API_URL/ApiCall_Instance";


const ViewJobDragIn = (props) => {
    const startPosition = useSharedValue(0)
    const [height,setHeight] = useState();
    const [isSubmit,setSubmitted] = useState(false)
    let deviceH = props.deviceHeight;
    let marginScroll = deviceH - height
    let job = props.job;

    const find_dimesions = (layout) => {
        const {x, y, width, height} = layout;
        setHeight(height)
    }

    const animatedStyle = useAnimatedStyle(
        () => {
            return {
              transform: [{ translateY: withSpring(startPosition.value)}],
            };
        }
    )

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event, context) => {
          context.translateY = startPosition.value;
        },
        onActive: (event, context) => {
            const newValue = context.translateY + event.translationY
            const diffLayout =  height - props.margin - props.height
            if(newValue < 0 && newValue < diffLayout ){
                startPosition.value = context.translateY + event.translationY
                // if(marginScroll < startPosition.value){}
            }else if(newValue <= diffLayout){
                startPosition.value= diffLayout
            } 
        },
        onEnd: (event,context) => {
            if(startPosition.value > 0  ){
                startPosition.value = 0
            }
        }
    });

    const SendApplication = () => {
        ApiRequestInstance('post', {job_id: job.id},callback,errcallback,'jobs/job-seeker-view/',null,false)
    }

    const callback = (res) => {
        Alert.alert('Successful', 'Application Successful' , [], { cancelable: true })
        startPosition.value = 0
        props.parentStartPostion.value = props.deviceHeight
        props.navigation.navigate('apply',{job})
    }

    const errcallback = (err) => {
        Alert.alert('Error', err.data.message , [], { cancelable: true })
    }

    let dH = height < deviceH ? deviceH : height

    return(
        <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
            onLayout={(event) => find_dimesions(event.nativeEvent.layout) }
            style={[animatedStyle, { backgroundColor: "#081c3c",height: dH}]}
        >
                <View style={{backgroundColor: "#081c3c", paddingHorizontal: 10}}>
                    {/* <Text style={[tw`text-white`,{fontSize: 15}]}>ABC Company Ltd</Text> */}
                    <View style={tw`mt-2 flex-row items-center justify-between`}>
                        <Text style={[tw`text-white`,{fontSize: 25}]}>{job.job_title}</Text>
                        <View style={tw`flex-row justify-between w-1/5`}>
                            <Icon name="heart-outline" size={20} color='white' />
                            <AntIcon name="upload" size={20} color='white' />
                        </View>
                    </View>
                    <Text style={tw`text-white`}>{job.location}</Text>
                    <View style={tw`pb-1`}>
                        <View style={tw`my-2`}>
                            <Text style={tw`text-white`}>Salary</Text>
                            <Text style={tw`text-white`}>{job.salary}</Text>
                        </View>
                        <View>
                            <Text style={tw`text-white`}>Job Type</Text>
                            <Text style={tw`text-white`}>{job.job_type}</Text>
                        </View>
                    </View>
                </View>

                <View style={{height: 2, backgroundColor: 'white'}}/>
                <View style={{backgroundColor: "#081c3c", paddingHorizontal: 10}}>
                    <Text style={[tw`text-white mb-1`,{fontSize: 23}]}>Job Description</Text>
                    {/* <View style={tw`w-4/5`}>{
                        instruction.map((item,index) => (
                            <UnorderedListItem index={index} text={item}  />
                        ))
                    }</View> */}
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-sm text-white`}>
                            {job.description_content}
                        </Text>
                    </View>
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-sm text-white`}>
                            Job Type: {job.job_type}
                        </Text>
                        <Text style={tw`mt-2 text-sm text-white`}>
                            Salary: {job.salary}
                        </Text>
                    </View>
                </View >
                <Button onPress={() => {
                    SendApplication()
                }
                }
                    style={[tw`my-2 py-2 w-3/5 rounded-full mx-auto`,{backgroundColor: '#24CDE2'}]} text='Apply Now' />
                <Button text='Report Job' textStyle={{color: 'white'}}/>
            </Animated.View>
            </PanGestureHandler>
    )
}

export default ViewJobDragIn