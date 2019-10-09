import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageBackground } from 'react-native'
import logo from '~/assets/logo.png'
import { signInRequest } from '~/store/modules/auth/actions'
import bg from '~/assets/bg.jpg'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignInLink,
  SignInLinkText,
  Logo
} from './styles'

export default function SignIn({ navigation }) {
  const passwordRef = useRef()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispatch(signInRequest(email, password))
  }

  return (
    <ImageBackground
      blurRadius={6}
      source={bg}
      style={{ width: '100%', height: '100%' }}>
      <Container>
        <Logo source={logo} resizeMode={'contain'} />
        <Form>
          <FormInput
            icon={'mail-outline'}
            keyboardType={'email-address'}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholder={'Enter your e-mail'}
            returnKeyType={'next'}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Enter your password"
            ref={passwordRef}
            returnKeyType={'send'}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            SignIn
          </SubmitButton>
        </Form>
        <SignInLink onPress={() => navigation.navigate('SignUp')}>
          <SignInLinkText>SignUp</SignInLinkText>
        </SignInLink>
      </Container>
    </ImageBackground>
  )
}
