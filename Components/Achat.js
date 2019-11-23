import React from 'react'
import {View , TextInput , Button} from 'react-native'

class Achat  extends React.Component
{
 render(){

    return (
        <View> 
        <TextInput placeholder='Saisir un film'> </TextInput>
        <Button title= "Recherche " onPress={() => {}}>  </Button>
        </View>

    )
 }

}


export default Achat 