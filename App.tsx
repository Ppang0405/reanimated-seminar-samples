import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
import SimpleBottomSheet from './src/SimpleBottomSheet';


export default function App() {
  return (
    <TapGestureHandler>
      <RotationGestureHandler>
        <SimpleBottomSheet />
      </RotationGestureHandler>
    </TapGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
