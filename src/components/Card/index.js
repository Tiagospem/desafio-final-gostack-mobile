import React, { useMemo } from 'react'
import { parseISO, formatRelative } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Container, Content, Banner, Info, Name, Time } from './styles'
import { StyleSheet } from 'react-native'

export default function Card({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true
    })
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
          <Name>{data.title}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Content>
    </Container>
  )
}
