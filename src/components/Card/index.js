import React, { useMemo } from 'react'
import { parseISO, format } from 'date-fns'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {
  Container,
  Content,
  Banner,
  Info,
  Title,
  Time,
  Location,
  Organizer
} from './styles'
import { StyleSheet } from 'react-native'

export default function Card({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), 'MMM d, YYY - HH:mm')
  }, [data.date])

  const styles = StyleSheet.create({
    shadow: {
      elevation: 1
    }
  })

  return (
    <Container style={styles.shadow} past={data.past_meetup}>
      <Content>
        <Banner source={{ uri: data.banner.url }} />
        <Info>
          <Title>
            {data.id} {data.title}
          </Title>
          <Time>
            <FontAwesome5 name={'calendar-alt'} /> {dateParsed}hs
          </Time>
          <Location>
            <FontAwesome5 name={'map-marked-alt'} /> {data.location}
          </Location>
          <Organizer>
            <FontAwesome5 name={'user-cog'} /> Organizer: {data.organizer.name}
          </Organizer>
        </Info>
      </Content>
    </Container>
  )
}
