import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionLi from './components/SectionLi'
import LoginForm from './components/LoginForm'
import ContactList from './screens/Contact/ContactList'

const App = () => {
  return (
    <>
    {/* <SectionLi/> */}
    {/* <LoginForm/> */}
    <ContactList/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})