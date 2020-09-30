import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleimg: {
        alignItems: 'baseline',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    title: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    subTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listButton: {
        paddingTop: 10,
        paddingBottom: 15,
    },
    button: {
        backgroundColor: '#00D4FF',
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonIcon: {
        backgroundColor: '#ED7947',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        paddingTop: 10,
        paddingBottom: 15,
        fontFamily: "Play_700Bold",
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        color: '#0B1F34',
        alignSelf: 'center',
    },
    buttonText2: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        fontFamily: "Play_700Bold",
        fontWeight: 'bold',
        fontSize: 26,
        color: '#FFF',
        alignSelf: 'center',
    }
});

export { styles };