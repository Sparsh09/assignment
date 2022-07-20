import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const ProductCard = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Product', {
          detail: props.details,
          add: props.add,
          remove: props.remove,
        })
      }>
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.subCardView}>
            <Image
              source={{ uri: `${props.details.image}` }}
              resizeMode="contain"
              style={{
                borderRadius: 25,
                height: 60,
                width: 60,
              }}
            />
          </View>

          <View style={{ marginLeft: 12, width: '75%' }}>
            <Text
              numberOfLines={0}
              style={{
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {props.details.title}
            </Text>
            <View
              style={{
                marginTop: 4,
                borderWidth: 0,
                width: '85%',
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 12,
                }}>
                Rs. {props.details.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  mainCardView: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: randomColor(),
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProductCard;
