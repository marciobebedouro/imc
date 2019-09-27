/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, Button, StyleSheet} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [erro, setError] = useState('');

  const onchangeTextHandler = texto => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(texto)) {
      setPeso(texto);
    }
  };

  const onchangeTextHandler2 = texto => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(texto)) {
      setAltura(texto);
    }
  };

  const calcular = () => {
    const resultado = parseFloat(peso) / Math.pow(parseFloat(altura), 2);
    return Alert.alert('Calculo IMC', resultado.toString());
  };

  // const somar = (numero1, numero2) => {
  //   const resultado = numero1 + numero2;
  //   return resultado;
  //   }

  return (
    <View>
      <Text>Digite seu peso</Text>
      <TextInput
        value={peso}
        keyboardType="numeric"
        onChangeText={texto => onchangeTextHandler(texto)}
      />

      <Text>Digite sua altura</Text>
      <TextInput
        value={altura}
        keyboardType="numeric"
        onChangeText={texto => onchangeTextHandler2(texto)}
      />

      <Button
        title="Calcular"
        onPress={() => {
          calcular();
        }}
      />
    </View>
  );
};

export default App;
