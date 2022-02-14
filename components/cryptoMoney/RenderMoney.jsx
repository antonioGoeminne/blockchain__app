import { CryptoMoney } from "./CryptoMoney"

export const RenderMoney = ({ item }) => {
    return(
        <CryptoMoney text={item.name} image={item.image}/>
    )
}