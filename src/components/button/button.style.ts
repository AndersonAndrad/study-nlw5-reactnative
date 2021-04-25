import { StyleSheet  } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fontes';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 10,
    height: 56,
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})