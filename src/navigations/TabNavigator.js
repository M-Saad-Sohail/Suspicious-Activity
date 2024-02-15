import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FavoriteScreen from '../screens/FavoriteScreen';
// import EditProfile from '../screens/EditProfileScreen';
import SettingsListScreen from '../screens/SettingsListScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Icon from '../components/shared/Icon';
import { colors, sizes } from '../constants/theme';
import { StyleSheet, Animated } from 'react-native';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
// import icons from '../constants/icons';

const tabs = [
  {
    name: 'Home',
    screen: HomeNavigator,
  },
  {
    name: 'Search',
    screen: SearchNavigator,
  },
  {
    name: 'Notification',
    screen: NotificationScreen,
  },
  {
    name: 'Setting',
    iconSize: 28,
    screen: SettingsListScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'white',
            height: 60,
            borderTopWidth: 1,
            borderTopColor: 'gray'
          },
        }}>
        {tabs.map(({ name, screen,  iconSize }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      icon={name}
                      size={iconSize ? iconSize : 40}
                      style={{
                        tintColor: focused ? colors.primary : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 6,
    backgroundColor: colors.primary,
    opacity: 0.7,
    zIndex: 100,
  },
});

export default TabNavigator;
