import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Main } from './src/components/Main'

export default function App() {
  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
  );
}