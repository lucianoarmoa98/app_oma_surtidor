import React, { useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { Button, Card, Input, Text } from "@rneui/base";
import { KeyboardAvoidingView, SafeAreaView, TextInput, ToastAndroid, View } from "react-native";
import Icono from 'react-native-vector-icons/Ionicons';
import { stylesCard } from "../../styles/styles";

const Categories = ({ navigation }) => {
    
    //constantes
    const PRODUCTOS_SURTIDOR = 'Productos Surtidor';
    const PRODUCTOS_SHOP = 'Productos Shop';
    const COMBUSTIBLE = 'Combustible';

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <Text style={stylesCard.textCenter}>Inventario</Text>
                <View >

                    <View style={stylesCard.buttonCenter}>
                        <Button
                            title='Productos Surtidor'
                            //loading={loadingSesion}
                            onPress={() => navigation.navigate('Opciones', {
                                title: PRODUCTOS_SURTIDOR
                            })}
                            //titleStyle={styleLogin.title}
                            //buttonStyle={styleLogin.btnSesion}
                            //containerStyle={styleLogin.widthBtn}
                            buttonStyle={{
                                backgroundColor: 'rgba(23,36,42,255)',
                                borderRadius: 5,
                                width: '100%',
                                marginBottom: '3%',
                            }}
                        />

                        <Button
                            title='Productos Shop'
                            //loading={loadingSesion}
                            onPress={() => navigation.navigate('Opciones', {
                                title: PRODUCTOS_SHOP
                            })}
                            //titleStyle={styleLogin.title}
                            //buttonStyle={styleLogin.btnSesion}
                            //containerStyle={styleLogin.widthBtn}
                            buttonStyle={{
                                backgroundColor: 'rgba(23,36,42,255)',
                                borderRadius: 5,
                                width: '100%',
                                marginBottom: '3%',
                            }}
                        />

                        <Button
                            title='Productos Combustible'
                            //loading={loadingSesion}
                            onPress={() => navigation.navigate('Opciones', {
                                title: COMBUSTIBLE
                            })}
                            //titleStyle={styleLogin.title}
                            //buttonStyle={styleLogin.btnSesion}
                            //containerStyle={styleLogin.widthBtn}
                            buttonStyle={{
                                backgroundColor: 'rgba(23,36,42,255)',
                                borderRadius: 5,
                                width: '100%',
                            }}
                        />

                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
export default Categories;