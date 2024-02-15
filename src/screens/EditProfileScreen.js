import { StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import OverLayImage from './OverLayImageScreen';;
import Icons from 'react-native-vector-icons/AntDesign';
import Icons2 from 'react-native-vector-icons/MaterialIcons';
import { colors } from "../constants/theme";
import axios from 'axios';

const EditProfile = () => {
  const callApi = () => {
    axios.post('')
  }
  return (
    <ScrollView>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icons2 name="arrow-back" color="black" size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={callApi}
        >
          <Icons name="check" color="black" size={22} />
        </TouchableOpacity>
      </View>
      <OverLayImage />
      <View style={styles.container}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={colors.black}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.black}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.black}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Contact"
          placeholderTextColor={colors.black}
          keyboardType='numeric'
          style={styles.input}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    padding: 10,
  },
  input: {
    width: "90%",
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    height: 48,
    paddingLeft: 20,
    color: 'black',
    marginVertical: 10,
  },
});
