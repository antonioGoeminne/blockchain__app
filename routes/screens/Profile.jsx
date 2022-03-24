import { View, Text } from "react-native"
import { ImageSelector } from "../../components/ImageSelector"

export const Profile = () => {
return(
<View>
    <Text>Nombre de usuario</Text>
    <Text>Edad de usuario</Text>
    <Text>Mail del usuario</Text>
<ImageSelector onImage={image => console.log(image)}/>
</View>
)
}