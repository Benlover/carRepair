import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconsContainer}>
        {/* <MaterialIcons name="menu" size={28} color="black" /> */}
        <MaterialIcons name="notifications" size={28} color="black" />
        <MaterialIcons name="search" size={28} color="black" />
      </View>
      <Text style={styles.title}>PocketShop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop:40,
    backgroundColor: '#fff',
    elevation: 4, // Ajoute une ombre pour Android
    shadowColor: '#000', // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6200ea', // Couleur du texte "PocketShop"
  },
  icon: {
    marginRight: 19, // Ajoute un espacement de 19 unités entre les icônes
  },
});

export default Header;
