
import { StyleSheet } from 'react-native';


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
    } ,

    input : {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom : 500,

    }
});

export default styles;