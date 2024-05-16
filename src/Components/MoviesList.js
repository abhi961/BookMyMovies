import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import normalize from '../utility/helper/normalize';
import {COLOR} from '../theme/Color';

const MoviesList = ({item}) => {
    
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: `${item.Poster}`}} style={styles.imageVIew} />
      <Text style={styles.titleTxt}>{item.Title}</Text>
      <Text style={styles.runtimeTxt}>{`RunTime : ${item.Runtime}`}</Text>
    </TouchableOpacity>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,

    width: normalize(140),
    // height:normalize(200),
    margin: 10,
    borderTopLeftRadius: normalize(5),
    borderTopRightRadius: normalize(5),
    paddingBottom: normalize(10),
  },
  imageVIew: {
    resizeMode: 'cover',
    borderTopLeftRadius: normalize(5),
    borderTopRightRadius: normalize(5),
    width: normalize(140),
    height: normalize(120),
  },
  titleTxt: {
    color: COLOR.Darkblack,
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(6),
    fontSize: normalize(14),
    fontWeight: '600',
  },
  runtimeTxt: {
    color: COLOR.gray,
    paddingHorizontal: normalize(6),
    fontWeight: '300',
  },
});
