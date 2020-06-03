import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us' 
    }

    render() {
        return (
            <ScrollView>
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
            </ScrollView>
            
        )};
    }

export default Contact;