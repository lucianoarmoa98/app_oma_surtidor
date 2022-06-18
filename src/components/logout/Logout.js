import React, { useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { Button, Card, Input, Text } from "@rneui/base";
import { KeyboardAvoidingView, SafeAreaView, TextInput, ToastAndroid, View } from "react-native";
import { stylesCard } from "../../styles/styles";

const Logout = ({ navigation }) => {
    

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <Text style={stylesCard.textCenter}>Cerrar sesión</Text>
            </View>
        </SafeAreaView>
    )
}
export default Logout;