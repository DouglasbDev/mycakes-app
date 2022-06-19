import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';
import api from '../../services/api';



export default function Login(){

    const [email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

    

    const navigation = useNavigation()
    

    const login = async () => {
        const data = {
            "email": email,
            "password": password
        }

        if(email == "" || password == ""){
            Alert.alert("usuario invalido");
        }


        try{
            const response = await api.post("/user/login", data);
            navigation.navigate('Home')
            console.log(response.data)
        }catch (err){
            Alert.alert("Login invalido");
            console.log(err)
        }

       
    }

    return (
        <SafeAreaView style={styles.container} >      
            <Ionicon name='person' size={70} color='#00d' />
            <TextInput style={styles.input} 
                placeholder='usuario'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input} 
                placeholder='senha'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity  
                onPress={login}
                style={styles.button} >
                <Text style={styles.buttonText} >Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}