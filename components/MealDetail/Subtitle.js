import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ subtitle }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 1
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e2b497',
    textAlign: 'center'
  }
});
