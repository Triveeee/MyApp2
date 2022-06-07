import React from 'react';
import { ScrollView} from 'react-native';
import {ApplicationProvider, Layout, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Description from './Description';
import MyRadioGroup from './MyRadioGroup';
import ScroolImage from './ScroolImage';
import Title from './Title';


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

  export default App;

