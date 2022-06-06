import React from 'react';
import { StyleSheet , Image ,TouchableWithoutFeedback , ScrollView , View} from 'react-native';
import {ApplicationProvider, Layout, Text, IconRegistry , RadioGroup , Radio, Icon  , ViewPager , Button} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
function StarIcon(props){

  const [secureTextEntry, setSecureTextEntry] = React.useState(false);

  function Change () {
    return(
      setSecureTextEntry(!secureTextEntry)
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Change}>
      <Icon {...props} name= 'star' fill = {secureTextEntry ? 'black' : '#8F9BB3' } ></Icon>
    </TouchableWithoutFeedback>
  );
}

function Title(props) {
  return(
      <View style = {styles.titlecontainer}>
        <Text category = 'h5' style =  {styles.title}>
          {props.titolo}
        </Text>
        <Button accessoryLeft = {StarIcon} disabled = {true} style = {styles.button} appearance='ghost'></Button>    
      </View>)
}

function ScroolImage(){
  
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function ChangeImage(index){
    setSelectedIndex(index);
  }

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={ChangeImage}>
      <Layout
        style={styles.imageContiner}
        level='2'>
        <Image 
          style = {styles.image}
          source = {{uri: 'https://cdn.sklum.com/it/wk/1079151/sedia-in-velluto-glamm.jpg'}}/>
      </Layout>
      <Layout
        style={styles.imageContiner}
        level='2'>
         <Image 
          style = {styles.image}
          source = {{uri: 'https://cdn.sklum.com/it/wk/1079163/sedia-in-velluto-glamm.jpg'}}/>
      </Layout>
    </ViewPager>  
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
      <Layout level= '3'>
      <Text category='h6' style = {{paddingLeft : 20 , paddingTop : 10}}>
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
      </Layout>
    </>
  )
}

function Description() {
  return(
    <>

      <Layout style = {styles.text} level = '3'>
        <Text category='h6' style = {{paddingBottom : 10}}>
          Description
        </Text>
        <Text category = 'label'>Colore:   <Text category= 'c1'>marrone</Text></Text>
        <Text category = 'label'>Materiale:   <Text category= 'c1'>legno</Text></Text>
        <Text category = 'label'>Dimensione Articolo:   <Text category= 'c1'>57 x 48 x 89 cm</Text></Text>
        <Text category = 'label'>Peso massimo racomandato:   <Text category= 'c1' >120 Chilogrammi</Text></Text>
        <Text category = 'label'>Peso articolo:   <Text category= 'c1'>120 Chilogrammi</Text></Text>
      </Layout>
    </>
  );
}


function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}></IconRegistry>
    <ApplicationProvider {...eva} theme = {eva.light}>
    <ScrollView>
    <Layout level = '1'>
        <Title titolo = "Product details"></Title>
        <ScroolImage/>
        <MyRadioGroup></MyRadioGroup>
        <Description></Description>
    </Layout>
    </ScrollView>
    </ApplicationProvider>
    </>
  )};


export default App

const styles = StyleSheet.create({


  imageContiner : {
    alignItems: 'center',
    justifyContent: 'center',
  },

  image : {
    width : 240,
    height : 400,
  },

  radio : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft : 20,
  },

  text : {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom : 500,
  },

  icon : {
    height : 30,
    weight : 30,
  }
  ,
  titlecontainer : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop : 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button : {
    backgroundColor: 'white',
  }
  
});
