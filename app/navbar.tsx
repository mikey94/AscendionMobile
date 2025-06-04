import Navbar from '@/components/NavBar'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function navbar () {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#ffffff', height: '100%' }
})