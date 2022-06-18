import { StyleSheet } from "react-native";

export const stylesCard = StyleSheet.create({
    containerCard: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        //marginLeft: '20%',
        //marginRight: '20%',
        //marginBottom: '5%',
        marginTop: '5%',
    },
    cardStyleLeft: {
        borderRadius: 10,
        left: '7%',
        width: 150,
        height: 160,
        backgroundColor: '#ddf1f0',
    },
    cardStyleRight: {
        borderRadius: 10,
        right: '7%',
        width: 150,
        height: 160,
        backgroundColor: '#ddf1f0',
    },
    textCenter: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '5%',
    },
    buttonCenter: {
        //centrar boton
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    textTitle: {
        fontSize: 16,
        //fontWeight: 'bold',
        marginTop: '5%',
        left: '5%',
        marginBottom: '5%',
    },
    input:  {
        width: '80%',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 10,
        height: 40,
        //agregar bordes en todos los lados
        borderWidth: 1,
        borderColor: '#ddf1f0',
        //agregar borde solo en el lado derecho
        borderRightWidth: 1,
        //agregar borde solo en el lado izquierdo
        //borderLeftWidth: 1,
        //agregar borde solo en el lado superior
        //borderTopWidth: 1,
        //agregar borde solo en el lado inferior
        //borderBottomWidth: 1,
        //agregar borde solo en el lado derecho y superior
        //borderTopRightRadius: 10,
        //agregar borde solo en el lado derecho y inferior
        //borderBottomRightRadius: 10,
        //agregar borde solo en el lado izquierdo y superior
        //borderTopLeftRadius: 10,
        //agregar borde solo en el lado izquierdo y inferior
        //borderBottomLeftRadius: 10,

    },

});