import styled from 'styled-components/native'

export const Container = styled.View`
  opacity: ${props => (props.past ? 0.6 : 1)};
  margin-bottom: 15px;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Banner = styled.Image`
  border-top-left-radius: 6px;
  width: 100%;
  height: 130px;
`
export const Info = styled.View`
  padding: 20px;
`
export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`
export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`
