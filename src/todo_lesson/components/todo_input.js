import React, {useState}  from 'react';
import {View,Text, TextInput, TouchableOpacity} from 'react-native';

import { todo_input } from '../styles'

const TodoInput = (props) => {
    const [text, setText] = useState('');
    return(
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput
                placeholder='Type something to do...'
                onChangeText={(value) => setText(value)}
                value={text}/>
            </View>
            <TouchableOpacity 
            style= {todo_input.button}
            onPress={()=> {
                props.onTodoEnter(text);
                setText('');} 
            }>
            
                <Text style= {todo_input.buttonText}>Todo Input</Text>
            </TouchableOpacity>            
        </View>
    )
}

export  {TodoInput};