import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, iconColor, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      android_ripple={{ color: '#e2b497', borderless: false }}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Ionicons name={icon} size={24} color={iconColor} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 240,
    padding: 2
  },
  pressed: {
    opacity: 0.5
  }
});
