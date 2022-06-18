import React, { useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { Button, Card, Dialog, Divider, Input, Text } from "@rneui/base";
import { KeyboardAvoidingView, SafeAreaView, TextInput, ToastAndroid, View } from "react-native";
import Icono from 'react-native-vector-icons/Ionicons';
import { stylesCard } from "../../styles/styles";



//array de data => test
const data = [
    {
        id: 1,
        name: "Producto 1",
    },
    {
        id: 2,
        name: "Producto 2",
    },
    {
        id: 3,
        name: "Producto 3",
    },
];

const Opciones = (navigation) => {
    const [visible, setVisible] = useState(false);
    const [stateText, setStateText] = useState('Seleccione una opción');

    //destruturacion de parametros
    const { title } = navigation.route.params;
    console.log("navigation", title);

    //muestra el dialogo de eliminar
    const toggleDialog = (item) => {
        setVisible(!visible);
        setStateText(item.name);
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <Dialog
                    overlayStyle={{ backgroundColor: '#fff' }}
                    isVisible={visible}
                    onBackdropPress={() => { setVisible(false), setStateText('Seleccione una opción') }}
                >
                    <Dialog.Title title="Seleccione una opción" />
                    {data ? data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => toggleDialog(item)}
                                key={index}
                            >
                                <Text style={stylesCard.textCenter}>{item.name}</Text>
                                <Divider />
                            </TouchableOpacity>

                        )
                    }) : null}
                </Dialog>



                <Text style={stylesCard.textCenter}>Inventario - {title}</Text>
                <View >
                    <Text style={stylesCard.textTitle}>Producto</Text>
                    <View style={stylesCard.buttonCenter}>
                        <Button
                            title={stateText}
                            iconRight
                            icon={<Icono name='arrow-down' size={20} color='black' />}
                            iconContainerStyle={{ marginLeft: 10 }}
                            //loading={loadingSesion}
                            onPress={toggleDialog}
                            //titleStyle={styleLogin.title}
                            //buttonStyle={styleLogin.btnSesion}
                            //containerStyle={styleLogin.widthBtn}
                            titleStyle={{ color: 'black' }}
                            buttonStyle={{
                                backgroundColor: '#ddf1f0',
                                borderRadius: 5,
                                //width: '80%',
                            }}
                        />
                    </View>


                    <Text style={stylesCard.textTitle}>Cantidad Actual</Text>
                    <Input
                        placeholder="-"
                        inputStyle={stylesCard.input}
                        inputContainerStyle={{ borderBottomWidth: 0, }}
                    />

                    <Text style={stylesCard.textTitle}>Cantidad Ajuste</Text>
                    <Input
                        placeholder=""
                        inputStyle={stylesCard.input}
                        inputContainerStyle={{ borderBottomWidth: 0, }}
                    />
                    <View style={{marginBottom: '5%'}}>
                    <Divider />
                    </View>

                    <View style={stylesCard.buttonCenter}>
                        <Button
                            title="Ajustar Stock"
                            iconRight
                            //loading={loadingSesion}
                            //onPress={toggleDialog}
                            //titleStyle={styleLogin.title}
                            //buttonStyle={styleLogin.btnSesion}
                            //containerStyle={styleLogin.widthBtn}
                            //titleStyle={{ color: 'black' }}
                            buttonStyle={{
                                backgroundColor: 'rgba(23,36,42,255)',
                                borderRadius: 5,
                                //width: '80%',
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Opciones;