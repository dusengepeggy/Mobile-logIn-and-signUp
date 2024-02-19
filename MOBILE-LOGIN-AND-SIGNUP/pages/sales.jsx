import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from "react-native-paper"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { LinearGradient } from "expo-linear-gradient"
import Menu from "../assets/components/menu.jsx"
import BestSellerList from "../assets/components/bestSeller.jsx"
export function Sales() {
    return (
        <SafeAreaView>
            <View style={{width:"90%",alignSelf:"center",marginVertical:20,display:"flex",flexDirection:"row",justifyContent:"space-between",justifycontent:"center"}}>
                <TouchableOpacity style={{backgroundColor:"whitesmoke" , width:30,height:30,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <MaterialCommunityIcons name="arrow-left" size={20} style={{color:"gray"}} />
                </TouchableOpacity>
                <Text style={{fontSize:20,fontWeight:"600"}}>Search </Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="tune-vertical" color="gray" size={25} />
                </TouchableOpacity>

            </View>
            <TextInput
                
                underlineColor="transparent"
                theme={{ roundness: "50%", colors: { text: 'blue', primary: 'white', } }}
                style={{ backgroundColor: "#f3f3f6", width:"90%",alignSelf:"center", borderBottom: "none", borderRadius: "50%", marginVertical: 5, height: 50 }}
                label="Search..."
                mode="offline"
                left={<TextInput.Icon icon={"magnify"} color={"lightgray"} style={{ backgroundColor: "transparent", }} />}
                right={<TextInput.Icon icon={"tune-variant"} color={"black"} style={{ backgroundColor: "transparent", }} />}
            >

            </TextInput>
            <Menu/>
            <BestSellerList/>
        </SafeAreaView>
    )
}