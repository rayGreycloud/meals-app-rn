import { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';

import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    affordability,
    complexity,
    duration,
    imageUrl,
    ingredients,
    steps,
    title
  } = selectedMeal;

  const mealIsFavorite = favoriteMealsCtx.isFavorite(mealId);
  console.log('mealIsFavorite: ', mealIsFavorite);
  const favoriteMeals = favoriteMealsCtx.ids;
  console.log('favoriteMeals: ', favoriteMeals);

  const toggleFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          iconColor='#fff'
          onPress={toggleFavoriteStatusHandler}
        />
      )
    });
  }, [navigation, toggleFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{
          uri: imageUrl
        }}
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>

      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={{ color: '#fff' }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subtitle={'Ingredients'} />
          <List list={ingredients} />

          <Subtitle subtitle={'Steps'} />
          <List list={steps} textStyle={{ textAlign: 'left' }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: '#fff'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
});
