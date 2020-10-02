import React from 'react';
import { Text, View, Image, StatusBar, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {

    const [checked, setChecked] = React.useState(false);

    const setSelection = () => {
        if (checked == false) {
            setChecked(true)
        }
        else {
            setChecked(false)
        }

    }

    return (


        <View style={styles.container}>
            <StatusBar barstyle="light" backgroundColor="#087AAE" />
            <View style={styles.titleimg}>
                <Image source={require('../../assets/img/header.png')}></Image>
                <TouchableOpacity style={styles.button0}>
                    <Text style={styles.buttonText0}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>
                Entrar
                </Text>
            <TextInput underlineColorAndroid="#787778" placeholder="E-mail ou telefone" style={styles.email} />
            <TextInput underlineColorAndroid="#787778" placeholder="Senha" style={styles.password} />

            <View style={styles.dados}>
                <CheckBox
                    value={checked}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Lembrar dos meus dados.</Text>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1}>Saiba mais</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button4}>
                <Text style={styles.buttonText4}>ESQUECEU A SENHA?</Text>
            </TouchableOpacity>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>CONTINUAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewOu}>
                <View >
                    <View>
                        <View style={styles.text1}>

                        </View>
                    </View>
                </View>
                <Text style={styles.textOu}>OU</Text>
                <View >
                    <View>
                        <View style={styles.text1}>

                        </View>
                    </View>
                </View>
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



    );
};

export default Login;