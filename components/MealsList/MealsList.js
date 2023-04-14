import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

const MealsList = ({ meals }) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      imageUrl: item.imageUrl,
      title: item.title
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
