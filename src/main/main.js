import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const Main = (props) => {
    const [userData, setUserData] = useState([]);
    // const fetchData_Then = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(({ data }) => {
    //         setUserData(data);
    //     })
    // }

    // https://random-data-api.com/api/restaurant/random_restaurant


    // const fetchData_Await = async () => {
    //     const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     setUserData(data);
    //     }

    return (
        <SafeAreaView>
            <View>
               <TouchableOpacity
            </View>

        </SafeAreaView>
    );
}
export default Main;