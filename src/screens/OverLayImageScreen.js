import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';

const OverLayImage = () => {
  const defaultImageSource = require('../../assets/images/users/face.png');
  const [img, setImg] = useState(defaultImageSource);

  const selectPhoto = () => {
    const options = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            const source = { uri };
            setImg(source);
          } else {
            console.log('Selected photo URI is null or undefined');
          }
        } else {
          console.log('No assets returned in response');
        }
      }
    });
  };


  return (
    <View style={styles.container}>
      {img && (
        <Image
          source={img}
          style={styles.img}
        />
      )}
      <TouchableOpacity
        onPress={selectPhoto}
        style={styles.iconContainer}
      >
        <Icons name="camera" color="black" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default OverLayImage;

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 30,
    alignItems: 'center',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 95, // Adjust as needed
    right: 115,
    backgroundColor: '#F3E9E7',
    padding: 4,
    borderRadius: 8,
  },
});
