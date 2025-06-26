import { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Task from '../components/Task';
import { colors } from '../constants/colors';

const inicialTasks = [
  { id: 2, completed: false, text: 'Fazer café' },
  { id: 1, completed: false, text: 'Estudar React Native' },
  { id: 3, completed: false, text: 'Academia' },
];

export default function ViewBoxesWithColorAndText() {
  const [tasks, setTasks] = useState(inicialTasks);
  const [text, setText] = useState('');

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      completed: false,
      text,
      isShow: true,
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require('../assets/images/checked.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Lista de tarefa </Text>
        </View>

        <View style={styles.viewContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholderTextColor="rgba(0,0,0,0.4)"
            style={styles.input}
            placeholder="Digite sua tarefa"></TextInput>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#000' : '#4a90e2' },
            ]}
            onPress={addTask}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>

        <FlatList
          data={tasks}
          Add
          style={styles.FlatList}
          commentMore
          actions
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              initialCompleted={item.completed}
              text={item.text}
              deleteTask={() => setTasks(tasks.filter((t) => t.id !== item.id))}
            />
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Calibri',
    fontWeight: 600,
    color: colors.primary,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mainContainer: {
    marginTop: 100,
    marginHorizontal: 10,
  },
  FlatList: {
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    elevation: 3, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    width: '70%',
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginLeft: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // backgroundColor: '#4a90e2',
    // paddingVertical: 14,
    // borderRadius: 14,
    // alignItems: 'center',
    // width: '20%',
    // elevation: 4,
    // shadowColor: '#4a90e2',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  viewContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    rowGap: 20,
    // marginVertical: 20,
  },
});
