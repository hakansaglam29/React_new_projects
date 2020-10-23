import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, TextInput} from 'react-native';

const number = 55

const first = (props) => {
    const [text, setText] = useState('');
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize:40}}> First</Text>
                <Text style={{fontSize:40}}> {number}</Text>
                <View>
                    <TextInput
                    placeholder='Type something to do...'
                    onChangeText={value => setText(value)}
                    value={text}
                    />
                </View>
                <Button
                    title='go!'
                    onPress={()=> {props.navigation.navigate('Secondpage', {username: text})}}
                />
            </View>
        </SafeAreaView>
    )
}

export default first;