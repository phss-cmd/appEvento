import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Home.js";
import Pesquisa from "./Pesquisa.js";
import Evento from "./Evento";

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return (
        <Tab.Navigator initialRouteName="Home" >
            
            <Tab.Screen
                name="evento"
                component={Pesquisa}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="party-popper" color={color} size={size} />
                }}
            />

        <Tab.Screen
                name="Home"
                
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                }}
            />
            
            <Tab.Screen
                name="Info"
                component={Evento}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="information-variant" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}