import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LogoMini from "./Assets/LogoMini";

const Header = () =>{
    return(
        <View style={styles.header}>
            <LogoMini width={150}/>
            <Text style={styles.headerTitle}>Binge Calculator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:0.1,
        flexDirection:'row',
        paddingVertical:20,
        paddingBottom:0,
        alignContent:'center',
        justifyContent:'space-between',
    },
    headerTitle:{
        color:'#fff',
        textAlignVertical:'center',
        fontSize:20,
        borderBottomColor:'#E50914',
        borderBottomWidth:3,
        marginVertical:5,
        fontFamily:'Poppins-Bold',
        fontWeight:'600'
    }
})

export default Header;