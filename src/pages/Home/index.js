import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { produtos } from '../../utils/constants/produtos';
import api from '../../services/api';


export default function Home(){

    const [ lista, setLista ] = useState([])

    const navigation = useNavigation()

    async function getCakes(){
        try{
            const response = await api.get("/cakes");
            setLista(response.data.cakes);
            console.log(response.data);

        }catch(err){
            console.log(err)
        }
    }

useEffect(()=>{
    getCakes()
}, [])
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                {lista &&
                    lista.map((cakes, index)=> (
                    <View style={styles.card} key={index} >
                        <View>
                            <Text style={styles.nomeProduto} >{ cakes.name }</Text>
                            <Text style={styles.precoProduto} > R$: { cakes.price }</Text>
                            <Text style={styles.descricaoProduto} >{ cakes.description }</Text>
                        </View>
                        <Image source={{ uri: cakes.img }} style={{width: 50, height:50}} />
                        <TouchableOpacity style={styles.btnDetalhes} onPress={()=> navigation.navigate('Produto', { id:cakes.idBolo })} >
                            <Text style={styles.btnDetalhesText} >Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                    ))

                }
            </ScrollView>
        </SafeAreaView>
    );
}