import React, {useState} from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const InputPanel = (props) => {
    const [InputText, setInputText] = useState('')
    return(
        <View>
            <View style= {styles.inputContainer}>
                 <TextInput
                 onChangeText= {(Value) => setInputText (Value)}
                placeholder="Suchen..."
                
            />
            </View>
            <TouchableOpacity style= {styles.buttonContainer}>
                <Text 
                style={{textAlign:'center', color: '#FFE8DC', fontWeight: 'bold'}}
                onPress={()=> {
                    props.sendText(InputText);
                }}
                >Sec</Text>
            </TouchableOpacity>
        </View>
        
    )
}
export default InputPanel;

const styles = StyleSheet.create({
    inputContainer : {
        backgroundColor: '#FFE8DC',
        padding:10,
        margin: 10,
        borderColor: '#9D3802',
        borderWidth:1,
        borderRadius:10,
    },
    buttonContainer : {
        backgroundColor: '#341809',
        padding:10,
        margin: 10,
        borderColor: '#9D3802',
        borderWidth:1,
        borderRadius:10,
    },


})