import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealsList from '../components/MealsList/MealsList';

import { FavoritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.isFavorite(meal.id)
  );
  console.log('favoriteMeals: ', favoriteMeals);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: '#fff'
  }
});
