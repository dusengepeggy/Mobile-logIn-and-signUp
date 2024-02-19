import { StyleSheet, SafeAreaView, Text, View, Image,Button, TouchableOpacity,ScrollView } from 'react-native';

function Card ({name}){
    return(
        <TouchableOpacity
            // title={`${name}`}
            style={{color:"black",marginHorizontal:7,borderWidth:2,borderColor:"whitesmoke",paddingVertical:8,paddingHorizontal:20,borderRadius:"18%"}}
            
        >
        <Text>{name}</Text>    
        
        </TouchableOpacity>
    )
}

export default Menu =()=>{
    var MenuItems=[
        {
            id:1,
            name:"All"
        },
        {
            id:2,
            name:"Man"
        },
        {
            id:3,
            name:"Women"
        },
        {
            id:4,
            name:"Dress"
        },
        {
            id:5,
            name:"Baby"
        }
    ];
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{margin:18}} >
            {
                MenuItems.map((item,index)=>{
                    return(
                        <Card
                            key={index}
                            name={item.name}
                        />
                    )
                })
            }
        </ScrollView>
    )
}