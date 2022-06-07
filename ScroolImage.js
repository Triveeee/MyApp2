import React from 'react';
import {Image} from 'react-native';
import { Layout, ViewPager} from '@ui-kitten/components';
import styles from './style';



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
        <Layout
          style={styles.imageContiner}
          level='2'>
           <Image 
            style = {styles.image}
            source = {{uri : 'https://cdn.sklum.com/it/wk/1079086/sedia-in-velluto-glamm.jpg'}}/>
        </Layout>
        <Layout
          style={styles.imageContiner}
          level='2'>
           <Image 
            style = {styles.image}
            source = {{uri: 'https://cdn.sklum.com/it/wk/1079092/sedia-in-velluto-glamm.jpg?cf-resize=gallery' }}/>
        </Layout>
      </ViewPager>  
    );
  }

  export default ScroolImage;