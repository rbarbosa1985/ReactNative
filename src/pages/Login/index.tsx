import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    return (
        <>

            <Text>
                COLETAR DADOS
                    </Text>


        </>
    );
};

export default Login;