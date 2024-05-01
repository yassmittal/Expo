import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <Text>
          Choose a Sticker
        </Text>

        <Pressable onPress={onClose}>
          <MaterialIcons name="close" color="#fff" size={22} />
        </Pressable>
        <Text>
          {children}
        </Text>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  }
})