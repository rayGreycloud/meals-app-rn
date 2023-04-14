import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';

// import { FavoritesContext } from '../store/context/favorites-context';
import { isFavorite } from '../store/redux/favorites';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favorites.ids);
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    isFavorite(favoriteMealIds, meal.id)
  );

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
