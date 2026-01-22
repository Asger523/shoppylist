import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/ionicons';

// Import screens
import HomeScreen from './app/screens/home/home.screen';
import StoresScreen from './app/screens/stores/stores.screen';
import ShoppingListScreen from './app/screens/shopping-list/shopping-list.screen';

const Tab = createBottomTabNavigator();

// Tab bar icon components
const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="home" size={size} color={color} />
);

const StoresIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="storefront" size={size} color={color} />
);

const ShoppingListIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="cart" size={size} color={color} />
);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#4CAF50',
            tabBarInactiveTintColor: '#cccccc',
            tabBarStyle: {
              backgroundColor: '#2b2b2b',
              borderTopColor: '#444444',
            },
            headerStyle: {
              backgroundColor: '#2b2b2b',
            },
            headerTintColor: '#ffffff',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: HomeIcon,
            }}
          />
          <Tab.Screen
            name="Stores"
            component={StoresScreen}
            options={{
              tabBarIcon: StoresIcon,
            }}
          />
          <Tab.Screen
            name="Shopping List"
            component={ShoppingListScreen}
            options={{
              tabBarIcon: ShoppingListIcon,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
