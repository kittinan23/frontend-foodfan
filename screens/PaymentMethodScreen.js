import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const PaymentMethodScreen = ({ navigation }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.cardsWrapper}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name='chevron-back-outline' size={30} style={{ color: 'rgba(150, 150, 150, 1)', marginTop: 5 }} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            alignSelf: 'center',
                            fontSize: 24,
                            fontFamily: 'Kanit-Bold',
                            color: '#333',
                        }}>
                        วิธีชำระเงิน
                    </Text>
                    <TouchableOpacity style={styles.card} onPress={() => { alert('CASH') }}>
                        <View style={styles.cardImgWrapper}>
                            <Ionicons name='cash-outline' size={50} color={'tomato'} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>เงินสด</Text>
                            <Text style={styles.cardDetails}>
                                สามารถชำระโดยตรงที่หน้าร้านและ โปรดตรวจสอบรายการในระบบหลังชำระเงินเสร็จ
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => { alert('Coming Soon!') }}>
                        <View style={styles.cardImgWrapper}>
                            <Ionicons name='phone-portrait-outline' size={50} color={'tomato'} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>PromptPay</Text>
                            <Text style={styles.cardDetails}>
                                บัญชีธนาคารที่ลงทะเบียนโดยอ้างอิงจาก หมายเลขประจำตัวประชาชน / ผู้เสียภาษี หรือ หมายเลขโทรศัพท์เคลื่อนที่
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => { alert('Coming Soon!') }}>
                        <View style={styles.cardImgWrapper}>
                            <Ionicons name='qr-code-outline' size={50} color={'tomato'} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Thai QR Code</Text>
                            <Text style={styles.cardDetails}>
                                QR Code ของธนาคารที่ลงทะเบียนเข้าร่วม Thai QR Code และ PromptPay
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => { alert('Coming Soon!') }}>
                        <View style={styles.cardImgWrapper}>
                            <Ionicons name='ios-card-outline' size={50} color={'tomato'} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Credit Card</Text>
                            <Text style={styles.cardDetails}>
                                รับทุกบัตรที่มีสัญลักษณ์ Visa หรือ Master Card
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(255, 99, 71, 0.5)'
    },
    innerContainer: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    cardsWrapper: {
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 10,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRightWidth: 0

    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 15,
        fontFamily: 'Kanit-Bold'
    },
    cardDetails: {
        fontFamily: 'Kanit-Regular',
        fontSize: 12,
        color: '#444',
    },
});

export { PaymentMethodScreen };