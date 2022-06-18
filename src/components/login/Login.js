import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Input } from "@rneui/base";
import { KeyboardAvoidingView, SafeAreaView, StatusBar, TextInput, ToastAndroid, View } from "react-native";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/action";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({navigation}) => {
    const [stateEmail, setStateEmail] = useState("");
    const [statePassword, setStatePassword] = useState("");

    const dispatch = useDispatch();//dispatch para llamar a las acciones => setea el estado a redux

   


    //almacena el token en el async storage
    // const storeData = async (value) => {
    //     try {
    //       const jsonValue = JSON.stringify(value)
    //       //console.warn("dataAsyncLogin", jsonValue);
    //       await AsyncStorage.setItem('@dataStorage', jsonValue)
    //     } catch (e) {
    //       // saving error
    //     }
    //   }


    //iniciar sesion
    const handleChangeSesion = () => {
        //enviar password y email
        let body = {}
        body.usernameOrEmail = stateEmail;
        body.password = statePassword;
        dispatch(setToken(true));
        //navigation.navigate('HomeTab', {body});

    }


    //function para mostrar toast
    // const Toast = ({ visible, message }) => {
    //     if (visible) {
    //         ToastAndroid.showWithGravityAndOffset(
    //             message,
    //             ToastAndroid.LONG,
    //             ToastAndroid.BOTTOM,
    //             25,
    //             50
    //         );
    //         return null;
    //     }
    //     return null;
    // };




    return (
        <SafeAreaView style={{backgroundColor: 'rgba(42,121,118,255)', flex: 1}}>
            <StatusBar barStyle="light-content" />
            <View style={{marginTop: '50%'}}>
                {/* <Toast visible={stateLoading} message={stateMessage} /> */}
                <Card containerStyle={{ borderRadius: 10 }}>
                    <Card.Title style={{fontSize: 30}} >Iniciar Sesión</Card.Title>

                    <Input
                        placeholder="Correo electrónico"
                        autoCorrect={false}
                        autoComplete="off"
                        //leftIcon={{ color: '#00aced', name: "email" }}
                        value={stateEmail.toLowerCase()}
                        //onChangeText={(e) => setStateEmail(e)}
                    />

                    <Input
                        //secureTextEntry={!viewPassword}
                        autoCorrect={false}
                        autoComplete="off"
                        //leftIcon={{ color: '#00aced', name: "lock" }}
                        //rightIcon={{ color: '#00aced', name: viewPassword ? "eye-off" : "eye" }}
                        rightIcon={
                            <Icon
                                //name={!viewPassword ? "eye-off" : "eye"}
                                type="material-community"
                                size={24}
                                color="#c1c1c1"
                                //onPress={() => setViewPassword(!viewPassword)}
                            />
                        }
                        placeholder="Contraseña"
                        value={statePassword}
                        //onChangeText={(e) => setStatePassword(e)}
                    />

                    <View>
                        <Button
                            title='Ingresar'
                            //loading={loadingSesion}
                            onPress={handleChangeSesion}
                            //titleStyle={styleLogin.title}
                            //buttonStyle={styleLogin.btnSesion}
                            //containerStyle={styleLogin.widthBtn}
                            buttonStyle={{
                                backgroundColor: 'rgba(23,36,42,255)',
                                borderRadius: 5,
                            }}
                        />

                    </View>
                </Card>
            </View>
        </SafeAreaView>
    )
}
export default Login;