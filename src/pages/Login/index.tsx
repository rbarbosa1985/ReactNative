import React from 'react';
import { Text, View, Image, StatusBar, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './css';

const Login = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    const [checked, setChecked] = React.useState(false);


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
                <Text style={styles.title}>
                    ENTRAR
                </Text>
                <TextInput placeholder="E-mail ou telefone" style={styles.email} />
                <TextInput placeholder="Senha" style={styles.password} />

                <View style={styles.dados}>
                    <CheckBox></CheckBox>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText0}>Saiba mais</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText0}>ESQUECEU A SENHA?</Text>
                </TouchableOpacity>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText2}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewOu}>
                    <Text>------------------------------------</Text>
                    <Text style={styles.textOu}>OU</Text>
                    <Text>------------------------------------</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button3}>
                        <View style={styles.viewIcon}>
                            <Image style={styles.icon} source={require('../../assets/img/google.png')}></Image>
                        </View>
                        <Text style={styles.buttonText3}>ENTRAR COM O GOOGLE</Text>
                    </TouchableOpacity>
                </View>
            </View >


        </>
    );
};

export default Login;