import { useRouter } from 'expo-router';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ascendion Test</Text>

      <View style={styles.buttonGroup}>
        <Button title="Go to Calculator" onPress={() => router.push('/calculator')} />
        <Button title="Go to Navbar Demo" onPress={() => router.push('/navbar')} />
        <Button title="Go to Two Sum" onPress={() => router.push('/twosum')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonGroup: {
    gap: 12,
  },
});