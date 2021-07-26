import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../telas/Home';
import { SignIn } from '../telas/SignIn';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}