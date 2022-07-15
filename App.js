// In App.js in a new project

import * as React from 'react';
import { StyleSheet, View, Text, Button, DrawerLayoutAndroidComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2B2E33'}}>
      <Text style={{fontSize: 28, color:'white'}}>Welcome</Text>
      <Text style={{fontSize: 21, color:'white'}}>to</Text>
      <Text style={{fontSize: 26, color:'white'}}>Home Screen Interface</Text>
      <Text style={{marginTop: 35, marginBottom: 5, fontSize: 18, color:'white'}}>Head to</Text>
      <Button
        title="About Us"
        color='green'
        onPress={() => navigation.navigate('About')}
        />
        <Text style={{marginTop: 10, fontSize: 24, color:'white'}}>OR</Text>
        <Text style={{marginTop: 10, marginBottom: 5, fontSize: 18, color:'white'}}>Head to</Text>
      <Button
        title="Contact Us"
        color='blue'
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}
function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2B2E33'}}>
      <Text style={{marginVertical: 15, fontSize: 30, color:'white'}}>Contact Us</Text>
      <Text style={{fontSize: 18, color:'white'}}>Email me:</Text>
      <Text style={{fontSize: 18, color:'blue',}}>muhammadabeeransari@gmail.com</Text>
      <Text style={{marginTop: 7, fontSize: 18, color:'white'}}>Phone no:</Text>
      <Text style={{marginBottom: 20, fontSize: 18, color:'red'}}>0314-292216-1</Text>
      <Button
        title="Back to Home"
        color='black'
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={{marginTop: 15, marginBottom: 15,fontSize: 18, color:'white'}}>Or Head to</Text>
      <Button
        title="About Us"
        color='green'
        onPress={() => navigation.navigate('About')}
        />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2B2E33'}}>
      <Text style={{marginVertical: 15, fontSize: 30, color:'white'}}>About Section</Text>
      <Button
        title="Back to Home"
        color='black'
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={{marginTop: 15, marginBottom: 15,fontSize: 18, color:'white'}}>Or Head to</Text>
      <Button
        title="Contact Us"
        color='blue'
        onPress={() => navigation.navigate('Contact')}
        />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
export default App;