import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Details() {
  const {item}=useLocalSearchParams()
  const parsedItem=JSON.parse(item as string)

  return (
    <>
    <View>
      <Text>{parsedItem.title}</Text>
      <Text>{parsedItem.description}</Text>
    </View>
    </>
  );
}
