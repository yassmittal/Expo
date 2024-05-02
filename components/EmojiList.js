import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {

  const [emoji] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ])


  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onselect(item);
            onCloseModal();
          }}
        >

          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  )
}


const styles = StyleSheet.create({
  listContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {

  }
})