import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';

export default function App() {

  const onPressLearnMore = () => {
    console.log('I am clicked');
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.myText}>Open up App.js to start working on your my test App!</Text>
      <Image style={styles.myImage} source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300" }} />

      <Button
        onPress={onPressLearnMore}
        title="Click Mee"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

{

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: ""
  },

  myImage: {
    marginTop: 30
  },

  myText: {
    color: "#FF0000",
    fontSize: 18,
    textAlign: 'center'
  }
});
}
