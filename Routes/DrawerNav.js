import { createDrawerNavigator } from "@react-navigation/drawer"
import SidebarMenu from "../Components/DrawerMenu/DrawerSideBarMenu"
import UploadCV from "../Screens/JobDocs/UploadCV"
// import CvUpload from "../Screens/MyCV"
import TabMenu from "./TabMenu"


const Drawer = createDrawerNavigator()

const DrawerNav = (props) => {
    return(
        <Drawer.Navigator initialRouteName="dashboard" screenOptions={{headerShown:false}}
            drawerContent={(props) => <SidebarMenu {...props}/>}
        >
            <Drawer.Screen name="dashboard" component={TabMenu}/>
            <Drawer.Screen options={{drawerLabel: 'Upload CV'}} name="uploadcv" component={UploadCV}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav