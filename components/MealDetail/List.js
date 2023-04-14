import { StyleSheet, Text, View } from 'react-native';

const List = ({ list, textStyle }) => {
  return list.map((item) => (
    <View key={item} style={styles.item}>
      <Text style={[styles.text, textStyle]}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#e2b497'
  },
  text: {
    color: '#351401',
    textAlign: 'center'
  }
});
