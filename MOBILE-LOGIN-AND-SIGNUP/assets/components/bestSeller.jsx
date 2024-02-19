import { StyleSheet, SafeAreaView, Text, View, ImageBackground, Image, Button, TouchableOpacity, ScrollView } from 'react-native';


function Card2({ id, name, price, img }) {
    return (
        <View>
            <ImageBackground
                source={{ uri: img }}
                style={{ width: 250, height: 150, margin: 15 }}
                resizeMode='cover'
                borderRadius={20}
            >
                <View  style={{ backgroundColor: "#d69548", alignItems:"center", width: "50%", padding: 5,margin:15, borderRadius:50 }}>
                <Text
                   
                >
                    # {id} Best Seller
                </Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:15,backgroundColor:"black",borderEndEndRadius:20,borderBottomLeftRadius:20,marginTop:48,opacity:0.5,}}
                    
                >
                    <Text style={{color:"white"}}>{name}</Text>
                    <Text style={{color:"white"}}>$ {price}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default BestSellerList = () => {
    var Sales = [
        {
            id: 1,
            name: "Silk dress",
            price: 44.00,
            img: "https://aritzia.scene7.com/is/image/Aritzia/medium/s24_04_a08_115918_1274_on_a.jpg"
        },
        {
            id: 2,
            name: "corset",
            price: 44.00,
            img: "https://aritzia.scene7.com/is/image/Aritzia/medium/s24_04_a08_115918_1274_on_a.jpg"
        },
        {
            id: 3,
            name: "Jeans",
            price: 44.00,
            img: "https://aritzia.scene7.com/is/image/Aritzia/medium/s24_04_a08_115918_1274_on_a.jpg"
        },
    ]

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal:18 }}>
            {
                Sales.map((item, index) => {
                    return (
                        <Card2 key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
                    )
                })
            }
        </ScrollView>
    )

}

