import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    input:{
        borderWidth: 0.8,
        borderColor: '#c4c4c4',
        width: '90%',
        borderRadius: 8,
        marginTop: 10,
        padding: 10
    },
    button:{
        width: 200,
        padding: 20,
        backgroundColor:'#00d',
        borderRadius: 8,
        marginTop: 10
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    }
})