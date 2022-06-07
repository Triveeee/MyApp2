import {Layout, Text, RadioGroup , Radio} from '@ui-kitten/components';
import styles from './style';
import React from 'react';


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

  export default MyRadioGroup;