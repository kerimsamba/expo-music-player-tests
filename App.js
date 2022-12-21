import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SoundPlayer from './components/SoundPlayer';

export default function App() {

  let soundFile = "/assets/drumloop.wav";

  return (
    <View style={styles.container}>
      <SoundPlayer bpm={85} soundFile={require('./assets/drumloop.wav')} />
    </View>
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
