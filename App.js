import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as Imagepicker from "expo-image-picker"

const placeholderImage = require('./assets/images/background-image.png')

export default function App() {

  const pickImageAsync = async () => {
    let result = await Imagepicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      console.log(result)
    } else {
      alert("you did not select any Image")
    }

  }


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImage={placeholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme="primary" label={"Choose a photo"} />
        <Button label={"Use this photo"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center"
  }

});
