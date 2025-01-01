import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "../global.css";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import RestaurantScreen from './RestaurantScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
