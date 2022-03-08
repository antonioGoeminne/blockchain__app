import { data } from "../../data";
import { RenderMoney } from "../../components/cryptoMoney/RenderMoney";
import { StyleSheet, View, FlatList, SafeAreaView, StatusBar,Button} from 'react-native';
import React, { useState } from 'react';


export const Home = ({ navigation }) => {
  
const [depositar, setDepositar] = useState(false);

    return (
        <View style={styles.container}>
         <SafeAreaView>
          <FlatList
              data={data}
              renderItem={RenderMoney}
              keyExtractor={item => item.id}
            />
            {
              !depositar &&
              <Button onPress={() => setDepositar(!depositar)}
              title='Comprar Crypto'
              />
            }
         </SafeAreaView>
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        width:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: StatusBar.currentHeight || 0
      },
      buttonWrap:{
        flexDirection: "row",
        backgroundColor:'#ffff',
        justifyContent:'space-around'
      }
    });
    