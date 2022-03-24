import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Profile} from '../routes/screens/Profile'
import { NewMoney } from "./screens/NewMoney"
const Stack = createNativeStackNavigator()

export const ProfileStack = () =>{
return(
<Stack.Navigator >
    <Stack.Screen name='profile' component={NewMoney}/>
</Stack.Navigator>
)
}
