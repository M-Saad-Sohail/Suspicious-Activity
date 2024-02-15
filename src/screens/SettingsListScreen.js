import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/Entypo';
import Icons3 from 'react-native-vector-icons/Fontisto';
import Icons4 from 'react-native-vector-icons/AntDesign';
import Icons5 from 'react-native-vector-icons/FontAwesome6';
import Icons6 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons7 from 'react-native-vector-icons/Foundation';
import Icons8 from 'react-native-vector-icons/MaterialIcons';
import SettingsScreen from './SettingsScreen';

const SettingsList = () => {
  const list = [
    {
      name: 'locked',
      iconComponent: Icons3,
      color: '#3350d7',
      text: 'Change Password',
    },
    {
      name: 'notifications-outline',
      iconComponent: Icons,
      color: '#e19251',
      text: 'Notifications',
    },
    {
      name: 'pluscircleo',
      iconComponent: Icons4,
      color: '#55c0e6',
      text: 'Refer Freiends & Businesses',
    },
    {
      name: 'mobile1',
      iconComponent: Icons4,
      color: '#df4f98',
      text: 'Third Party Application',
    },
    {
      name: 'file-circle-question',
      iconComponent: Icons5,
      color: '#b069d1',
      text: 'FAQ',
    },
    {
      name: 'contacts',
      iconComponent: Icons6,
      color: '#07aa7b',
      text: 'Contact us',
    },
    {
      name: 'clipboard-pencil',
      iconComponent: Icons7,
      color: '#9251d6',
      text: 'Terms & Conditions',
    },
    {
      name: 'logout',
      iconComponent: Icons8,
      color: '#ec7d67',
      text: 'Logout',
    },
  ];

  return (
    <ScrollView>
      <SettingsScreen />
      {list.map((x, i) => {
        const IconComponent = x.iconComponent; // Use the imported component directly
        return (
          <View key={i} style={styles.body}>
            <View style={styles.container}>
              <View style={styles.upperContainer}>
                <View
                  style={{
                    ...styles.iconContainer,
                    backgroundColor: x.color,
                  }}>
                  <IconComponent
                    name={x.name}
                    style={{ color: 'white', fontSize: 18 }}
                  />
                </View>
                <Text style={styles.iconText}>{x.text}</Text>
              </View>
              <TouchableOpacity>
                <Icons2
                  name="chevron-thin-right"
                  style={{ color: '#8b8996', fontSize: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SettingsList;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.4,
  },
  container: {
    marginTop: 10,
    width: '90%',
    padding: 10,
    // backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  upperContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  iconContainer: {
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#8b8996',
    marginLeft: 4,
  },
});
