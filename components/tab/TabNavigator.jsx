import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Image, View } from 'react-native'
import {CryptoStack} from '../../routes/CryptoStack'
import {ProfileStack} from '../../routes/ProfileStack'
import { AppNavigator } from '../../routes/MainNavigation/AppNavigator'
import homeIcon from '../../assets/icons/home.svg'
import coin from '../../assets/icons/coin.svg'

const BottomTabs = createBottomTabNavigator()

export const TabNavigator = () => {

return(
<BottomTabs.Navigator initialRouteName='home'>
    <BottomTabs.Screen name='home' component={AppNavigator} screenOptions={{HeaderShown:false}} options={{
    tabBarIcon:({ focused }) =>(
    <View>
    <Image source={homeIcon} />
    </View>
    )
    }}></BottomTabs.Screen>
    <BottomTabs.Screen name='store' component={CryptoStack}  options={{
    tabBarIcon:({ focused }) =>(
    <View>
    <Image source={coin} />
    </View>
    )
    }}></BottomTabs.Screen>
<BottomTabs.Screen name='profile' component={ProfileStack}  options={{
    tabBarIcon:({ focused }) =>(
    <View>
    <Image source={coin} />
    </View>
    )
    }}></BottomTabs.Screen>
</BottomTabs.Navigator>
)
}