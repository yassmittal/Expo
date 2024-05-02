import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as Imagepicker from "expo-image-picker";
import { useState } from 'react';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
const placeholderImage = require('./assets/images/background-image.png');
import { styles } from './App';


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImageAsync = async () => {
    let result = await Imagepicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("you did not select any Image");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };


  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // will implement the functionality later
  };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImage={placeholderImage} selectedImage={selectedImage} />
      </View>

      {showAppOptions ?
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
        :
        <View style={styles.footerContainer}>
          <Button theme="primary" label={"Choose a photo"} onPress={pickImageAsync} />
          <Button label={"Use thisasdkflj photo"} onPress={() => setShowAppOptions(true)} />
        </View>}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        OH hi
      </EmojiPicker>


      <StatusBar style="auto" />
    </View>
  );
}
