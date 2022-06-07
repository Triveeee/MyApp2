import {TouchableWithoutFeedback , View} from 'react-native';
import { Text , Icon , Button} from '@ui-kitten/components';
import React from 'react';
import styles from './style';



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


export default Title;