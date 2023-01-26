import React,{Component} from "react";
import { SafeAreaView, Text } from "react-native";
import Container from "../Components/Globals/Container";

class CvUpload extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container element={SafeAreaView}>
                <Text>Hello CvUpload</Text>
            </Container>
        )
    }
}

export default CvUpload