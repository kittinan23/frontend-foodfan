import React from 'react';
import { SafeAreaView, Text, Dimensions, Image, Button, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { StarRating } from '../components/StarRating';

var shopUri = [
    'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
];

const ShopDetailScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.mainHeaderContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='chevron-back-outline' size={30} style={{ color: 'rgba(150, 150, 150, 1)', marginTop: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainBodyContainer}>
                <View style={{ flex: 1, }}>
                    <Image source={{ uri: shopUri[0] }} resizeMode="contain" style={styles.shopImage} />
                </View>
            </View>
            <View style={styles.bodyContentContainer}>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Cafe Amazon - Central Changwattana</Text>
                    <StarRating ratings={5} reviews={101} />
                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Official Time */}
                            <Ionicons name='time-outline' size={15} style={styles.iconDetail} />
                            <Text style={styles.cardTitleDetails}>ทุกวัน 10:00-21:00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardDetailsContainer}>
                    <Text style={styles.cardDetailTitleContent}>Introduction</Text>
                    <Text style={styles.cardDetailContent}>{"\n\t\t\t"}250 Character</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={[styles.navigateBtn, { marginTop: 20, marginBottom: 5, backgroundColor: 'tomato', }]}>
                        <Ionicons name='menu-outline' size={20} style={styles.iconDetail} />
                        <Text>สั่งอาหาร</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navigateBtn, { backgroundColor: 'rgba(222, 222, 222, 1)', }]}>
                        <Ionicons name='call-outline' size={20} style={styles.iconDetail} />
                        <Text>โทรหาร้าน</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(255, 99, 71, 0.5)'
    },
    mainHeaderContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
    },
    mainBodyContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        // borderRadius: 10
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    // coverContainer: {
    //     width: '100%',
    //     height: '100%',
    //     borderRadius: 10,
    // },
    shopImage: {
        flex: 1,
        position: 'relative',
        width: '100%',
        borderRadius: 10,
    },
    shopImageDetail: {
        width: '90%',
        height: 80,
        position: 'absolute',
        left: '5%',
        bottom: -50,
        zIndex: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    bodyContentContainer: {
        flex: 2,
        marginTop: 0,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    cardInfo: {
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    cardTitleDetails: {
        fontSize: 12,
        color: '#444',
    },
    iconDetail: {
        color: 'rgba(150, 150, 150, 1)',
        marginRight: 5
    },
    cardDetailsContainer: {
        marginTop: 20
    },
    cardDetailTitleContent: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    cardDetailContent: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    navigateBtn: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }

})


export { ShopDetailScreen };