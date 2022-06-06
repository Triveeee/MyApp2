import React from 'react';
import { StyleSheet , Image , View } from 'react-native';
import {ApplicationProvider, Layout, Text, IconRegistry , RadioGroup , Radio, ButtonGroup } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

function Ttitle(props) {
  return(
    <Text category = 'h4' style =  {styles.title}>
      {props.titolo}
    </Text>
  )
}

function ChairImage(){
  let image = 'https://www.arredocasastore.com/4279-thickbox_default/sedia-da-giardino-in-teak-maryland-.jpg';

  let [courrentImage , setImage] = React.useState(image);

  function ChangeImage(){
    setImage('parola');
  }

  return (
    <Layout style = {styles.imageContiner} level = '3'>
      <Image
        style = {styles.image}
        source={{uri: 'https://www.arredocasastore.com/4279-thickbox_default/sedia-da-giardino-in-teak-maryland-.jpg'}}
      />
    </Layout>
  );
}

function MyRadioGroup () {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [choose , setChoose] = React.useState('compra');

  function ChangeState(index){

    let parola;

    if(index === 0){
      parola = 'compra'
    }
    if(index === 1){
      parola = 'vendi'
    }
    if(index === 2){
      parola = 'carello'
    }

    setSelectedIndex(index)
    setChoose(parola)
  }

  return(
    <>
      <Text category='h6' style = {styles.text}>
        tua scelta : {choose}
      </Text>

      <RadioGroup
        style={styles.radio}
        selectedIndex={selectedIndex}
        onChange={ChangeState}>

        <Radio>compra</Radio>
        <Radio>vendi</Radio>
        <Radio>carello</Radio>
      </RadioGroup>
    </>
  )
}

function Description() {
  return(
    <>
      <Text category='h4' style = {styles.text}>
        Description
      </Text>

      <Layout style = {styles.text} level = '3'>
        <Text category = 'h6'>Colore:   <Text>marrone</Text></Text>
        <Text category = 'h6'>Materiale:   <Text>legno</Text></Text>
        <Text category = 'h6'>Dimensione Articolo:   <Text>57 x 48 x 89 cm</Text></Text>
        <Text category = 'h6'>Peso massimo racomandato:   <Text>120 Chilogrammi</Text></Text>
        <Text category = 'h6'>Peso articolo:   <Text>120 Chilogrammi</Text></Text>
      </Layout>
    </>
  );
}


function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}></IconRegistry>
    <ApplicationProvider {...eva} theme = {eva.light}>
      <Layout level = '4'>
        <Ttitle titolo = "Product details"></Ttitle>
        <ChairImage/>
        <MyRadioGroup></MyRadioGroup>
        <Description></Description>
      </Layout>

    </ApplicationProvider>
    </>
  )};


export default App

const styles = StyleSheet.create({

  title: {
    textAlign: 'center'
  },

  imageContiner : {
    alignItems: 'center'
  },

  image : {
    width : 240,
    height : 400,
  },

  radio : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding : 20,
  },

  text : {
    padding : 20,
  }
});
