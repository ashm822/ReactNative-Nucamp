import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us' 
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card 
                    title='Contact Information'
                    wrapperStyle={{margin: 20}}>                   
                    <Text Style={{mb: 10}}>
                        1 Nucamp way {"\n"}
                        Seattle, WA 98001 {"\n"}
                        USA {"\n"}
                        {"\n"}
                        Phone: 1-206-555-1234 {"\n"}
                        Email: Campsites@nucamp.com
                    </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
            
        )};
    }

export default Contact;