import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

import { Feather } from '@expo/vector-icons'; 

const HotelDetail = ({ route, navigation: { goBack } }) => {

  const { hotel } = route.params;
  
  return (
    <View style={styles.container}>
      <Image 
        source={hotel.foto} 
        style={styles.foto}      
      />
      <Text style={styles.nombre}>{hotel.nombre}</Text>
      <View style={styles.ubicacionContainer}>
        <Feather 
          name="map-pin" 
          size={24} 
          color={Colors.borgona}
        />
        <Text style={styles.ubicacion}>{hotel.ubicacion}</Text>
      </View>
      <Text style={styles.descripcion}>{hotel.descripcion}</Text>
      {/* Otros detalles del hotel */}
      <TouchableOpacity 
        onPress={() => goBack()}
        style={styles.goBack}
      > 
        <Text style={styles.goBackText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
    foto: {
      width: width,
      height: height - 220,
      marginBottom: 10
    },
    nombre: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5,
    },
    ubicacionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 5,
      width: width - 260
    },
      ubicacion: {
        fontSize: 14,
        color: Colors.borgona,
        paddingLeft: 15,
      },
    descripcion: {
      fontSize: 12,
      marginBottom: 10,
      textAlign: 'justify'
    },
    goBack: {
      width: width - 260,
      marginTop: 5,
      marginBottom: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.charcoalGray,
      borderRadius: 30,
      padding: 13,
      shadowColor: Colors.black,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2
    },
      goBackText: {
        color: Colors.white,
        fontSize: 15
      }
});

export default HotelDetail;
