import Calculator from '@/components/Calculator'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function calculator () {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#ffffff', height: '100%' }
})