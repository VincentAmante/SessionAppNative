import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Containers
  background: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
  partContainer: {
    marginBottom: 20,
  },
  daysContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  answerBox: {
    flex: .4,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#fff',

    paddingBottom: 30,
  },
  answerContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: 50,

    transform: [{ translateY: -10 }]
  },
  button: {
    backgroundColor: '#E50914',
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    transform: [{ translateY: -30 }]
  },
  image: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: null,
    resizeMode: 'contain',
    height: 140,
  },

  answerText: {
    fontFamily: 'Jost',
    alignSelf: 'center'
  },
  subHeading: {
    color: '#fff',
    fontFamily: 'Jost',
    marginTop: 10,
    fontSize: 16,
    marginBottom: 5,
  },
  pickerText: {
    color: '#fff',
    fontFamily: 'Jost',
  },
  textInput: {
    backgroundColor: '#575453',
    color: '#fff',
    fontFamily: 'Jost',
    borderRadius: 30,
    fontSize: 20,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
