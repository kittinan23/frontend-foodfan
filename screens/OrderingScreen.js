import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Button, Picker } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Avatar
  } from 'react-native-paper';
  
export function OrderScreen(props) {
  const {
    Head,
    Body,
    containerStyle,
    containerStyle2,
    closeButtonStyle,
    checkoutButtonStyle } = styles;
  const [name, Setname] = useState('kittinan');
  const [phone, Setphone] = useState('0822891747');
  const [selectedValue, setSelectedValue] = useState("java");
  
  return (
    <View style={Head}>
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 25,alignSelf: 'center',marginTop: 20 }}>ออเดอร์ของคุณ</Text>
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 18, marginLeft: 10,marginTop: 20,alignSelf: 'center' }}>ร้านชาคุมะ</Text>
      <ScrollView>
        <View style={Body}>

          <View style={styles.orderBtnContainer}>
            <TouchableOpacity style={[styles.orderBtn]}>
              <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 18,alignSelf: 'center' }}>เวลาที่จะได้รับอาหาร โดยประมาณ </Text>
            </TouchableOpacity>
          </View>

          <View style={containerStyle}>
            <Text style={{ marginTop: 5, fontSize: 20,alignSelf: 'center', fontWeight: 'bold' }}>15 - 25 นาที</Text>
            
            <Avatar.Image 
            
            source={{
              uri: 'https://scontent.fbkk4-2.fna.fbcdn.net/v/t1.15752-9/170921390_896401154533486_8026620940396151988_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeELqFxKGWlgmv2sufgO1YHe7duBrhy-g3vt24GuHL6De2_w5PSuG3KEdtpOOQtQBHZ-R4nTBIsBairpJMBN2re0&_nc_ohc=waMuzYzKwT8AX_g_Cvy&_nc_ht=scontent.fbkk4-2.fna&oh=9dbb6bafcc7aea2a70994538fcd9780d&oe=609BEE06',
            }}
            size={125}
            alignSelf='center'
          />
            <Text style={{  fontSize: 20,marginTop: 10 ,alignSelf: 'center', fontWeight: 'bold' }}>กำลังเตรียมอาหาร</Text>
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>รายละเอียดออเดอร์</Text>
            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 18,marginTop: 20 }}>ออเดอร์ของคุณ : #mwgm-saz1</Text>
            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 18,marginTop: 20 }}>ออเดอร์ของคุณจาก : ชาคุมะปากพนัง</Text>
            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 18,marginTop: 20 }}>ที่อยู่สำหรับจัดส่ง : หอพัก 5 ลักษณานิเวศ</Text>
            

            <Button
              title="กลับสู่หน้าหลัก"
              color="tomato"
              onPress={() => { props.navigation.navigate('Home') }}
            />
          </View>
        </View>
      </ScrollView>
    </View>

  );
};

export default OrderScreen;

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  containerStyle2: {
    alignItems: 'center',
    position: 'relative',
  },
  closeButtonStyle: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonStyle: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Head: {
    fontSize: 30,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    padding: 5,
  },
  Body: {
    flex: 1,
    padding: 60,
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 30,
    fontSize: 30,
  },
  searchBox: {
    position: 'absolute',
    marginTop: 150,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 20,
    width: 300
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},
};