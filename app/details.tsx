import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, Image } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';

export default function Details() {
  const {item}=useLocalSearchParams()
  const parsedItem=JSON.parse(item as string)

  return (
    <>
    <View>
      <Animated.Image sharedTransitionTag={`image-${parsedItem.id}`}  source={{uri:parsedItem.image}} style={{width:'100%', height:300}}/>
      <Animated.Text entering={FadeInLeft.duration(500).delay(500)}>{parsedItem.title}</Animated.Text>
      <Animated.Text entering={FadeInLeft.duration(500).delay(700)}>{parsedItem.description}</Animated.Text>
    </View>
    </>
  );
}
