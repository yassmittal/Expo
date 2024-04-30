import { Image, StyleSheet, View } from "react-native";

export default function ImageViewer({ placeholderImage }) {
  return (
    <Image source={placeholderImage} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
});
