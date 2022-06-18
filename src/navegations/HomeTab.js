import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Categories from '../components/detalles/Categories';
import Opciones from '../components/detalles/Opciones';
import Logout from '../components/logout/Logout';

const DescripcionStack = createNativeStackNavigator();
const InicioStack = createNativeStackNavigator();
//para que permanezca en el tab
// function DescripcionStackScreen() {
//     return (
//         <DescripcionStack.Navigator>
//             <DescripcionStack.Screen
//                 name="ListarDescripciones"
//                 //component={Descripciones}
//                 options={{ headerTitleAlign: 'center', headerShown: false }}
//             />
//             <DescripcionStack.Screen
//                 name="Details-edit"
//                 //component={EditDescripcion}
//                 options={{ headerTitleAlign: 'center', headerShown: false }}
//             />
//         </DescripcionStack.Navigator>
//     );
// }

function InicioStackScreen() {
    return (
        <InicioStack.Navigator>
            <InicioStack.Screen
                name="InicioScreen"
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    headerShown: false
                }}
            />
            <InicioStack.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}
            />
            <InicioStack.Screen
                name="Opciones"
                component={Opciones}
                options={{
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}
            />
        </InicioStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export function HomeTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    //console.log("route", route.name);
                    if (route.name === 'Inicio') {
                        return (
                            <Icon
                                name={
                                    focused
                                        ? 'home'
                                        : 'home'
                                }
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Logout') {
                        return (
                            <Icon
                                name={
                                    focused
                                        ? 'logout'
                                        : 'logout'
                                }
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'rgba(42,121,118,255)',
                    borderTopColor: '#fff',
                    borderTopLeftRadius: 28,
                    borderTopRightRadius: 28,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    height: '8%',
                    position: "absolute",

                },
            })
            }
        >
            <Tab.Screen
                name="Inicio"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}
                component={InicioStackScreen}
            //options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen
                name="Logout"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,

                }}
                component={Logout}
            // listeners={({ navigation }) => ({
            //     tabPress: e => {
            //         e.preventDefault();
            //         navigation.navigate('Logout');
            //         alert(123);
            //     },
            // })}
            //options={{ tabBarBadge: 3 }}
            />
        </Tab.Navigator>
    );
}