import { StyleSheet, TextInput, View } from "react-native";
export default function ChatInput() {
  return (
    <View style={styles.messageInputContainer}>
      <TextInput
        placeholderTextColor="#f9f9fa"
        style={styles.messageTextInput}
        placeholder="Write Your Message"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageInputContainer: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    flexBasis: 20,
    flexShrink: 0,
  },
  messageTextInput: {
    paddingLeft: 15,
    flex: 1,
    color: "white",
    fontWeight: "bold",
  },
});
