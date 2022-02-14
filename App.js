import { data } from './data';
import { RenderMoney } from './components/cryptoMoney/RenderMoney'
import { StyleSheet, View, FlatList, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
     <SafeAreaView>
      <FlatList
          data={data}
          renderItem={RenderMoney}
          keyExtractor={item => item.id}
        />
     </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: StatusBar.currentHeight || 0
  },
  text: {
    fontSize: 20,
    padding: 10,
    margin:10,
    backgroundColor: '#ccc',
    borderColor: '#ccc'
  }
});
