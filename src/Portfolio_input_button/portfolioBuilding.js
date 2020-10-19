import React, {useState} from 'react';
import {
    SafeAreaView,
    View, 
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

import MyButton from './components/PortfolioButton';
import InputPanel from './components/InputPanel';


export default Portfolio = () => {
    const sayHallo = () => {
        alert('Hello there!😉')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFE8DC' }}>
            <View style={{flex:0.35, justifyContent:'space-around', flexDirection: 'row', alignItems: 'center',  }}>
                <Text style={myStyles.headerText} >Hallo Welt!</Text>
                <Text style={myStyles.headerText}>0</Text>
            </View>
            <MyButton 
                sayingHallo = {sayHallo}
                banner='Drück mich!' 
                color='#FE9F6D'
                textColor='#341809'
                />
            <MyButton 
                sayingHallo = {()=> {
                    Alert.alert('Warum klicken Sie mir pünklich nicht?')
                }}
                banner='Drück mich bitte!' 
                color='#FC600A'
                textColor='black'
                />
            <MyButton 
                banner='Drück mich und sag Tschüss!' 
                color='#9D3802'
                textColor='#FFE8DC'/>
            <InputPanel
                sendText= {myValue => console.log(myValue)}
                />
        </SafeAreaView>
)}

const myStyles = StyleSheet.create({
    headerText: {
        fontSize: 50, alignSelf:'center', fontWeight:'700',
    }
})