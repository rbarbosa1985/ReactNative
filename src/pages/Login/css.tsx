import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: 400,
        height: 800
    },
    titleimg: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 5,
    },
    button0: {
        backgroundColor: '#fff',
        width: 360,
    },
    buttonText0: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        paddingRight: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#087AAE',
        alignSelf: 'center',
    },
    title: {
        color: '#000',
        paddingTop: 10,
        paddingBottom: 15,
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 20,
    },
    email: {
        fontSize: 20,
        paddingTop: 10,
        width: 360,
    },
    password: {
        fontSize: 20,
        width: 360,
    },
    dados: {
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 19,
    },
    button1: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttonText1: {
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 15,
        fontWeight: 'bold',
        fontSize: 19,
        color: '#087AAE',
        alignSelf: 'center',
    },
    button4: {
        backgroundColor: '#fff',
        marginRight: 160,
    },
    buttonText4: {
        paddingLeft: 0,
        paddingTop: 10,
        paddingBottom: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#087AAE',

    },
    button2: {
        backgroundColor: '#087AAE',
        borderRadius: 4,
        borderColor: "#20232a",
        width: 360,
    },
    buttonText2: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center'
    },
    viewOu: {
        flexDirection: 'row',
        width: 350
    },
    textOu: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
    },
    text1: {
        paddingTop: 25,
        borderBottomColor: '#787778', // Add this to specify bottom border color
        borderBottomWidth: 0.6,
        width: 150
    },
    viewButton: {
        paddingTop: 5,
    },
    button3: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#087AAE",
        width: 360,
    },
    viewIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    icon: {
        width: 20,
        height: 20
    },
    buttonText3: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#087AAE',
        alignSelf: 'center',
        textAlign: 'center',
        width: 300
    },


});

export { styles };