import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import Icons2 from 'react-native-vector-icons/MaterialIcons';
import { colors } from "../constants/theme";
import { useNavigation } from '@react-navigation/native';


const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icons name="chevron-thin-left" color="black" size={22} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons2 name="logout" color="black" size={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/demo/image/upload/r_20/front_face.png',
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.btn}
        >
          <Text style={{ color: colors.black }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    padding: 10,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 42,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
});
