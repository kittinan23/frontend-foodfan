import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, Dimensions, Image, Button, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { add } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Checkbox, RadioButton } from 'react-native-paper';
import { StarRating } from '../components/StarRating';

var shopUri = [
    'https://i.pinimg.com/originals/8b/52/0c/8b520ccac4a4372d62d33770ece3c529.jpg'
];

export class FoodOrderScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            static_stdPrice: 50,
            stdPrice: 40,
            orderPrice: 50,
            boxChecked: false,
            radioChecked: '',
            text: '',
            dataOption: [
                {
                    optionTitle: 'วัตถุดิบหลัก',
                    condition: {
                        chooseMin: 1,
                        chooseMax: 0,
                    },
                    data: [
                        { lable: 'หมู', addPrice: 0, checked: false },
                        { lable: 'หมูกรอบ', addPrice: 10, checked: false },
                        { lable: 'เนื้อ', addPrice: 10, checked: false },
                        { lable: 'ไก่', addPrice: 0, checked: false },
                        { lable: 'กุ้ง', addPrice: 15, checked: false },
                        { lable: 'หมึก', addPrice: 15, checked: false }
                    ]
                },
                {
                    optionTitle: 'เพิ่ม',
                    condition: {
                        chooseMin: 0,
                        chooseMax: 0,
                    },
                    data: [
                        { lable: 'ไข่ดาว', addPrice: 7, checked: false },
                        { lable: 'ไข่เจียว', addPrice: 10, checked: false },
                        { lable: 'ไข่เค็ม', addPrice: 15, checked: false },
                        { lable: 'ไข่เยี่ยวม้า', addPrice: 15, checked: false }
                    ]
                },
                {
                    optionTitle: 'ปริมาณ',
                    condition: {
                        chooseMin: 1,
                        chooseMax: 1,
                    },
                    data: [
                        { lable: 'น้อย', addPrice: -5, checked: false },
                        { lable: 'ธรรมดา', addPrice: 0, checked: false },
                        { lable: 'พิเศษ', addPrice: 10, checked: false },
                        { lable: 'จัมโบ้', addPrice: 20, checked: false }
                    ]
                },
                {
                    optionTitle: 'รสชาติ',
                    condition: {
                        chooseMin: 1,
                        chooseMax: 1,
                    },
                    data: [
                        { lable: 'รสอ่อน', addPrice: 0, checked: false },
                        { lable: 'รสธรรมดา', addPrice: 0, checked: false },
                        { lable: 'รสจัด', addPrice: 0, checked: false },
                        { lable: 'เผ็ด', addPrice: 0, checked: false }
                    ]
                }
            ]
        };
    }

    addQuantity() {
        if (this.state.quantity < 100) {
            this.setState({ quantity: this.state.quantity + 1 })
        }
    }

    removeQuantity() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    createOption(dataList) {
        let st = [];

        for (let i in dataList) {
            // Header Option
            st.push(
                <View key={i} style={{ marginBottom: 25 }}>
                    <View style={styles.headerOption}>
                        <Text style={{ fontFamily: 'Kanit-Regular' }}>{dataList[i].optionTitle}</Text>
                    </View>
                    {this.createinnerOption(dataList, i)}
                </View>
            )
        }

        return st;
    }

    updateOptionDataChecked(i, j, itemAttributes) {
        let tempArr = this.state.dataOption;
        tempArr[i].data[j] = itemAttributes;

        this.setState({ dataOption: tempArr })
    }

    createinnerOption(item, index_i) {
        let st = [];
        // Body Option

        for (let index_j in item[index_i].data) {
            st.push(
                <View key={index_j}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', left: 0 }}>
                            <Checkbox
                                status={item[index_i].data[index_j].checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.updateOptionDataChecked(index_i, index_j, {
                                        lable: this.state.dataOption[index_i].data[index_j].lable,
                                        addPrice: this.state.dataOption[index_i].data[index_j].addPrice,
                                        checked: !this.state.dataOption[index_i].data[index_j].checked
                                    })
                                    if (this.state.dataOption[index_i].data[index_j].checked) {
                                        this.setState({ stdPrice: this.state.stdPrice + this.state.dataOption[index_i].data[index_j].addPrice })
                                    } else {
                                        this.setState({ stdPrice: this.state.stdPrice - this.state.dataOption[index_i].data[index_j].addPrice })
                                    }
                                }}
                            />
                            <Text style={{ fontFamily: 'Kanit-Regular' }}>{item[index_i].data[index_j].lable}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 0, marginRight: 15 }}>
                            <Text>
                                {
                                    item[index_i].data[index_j].addPrice > 0 ? '+' :
                                        item[index_i].data[index_j].addPrice > 0 ? '-' : ''
                                }

                                {item[index_i].data[index_j].addPrice}
                            </Text>
                        </View>
                    </View >
                    <View style={{ borderBottomColor: 'rgba(111, 111, 111, 0.1)', borderBottomWidth: 2 }} />
                </View>
            )
        }


        return st;
    }

    remark() {
        return (
            <View>
                <TextInput
                    multiline
                    placeholder={''}
                    style={{ borderColor: 'gray', borderWidth: 0.5, borderRadius: 10, marginTop: 5, borderStyle: 'dashed' }}
                    onChangeText={text => { this.setState({ text: text }) }}
                    onContentSizeChange={(event) => {
                        this.setState({ height: event.nativeEvent.contentSize.height })
                    }}
                    value={this.state.text}
                />
            </View>
        )
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.mainHeaderContainer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Ionicons name='back icon' size={30} style={{ color: 'rgba(150, 150, 150, 1)', marginTop: 5 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainBodyContainer}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: shopUri[0] }} style={styles.foodImage} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 25, marginLeft: 10 }}>ข้าวกะเพราหมูสับ</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* <Ionicons name='ios-restaurant' size={18} /> */}
                                <Text style={{ fontFamily: 'Kanit-Regular' }}>ร้านชาคุมะ ปากพนัง</Text>
                            </View>
                        </View>
                        <Text style={[styles.menuTitle, { position: 'absolute', right: 0 }]}>{this.state.stdPrice} บาท</Text>
                    </View>
                    {/* <View style={{ borderBottomColor: 'rgba(111, 111, 111, 0.5)', borderBottomWidth: 2 }} /> */}
                </View>
                <View style={styles.mainFooterContainer}>
                    <ScrollView style={{ flex: 1 }}>
                        {this.createOption(this.state.dataOption)}
                        <View style={{ marginBottom: 10 }}>
                            {/* remark */}
                            <View style={styles.headerOption}>
                                <Text>หมายเหตุถึงร้านค้า</Text>
                            </View>
                            {this.remark()}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.orderBtnContainer}>
                    <TouchableOpacity style={styles.quantityBtn} onPress={() => { this.removeQuantity() }}>
                        <Ionicons name='remove-outline' size={30} style={styles.iconDetail} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.orderBtn]}onPress={() => navigate('ExploreScreen')}>
                        <Text style={{ fontFamily: 'Kanit-Regular' }}>เพิ่มไปยังตะกร้า x {this.state.quantity}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quantityBtn} onPress={() => { this.addQuantity() }}>
                        <Ionicons name="add-outline" size={30} style={styles.iconDetail} />

                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
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
        // borderRadius: 10,
    },
    mainBodyContainer: {
        flex: 1.5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
        marginBottom: 5,
        backgroundColor: 'white',
        // borderRadius: 10
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    mainFooterContainer: {
        flex: 2,
        padding: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    headerOption: {
        width: '100%',
        backgroundColor: 'rgba(111, 111, 111, 0.1)',
        padding: 10,
        borderRadius: 10
    },
    foodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    checkbox: {},
    quantityBtn: {
        backgroundColor: 'tomato',
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuTitle: {
        fontFamily: 'Kanit-Bold',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    orderBtnContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderBtn: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    }
})