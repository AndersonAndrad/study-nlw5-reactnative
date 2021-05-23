import {  StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontes from '../../styles/fontes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5
  },

  containerActive: {
    fontFamily: fontes.heading,
    color: colors.green,
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fontes.text,
  },

  textActive: {
    fontFamily: fontes.heading,
    color: colors.green_dark,
  }
})