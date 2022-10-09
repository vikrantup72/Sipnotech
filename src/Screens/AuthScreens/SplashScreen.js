import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const slides = [
  {
    key: 1,
    title: 'Share your experience!',
    text: 'Snap! Review! Post!',
    image: require('../../../assets/images/logo.png'),
  },
  {
    key: 2,
    title: 'Real-time Reviews',
    text: 'Explore up-to-date content feed of places around you!',
    image: require('../../../assets/images/logo.png'),
  },
  {
    key: 3,
    title: 'Tastemaker',
    text: 'Become a Tastemaker! Get benefits and raise your status by posting frequently on REVUE LIVE!',
    image: require('../../../assets/images/logo.png'),
  },
];
const {width, height} = Dimensions.get('screen');
const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [skip, setSkip] = useState(false);
  const refSlider = useRef();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(function () {
      Hide_Splash_Screen();
    }, 3000);
  }, []);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };
  const _renderItem = ({item}) => {
    return (
      <View
        style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
        <View style={styles.sliderimageheight}>
          <ImageBackground
            resizeMode={'contain'}
            style={styles.image}
            source={item.image}
          />
        </View>
        <View style={styles.slidercontent}>
          <Text style={[styles.slidertext, {fontSize: 20, fontWeight: 'bold'}]}>
            {item.title}
          </Text>
          <View>
            <Text
              adjustsFontSizeToFit
              numberOfLines={3}
              style={[styles.slidertext,
                {
                  marginVertical: 30,
                  marginHorizontal: 20,
                  fontSize: 16,
                  color: '#B0B3B3',
                }
              ]}>
              {item.text}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const _renderPagination = activeIndex => {
    return (
      <View style={{backgroundColor: '#F7FFFF', padding: 20}}>
        <View
          style={{
            height: 16,
            margin: height / 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {slides.length > 1 &&
            slides.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  {
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 4,
                  },
                  i === activeIndex
                    ? {backgroundColor: '#40E0D0'}
                    : {backgroundColor: '#9F9F9F'},
                ]}
              />
            ))}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              if (activeIndex <= 1) {
                refSlider.current.goToSlide(activeIndex + 1);
              } else {
                navigation.replace('LoginSplash');
              }
            }}

            //  }}
          >
            <View
              style={{
                backgroundColor: '#40E0D0',
                padding: 10,
                borderRadius: 20,
                paddingHorizontal: 40,
              }}>
              {activeIndex == 2 ? (
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  Get Started
                </Text>
              ) : (
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  Next
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  let Splash_Screen = (
    <View
      style={[
        styles.MainContainer,
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: height,
          backgroundColor: '#fff',
        },
      ]}>
      <Animatable.Image
        animation={'fadeIn'}
        duration={2000}
        useNativeDriver={true}
        source={require('../../../assets/images/logo.png')}
        resizeMode={'contain'}
        style={{height: height / 3}}
      />
    </View>
  );

  return isVisible === true ? (
    Splash_Screen
  ) : (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      ref={refSlider}
      bottomButton={true}
      showSkipButton={true}
      renderPagination={_renderPagination}
    />
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  image: {width: '100%', height: '100%'},
  imageLogo: {width: '100%', height: 120},
  sliderimageheight: {
    height: height / 4,
    width: width / 1.5,
    alignSelf: 'center',
  },
  slidercontent: {
    padding: width / 18,
    alignSelf: 'center',
    backgroundColor: '#F7FFFF',
  },
  slidertext: {
    textAlign: 'center',
    lineHeight: 20,
    color: '#343a40',
  },
  DictionaryButton: {
    marginVertical: 80,
    flexDirection: 'row',
    backgroundColor: '#18a0fb',
    padding: 12,
    borderRadius: 20,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
export default SplashScreen;
