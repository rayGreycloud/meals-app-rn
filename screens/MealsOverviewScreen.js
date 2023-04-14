import { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [navigation, categoryId]);

  return <MealsList meals={displayedMeals} />;
};

export default MealsOverviewScreen;
