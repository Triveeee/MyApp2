import {Layout, Text } from '@ui-kitten/components';
import React from 'react';
import styles from './style';


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


  export default Description;