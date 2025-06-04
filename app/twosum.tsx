import TwoSum from '@/components/TwoSum'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function twoSum (){
  return (
    <SafeAreaView style={styles.container}>
      <TwoSum/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#ffffff', height: '100%' }
})