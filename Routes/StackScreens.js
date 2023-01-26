import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewNotification from '../Screens/Notification/ViewNotification';
import Jobs from '../Screens/Jobs/Jobs';
import Notifications from '../Screens/Notification/Notifications';
import InterviewDone from '../Screens/Notification/InterviewDone';
import Liked from '../Screens/Liked';
import Profile from '../Screens/JobSeekerProfile/Profile';
import CVSetUp from '../Screens/JobDocs/CVSetUp';
import EditProfile from '../Screens/JobSeekerProfile/EditProfile';

const Stack = createNativeStackNavigator()

const JobStackScreens = () => {

    return(
        <Stack.Navigator initialRouteName='jobs' screenOptions={{headerShown:false}}>
            <Stack.Screen name='jobs' component={Jobs}/>
            <Stack.Screen name='setupcv' component={CVSetUp}/>
        </Stack.Navigator>
    )
}

const NotificationsStackScreens = () => {
    return(
        <Stack.Navigator initialRouteName='notifications' screenOptions={{headerShown:false}}>
            <Stack.Screen name='notifications' component={Notifications} />
            <Stack.Screen name='viewmessage' component={ViewNotification}/>
            <Stack.Screen name='interviewdone' component={InterviewDone}/>
        </Stack.Navigator>
    )
}

const LikedStackScreens = () => {
    return(
        <Stack.Navigator initialRouteName='likes' screenOptions={{headerShown:false}}>
            <Stack.Screen name='likes' component={Liked} />
        </Stack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return(
        <Stack.Navigator initialRouteName='profile' screenOptions={{headerShown:false}}>
            <Stack.Screen name='profile' component={Profile} />
            <Stack.Screen name='editprofile' component={EditProfile} />
        </Stack.Navigator>
    )
}

export {JobStackScreens , NotificationsStackScreens , LikedStackScreens , ProfileStackScreen }