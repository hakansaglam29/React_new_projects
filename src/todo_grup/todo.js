import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
} from 'react-native';
const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const setDesc = (val) => {setText(val)};
  const submitHandler = (a) => {
    setTodos(() => {
      return [...todos, {desc: a, id: todos.length}];
      });
    };

  const delButton = (index) => {
    return (
      <TouchableOpacity
        onPress={() => {
                setTodos((order) => {
                    order.splice(index,1)
                    var i;
                    for (i = 0; i < order.length; i++) {
                        order[i].id = i;
                        }
                   return  [...order];
                })
                setCounter(todos.length)
            }}
        style={{
          backgroundColor: '#C03307',
          borderRadius: 5,
          width: 60,
          height: 30,
          justifyContent: 'center',
            }}>
        <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>
          {'Delete'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.header}>
          <Text style={styles.headerText1}>TODO</Text>
          <Text style={styles.headerText2}>{counter}</Text>
        </View>
        <FlatList
          style={styles.main}
          data={todos}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={(data) => (
            <View style={styles.listItem}>
              <Text style={styles.listText}>{data.item.desc}</Text>
              <>{delButton(data.item.id)}</>
            </View>
          )}
        />
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            onChangeText={(val) => setDesc(val)}
            placeholder={'Enter something..'}
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              submitHandler(text);
              setText('');
              setCounter(todos.length == undefined ? 0 : todos.length + 1);
            }}>
            <Text style={styles.buttonText}>ADD TODO</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36474F',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 80,
    padding: 5,
  },
  headerText1: {
    color: '#FFA827',
    fontSize: 33,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerText2: {
    color: '#FFA827',
    fontSize: 30,
    marginRight:10,
  },
  main: {
    flex: 5,
  },
  input: {
    flex: 2,
    backgroundColor: '#B0BFC6',
    margin: 10,
    marginVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 70,
    maxHeight: 170,
  },
  inputText: {
    backgroundColor: '#EBEFF2',
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10,
    alignSelf: 'stretch',
    height:40,
  },
  button: {
    backgroundColor: '#546F7A',
    padding: 20,
    marginBottom: 5,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FCFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#546F7A',
    margin: 10,
    alignItems: 'center',
    paddingRight: 15,
    borderRadius: 10,
  },
  listText: {
    backgroundColor: '#546F7A',
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 8,
    color: '#FCFFFF',
    fontSize: 17,
    borderRadius: 10,
  },
});