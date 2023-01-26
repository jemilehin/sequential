import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNav from './Routes/DrawerNav';
import ViewNotification from './Screens/Notification/ViewNotification';
import Notifications from './Screens/Notification/Notifications';
import SignIn from './Screens/Onboarding/SignIn';
import SignUp from './Screens/Onboarding/SignUp';
import TabMenu from './Routes/TabMenu';
import { JobStackScreens } from './Routes/StackScreens';
import Application from './Screens/Jobs/Application';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown:false}}
        initialRouteName='signin'
      >
        <Stack.Screen name='signin' component={SignIn}/>
        <Stack.Screen name='signup' component={SignUp}/>
        <Stack.Screen name='apply' component={Application} />
        <Stack.Screen name='home'>
          {
            () => (
              <DrawerNav />
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
