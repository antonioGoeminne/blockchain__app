import { NavigationContainer } from "@react-navigation/native"
import { Home } from "../screens/Home"
import { StoreCrypto } from "../screens/StoreCrypto"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='comprar' component={StoreCrypto} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}