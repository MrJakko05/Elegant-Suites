import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

const HotelItem = ({ hotel }) => {
  return (
    <View>
      <Image 
        source={hotel.foto} 
        style={styles.foto}      
      />
      <View style={styles.dataContainer}>
        <View style={styles.generalData}>
          <Text style={styles.nombre}>{hotel.nombre}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating:</Text>         
            <AntDesign 
              name="star" 
              size={16} 
              color='gold' 
            /> 
            <Text style={styles.ratingNumber}>{hotel.rating}</Text>
          </View>
        </View>
        <View style={styles.precioContainer}>  
            <MaterialIcons 
              name="attach-money" 
              size={16} 
              color={Colors.verdeEsmeralda} 
            />
            <Text style={styles.precio}>{hotel.precio}</Text>       
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  foto: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
    generalData: {
      width: width - 140
    },
      nombre: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.black
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
        ratingText: {
          fontSize: 13,
          paddingRight: 5
        },
        ratingNumber: {
          paddingLeft: 5
        },
    precioContainer: {
      width: 60,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }, 
      precio: {
        color: Colors.verdeEsmeralda
      }
});

export default HotelItem;