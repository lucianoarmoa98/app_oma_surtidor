import React, { useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { Button, Card, Input } from "@rneui/base";
import { KeyboardAvoidingView, SafeAreaView, TextInput, ToastAndroid, View } from "react-native";
import { stylesCard } from "../../styles/styles";
import Icono from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <View style={stylesCard.containerCard}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Categories')}
                    >
                        <Card containerStyle={stylesCard.cardStyleLeft}>
                            <Icono
                                name="settings-outline"
                                size={50}
                                color="#000"
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            />
                            <Card.Title style={{ fontSize: 20 }} >Ajuste de Inventario</Card.Title>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card containerStyle={stylesCard.cardStyleRight}>
                            <Icono
                                name="reload-outline" 
                                size={50}
                                color="#000"
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            />
                            <Card.Title style={{ fontSize: 20 }} >Reajuste de Precios</Card.Title>
                        </Card>
                    </TouchableOpacity>
                </View>

                <View style={stylesCard.containerCard}>
                    <TouchableOpacity>
                        <Card containerStyle={stylesCard.cardStyleLeft}>
                            <Icono
                                name="reorder-four-outline"
                                size={50} color="#000"
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            />
                            <Card.Title style={{ fontSize: 20 }} >Tanques</Card.Title>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card containerStyle={stylesCard.cardStyleRight}>
                            <Icono
                                name="file-tray-stacked-outline"
                                size={50}
                                color="#000"
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            />
                            <Card.Title style={{ fontSize: 20 }} >Reportes</Card.Title>
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;