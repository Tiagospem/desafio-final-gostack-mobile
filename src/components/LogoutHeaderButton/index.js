import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HeaderButton from '~/components/HeaderButton'

// import { Container } from './styles'

export default function LogoutHeaderButton() {
  return (
    <HeaderButton>
      <FontAwesome5 name="power-off" size={25} color="#666" />
    </HeaderButton>
  )
}
