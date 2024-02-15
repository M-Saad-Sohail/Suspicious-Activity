import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import { colors, sizes, spacing } from '../../constants/theme';

const MainHeader = ({ title }) => {
  // const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  // console.log(insets);
  return (
    <View style={styles.container}>
      <Icon
        icon="Hamburger"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity 
       onPress={() => navigation.navigate("Addvideo")}
      >
        <Icon icon="plus" size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    paddingVertical: 5,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default MainHeader;
