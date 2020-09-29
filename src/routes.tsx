import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/index';
import Login from './pages/Login/index';


const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#0B1F34' } }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
};

export default Routes;