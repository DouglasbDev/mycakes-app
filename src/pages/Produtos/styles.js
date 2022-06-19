import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardProduto:{
        backgroundColor: '#00d',
        borderRadius: 8,
        height: '80%',
        width: '90%',
        padding: 20,
        alignItems: 'center'
    },
    fotoProduto:{
        height: '40%',
        width: '90%'
    },
    nomeProduto:{
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    },
    precoProduto:{
        fontSize: 25,
        color: '#fff'
    },
    descricaoProduto:{
        marginTop: 20,
        fontSize: 20,
        fontStyle: 'italic',
        color: '#fff'
    }
})