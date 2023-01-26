import { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, View, Text } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Container from "../../Components/Globals/Container"
import Header from "../../Components/Header"
import { TopItemMenu } from "../../Components/Globals/Menu"
import UnorderedListItem from "../../Components/ListViews/UnorderedListItem"
import moment from "moment/moment"
import DateCard from "../../Components/Cards/DateCards"
import Button from "../../Components/Button/Button"
import { TouchableOpacity } from "react-native-gesture-handler"


const instruction = [
    'Invitation to interview for the role of Business Manager at ABC',
    'Invitation to interview for the role of Business Manager at ABC',
    'Invitation to interview for the role of Business Manager at ABC',
    'Invitation to interview for the role of Business Manager at ABC',
]

const time = [
    '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm'
]

const ViewNotification = ({ navigation, route }) => {
    const [message, setMessage] = useState()
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null)
    const date = moment
    let daysInMonth = date().daysInMonth()
    let currentMonth = date().month()
    let currentYear = date().year()
    let startDateCount = 1; 

    const DaysInMonth = () => {
        let dateArr = []; 
        for(let m = startDateCount; m < daysInMonth; m++) {
            dateArr.push(date([currentYear, currentMonth, m]).format('Do MMMM, YYYY'));
        }
        return dateArr
    }
    useEffect(() => {
        setMessage(route.params.message.message)
    }, [])

    const SubmitInterview = () => {
        if(selectedDate && selectedTime){
            navigation.navigate('interviewdone')
        }else alert('Select date and time')
    }

    const SelecteDate = (date) => setSelectedDate(date)
    const SelectTime = (time) => setSelectedTime(time)

    return (
        <Container element={SafeAreaView}>
            <TopItemMenu isIcon={true} nav={() => navigation.goBack()} drawer={navigation} />
            <Header size={30} title={message} />
            <ScrollView contentContainerStyle={{paddingBottom: '20%' }}>
                <View style={tw`my-3`}>
                    <View style={tw`mb-3`}>
                        <Text style={tw`text-white text-base`}>Instruction:</Text>
                    </View>
                    <View style={tw`px-7`}>
                        {
                            instruction.map((item, index) => (
                                <UnorderedListItem
                                    index={index}
                                    text={item}
                                    bgcolor='#24CDE2'
                                />
                            ))
                        }
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={tw`text-sm text-white`}>
                            Etiam sapien orci, porta vitae commodo sed, sodales non turpis.
                            Aenean in tortor nisi. Aliquam sit amet quam at metus tincidunt
                            rutrum viverra scelerisque justo. Nam hendrerit non ex vehicula
                            pellentesque.
                        </Text>
                    </View>
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-sm text-white`}>
                            Etiam sapien orci, porta vitae commodo sed, sodales non turpis.
                            Aenean in tortor nisi. Aliquam sit amet quam at metus tincidunt
                            rutrum viverra scelerisque justo. Nam hendrerit non ex vehicula
                            pellentesque.
                        </Text>
                    </View>
                </View>
                <View style={tw`mt-3`}>
                    <Text style={tw`text-base text-white my-3`}>Slide to pick from available date</Text>
                <ScrollView horizontal={true}>
                    {
                    DaysInMonth().map((item,index) => (
                        <TouchableOpacity onPress={() => SelecteDate(item)}>
                            <DateCard
                                index={index}
                                date={item}
                                bgcolor={selectedTime !== item ? '#155e75' : '#a5f3fc'}
                                textStyle={{color: 'white'}}
                            />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                </View>
                <View>
                    <Text style={tw`text-base text-white my-3`}>Slide to pick from available time</Text>
                <ScrollView horizontal={true}>
                    {
                    time.map((item,index) => (
                        <TouchableOpacity onPress={() => SelectTime(item)}>
                            <DateCard
                                index={index}
                                date={item}
                                bgcolor={selectedTime !== item ? '#155e75' : '#a5f3fc'}
                                textStyle={{color: 'white'}}
                            />
                        </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                </View>
                <View style={tw`my-7`}>
                    <Button
                        onPress={() => SubmitInterview()}
                        style={[tw`py-3 w-10/12 mx-auto`,{
                            borderRadius: 10, backgroundColor: selectedDate && selectedTime ? 'white' : '#a5f3fc'
                        }]}
                        text='Continue'
                    />
                </View>
            </ScrollView>
        </Container>
    )
}

export default ViewNotification