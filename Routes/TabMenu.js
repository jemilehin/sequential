import { createBottomTabNavigator   } from '@react-navigation/bottom-tabs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Profile from '../Screens/JobSeekerProfile/Profile';
import { JobStackScreens, LikedStackScreens, NotificationsStackScreens , ProfileStackScreen } from './StackScreens';

const Tab = createBottomTabNavigator();

const TabMenu = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarStyle: { position: 'absolute', height: 60, backgroundColor: "#081c3c"},
                
            }}
            tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="job"
                component={JobStackScreens}
                options={{
                    tabBarLabel: 'Job',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicon name="briefcase-outline" size={23} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="notification" 
                component={NotificationsStackScreens}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicon name="notifications-outline" size={23} color={color}  />
                    ),
                }}
            />
            <Tab.Screen 
                name="like" 
                component={LikedStackScreens}
                options={{
                    tabBarLabel: 'Liked',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicon name="heart-outline" size={23} color={color}  />
                    ),
                }}
            />
            <Tab.Screen 
                name="profile" 
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicon name="person-circle-outline" size={23} color={color}  />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabMenu