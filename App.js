import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Keyboard, Modal } from 'react-native';

import ModalResult from './src/Components/ModalResult';

export default function App() {
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [resultModal, setResultModal] = useState('');

  function closeModal(){
    setModalVisible(!modalVisible);
    setAlcool('');
    setGasolina('')
  }

  function openModal(alcool, gasolina){
    if (alcool === '' || gasolina === '' ){
      alert('Digite os valores correspondentes ')
      return;
    }else{
      let alcoolNumber = parseFloat(alcool)
      let gasolinaNumber = parseFloat(gasolina)

      let result = alcoolNumber / gasolinaNumber;

      if(result < 0.7){
          Keyboard.dismiss();
          setResultModal('Compensa utilizar Alcool');
          setModalVisible(!modalVisible);
          
      }else{
        Keyboard.dismiss()
        setResultModal('Compensa utilizar gasolina');
        setModalVisible(!modalVisible);
    }}

    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaHeader}>
        <Image source={require('./src/images/logo.png')} 
        style={{marginBottom: 12}}
        />
        <Text style={styles.title}> Qual melhor opção ? </Text>
      </View>


      <View style={styles.areaInput}>
        <Text style={styles.titleInput}> Álcool / preço por litro: </Text>
          <TextInput
          style={styles.input}
          value={alcool}
          onChangeText={(text) => setAlcool(text)}
          keyboardType='numeric'
          placeholder='Ex: 5,56'
          />


        <Text style={styles.titleInput}> Gasolina / preço por litro: </Text>
          <TextInput
          style={styles.input}
          value={gasolina}
          onChangeText={(text) => setGasolina(text)}
          keyboardType='numeric'
          placeholder='Ex: 3,24'
          />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.button} 
        onPress={() => openModal(alcool, gasolina)}
        >
          <Text style={styles.textButton}> Calcular </Text>
        </TouchableOpacity>
      </View>


      <Modal transparent={true} animationType='slide' visible={modalVisible}>
        <ModalResult closeModal={ () => closeModal()} resultModal={resultModal} alcool={alcool} gasolina={gasolina} />
      </Modal>

  


    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F4F',
  },
  areaHeader:{
    marginTop: 35,
    marginBottom: 25,
    alignItems: 'center'
  },
  title:{
    fontSize: 26,
    fontWeight: '500',
    color: '#FFF',
  },
  areaInput:{
    justifyContent: 'center',
    marginHorizontal: 12
  },
  input:{
    padding: 10,
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#FFF',
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleInput:{
    fontSize: 18,
    marginBottom: 8,
    color: '#FFF'
  },
  areaBtn:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginHorizontal: 12,
  },
  button:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FF6347',
    width: '100%',
  },
  textButton:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF'
  },
});
