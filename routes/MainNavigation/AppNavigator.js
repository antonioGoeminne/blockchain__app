import { NavigationContainer } from "@react-navigation/native"
import { Home } from "../screens/Home"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='detail' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}