import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-paper"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { LinearGradient } from "expo-linear-gradient"
import { G, Path } from 'react-native-svg';
export function Home() {
    return (
        <SafeAreaView>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#f2f1f1", "#f2f3f7", "#f2f3f7", "#f2f3f7", "#f2f3f7", "#f2def7"]}
                useAngle="true"
                angle={4}
                angleCenter={{ x: 0, y: 0 }}
                style={{ paddingVertical: 10, paddingBottom: 50 }}
            >

                <Text style={{ fontSize: 30, fontWeight: "500", fontFamily: 'lucida grande', margin: 20 }}>Home</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View>
                        <TouchableOpacity style={{ width: 60, height: 60, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", }} >
                            <MaterialCommunityIcons name="flash" style={{ color: "#038df0", fontSize: 30 }} />

                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", marginVertical: 20 }}>Price alert</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <TouchableOpacity style={{ width: 60, height: 60, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", }} >
                            <MaterialCommunityIcons name="arrow-left-right" style={{ color: "#038df0", fontSize: 30 }} />

                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", marginVertical: 20 }}>Convert</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 60, height: 60, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", }} >
                            <MaterialCommunityIcons name="content-copy" style={{ color: "#038df0", fontSize: 30 }} />

                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", marginVertical: 20 }}>Compare</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 60, height: 60, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", }} >
                            <MaterialIcons name="stars" style={{ color: "#038df0", fontSize: 40 }} />

                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", marginVertical: 20 }}>WatchList</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={{ backgroundColor: "whitesmoke", borderTopEndRadius: "50%", borderTopLeftRadius: "50%", marginTop: -50 }}>
                <Text style={{ fontSize: 25, fontWeight: "500", fontFamily: 'lucida grande', margin: 20 }}>Your wallet</Text>
                <View style={{ backgroundColor: "white", marginBottom: 30, borderRadius: "30%", alignSelf: "center", margin: "auto", padding: 20, width: "90%", paddingVertical: 20 }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 20 }}>
                        <View>
                            <Text style={{ color: "lightgray", fontSize: 15 }}>Neo</Text>
                            <Text style={{ fontSize: 15 }}>Neo 0.2124</Text>
                        </View>
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen", }} >
                            <MaterialCommunityIcons name="table-furniture" style={{ color: "#038df0", fontSize: 30 }} />

                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ fontWeight: "300", fontSize: "25" }}>$ 32,2445.50</Text>
                            <Text>
                                <MaterialCommunityIcons name="chevron-down" style={{ color: "red", fontSize: 20 }} />
                                <Text style={{ fontSize: 18, color: "lightgray" }} >2.5%</Text>
                            </Text>
                        </View>
                    </View>

                </View>
                <Text style={{ fontSize: 25, fontWeight: "500", fontFamily: 'lucida grande', margin: 20 }}>Trending</Text>
                <View style={{ marginBottom: 30, display: "flex", flexDirection: "row", alignSelf: "center", margin: "auto", width: "90%", paddingVertical: 20 }}>
                    <TouchableOpacity style={{ width: 70, height: 70, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen", }} >
                        <MaterialCommunityIcons name="table-furniture" style={{ color: "#038df0", fontSize: 30 }} />

                    </TouchableOpacity>
                    <View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 20 }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Text style={{ color: "lightgray", fontSize: 25 }}>BitCoin</Text>
                                <Text style={{ fontSize: 15 }}>$ 32,2445.50</Text>
                            </View>

                        </View>
                        <View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ fontWeight: "300", fontSize: "1     5" }}>BTC</Text>
                                <Text>
                                    <MaterialCommunityIcons name="chevron-up" style={{ color: "green", fontSize: 20 }} />
                                    <Text style={{ fontSize: 18, color: "lightgray" }} >2.5%</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>



        </SafeAreaView>

    )

}