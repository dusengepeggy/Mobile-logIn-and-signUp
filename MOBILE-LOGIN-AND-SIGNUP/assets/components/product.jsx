import { StyleSheet, SafeAreaView, Text, View, ImageBackground, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
var Card3 = ({ img, name, price }) => {
    return (
        <View style={{ marginVertical:20}}>
            <View style={{ width: 25, height: 25, marginLeft: 120, marginTop: 5, position: "absolute", zIndex: 100, backgroundColor: "white", borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons size={20} name='cards-heart-outline'></MaterialCommunityIcons>
            </View>
            <View style={{ width: 160, height: 180 }}>
                <Image borderRadius={15} source={{ uri: img }} style={{ width: "100%", height: "100%" }}  ></Image>
            </View>
            <Text style={{ color: "gray", fontSize: 18, marginVertical: 5 }}>{name}</Text>
            <Text style={{ fontSize: 15 }}>$ {price}</Text>
        </View>
    )
}

export default function Product() {
    var productList = [
        {
            id: 1,
            name: "Black dress",
            price: 44.00,
            img: "https://www.lulus.com/images/product/xlarge/5217110_943702.jpg?w=375&hdpi=1"
        },
        {
            id: 2,
            name: "Blue dress",
            price: 44.00,
            img: "https://www.beginningboutique.co.nz/cdn/shop/products/ManhattanSlipFormalDressNavy-4_750x.jpg?v=1677007043"
        },
        {
            id: 3,
            name: "Beige dress",
            price: 44.00,
            img: "https://i.pinimg.com/474x/86/f1/d6/86f1d606f7c9a56abf42af5d96192adf.jpg"
        },
        {
            id: 4,
            name: "Other color Dress",
            price: 44.00,
            img: "https://www.beginningboutique.co.nz/cdn/shop/products/Manhattan_Formal_Slip_Dress_Wine_06_1200x.progressive.jpg?v=1655759915"
        }
    ];
    return (
        <>
            <Text style={{ fontSize: 20, padding: 20 }}>Product Result ({productList.length})</Text>

            <View style={{ marginHorizontal: 18, display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 20 }}>
                <ScrollView  >
                    {
                        productList.map((item, index) => {
                            return (
                                <Card3 key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
                            )
                        })
                    }
                </ScrollView>
                <ScrollView  >
                    {
                        productList.map((item, index) => {
                            return (
                                <Card3 key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
                            )
                        })
                    }
                </ScrollView>
            </View>

        </>
    )

}