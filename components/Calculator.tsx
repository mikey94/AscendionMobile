import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [sum, setSum] = useState<number|null>(null);
  const [error, setError] = useState<string>('');
  const onSubmit = () => {
    if (firstNumber === '' || secondNumber === '') {
      setError('Fields should not be an empty!')
    }
    else if (Number.isNaN(Number(firstNumber)) || Number.isNaN(Number(secondNumber))) {
      setError('Not a valid number!')
    }
    else {
      const sum = Number(firstNumber) + Number(secondNumber)
      setSum(sum)
    }
  }
  const onChangeFirstNumber = (value: string) => {
    setFirstNumber(value)
    setError('')
    setSum(null)
  }
  const onChangeSecondNumber = (value: string) => {
    setSecondNumber(value)
    setError('')
    setSum(null)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Add Two Numbers</Text>
        <TextInput
          onChangeText={value => onChangeFirstNumber(value)}
          value={firstNumber?.toString()}
          placeholder='First Number' 
          style={styles.textInput}/>
        <TextInput
          onChangeText={value => onChangeSecondNumber(value)}
          value={secondNumber?.toString()}
          placeholder='Second Number' 
          keyboardType='numeric' 
          style={styles.textInput}/>
        {
          error !== '' && (<Text style={styles.errText}>{error}</Text>)
        }
        <TouchableOpacity style={styles.addBtn} onPress={() => onSubmit()}>
          <Text style={styles.btnText}>Add Two Numbers</Text>
        </TouchableOpacity>
        {
          sum !== null && (<Text style={styles.totalText}>Total: {sum}</Text>)
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: Colors.light.background,
      flexDirection: 'column',
      paddingTop: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    textInput: {
      marginTop: 20,
      width: '80%',
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: Colors.light.inputBorder,
      borderRadius: 5,
    },
    addBtn: {
      width: '60%',
      borderRadius: 10,
      height: 40,
      borderColor: 'gray',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.light.button
    },
    btnText: {
      color: Colors.light.buttonText
    },
    errText: {
      color: Colors.light.error,
      marginTop: 15,
      flexWrap: 'wrap'
    },
    totalText: {
      fontSize: 20,
      marginTop: 10,
      fontWeight: '600'
    }
});