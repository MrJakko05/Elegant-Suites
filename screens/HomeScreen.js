import { View, FlatList, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import HotelItem from '../components/HotelItem';
import { hoteles } from '../data/hoteles';
import { FontAwesome, FontAwesome5, AntDesign, SimpleLineIcons  } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const HomeScreen = (props) => {

  const handleHotelesPress = (hotel) => {
    props.navigation.navigate("HotelDetail", { hotel: hotel } );
  };

  const renderItem = ({ item }) => (  
    <TouchableOpacity 
      onPress={() => handleHotelesPress(item)}
      style={styles.hotelItem}
    >
      <HotelItem hotel={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Seccion del Header */}
      <View style={styles.headerContainer}>
        <View style={styles.logoDetails}>
          <FontAwesome5 
            name="hotel" 
            size={24} 
            color={Colors.borgona}
          />
          <Text style={styles.headerText}>Elegant Suites</Text>
        </View>
        <FontAwesome 
          name="star" 
          size={24} 
          color={Colors.borgona}
        />
      </View>
      {/* Seccion de Filtros */}
      <Text style={styles.filtros}>Filtros</Text>
      {/* Listado de Hoteles (Sin filtrar) */}
      <FlatList
        data={hoteles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatlist}
      />
      {/* Bottom Menu - Category Toggle (filtro principal) */}
      <View style={styles.footerContainer}>
        <View style={styles.toggleOptions}>
          <FontAwesome5 
            name="home" 
            size={24} 
            color={Colors.white} 
          />
          <Text style={styles.toggleTitles}>Home</Text>
        </View>
        <View style={styles.toggleOptions}>
          <AntDesign 
            name="tags" 
            size={24} 
            color={Colors.white} 
          />
          <Text style={styles.toggleTitles}>Boutique</Text>
        </View>
        <View style={styles.toggleOptions}>
          < SimpleLineIcons 
            name="diamond" 
            size={24} 
            color={Colors.white} 
          />
          <Text style={styles.toggleTitles}>Lujo</Text>
        </View>
        <View style={styles.toggleOptions}>
          <FontAwesome5 
            name="umbrella-beach" 
            size={24} 
            color={Colors.white} 
          />
          <Text style={styles.toggleTitles}>Playa</Text>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.plata,    
  },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 'bold',
      padding: 15,
      paddingTop: 55,
      paddingBottom: 20,
      backgroundColor: Colors.white,
      width: width,
      textAlign: 'center',
      backgroundColor: Colors.lightGray,
      shadowColor: Colors.black,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2   
    },
      logoDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
        headerText: {
          fontSize: 18,
          color: Colors.charcoalGray,
          marginLeft: 10,
          fontWeight: 'bold'
        },
    filtros: {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      padding: 15,
      marginTop: 15,
      marginBottom: 20,
      fontSize: 15,
      width: width - 150,
      textAlign: 'center',
      color: Colors.lightGray,
      backgroundColor: Colors.borgona,
      borderRadius: 50,
      shadowColor: Colors.black,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
      display: 'none',
      // display: 'flex',
    },
    flatlist: {
      paddingTop: 14
    },
      hotelItem: {
        width: width - 40,
        marginBottom: 15,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2
      },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontWeight: 'bold',
      padding: 10,
      width: width,
      textAlign: 'center',
      backgroundColor: Colors.borgona,
      color: Colors.lightGray,
      shadowColor: Colors.black,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
      marginTop: 5
    },
      toggleOptions: {
        alignItems: 'center'
      },
        toggleTitles: {
          color: Colors.white,
          fontWeight: 500,
          fontSize: 10
        }
});

export default HomeScreen;
