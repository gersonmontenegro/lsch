import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from '../features/main';
import Dictionary from '../features/dictionary';
import Favorites from '../features/favorites';

const TabNavigator = createBottomTabNavigator({
    Translator: {
        screen: Main,
    },
    Dictionary: {
        screen: Dictionary,
    },
    Favorites: {
        screen: Favorites,
    },
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            const IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Translator') {
                iconName = 'ios-chatboxes';
            } else if (routeName === 'Dictionary') {
                iconName = 'ios-book';
            } else if (routeName === 'Favorites') {
                iconName = 'ios-star';
            }
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
});

export default createAppContainer(TabNavigator);
