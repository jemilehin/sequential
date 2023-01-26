import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { View,StatusBar } from 'react-native';


export function TopItemMenu(props) {

  const OpenDrawer = () => {
    props.drawer.openDrawer()
  }
    
    return(
        <View style={[tw`flex-row ${props.isIcon === undefined ? 'justify-end' : 'justify-between'} mb-3 `,{marginTop: StatusBar.currentHeight}]}>
          {props.isIcon === undefined ? null : <Ionicon name='chevron-back' size={30} color="white" onPress={props.nav} />}
            <View>
              <Ionicon name='menu' size={30} color="white" onPress={() => OpenDrawer()} />
            </View>
        </View>
    )
}