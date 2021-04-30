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

  },

  body:{
    width: '80%'
  },

  title: {
    fontSize: 35,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },

  description:{
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 20,
    color: colors.heading
  },

  footer:{
    width: '60%',
  }
})