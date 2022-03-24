import {View, Text, Image} from 'react-native'

export const MoneyItem = ({image, title}) => {
<View>
<Image source={{uri:image}}/>
<Text>{title}</Text>
</View>

}