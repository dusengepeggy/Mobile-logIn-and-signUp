import { StyleSheet, SafeAreaView, Text, View, ImageBackground, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
var Card3 = ({ img, name, price }) => {
    return (
        <View style={{ marginVertical:20}}>
            <View style={{ width: 25, height: 25, marginLeft: 120, marginTop: 5, position: "absolute", zIndex: 100, backgroundColor: "whitesmoke", borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons size={15 } name='cards-heart-outline'></MaterialCommunityIcons>
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
    var productList1 = [
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
    var productList2 = [
        {
            id: 1,
            name: "Black dress",
            price: 44.00,
            img: "https://static.wixstatic.com/media/035b0a_1ea374229be44de7a432824d988d6ab6~mv2.jpg/v1/fill/w_347,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/035b0a_1ea374229be44de7a432824d988d6ab6~mv2.jpg"
        },
        {
            id: 2,
            name: "Blue dress",
            price: 44.00,
            img: "https://cdn-img.prettylittlething.com/7/6/9/f/769f0bfdbd1da2aa6c8f73e8756fdb68c2001f27_cnc7634_1.jpg"
        },
        {
            id: 3,
            name: "Beige dress",
            price: 44.00,
            img: "https://img.fruugo.com/product/7/24/697423247_max.jpg"
        },
        {
            id: 4,
            name: "Other color Dress",
            price: 44.00,
            img: "https://www.runwaygoddess.com.au/cdn/shop/files/HollywoodNavy4_0149fc9c-2555-4da8-b5fd-10a5df59525e_1024x.jpg?v=1688097189"
        }
    ];
    return (
        <>
            <Text style={{ fontSize: 20, padding: 20 }}>Product Result ({productList1.length+productList2.length})</Text>

            <View style={{ marginHorizontal: 18, display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 20 }}>
                <ScrollView  >
                    {
                        productList1.map((item, index) => {
                            return (
                                <Card3 key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
                            )
                        })
                    }
                </ScrollView>
                <ScrollView  >
                    {
                        productList2.map((item, index) => {
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