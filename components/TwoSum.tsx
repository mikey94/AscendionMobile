import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TwoSum () {
  const [input, setInput] = useState<string>('');
  const [numberArr, setNumberArr] = useState<number[]>([]);
  const [target, setTarget] = useState<string>('');
  const [inputError, setInputError] = useState<string|null>(null);
  const [targetError, setTargetError] = useState<string|null>(null);
  const [returnValue, setReturnValue] = useState<number[]>([]);

  const onChangeInput = (value: string) => {
    setInput(value)
    setInputError(null)
    setReturnValue([])
  }
  const onChangeTargetValue = (value: string) => {
    setTarget(value)
    setTargetError(null)
    setReturnValue([])
  }
  const handleInput = () => {
    const items = input.split(',').map(item => item.trim());
    
    const isValid = items.every(item => item !== '' && !isNaN(Number(item)))

    if (!isValid) {
      setNumberArr([])
      setInputError('Invalid (number list): Please provide numbers which separated by commas (e.x: 1, 3, 5)');
    } 
    else if (target === '' || Number.isNaN(Number(target)) ) {
      setTargetError('Invalid target: Target value should be a number and not empty');
    }
    else {
      const numbers = items.map(Number).sort((a, b) => a - b)
      setNumberArr(numbers)
      setInputError(null)
      setReturnValue(twoSum(numbers, Number(target)))
    }
  }
  const twoSum = (numbers: number[], target: number): number[] =>  {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
      const sum = numbers[left] + numbers[right]
      if (sum === Number(target)) {
        return [left+1, right+1]
      }
      if (sum<target) {
        left++
      } else {
        right--;
      }
    }
    return []
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two Sum</Text>
      <TextInput
        placeholder='Input number list'
        value={input}
        onChangeText={value => onChangeInput(value)}
        style={styles.textInput}
      />
      {
        numberArr.length >0 && (<Text style={styles.numberArrText}>Sorted Number list: {JSON.stringify(numberArr)}</Text>)
      }
      <TextInput
        placeholder='Input target value'
        value={target}
        onChangeText={value => onChangeTargetValue(value)}
        style={styles.textInput}
      />
      {
        inputError !== null && (<Text style={styles.errText}>{inputError}</Text>)
      }
      {
        targetError !== null && (<Text style={styles.errText}>{targetError}</Text>)
      }
      <TouchableOpacity style={styles.addBtn} onPress={() => handleInput()}>
                <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      {
        returnValue.length > 0 && (<Text style={styles.returnText}>Indexes: {JSON.stringify(returnValue)}</Text>)
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
      marginLeft: 50,
      marginRight: 50,
      flexWrap: 'wrap'
    },
    returnText: {
      fontSize:20,
      fontWeight: '600',
      marginTop: 10
    },
    numberArrText: {
      marginTop: 5
    }
});
