import { useState } from "react"
import { Modal, Text, TextInput, View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Button from "../Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ModalAddToCV = (props) => {
    const [textInput,setInputs] = useState({});


    const SwitchInputCartegory = ({type}) => {
        switch (type) {
            case "Education":
                return(
                    <View >
                        <Text style={tw`text-center text-lg`}>Add Education</Text>
                        <View style={tw`flex-row justify-between items-center my-2`}>
                            <Text style={tw`text-left text-xs`}>Institution</Text>
                            <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                defaultValue={textInput!==undefined? textInput.institution:null}
                                onEndEditing={e => setInputs({...textInput, institution: e.nativeEvent.text})}
                            />
                        </View>
                        
                        <View style={tw`flex-row justify-between items-center my-2`}>
                            <Text style={tw`text-left text-xs`}>Course of study</Text>
                            <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                defaultValue={textInput!==undefined? textInput.course_study:null}
                                onEndEditing={e => setInputs({...textInput, course_study: e.nativeEvent.text})}
                            />
                        </View>

                        <View style={tw`flex-row justify-between items-center my-2`}>
                            <Text style={tw`text-left text-xs`}>Entry year</Text>
                            <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                defaultValue={textInput!==undefined? textInput.entry_year:null}
                                onEndEditing={e => setInputs({...textInput, entry_year: e.nativeEvent.text})}
                            />
                        </View>

                        <View style={tw`flex-row justify-between items-center my-2`}>
                            <Text style={tw`text-left text-xs`}>Graduation Year</Text>
                            <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]}
                                 defaultValue={textInput!==undefined? textInput.grad_year:null}
                                onEndEditing={e => setInputs({...textInput, grad_year: e.nativeEvent.text})}
                            />
                        </View>
                    </View>
                )
                case "Experience":
                    return(
                        <View >
                            <Text style={tw`text-center text-lg`}>Add Experience</Text>
                            <View style={tw`flex-row justify-between items-center my-2`}>
                                <Text style={tw`text-left text-xs`}>Company Name</Text>             
                                <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                    defaultValue={textInput!==undefined? textInput.organization:null}
                                    onEndEditing={e => setInputs({...textInput, organization: e.nativeEvent.text})}
                                />
                            </View>
                            
                            <View style={tw`flex-row justify-between items-center my-2`}>
                                <Text style={tw`text-left text-xs`}>Start Date</Text>
                                <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                    defaultValue={textInput!==undefined? textInput.start_date:null}
                                    onEndEditing={e => setInputs({...textInput, start_date: e.nativeEvent.text})}
                                    
                                />
                            </View>
    
                            <View style={tw`flex-row justify-between items-center my-2`}>
                                <Text style={tw`text-left text-xs`}>End Date</Text>
                                <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                    defaultValue={textInput!==undefined? textInput.end_entry:null}
                                    onEndEditing={e => setInputs({...textInput,end_entry: e.nativeEvent.text})}
                                />
                            </View>
    
                            <View style={tw`flex-row justify-between items-center my-2`}>
                                <Text style={tw`text-left text-xs`}>Responsibilities</Text>
                                <TextInput  style={[tw`w-3/5 h-10 px-2`,{backgroundColor: '#E9FAFC', borderRadius: 5}]} 
                                    defaultValue={textInput!==undefined? textInput.res:null}
                                    onEndEditing={e => setInputs({...textInput, res: e.nativeEvent.text})}
                                />
                            </View>
                        </View>
                    )
            default:
                break;
        }
    }

    

    const Container = () => {
        return(
            <View style={tw`my-auto mx-auto bg-white px-2 rounded-lg`}>
                <SwitchInputCartegory type={props.type}/>
                <Button
                    style={[tw`px-3 py-2 my-5 w-1/2 mx-auto rounded-xl`,{backgroundColor: '#a5f3fc'}]}
                    text='Save' onPress={()=> onSave('button',null)}
                    textStyle={{color: 'black'}}
                />
            </View>
        )
    }


    const onSave = () => {
            props.item.push(textInput)
            setTimeout(()=>{
                setInputs({})
            },500)
            clearTimeout(500)
            props.setVisible(false)
    }

    return(
        <View {...props}
            // transparent={true}
            // visible={props.visible}: 
            style={[tw`h-3/6 absolute w-11/12 z-10`,{top: '25%', left: '9%'}]}
        >
            <Container />
        </View>
    )
}

export default ModalAddToCV