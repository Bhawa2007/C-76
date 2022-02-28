import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, ImageBackground, Image} from 'react-native';
import MeteorScreen from './Meteors';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={
                   styles.container
                }>
                <SafeAreaView style={styles.androidSafeArea}>
                

                </SafeAreaView>
                <ImageBackground source={require("../assets/bg_image.png")} style={styles.backgroundImg}>
                <View style={styles.titleBar}>
                <Text>Iss Tracker App</Text>

                </View>
                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("IssLocation")}>
                <Text style={styles.routeText}>Iss Location</Text>
                <Text style={styles.knowMore}>{"know more--->"}</Text>
                <Text style={styles.bgDigit}>1</Text>
                <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Meteors")}>
                <Text style={styles.routeText}>Meteors</Text>
                <Text style={styles.knowMore}>{"know more--->"}</Text>
                <Text style={styles.bgDigit}>2</Text>
                <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    flex:1,
    },
    androidSafeArea:{
    marginTop:Platform.OS === "android"? StatusBar.currentHeight:0
    },
    backgroundImg:{
flex:1,
resizeMode:"cover"
    },
    titleBar: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "purple",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    routeCard:{
    flex:0.25,
    marginTop:50,
    marginLeft:50,
    marginRight:50,
    borderRadius:30,
    backgroundColor:"white"
    }
    })