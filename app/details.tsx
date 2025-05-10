import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';

export default function Details() {
  const {item}=useLocalSearchParams()
  const parsedItem=JSON.parse(item as string)

  return (
    <>
    <View>
      <Animated.Text entering={FadeInLeft.duration(500).delay(500)}>{parsedItem.title}</Animated.Text>
      <Animated.Text entering={FadeInLeft.duration(500).delay(700)}>{parsedItem.description}</Animated.Text>
    </View>
    </>
  );
}
