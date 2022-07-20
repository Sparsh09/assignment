import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../components/productCard';



const HomeScreen = ({navigation}) => {
  
  const [data, setData] = useState([]);
  const dataFetch = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const datas = await resp.json();
    setData(datas);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const [cartItem , setCartItem] = useState(0);
  const addItem = () => {
    setCartItem(cartItem + 1);
  }
  const removeItem = () => {
    setCartItem(cartItem - 1);
  }
  return (
    <View style={styles.container}>
      <View
          style={{
            height: 45,
            backgroundColor: 'green',
            borderWidth: 0,
            width: "80%",
            marginLeft: -6,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginBottom : 20,
            marginTop : 20
          }}>
          <Text style={{ color: 'white' }}>Number of Items in Cart :- {cartItem}</Text>
        </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ProductCard details={item} add = {addItem} remove = {removeItem} navigation = {navigation}/>;
        }}
        showsVerticalScrollIndicator = {false}
      />
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

{/*  */}
