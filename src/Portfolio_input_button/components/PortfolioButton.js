import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const Button = (my_props) => {
    return(
        <TouchableOpacity 
        style={[myStyles.buttonContainer, {backgroundColor: my_props.color}]}
        onPress={my_props.sayingHallo}>
            <Text style={[myStyles.buttonText, {color: [my_props.textColor] ? my_props.textColor: 'black'}]} > {my_props.banner}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const myStyles = StyleSheet.create({
    buttonContainer:{
        // backgroundColor: '#FE9F6D',
        padding: 15,
        margin:10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color:'black', fontWeight:'bold', fontSize: 20
    }
})