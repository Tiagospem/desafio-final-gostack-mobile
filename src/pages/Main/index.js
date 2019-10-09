import React, { useEffect, useState } from 'react'
import { withNavigationFocus } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '~/services/api'
import Card from '~/components/Card'
import { Container, Background, List } from './styles'
import CustomHeader from '~/components/CustomHeader'

function Main({ isFocused }) {
  const [meetups, setMeetups] = useState([])

  async function loadMeetups() {
    const response = await api.get('meetups')
    setMeetups(response.data)
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups()
    }
  }, [isFocused])

  /**
  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`)
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at
            }
          : appointment
      )
    )
  }
  */

  return (
    <Background>
      <Container>
        <CustomHeader
          leftComponent={{ icon: 'menu', color: '#333' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#333' } }}
          rightComponent={{ icon: 'home', color: '#333' }}
          placement="center"
        />
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Card data={item} />}
        />
      </Container>
    </Background>
  )
}

Main.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'list'} color={tintColor} size={20} />
  )
}
export default withNavigationFocus(Main)
