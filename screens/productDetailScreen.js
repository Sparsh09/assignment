import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ProductScreen = (props) => {
  const details = props.navigation.state.params.detail;
  const cartItem = props.navigation.state.params.cartItems;

  const addItem = () => {
    Alert.alert('Success', 'Product has been added to cart');
    props.navigation.state.params.add();
    props.navigation.navigate('Home');
  };
  const deleteItem = () => {
    Alert.alert('Success', 'Product has been removed to cart');
    props.navigation.state.params.remove();
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
        <Image style={styles.productImg} source={{ uri: `${details.image}` }} />
        <Text style={styles.name}>{details.title}</Text>
        <Text style={styles.price}>Rs{details.price}</Text>
        <Text style={styles.description}>{details.description}</Text>
      </View>
      <View style={styles.addToCarContainer}>
        <TouchableOpacity style={styles.shareButton} onPress={() => addItem()}>
          <Text style={styles.shareButtonText}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteItem()}>
          <Text style={styles.deleteButtonText}>Remove From Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  shareButton: {
    marginTop: 20,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
    width: 200,
    marginLeft: '25%',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  deleteButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
    width: 200,
    marginLeft: '25%',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ProductScreen;
