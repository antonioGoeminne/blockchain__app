import { useSelector } from "react-redux"
import {FlatList} from 'react-native'

export const PlaceListScreen = ({ navigation }) => {

const places = useSelector(state => state.places.places)

const renderItem =  (data) =>(

<MoneyItem title={data.item.title} image ={data.item.image}/>
)

return(
<FlatList data={places}
    keyExtractor={item => item.id}
    renderItem={renderItem}
/>
)

}