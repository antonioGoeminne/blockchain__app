import { AppNavigator } from "./routes/MainNavigation/AppNavigator"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"

export default function App() {
  const[loaded] = useFonts({
    Roboto:require('./assets/fonts/Roboto-Light.ttf'),
  })

  if(!loaded) return <AppLoading />

 return(
   <AppNavigator />
 )
}