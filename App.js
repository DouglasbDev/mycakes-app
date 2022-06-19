import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import DetalhesProduto from './src/pages/Produtos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{
                headerShown:false
              }}
            />
             <Stack.Screen
              name='Home'
              component={Home}
              options={{
                title:' Lista de Produtos',
                headerStyle:{
                  backgroundColor: '#00d',
                },
                headerTintColor:'#fff'
              }}
            />
            <Stack.Screen
              name='Produto'
              component={DetalhesProduto}
              options={{
                title:'Detalhes do Produto',
                headerStyle:{
                  backgroundColor: '#00d',
                },
                headerTintColor:'#fff'
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>   
  );
}
