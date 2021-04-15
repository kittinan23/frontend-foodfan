import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function AddressScreen(props) {
  const {
    Head,
    Body,
    containerStyle,
    containerStyle2,
    closeButtonStyle,
    checkoutButtonStyle } = styles;
  const [name, Setname] = useState('kittinan');
  const [phone, Setphone] = useState('0822891747');
  return (
    <View style={Head}>
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 25, marginTop: 20,marginLeft: 10 }}>รายละเอียดการจัดส่ง</Text>
      <ScrollView>
        <View style={Body}>
        </View>

        <View style={styles.container}>
          <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 15, marginLeft: 10 }}> ที่อยู่จัดส่ง* : </Text>
          <TextInput
            multiline
            style={styles.input}
            placeholder=''
            onChangeText={(val) => Setname(val)} />

          <View style={styles.container}>
            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 15, marginLeft: 10 }}> ชื่อของท่าน* : </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder='e.g.Kittinan Thongorn'
              onChangeText={(val) => Setname(val)} />

            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 15, marginLeft: 10 }}> หมายเลขโทรศัพท์* : </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder='e.g.0822891747'
              onChangeText={(val) => Setname(val)} />

            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 15, marginLeft: 10 }}> อีเมล (ถ้ามี) : </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder=''
              onChangeText={(val) => Setname(val)} />

            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 15, marginLeft: 10 }}> ข้อมูลเพิ่มเติม (ถ้ามี) : </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder=''
              onChangeText={(val) => Setname(val)} />
          </View>
          
          <Button
        title="ถัดไป"
        color="tomato"
        onPress={() => {props.navigation.navigate('checkbillScreen')}}
      />
        </View>
      </ScrollView>
    </View>

  );
}

export default AddressScreen;

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
    width: 100,
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
    margin: 10,
    width: 375
  }
};