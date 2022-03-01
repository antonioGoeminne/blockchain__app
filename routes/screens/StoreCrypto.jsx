import { Text, TextInput, View, Button } from "react-native"

export const StoreCrypto = () => {
    return(
        <>
            <View>
                <Text>!Comprá tu crypto favorita¡</Text>
                <Text>Elige el monto</Text>

                <TextInput></TextInput>
                <Text>Aqui se vera lo que el usuario valla escribiendo como monto</Text>
                <Button
                  title='Elige tu Crypto'
                ></Button>
                <View>
                   <Text> Elige entre tus crypto favoritas</Text>
                </View>
            </View>
        </>
    )
}