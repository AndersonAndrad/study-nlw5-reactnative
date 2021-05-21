import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fontes';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    backgroundColor: colors.background,
    padding: 20
  },

  getting: {
    fontSize: 25,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  
  userName: {
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.heading
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 100
  },
})