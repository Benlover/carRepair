import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './components/Header';

const Menu = () => {
  return (
    <>

    <Header/>

      <View style={styles.menuContainer}>
            <MaterialIcons name="home" size={32} color="black" />
            <MaterialIcons name="search" size={32} color="black" />
            <View style={styles.middleIconContainer}>
              <MaterialIcons name="add-circle" size={40} color="white" />
            </View>
            <MaterialIcons name="shopping-cart" size={32} color="black" />
            <MaterialIcons name="account-circle" size={32} color="black" />
      </View>
    </>
   
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10, // Ajoute une ombre (fonctionne surtout sur Android)
  },
  middleIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30, // Crée un cercle
    backgroundColor: '#6200ea', // Couleur de fond du cercle (vous pouvez changer cette couleur)
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Pour placer le cercle un peu plus haut
    elevation: 10, // Ajoute une ombre (fonctionne surtout sur Android)
    shadowColor: '#000', // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
});

export default Menu;
