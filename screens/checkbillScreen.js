import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
export function CheckbillScreen(props) {
  const {
    Head,
    Body,
    containerStyle,
    containerStyle2,
    closeButtonStyle,
    checkoutButtonStyle } = styles;
  const [name, Setname] = useState('kittinan');
  const [phone, Setphone] = useState('0822891747');
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={Head}>
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 22, marginTop: 20,marginLeft: 10}}>ท่านสะดวกชำระค่าบริการผ่านช่องทางใด</Text>
      <ScrollView>
        <View style={Body}>
        </View>
        <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 20, marginLeft: 10 }}> ชำระเงินสด  </Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 20, marginLeft: 10 }}> พร้อมเพย์* : </Text>
          <TextInput
            multiline
            style={styles.input}
            placeholder=''
            onChangeText={(val) => Setname(val)} />

      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 20, marginLeft: 10 }}> โอนผ่านธนาคาร* : </Text>
          <TextInput
            multiline
            style={styles.input}
            placeholder=''
            onChangeText={(val) => Setname(val)} />
    

          <Button
            title="สั่งออเดอร์"
            color="tomato"
            onPress={() => { props.navigation.navigate('Home') }}
          />
        </View>
        
      </ScrollView>
    </View>

  );
}

export default CheckbillScreen;

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