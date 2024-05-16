import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import normalize from '../utility/helper/normalize';
import {COLOR} from '../theme/Color';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation()
  const [modalVisible1, setModalVisible1] = useState(false);
  const [item,setItem] = useState('')
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const geoData = [
    {
      id:1,
      name:' Foresto Paradise',
      image:'https://lh3.googleusercontent.com/p/AF1QipPDbQNx7X6C-SYE1uDx34tVFdyvF_kXfGDhb90F=s1360-w1360-h1020'
    }
  ]

  const getloaction = () => {
    setModalVisible1(true);
    console.log(geoData)
    setItem(geoData)
    // try {
    //   Geolocation.getCurrentPosition(
    //     position => {
    //       console.log(position, 'postion-------->');
    //     },
    //     error => {
    //       // See error code charts below.
    //       console.log(error.code, error.message);
    //     },
    //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: 25.595629759162836,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={x => {
          console.log(x, 'wwwwwwwwwww');
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={'My Marker'}
          description={'Some description'}
        />
      </MapView>
      <TouchableOpacity
        onPress={() => getloaction()}
        style={{
          padding: normalize(10),
          backgroundColor: COLOR.Darkblack,
          position: 'absolute',
          width: '90%',
          bottom: 10,
          borderRadius: normalize(8),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalize(14),
            color: COLOR.white,
          }}>
          Get Loaction
        </Text>
      </TouchableOpacity>

      <Modal
        style={{margin: 0}}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        isVisible={modalVisible1}
        animationInTiming={800}
        animationOutTiming={1000}
        onBackdropPress={() => setModalVisible1(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ddd',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: '#262626',
            borderRadius: normalize(7),
            height: normalize(159),
            paddingLeft: normalize(20),
            paddingBottom: normalize(15),
            paddingTop: normalize(10),
          }}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('details',{

          })}
            style={{
              flexDirection: 'row',
              marginTop: normalize(10),
            }}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/p/AF1QipPDbQNx7X6C-SYE1uDx34tVFdyvF_kXfGDhb90F=s1360-w1360-h1020',
              }}
              style={styles.geoImage}
            />
            <View>
              <Text
                style={{
                  fontSize: normalize(16),
                  marginLeft: normalize(10),
                  marginBottom:normalize(10),
                  color: COLOR.white,
                }}>
                Foresto Paradise
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),
                  marginLeft: normalize(10),
                  width: normalize(160),
                  color: COLOR.white,
                }}>
                North Indian, Chinese & Continental cuisine served in a rooftop
                restaurant with city views.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  geoImage: {
    width: normalize(100),
    height: normalize(100),
  },
});
