import { useFonts } from "expo-font"
import { TabNavigator } from "./components/tab/TabNavigator"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import store from "./store"
import AppLoading from "expo-app-loading"

export default function App() {
  const[loaded] = useFonts({
    Roboto:require('./assets/fonts/Roboto-Light.ttf'),
  })

  if(!loaded) return <AppLoading />

 return(
<Provider store={store}>
<NavigationContainer>
  <TabNavigator />
</NavigationContainer>
</Provider>
 )
}