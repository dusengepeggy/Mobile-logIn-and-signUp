import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image ,TouchableOpacity} from 'react-native';
import { TextInput } from "react-native-paper"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {Login} from "./pages/login"
import {Home} from "./pages/home"
import {Sales} from "./pages/sales.jsx"

// import {google} from "./assets/google.png"
export default function App() {
  return (
    // <SafeAreaView style={{ backgroundColor: "whitesmoke", width: "100%", height: "100%" }}>
    //   <Image source={require("./assets/logIn.jpg")} style={{ height: "35%", alignSelf: "center", width: "60%" }} />
    //   <View style={{ width: "90%", alignSelf: "center" }}>
    //     <Text style={{fontSize:25 , fontWeight:"600",alignSelf:"center",marginBottom:10}}>Register </Text>
    //     <TextInput
    //       textContentType='text'
    //       underlineColor="transparent"
    //       theme={{roundness: "50%", colors: {text: 'black', primary: 'whitesmoke',}}}
    //       style={{ backgroundColor: "white", borderBottom: "none",borderRadius:"50%", marginVertical: 5 , height:50}}
    //       label="Username"
    //       mode="offline"
          
    //       left={<TextInput.Icon  icon={"account-outline"} color={"#f6a749"} style={{backgroundColor: "#fde9e7", }}  />}
    //     />
    //     <TextInput
    //       textContentType='emailAddress'
    //       underlineColor="transparent"
    //       theme={{roundness: "50%",colors: {text: 'black', primary:'whitesmoke'}}}
    //       style={{ backgroundColor: "white", borderBottom: "none",borderRadius:"50%", marginVertical: 5, height:50 }}
    //       label="Email"
    //       mode="offline"
    //       left={<TextInput.Icon  icon={"email-outline"} color={"#5fc78f"} style={{backgroundColor: "#dff5e9",}}  />}
    //     />
    //     <TextInput
    //       secureTextEntry
    //       textContentType='password'
    //       underlineColor="transparent"
    //       theme={{roundness: "50%",colors: {text: 'black', primary:'whitesmoke'} }}
    //       style={{ backgroundColor: "white", borderBottom: "none",borderRadius:"50%", marginVertical: 5, height:50 }}
    //       label="password"
    //       mode="offline"
    //       left={<TextInput.Icon icon={"lock-outline" } color={"#9f9df5"}  style={{backgroundColor:"#ebecff",}} />}
    //     />
    //     < TouchableOpacity style={{ backgroundColor: "#191B32",marginVertical:25, padding: 12, width:"100%", alignSelf: "center", display: "flex", alignItems: "center", borderRadius: "50%" }}>
    //                 <Text style={{ color: 'whitesmoke', fontWeight: "300", fontSize: 18 }}>Sign In</Text>
    //             </TouchableOpacity>
    //   </View>
     
    //   <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "70%", alignSelf: "center",marginTop:"5%",  }}>
    //     <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
    //       <MaterialCommunityIcons name="facebook" style={{ color: "#038df0", fontSize: 30 }} />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
            
    //         <FontAwesome name="google" style={{ color:"red" ,fontSize: 30, padding: 5, }} />
           
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
    //       <FontAwesome name="apple" style={{ color: "black", fontSize: 30 }} />
    //     </TouchableOpacity>

    //   </View>


    // </SafeAreaView>
    // <Login/>
    // <Home/>
    <Sales/>
  )
}


