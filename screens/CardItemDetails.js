import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {data} from '../model/datafood';
import Card from '../components/Card';

const CardListScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('CardOrderDetails', {itemData: item})}
            />
        );
    };

    return (
      <View style={styles.container}>
        <FlatList 
        //ตรงนี้
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
