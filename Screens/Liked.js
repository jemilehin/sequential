import React, { Component } from "react";
import tw from 'tailwind-react-native-classnames'
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Container from "../Components/Globals/Container";
import { TopItemMenu } from "../Components/Globals/Menu";
import JobsCardItem from "../Components/Cards/JobsCard";

const data = [
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: 'closed', like: true
    },
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: '5 days ago', like: true
    },
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: '2 days ago', like: true
    },
    {
        role: 'Business Developer', company: 'ABC Limited',
        state: 'Lagos', country: 'Nigeria', worktype: 'Full-time',
        salaryrange: '68,000-70,000/year', date: 'closed', like: true
    },
]


const ListJobItem = (props) => {


    return props.data.map((item, index) => (
        <JobsCardItem
            index={index}
            role={item.role}
            like={item.like}
            company={item.company}
            state={item.state}
            country={item.country}
            workType={item.worktype}
            salaryRange={item.salaryrange}
            date={item.date}
        />))

}

class Liked extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 'likes',
            likes: data,
            applied: data,
        }
    }

    handleTabOption = (selection) => {
        if (selection === 'likes') {
            this.setState({tab: selection})
        }
        else this.setState({tab: selection})
    }

    render() {
        return (
            <Container element={SafeAreaView}>
                <TopItemMenu drawer={this.props.navigation} />
                <View style={tw`flex-row w-full justify-center mb-8`}>
                    <TouchableOpacity
                        style={[tw`py-2 w-1/2 ${this.state.tab === 'likes' ? 'border-b-4' : 'border-b-0'}`, { borderBottomColor: "#0089ce" }]}
                        onPress={() => this.handleTabOption('likes')}>
                        <Text style={{ textAlign: 'center' ,color: this.state.tab === 'likes' ? "#0089ce" : 'white', fontSize: 25}}>Likes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[tw`py-2 w-1/2 ${this.state.tab === 'applied' ? 'border-b-4' : 'border-b-0'}`, { borderBottomColor: "#0089ce" }]}
                        onPress={() => this.handleTabOption('applied')}>
                        <Text style={{ textAlign: 'center',color: this.state.tab === 'applied' ? "#0089ce" : 'white', fontSize: 25 }}>Applied</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <ListJobItem data={this.state.tab !== 'likes' ? this.state.likes : this.state.applied} />
                </ScrollView>
            </Container>
        )
    }
}

export default Liked