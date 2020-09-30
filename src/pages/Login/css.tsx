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
    },
    logo: {

    },
    title: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: "Myriad Pro",
        alignSelf: 'flex-start',
        paddingLeft: 20,
    },
    dados: {
        flexDirection: 'row',
        paddingLeft: 20,

    },
    email: {
        fontSize: 20,
        paddingTop: 10,
        width: 360
    },
    password: {
        fontSize: 20,
        width: 360
    },
    listButton: {
        paddingTop: 10,
        paddingBottom: 15,
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
        fontFamily: "Myriad Pro",
        fontWeight: 'bold',
        fontSize: 20,
        color: '#087AAE',
        alignSelf: 'center',
    },
    button1: {
        backgroundColor: '#fff',
        width: 360,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
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
        fontFamily: "Play_700Bold",
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    viewIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    viewOu: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        width: 300
    },
    textOu: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
    },
    viewButton: {
        paddingTop: 5,
    },
    button3: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#787778",
        width: 360,
    },
    buttonText3: {
        fontFamily: "Myriad Pro",
        fontWeight: 'bold',
        fontSize: 20,
        color: '#787778',
        alignSelf: 'center',
        textAlign: 'center',
        width: 300
    },


});

export { styles };