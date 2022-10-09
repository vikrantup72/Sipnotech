import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../Components/Headers/Header';
import colors from '../../Common/colors';
import {Icon} from 'react-native-elements';

const LoginSplash = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
          style={{width: 220, height: 220}}
        />
        <Text style={styles.title}>Let's You In</Text>
      </View>
      <View style={{marginHorizontal:15, marginVertical:15}}>
        <View style={styles.socialIcon}>
          <Icon name="facebook-square" type="font-awesome" color={colors.THEME_BLUE} />
          <Text style={styles.socialText}> Continue with Facebook</Text>
        </View>
        <View style={styles.socialIcon}>
          <Icon name="google" type="ant-design" color={colors.THEME_SKY_BLUE} />
          <Text style={styles.socialText}> Continue with Google</Text>
        </View>
        <View style={styles.socialIcon}>
          <Icon name="apple1" type="ant-design" color={colors.THEME_ACTIVE_BLACK} />
          <Text style={styles.socialText}> Continue with Apple</Text>
        </View>
      </View>
      <Text style={[styles.socialText,{alignSelf:'center'}]}>or</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={[styles.socialText,{color:colors.THEME_WHITE}]}>Login in with password</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={[styles.socialText,{fontSize:14}]}>Don't have an account? <Text style={{color:colors.THEME_SKY_BLUE}}>Signup</Text></Text>
      </View>
    </View>
  );
};

export default LoginSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.THEME_WHITE,
  },
  title: {
    fontSize: 24,
    color: colors.THEME_ACTIVE_BLACK,
    fontWeight: '600',
  },
  socialIcon:{
    flexDirection:'row',
     borderWidth:1,
     alignItems:'center',
     justifyContent:'center',
     paddingVertical:14,
     borderRadius:12,
     borderColor:colors.THEME_LIGHT_GREY,
     marginVertical:6,
  },
  socialText:{
    fontSize: 18,
    color: colors.THEME_BLACK_Trans,
    fontWeight: '600',
  },
  btn:{
    backgroundColor:colors.THEME_SKY_BLUE,
    alignSelf:'center',
    paddingHorizontal:20,
    paddingVertical:12,
    marginVertical:20,
    borderRadius:30
  },
  footer:{
    position:'absolute',
    bottom:10,
    alignSelf:'center'
  }
});
