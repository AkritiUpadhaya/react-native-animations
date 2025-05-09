import { Stack } from 'expo-router';

import { View, Button } from 'react-native';
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

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
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
      <Button title="Animate" onPress={Animation}/>
        <Animated.View 
        style={{
            width: width,
            height: height,
            backgroundColor: backgroundColor,
        }}
        ></Animated.View>
        
      </View>
    </>
  );
}
