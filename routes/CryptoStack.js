import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StoreCrypto } from '../routes/screens/StoreCrypto'

const Stack = createNativeStackNavigator()

export const CryptoStack = () =>{
return(
<Stack.Navigator >
    <Stack.Screen name='store' component={StoreCrypto}/>
</Stack.Navigator>
)
}
