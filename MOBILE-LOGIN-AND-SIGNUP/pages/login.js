import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-paper"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export function Login() {
    return (
        <SafeAreaView style={{ backgroundColor: "#f3f5f6", height: "100%", width: "100%" }}>
            <Image source={require("../assets/signup.jpg")}  style={{ alignSelf: "center", height: "50%", borderBotton: "50%" }} />
            <View style={{ width: "90%", alignSelf: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "600", alignSelf: "center", marginBottom: 10 }}>Log in </Text>
                <TextInput
                    textContentType='text'
                    underlineColor="transparent"
                    theme={{ roundness: "30%", colors: { text: 'black', primary: 'whitesmoke', } }}
                    style={{ backgroundColor: "white", borderBottom: "none", height: 50 }}
                    label="Username"
                    mode="offline"

                    left={<TextInput.Icon icon={"account-outline"} color={"#f6a749"} style={{ backgroundColor: "#fde9e7", }} />}
                />
                <TextInput
                    secureTextEntry
                    textContentType='password'
                    underlineColor="transparent"
                    theme={{ colors: { text: 'black', primary: 'whitesmoke' } }}
                    style={{ backgroundColor: "white", borderBottom: "none", borderRadius: "30%", marginVertical: 2, height: 50 }}
                    label="password"
                    mode="offline"
                    left={<TextInput.Icon icon={"lock-outline"} color={"#9f9df5"} style={{ backgroundColor: "#ebecff", }} />}
                />
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={{ color: '#9f9df3', fontWeight: "300", fontSize: 18 }}>forgot password</Text>
                    </TouchableOpacity>
                    < TouchableOpacity style={{ width: "40%", backgroundColor: "#191B32", marginVertical: 25, padding: 12, alignSelf: "center", display: "flex", alignItems: "center", borderRadius: "50%" }}>
                        <Text style={{ color: 'whitesmoke', fontWeight: "300", fontSize: 18 }}>Log In</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "70%", alignSelf: "center", marginTop: "5%", }}>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
                    <MaterialCommunityIcons name="facebook" style={{ color: "#038df0", fontSize: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >

                    <FontAwesome name="google" style={{ color: "red", fontSize: 30, padding: 5, }} />

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
                    <FontAwesome name="apple" style={{ color: "black", fontSize: 30 }} />
                </TouchableOpacity>

            </View><View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "70%", alignSelf: "center", marginTop: "5%", }}>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
                    <MaterialCommunityIcons name="facebook" style={{ color: "#038df0", fontSize: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >

                    <FontAwesome name="google" style={{ color: "red", fontSize: 30, padding: 5, }} />

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", shadowOpacity: 0.2, shadowRadius: 30, shadowColor: "#038df0" }} >
                    <FontAwesome name="apple" style={{ color: "black", fontSize: 30 }} />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}