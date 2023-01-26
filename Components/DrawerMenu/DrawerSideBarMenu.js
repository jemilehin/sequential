import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'tailwind-react-native-classnames'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    Modal,
    Pressable
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Button from '../Button/Button';

const ModalComp = (props) => {
    return(<Modal
        {...props}
        >
        <View style={tw`m-auto bg-white rounded-2xl p-3`}>
          <View style={tw`mx-auto`}>
            <Text style={tw`text-center`}>Are you sure you want to logout</Text>
            <View style={tw`flex-row my-3`}>
            <Pressable
              style={[tw`w-1/3 mx-auto py-1`,{backgroundColor: 'red'}]}
              onPress={props.cancel}>
              <Text style={tw`text-center text-white`}>Cancle</Text>
            </Pressable>
            <Pressable
              style={[tw`w-1/3 mx-auto py-1`,{backgroundColor: '#24CDE2'}]}
              onPress={() => props.doLogout()}>
              <Text style={tw`text-center`}>Ok</Text>
            </Pressable>

            </View>
          </View>
        </View>
      </Modal>)
}

const SidebarMenu = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

    const doLogout = async () => {
        await AsyncStorage.multiRemove(['tokens','userInfo'])
        props.navigation.navigate('signin')
    }

    const menuList = [
        {label:'Home', route: 'job'},{label:'Edit CV', route: 'uploadcv'},{label: 'Upload CV', route: 'uploadcv'}, 
        {label: 'Notification', route:'notification'}
    ]

    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor: '#24CDE2'}}>
            {/*Top Large Image */}
            <ModalComp
                visible={modalVisible}
                transparent={true}
                cancel={() => setModalVisible(!modalVisible)}
                doLogout={doLogout}
            />
            <DrawerContentScrollView style={tw`my-auto`} {...props}>
                {/* <DrawerItemList {...props} /> */}
                {menuList.map((menu,index) => (<DrawerItem
                    label={menu.label}
                    labelStyle={{color:'white'}}
                    key={index}
                    onPress={()=>props.navigation.navigate(menu.route)}
                />))}
                <DrawerItem
                    label='Logout'
                    labelStyle={{color:'white'}}
                    onPress={() => setModalVisible(!modalVisible)}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

export default SidebarMenu;