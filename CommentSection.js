import {Input, Layout , Button , Text} from '@ui-kitten/components';
import React from 'react';
import styles from './style';

function Comments() {
    const [value, setValue] = React.useState('');



    return(
        <Layout level= '3'>
            <Input
            style = {styles.input}
            placeholder='Inserisci commento'
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
            />

            <Button>
                invia 
            </Button>
            
            <Text>

            </Text>
        </Layout>);
}

export default Comments;