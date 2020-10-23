import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const second = (props) => {
    const userNumber = props.route.params.username
    

    return (
        <SafeAreaView>
            <View>
                <Text> Second</Text>
                <Text> {userNumber}</Text>
                <Button
                    title='back!'
                    onPress={()=>{props.navigation.goBack()}}
                />
            </View>
        </SafeAreaView>
    )
}

export default second;