import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react';

export const CryptoMoney = ({ text, image }) => {

    const [star, setStar] = useState(false);
   return(
<>
<View style={styles.container}>
     <Text style={styles.text}>{text}</Text>
     <Image 
        style={styles.logo}
        source={{uri: `${image}`}}
     />
     <View style={styles.estrella} >
         <TouchableOpacity onPress={()=> setStar(!star)}>
         {star ?
         <Image
          style={styles.estrella_icon}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/616/616821.png',}}
         />
         : <Image style={styles.estrella_icon} source={{uri:'https://cdn-icons-png.flaticon.com/512/616/616655.png'}}/> 
         }
         </TouchableOpacity>
     </View>
</View>
    
</>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:10,
        borderWidth:5,
        borderRadius:4,
        width:300
    },
    text:{
        fontSize: 30,
        color:'#000',
        fontFamily:`Roboto`,
    },
    logo:{
        width: 50,
        height: 50
    },
    estrella:{
        alignSelf:'flex-end'
    },
    estrella_icon:{
        width:30,
        height:30
    }
})