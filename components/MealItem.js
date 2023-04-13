import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from './MealDetails';

const MealItem = ({
  id,
  affordability,
  complexity,
  duration,
  imageUrl,
  title
}) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: '#ccc', borderless: false }}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: imageUrl
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  pressed: {
    opacity: 0.5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8
  }
});
