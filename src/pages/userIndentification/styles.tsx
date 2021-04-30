import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fontes';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },

  header: {
    alignItems:'center'
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
  },

  emoji: {
    fontSize: 30
  },

  form: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '70%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },

  footer:{
    width: '50%'
  }
})