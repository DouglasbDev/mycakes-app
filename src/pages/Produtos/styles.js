import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardProduto:{
        flex:1,
        backgroundColor: '#00d',
        width: '100%',
        padding: 20,
        alignItems: 'center'
    },
    fotoProduto:{
        height: '40%',
        width: '90%'
    },
    nomeProduto:{
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center'
    },
    precoProduto:{
        fontSize: 12,
        color: '#fff'
    },
    descricaoProduto:{
        marginTop: 20,
        fontSize: 15,
        fontStyle: 'italic',
        color: '#fff'
    }
})