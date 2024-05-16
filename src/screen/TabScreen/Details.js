import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../theme/Color';
import normalize from '../../utility/helper/normalize';
import {IMAGE} from '../../theme/image';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: COLOR.Purple,
          width: '100%',
          padding: normalize(10),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={IMAGE.back}
            style={{
              resizeMode: 'contain',
              width: normalize(16),
              height: normalize(16),
              tintColor: COLOR.white,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.conatiner}>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/p/AF1QipPDbQNx7X6C-SYE1uDx34tVFdyvF_kXfGDhb90F=s1360-w1360-h1020',
          }}
          style={styles.imageBox}
        />
        <Text style={styles.titletxt}>Foresto Paradise</Text>
        <Text style={styles.desc}>
          North Indian, Chinese & Continental cuisine served in a rooftop
          restaurant with city views.
        </Text>
       <View style={{
        flexDirection:'row',
        // alignItems:'center',
        width:normalize(200),
        marginTop:normalize(10)
       }}>
       <Text style={{color:COLOR.Lightblack, fontSize:normalize(14), fontWeight:'bold'}}>{`Service options : `} </Text>
        <Text style={{color:COLOR.Lightblack,}}>Has all you can eat Has outdoor seating Has fireplace</Text>
       </View>
       <View style={{
        flexDirection:'row',
        alignItems:'center',
        width:normalize(200),
        marginTop:normalize(8)
       }}>
       <Text style={{color:COLOR.Lightblack, fontSize:normalize(14), fontWeight:'bold'}}>Located in: </Text>
        <Text style={{color:COLOR.Lightblack,}}>Patna One Plaza</Text>
       </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  conatiner: {
    padding: normalize(10),
  },
  titletxt: {
    color: COLOR.Darkblack,
    fontSize: normalize(16),
    fontWeight: '600',
  },
  desc: {
    color: COLOR.Lightblack,
    fontSize: normalize(13),
    marginTop: normalize(10),
  },
  imageBox: {
    width: normalize(300),
    height: normalize(150),
    marginBottom: normalize(10),
  },
});
