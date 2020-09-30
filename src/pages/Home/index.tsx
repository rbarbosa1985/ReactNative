import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, View, Image, Alert, Platform, SmartBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { styles } from './css';

const Home = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <SmartBar barstyle="light" backgroundColo="#fff"></SmartBar>
            <View style={styles.titleimg}>
                <Image source={require('../../assets/img/header.png')}></Image>
            </View>
            <View>
                <Image style={styles.logo} source={require('../../assets/img/home.png')}></Image>
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
                    <Text style={styles.buttonText1}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button2}>
                    <View style={styles.viewIcon}>
                        <Image style={styles.icon} source={require('../../assets/img/google.png')}></Image>
                    </View>
                    <Text style={styles.buttonText2}>CADASTRE-SE COM GOOGLE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity onPress={handleOnPress} style={styles.button3}>
                    <Text style={styles.buttonText3}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View >

    );
};

export default Home;