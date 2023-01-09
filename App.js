
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import LoginPage from './src/pages/LoginPage';

const width = Dimensions.get("window").width;
export default function App() {
  return (
    <View style={styles.container}>
    <LoginPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
