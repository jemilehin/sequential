import { useEffect, useState } from "react"
import  {withTiming, Easing, useSharedValue } from "react-native-reanimated";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView, Text, View, Dimensions } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Button from "../../Components/Button/Button"
import UnorderedListItem from "../../Components/ListViews/UnorderedListItem"
import DragAble from "../../Components/Dragables/Dragable"
import DragBar from "../../Components/Dragables/DragBar"
import ApiRequestInstance from "../../BASE_API_URL/ApiCall_Instance";


const deviceheight = Dimensions.get('screen').height;
const Application = ({ navigation,route }) => {
    const [steps, setSteps] = useState(0);
    const [job,setJob] = useState({})
    const [iconName, setIconName] = useState('ellipse-outline')
    const [entry,setEntry] = useState()
    const sharedValue = useSharedValue(deviceheight)
    const [question,setQuestion] = useState()

    const displayNextIndex = (step) => {
        if(step !== 3){
            setSteps(step+1)
        }else{
            navigation.navigate('')
        }
    }

    // console.log(job.id)
    const CheckQuestion = () => {
        setTimeout(()=>{
            ApiRequestInstance('post',{job_id: job.id},callback,errcallback,'jobs/job-seeker-view/get_quetion/',null,false)
        },1000)
    }

    useEffect(()=> {
        navigation.addListener('focus',() => {
            setJob(route.params.job)
            CheckQuestion()
        })
        clearTimeout(1000)
    },[])

    const callback = (res) =>{
        console.log('q',res)
    }

    const errcallback = (err) => {
        console.log(err)
    }

    const ApplicationProcess = (props) => {
        switch (props.index) {
            case 0:
                return(
                    <View style={[tw`m-auto`,{width: '90%'}]}>
                        <Button onPress={() => displayNextIndex(steps)} textStyle={{color: 'white'}} style={[tw`rounded-md  py-2 mx-auto`,{backgroundColor: '#24CDE2', width: '40%'}]} text='Apply with CV' />
                        <Button onPress={() => navigation.navigate('home', {
                                screen: 'dashboard', 
                                    params: {screen: 'job', 
                                        params: {screen: 'setupcv', initial: false}
                                    }
                                }
                            )} textStyle={{color: 'white'}} style={[tw`rounded-md py-2 mx-auto my-2`,{backgroundColor: 'transparent', 
                            borderWidth: 2, borderColor: '#24CDE2', width: '40%'
                            }]} text='Upload/Edit Cv' 
                        />
                    </View>
                )
            case 1:
                return(
                    <View style={tw`px-2 py-2`}>
                        <Text style={tw`text-white my-3 text-lg`}>Questions from the employer</Text>
                        <Text style={tw`text-white my-2`}>What to expect next:</Text>

                        <Text style={tw`text-white my-2`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet odio
                            mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Curabitur tempus
                            urna at turpis condimentum lobortis. Ut commodo efficitur
                            neque. Ut diam quam, semper iaculis condimentum ac, vestibulum 
                            eu nisl.
                        </Text>

                        <Text style={tw`text-white my-4`}>Are you ready to take  your test?</Text>
                        <View style={tw`w-4/5`}>
                            <UnorderedListItem press={() =>
                                iconName === 'ellipse-outline' ? setIconName(undefined) : setIconName('ellipse-outline')
                            } iconName={iconName} size={20} text='Yes, and I will check my email for the link'/>
                        </View>
                        <Button onPress={() => displayNextIndex(steps)} textStyle={{color: 'white'}} style={[tw`rounded-md my-6 py-3 mx-auto`,{backgroundColor: '#24CDE2', width: '50%'}]} text='Review your Application'/>
                    </View>
                )
            case 2:
                return(
                    <View style={{paddingHorizontal: 10}}>
                        <Text style={tw`text-white my-3 text-lg`}>Upload credntials</Text>

                        <View style={tw`flex-row justify-between items-center py-3`}>
                            <Text style={tw`text-white`}>Bsc Certificate</Text>
                            <View>
                                <View style={tw`flex-row w-1/2 border-2 border-white border-dashed px-7`}>
                                    <AntIcon onPress={() => navigation.navigate('uploadcv')} style={tw`mx-auto`} size={35} name='upload' color='white'/>
                                </View>
                            </View>
                        </View>

                        <View style={[tw`flex-row justify-between items-center py-3`,{borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'white'}]}>
                            <Text style={tw`text-white`}>CIPM Certificate</Text>
                            <View>
                                <View style={tw`flex-row w-1/2 border-2 border-white border-dashed px-7`}>
                                    <AntIcon onPress={() => navigation.navigate('uploadcv')} style={tw`mx-auto`} size={35} name='upload' color='white'/>
                                </View>
                            </View>
                        </View>

                        <View style={[tw`flex-row justify-between items-center py-3`]}>
                            <Text style={tw`text-white`}>Refrence Letter</Text>
                            <View>
                                <View style={tw`flex-row w-1/2 border-2 border-white border-dashed px-7`}>
                                    <AntIcon onPress={() => navigation.navigate('uploadcv')} style={tw`mx-auto`} size={35} name='upload' color='white'/>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{height: '50%'}}>
                            <Text style={tw`text-white text-center my-auto`}>Yes, and I will check my email for the link</Text>
                            <Button onPress={() => displayNextIndex(steps)} textStyle={{color: 'white'}} style={[tw`rounded-md my-6 py-3 mx-auto`,{backgroundColor: '#24CDE2', width: '50%'}]} text='Submit Application'/>
                        </View>
                        
                    </View>
                );
            case 3:
                return(
                    <View style={tw`m-auto`}>
                        <Ionicons style={tw`mx-auto`} name="checkmark-circle-outline"  color={'white'} size={50}/>
                        <Text style={tw`text-white text-center text-2xl`}>Application Submitted</Text>
                        <Text style={tw`text-white text-center`}>Please Hold on till the {"\n"} recruiter gets back to you.</Text>
                        <Button onPress={() => navigation.navigate('home', {
                                screen: 'dashboard', 
                                    params: {screen: 'job'}
                                }
                            )}
                            textStyle={{color: 'white'}}
                            style={[tw`rounded-md my-6 py-2 px-3 `,{backgroundColor: '#24CDE2'}]}
                            text='Go Home'
                        />
                    </View>
                )
            default:
                break;
        }
    }

    const stopPosition = deviceheight * 0.5

    const activateDragIn = () => {
        setEntry(stopPosition)
        return sharedValue.value = withTiming(stopPosition,{duration: 1000, easing: Easing.out(Easing.exp)})
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#081c3c", flex: 1}}>
            <View style={[tw``,{flex: 0.25, paddingHorizontal: 10}]}>
                <View style={[tw`flex-row items-center my-auto`, {flex:0.5}]}>
                    <View style={tw`h-5 w-10 bg-white mr-7`} />
                    <View>
                        <Text style={tw`text-white text-base`}>{job.job_title}</Text>
                        <Text style={tw`text-white text-base`}>{job.salary}</Text>
                        <Text style={tw`text-white text-sm`}>{job.location}</Text>
                        <Button 
                            onPress={() => activateDragIn()} 
                            style={tw`pt-2`} textStyle={{ textAlign: 'left', color: 'white' }}
                            text='See more details' 
                        />
                    </View>
                </View>
            </View>

            <View style={{ height: 2, backgroundColor: 'white' }} />

            <View style={{flex: 1}}>
                <Text style={tw`px-2 pt-3 text-base text-white`}>{steps === 0 || steps > 2 ? null : `${steps} of 2 `}</Text>
                <ApplicationProcess index={steps}/>
            </View>
            <DragAble 
                bgColor="white"
                entry={entry}
                setEntry={setEntry}
                sharedValue={entry}
                height={600}
                minLevel={stopPosition}
                dh={deviceheight}
                children={<View>
                    <DragBar bgColor='black'/>
                <View style={tw`px-2`}>
                    <Text>Details</Text>
                    {/* {job !== undefined ? */}
                    <Text>
                        {job.description_content} 
                    </Text>
                    {/* // : null} */}
                </View>
                </View>}
            />
        </SafeAreaView>
    )
}

export default Application