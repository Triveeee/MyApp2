import React from 'react';
import { StyleSheet } from 'react-native';
import {ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

function Ttitle(props) {
  return(
    <Text category = 'h4' style =  {styles.title}>{props.titolo}</Text>
  )
}
function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}></IconRegistry>
    <ApplicationProvider {...eva} theme = {eva.dark}>
      <Layout>
        <Ttitle titolo = "Product details"></Ttitle>
      </Layout>

    </ApplicationProvider>
    </>
  )};


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center'
  },
});
