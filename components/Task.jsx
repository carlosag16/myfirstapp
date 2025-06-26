import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import { colors } from '../constants/colors';

export default function Task({ text, initialCompleted, deleteTask }) {
  const [completed, setCompleted] = useState(initialCompleted);
  const flingGesture = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(deleteTask);

  return (
    <GestureDetector gesture={flingGesture}>
      <Animated.View style={[style.rowContainer]}>
        <Pressable onPress={() => setCompleted(!completed)}>
          <Ionicons
            name="checkmark-circle"
            size={32}
            color={completed ? colors.primary : colors.secondary}
          />
        </Pressable>
        <Text>{text}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const style = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    elevation: 3, //android
    shadowColor: colors.shadow, //ios
    // shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
  },
  deleteText: {
    fontcolor: '#fff',
    fontWeight: 'bold',
  },
});
