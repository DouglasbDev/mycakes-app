import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { produtos } from "../../utils/constants/produtos";
// import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles'
import api from '../../services/api';


export default function DetalhesProduto(){

    const [ cake, setCake ] = useState([])
    const [ ingrediente, setIngredientes ] = useState([])

    const id_cake = useRoute().params.id

    // const cake = cakes.filter(p => p.id == id_produto) 
    
    console.log(id_cake)

    async function getCakes(){
        try{
            const response = await api.get("/cakes");
            setCake(response.data.cakes.filter((cake) => cake.idBolo == id_cake )[0]);
            console.log(response.data.cakes.filter((cake) => cake.idBolo == id_cake )[0]);

        }catch(err){
            console.log(err)
        }
    }


    async function getIgrendientes(){
        const response = await api.get("/ingredients")
        setIngredientes(response.data.ingredients);
        console.log(response.data.ingredients)
    }

useEffect(()=>{
    getCakes()
    getIgrendientes()
}, [])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cardProduto} >
                <Image source={{ uri:cake.img }} style={styles.fotoProduto} />
                <Text style={styles.nomeProduto} >{cake.name}</Text>
                <Text style={styles.precoProduto} >R$: {cake.price}</Text>
                <Text style={styles.descricaoProduto} >Descrição: {cake.description}</Text>
                <TouchableOpacity 
                    style={{ backgroundColor: '#FDA00D',
                                padding:15,
                                borderRadius:5,
                                marginTop: 20 }}
                                onPress={()=> Alert.alert('Saldo insuficiente') } >
                    <Text style={{ color:'#fff' }}>Comprar</Text>
                </TouchableOpacity>

                {/* <CheckBox
                   
                /> */}

                
            </View>
        </SafeAreaView>
    );
}