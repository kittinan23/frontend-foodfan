import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Button, Picker } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 25,alignSelf: 'center',marginTop: 20 }}>ตะกร้าสินค้าของคุณ</Text>
      <ScrollView>
        <View style={Body}>

          <View style={styles.orderBtnContainer}>
            <TouchableOpacity style={[styles.orderBtn]}>
              <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>ข้าวผัดกะเพาะหมูสับ </Text>
            </TouchableOpacity>
          </View>

          <View style={containerStyle}>
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>ราคา                                        ฿57</Text>
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>ค่าจัดส่ง                                  ฟรี</Text>
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>ค่าบริการ                                ฿5</Text>
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>รหัสส่วนลด  </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder='รหัสส่วนลด (ถ้ามี)'
              onChangeText={(val) => Setname(val)} />
              <Button
              title="ใช้"
              color="tomato"
              onPress={() => { props.navigation.navigate() }}
            />  
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>ยอดรวมสุทธิ                             ฿62</Text>

            <Button
              title="เพิ่มรายการสั่งซื้อ"
              color="tomato"
              onPress={() => { props.navigation.navigate('MenuBack') }}
            />
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>เวลาจัดส่ง  </Text>

            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 225 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="เร็วที่สุด - 10.00 น." value="เร็วที่สุด - 10.00 น." />
              <Picker.Item label="เร็วที่สุด - 10.30 น." value="เร็วที่สุด - 10.30 น." />
              <Picker.Item label="เร็วที่สุด - 11.00 น." value="เร็วที่สุด - 11.00 น." />
              <Picker.Item label="เร็วที่สุด - 11.30 น." value="เร็วที่สุด - 11.30 น." />
              <Picker.Item label="เร็วที่สุด - 12.00 น." value="เร็วที่สุด - 12.00 น." />
              <Picker.Item label="เร็วที่สุด - 12.30 น." value="เร็วที่สุด - 12.30 น." />
              <Picker.Item label="เร็วที่สุด - 13.00 น." value="เร็วที่สุด - 13.00 น." />
              <Picker.Item label="เร็วที่สุด - 13.30 น." value="เร็วที่สุด - 13.30 น." />
              <Picker.Item label="เร็วที่สุด - 14.00 น." value="เร็วที่สุด - 14.00 น." />
              <Picker.Item label="เร็วที่สุด - 14.30 น." value="เร็วที่สุด - 14.30 น." />
              <Picker.Item label="เร็วที่สุด - 15.00 น." value="เร็วที่สุด - 15.00 น." />
              <Picker.Item label="เร็วที่สุด - 15.30 น." value="เร็วที่สุด - 15.30 น." />

            </Picker>

            <Button
              title="ถัดไป"
              color="tomato"
              onPress={() => { props.navigation.navigate('AddressScreen') }}
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
    alignSelf: 'center',
    padding: 8,
    margin: 10,
    width: 300
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
};