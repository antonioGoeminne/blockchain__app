import { useFonts } from "expo-font"
import { TabNavigator } from "./components/tab/TabNavigator"
import { NavigationContainer } from "@react-navigation/native"
import AppLoading from "expo-app-loading"

export default function App() {
  const[loaded] = useFonts({
    Roboto:require('./assets/fonts/Roboto-Light.ttf'),
  })

  if(!loaded) return <AppLoading />

 return(
<NavigationContainer>
  <TabNavigator />
</NavigationContainer>
 )
}