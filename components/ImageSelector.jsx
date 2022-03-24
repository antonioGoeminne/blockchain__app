import {Button, Image, Text, View} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'

export const ImageSelector = ()=>{

const [pickedUri, setPickedUri] = useState();


const verifyPermissions = async ()=>{
const {status} = await ImagePicker.requestCameraPermissionsAsync()

if(status !== 'granted'){
Alert.alert('Permisos insuficientes',
    'Necesita dar permisos de la camara para usar la aplicacion',
[{text: 'Ok'}],
)
return false
}
return true
}
const handleTakeImage = async ()=>{
const isCameraOk = await verifyPermissions()
if (!isCameraOk) return

const image = await ImagePicker.launchCameraAsync({
allowsEditing: true,
aspect:[16, 9],
quality: 0.8
})

setPickedUri(image.uri);
props.onImage(image.uri)
}

return(

<View>

    <View>
    {!pickedUri ? <Text>No hay imagen seleccionada</Text>
    : <Image source={{uri: pickedUri}}/>
    
    }
    </View>
    <Button onPress={handleTakeImage} title='Tomar Foto'></Button>
</View>
)
}