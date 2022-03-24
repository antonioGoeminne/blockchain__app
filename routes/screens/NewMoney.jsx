import { useState } from "react"
import {View, TextInput, Button, ScrollView} from 'react-native'
import { useDispatch } from "react-redux"
import {addMoney} from '../../store/actions/places.action'
export const NewMoney = ({navigation}) => {

const dispatch = useDispatch()
const[title, setTitle] = useState('')

const handleTitleChange = text => setTitle(text)

const handleSave = () =>{
dispatch(addMoney(title, image))
navigation.navigate('moneys')
}



return(
<ScrollView>
<TextInput
value={title}
onChangeText={handleTitleChange}>
</TextInput>
<Button title='grabar moneda' onPress={handleSave}></Button>
</ScrollView>
)
}