import { Home } from "../screens/Home"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name='home' component={Home} />
            </Stack.Navigator>
    )
}