import React, { Component, useEffect, useState } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler, withTiming, Easing
} from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView, ScrollView, Dimensions, Text, TouchableOpacity, View, Alert } from "react-native";
import { SearchCard } from "../../Components/Cards/SearchCard";
import Container from "../../Components/Globals/Container";
import { TopItemMenu } from "../../Components/Globals/Menu";
import TabletCard from "../../Components/Cards/TabletCard";
import ViewJobDragIn from "./ViewJobDragIn";
import JobsCardItem from "../../Components/Cards/JobsCard";
import { PanGestureHandler } from "react-native-gesture-handler";
import ApiRequestInstance from "../../BASE_API_URL/ApiCall_Instance";

const data = [
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: '5 days ago', like: false
    },
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: '5 days ago', like: false
    },
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: '5 days ago', like: false
    },
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: '5 days ago', like: false
    },
]

const filterDataTypes = [
    {
        filterName: 'Date Posted'
    },
    {
        filterName: 'Job Type'
    },
    {
        filterName: 'Application Method'
    },
    {
        filterName: 'Application Method'
    },
]

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

function Jobs({ navigation }) {
    const [searchText, setSearchText] = useState('')
    const [state, setState] = useState({ like: false, componentOpen: false })
    const [jobs, setJobs] = useState([])
    const [job,setJob] =useState({})


    const startPosition = useSharedValue(deviceheight)

    const animateIn = (job) => {
        setState({ ...state, componentOpen: true })
        setJob(job)
        return startPosition.value = withTiming(10, { duration: 1000, easing: Easing.out(Easing.exp) })
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            ApiRequestInstance('get', null, callback, errcallback, 'jobs/job-seeker-view/', null, null)
        })
    }, [])

    const callback = (res) => {
        // console.log(res.data)

        setJobs(res.data)
    }

    const errcallback = (err) => {
        let errMsg
        if (err.data.hasOwnProperty('error')) {
            for (const key in err.data.error) {
                errMsg = err.data.error[key]
            }
        } else { errMsg = err.data.message }

        Alert.alert('Error', errMsg , [], { cancelable: true })
    }

    const animatedStyle = useAnimatedStyle(
        () => {
            return {
                transform: [{ translateY: withSpring(startPosition.value) }],
            };
        }
    )

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateY = startPosition.value;
        },
        onActive: (event, context) => {
            const newValue = context.translateY + event.translationY
            if (newValue > 10) {
                startPosition.value = context.translateY + event.translationY * 2
            }
        },
        onEnd: (event, context) => {
            if (startPosition.value < 10) {
                startPosition.value = withTiming(140, { duration: 500, easing: Easing.out(Easing.exp) })
            } else if (startPosition.value >= 100) {
                startPosition.value = withTiming(deviceheight, { duration: 500, easing: Easing.out(Easing.exp) })
            }
        }
    });

    const setJobFavourite = (index) => {
        setJobs(jobs.map((job, i) => {
            if (i === index) {
                return { ...job, like: !job.like }
            } else {
                return job
            }
        }))
    }

    return (
        <Container element={SafeAreaView}>
            <TopItemMenu drawer={navigation} />
            <SearchCard setSearch={setSearchText} />
            <View style={tw`flex-row my-4`}>
                <Icon name="filter" size={20} color={'white'} />
                <ScrollView horizontal={true} >
                    {
                        filterDataTypes.map((item, int) => (
                            <View style={tw`mx-1`}>
                                <TabletCard
                                    index={int}
                                    icon={<Icon name="caret-down" />}
                                    style={{ marginVertical: 'auto' }}
                                    element={Text}
                                    children={item.filterName}
                                /></View>))
                    }
                </ScrollView>
            </View>
            <View>
                <ScrollView contentContainerStyle={{ paddingBottom: '67%' }}>
                    {jobs.length > 0 ? jobs.map((item, index) => (

                        <JobsCardItem
                            index={index}
                            role={item.job_title}
                            like={item.like}
                            company={item.company}
                            state={item.location}
                            country={item.country}
                            workType={item.job_type}
                            salaryRange={item.salary}
                            date={item.date}
                            action={() => animateIn(item)}
                            favourite={() => setJobFavourite(index)}
                        />)) :
                        <Text>No jobs listed</Text>}
                </ScrollView></View>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View
                    style={[tw`absolute`,
                        animatedStyle,
                    {
                        width: deviceWidth, backgroundColor: "#081c3c",
                    },
                    ]}
                >

                    <View><View style={[tw`mx-auto my-3 rounded-lg`, { height: 5, width: "15%", backgroundColor: 'white' }]}></View></View>
                    <ViewJobDragIn job={job} deviceHeight={deviceheight} parentStartPostion={startPosition} navigation={navigation} height={deviceheight} margin={10} />
                </Animated.View>
            </PanGestureHandler>
        </Container>

    )
} ``

export default Jobs