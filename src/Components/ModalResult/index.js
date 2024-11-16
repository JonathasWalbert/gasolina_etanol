import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ModalResult( { closeModal, resultModal, alcool, gasolina } ) {
 return (
  

      <View style={styles.container}> 

      <View style={styles.modal}>
        <Image source={require('../../images/gas.png')} style={{marginVertical: 25}} />

        <Text style={styles.title}> {resultModal} </Text>

        <Text style={{fontSize: 22, color: '#FFF', fontWeight: 'bold'}}>Com os preços: </Text>

        <Text style={styles.textTitle}>Álcool: R$ {alcool} </Text>
        <Text style={styles.textTitle}>Gasolina: R$ {gasolina} </Text>

          <TouchableOpacity 
          style={styles.button}
          onPress={closeModal}>
            <Text style={styles.textBtn}> Calcular novamente </Text>
          </TouchableOpacity>
        </View>

      </View>
    
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal:{
    backgroundColor: '#4F4F4F',
    width: '100%',
    height: '80%',
    borderRadius: 5,
    alignItems: 'center'
  },
  title:{
    fontSize: 25,
    color: '#228B22',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  textTitle:{
    color: '#FFF',
    marginTop: 12,
  },
  button:{
    backgroundColor: '#4F4F4F',
    height: 40,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderColor: '#FF6347',
    borderWidth: 2,
    borderRadius: 8
  },
  textBtn:{
    color: '#FF6347',
    fontWeight: '500',
    fontSize: 18
  }
})