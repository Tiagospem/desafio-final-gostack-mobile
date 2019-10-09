import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Main from '~/pages/Main'
import Profile from '~/pages/Profile'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

import SelectProvider from '~/pages/New/SelectProvider'
import SelectDateTime from '~/pages/New/SelectDateTime'
import Confirm from '~/pages/New/Confirm'

export default isSigned =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp
        }),
        App: createBottomTabNavigator(
          {
            Main,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20
                    }
                  }
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Subscriptions',
                tabBarIcon: (
                  <Icon
                    name={'event'}
                    color={'rgba(51, 51, 51, 0.6)'}
                    size={20}
                  />
                )
              }
            },
            Profile
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeBackgroundColor: 'rgba(51, 51, 51, 0.1)',
              keyboardHidesTabBar: true,
              activeTintColor: '#515151',
              inactiveTintColor: 'rgba(51, 51, 51, 0.6)',
              style: {
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: 'rgba(51, 51, 51, 0.1)'
              }
            }
          }
        )
      },
      {
        initialRouteName: isSigned ? 'App' : ''
      }
    )
  )
