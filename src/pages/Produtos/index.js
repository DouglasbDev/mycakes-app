import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { produtos } from "../../utils/constants/produtos";
// import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles'
import api from '../../services/api';
import { CheckBox } from '../../utils/components/checkbox';


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
                <ScrollView>
                <Text style={styles.descricaoProduto} >Descrição: {cake.description}</Text>
                </ScrollView>

                <View>

                <TouchableOpacity 
                    style={{ backgroundColor: '#FDA00D',
                                padding:5,
                                borderRadius:5,
                                marginTop: 5}}
                                onPress={()=> Alert.alert('Saldo insuficiente') } >
                    <Text style={{ color:'#fff' }}>Comprar</Text>
                </TouchableOpacity>

                

                </View>

                
                

                {/* <CheckBox label={ingredients.name} /> */}

                
            </View>


            {/* {ingrediente &&
                    ingrediente.map((ingredients, index)=> (
                    <View style={styles.card} key={index} >
                        <View>
                            <CheckBox style={styles.nomeProduto} >{ ingredients.name }</CheckBox>
                            <CheckBox style={styles.precoProduto} > R$: { ingredients.price }</CheckBox>
                            
                        </View>
                        <TouchableOpacity style={styles.btnDetalhes} onPress={()=> navigation.navigate('Produto', { id:cakes.idBolo })} >
                            <Text style={styles.btnDetalhesText} >Finalizar Compra</Text>
                        </TouchableOpacity>
                    </View>
                    ))

                } */}
            
        </SafeAreaView>
        
    );
}