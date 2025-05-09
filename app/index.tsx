import { Stack } from 'expo-router';

import { View, Button } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

export default function Home() {
  const width= useSharedValue(100)
  const height= useSharedValue(100)

  const Animation= () => {
    height.value= Math.random()*300
    width.value= Math.random()*300
  }
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
        <Animated.View 
        style={{
            width: width,
            height: height,
            backgroundColor: 'red',
        }}
        ></Animated.View>
        <Button title="Animate" onPress={Animation}/>
      </View>
    </>
  );
}
