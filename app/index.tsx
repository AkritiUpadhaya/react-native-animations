import { Stack } from 'expo-router';

import { View, Button, Text, TextInput } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export default function Home() {
  const width= useSharedValue(100)
  const height= useSharedValue(100)
  const backgroundColor= useSharedValue('blue')

  const Animation= () => {

    const randomHeight= Math.random()*300
    const randomWidth= Math.random()*300
    const randomColor= '#'+Math.floor(Math.random()*16777215).toString(16)

    width.value= withTiming(randomWidth)
    height.value= withSpring(randomHeight)
    backgroundColor.value= withTiming(randomColor, {duration:2000})
  }

  const AnimatedStyle=useAnimatedStyle(()=>{
    return {
        width: width.value,
        height: height.value,
        backgroundColor: backgroundColor.value,
    }
  })

  const AnimatedInputStyle=useAnimatedStyle(()=>{
    return {
      backgroundColor: backgroundColor.value,
    }
   
  })
  const AnimatedInput= Animated.createAnimatedComponent(TextInput)
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
      <Button title="Animate" onPress={Animation}/>
      <AnimatedInput style={[AnimatedInputStyle, {width: 200, height: 40, marginBottom:10}]} />
        <Animated.View 
        style={AnimatedStyle}
        ></Animated.View>
       
      </View>
    </>
  );
}
