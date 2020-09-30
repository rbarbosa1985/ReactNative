import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './css';

const Login = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    return (
        <>

            <View style={styles.container}>
                <StatusBar barstyle="light" backgroundColor="#087AAE" />
                <View style={styles.titleimg}>
                    <Image style={styles.logo} source={require('../../assets/img/header.png')}></Image>
                    <TouchableOpacity style={styles.button0}>
                        <Text style={styles.buttonText0}>CADASTRE-SE</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>
                        Avance na sua carreira com confiança
                </Text>
                </View>
                <View style={styles.list}>
                    <Image source={require('../../assets/img/ok.png')}></Image>
                    <Text style={styles.subTitle}>
                        Busque e se candidate a vagas
                </Text>
                </View>
                <View style={styles.list}>
                    <Image source={require('../../assets/img/ok.png')}></Image>
                    <Text style={styles.subTitle}>
                        Conecte-se com pessoas em tempo real
                </Text>
                </View>
                <View style={styles.list}>
                    <Image source={require('../../assets/img/ok.png')}></Image>
                    <Text style={styles.subTitle} >
                        Leve informações relevantes com você
                </Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText1}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewOu}>
                    <Text>------------------------------------</Text>
                    <Text style={styles.textOu}>OU</Text>
                    <Text>------------------------------------</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button2}>
                        <View style={styles.viewIcon}>
                            <Image style={styles.icon} source={require('../../assets/img/google.png')}></Image>
                        </View>
                        <Text style={styles.buttonText2}>ENTRAR COM O GOOGLE</Text>
                    </TouchableOpacity>
                </View>
            </View >


        </>
    );
};

export default Login;