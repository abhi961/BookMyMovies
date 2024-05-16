import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../theme/Color';
import normalize from '../../utility/helper/normalize';
import {IMAGE} from '../../theme/image';
import MoviesList from '../../Components/MoviesList';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {
  const navigation = useNavigation()
  const [data, setData] = useState('');
  const [loading,setLoading] = useState(false)
  const fetchData = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies',
    );
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
    setLoading(true)
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.headerConatiner}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image source={IMAGE.back} style={styles.backBtn} />
        </TouchableOpacity>
      </View>
      {loading == false ? (<Text style={{
        color:COLOR.Darkblack,
        fontSize:normalize(15),
        marginTop:normalize(50),
        textAlign:'center'
      }}>Waiting.....</Text>): (
         <FlatList
         contentContainerStyle={{
          alignItems:"center"
         }}
          numColumns={2}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return <MoviesList item={item} index={index} />;
          }}
        />
      )} 
     
    </SafeAreaView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  headerConatiner: {
    backgroundColor: COLOR.Purple,
    width: '100%',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(10),
  },
  backBtn: {
    resizeMode: 'contain',
    width: normalize(19),
    height: normalize(19),
    tintColor: COLOR.white,
  },
});
