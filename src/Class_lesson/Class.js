import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter:0,
            say:100,
        }
    }

    componentDidMount(){
        console.log('Compononent Did Mount!')
    }
    render() {
        return(
            <SafeAreaView>
                <View>
                    <Text
                        style={{fontSize:50, textAlign:'center'}}>{this.state.say}</Text>
                            <Text
                        style={{fontSize:250, textAlign:'center'}}>{this.state.counter}</Text>
                    <Button
                        title="up"
                         onPress= {() => this.setState (
                            {say: this.state.say +1,
                            counter: this.state.counter +1 }
                         )} />
                            <Button
                        title="Null"
                         onPress= {() => this.setState (
                            {say: this.state.say =0,
                            counter: this.state.counter =0 })} />
                </View>
            </SafeAreaView>
        )
    }
}