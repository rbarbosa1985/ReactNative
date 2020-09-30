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
    justifyContent: 'flex-start'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: "Myriad Pro",
    textAlign: 'center'
  },
  list: {
    flexDirection: 'row',
    width: 300,
    paddingTop: 10
  },
  subTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listButton: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  button1: {
    backgroundColor: '#087AAE',
    borderRadius: 4,
    borderColor: "#20232a",
    width: 360,
  },
  buttonText1: {
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "Play_700Bold",
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 26,
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
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  viewButton: {
    paddingTop: 5,
  },
  button2: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#787778",
    width: 360,
  },
  buttonText2: {
    fontFamily: "Myriad Pro",
    fontWeight: 'bold',
    fontSize: 26,
    color: '#787778',
    alignSelf: 'center',
    textAlign: 'center',
    width: 250
  },
  button3: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#787778",
    width: 360,
  },
  buttonText3: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "Myriad Pro",
    fontWeight: 'bold',
    fontSize: 26,
    color: '#787778',
    alignSelf: 'center',
  },

});

export { styles };