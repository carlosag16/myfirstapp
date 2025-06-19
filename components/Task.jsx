import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Task({ text, initialCompleted }) {
  const [completed, setCompleted] = useState(initialCompleted);
  return (
    <View style={style.rowContainer}>
      <Pressable onPress={() => setCompleted(!completed)}>
        <Ionicons
          name="checkmark-circle"
          size={32}
          color={completed ? colors.primary : colors.secondary}
        />
      </Pressable>
      <Text>{text}</Text>
      {/* <Pressable
        onPress={() => setShow(isShow)}
        style={({ pressed }) => [
          style.deleteButton,
          { backgroundColor: pressed ? '#900' : colors.error },
        ]}>
        <Text style={style.deleteButton}>Apagar</Text>
      </Pressable> */}
    </View>
  );
}

const style = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  deleteText: {
    fontcolor: '#fff',
    fontWeight: 'bold',
  },

  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 'auto',
  },
});
