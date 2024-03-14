import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabsNavigation from './components/TabsNavigation';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

