import { View, Text, StyleSheet } from "react-native";

const MessageItem = ({ message: messageItem }) => {
  const { message, myMessage } = messageItem || {};
  return (
    <View
      style={{
        ...styles.messageItemContainer,
        alignSelf: myMessage ? "flex-end" : "flex-start",
        alignItems: myMessage ? "flex-end" : "flex-start",
        backgroundColor: myMessage ? "pink" : "black",
      }}
    >
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  messageItemContainer: {
    backgroundColor: "red",
    marginBottom: 10,
    padding: 10,
    maxWidth: "70%",
    borderRadius: 7,
  },
  messageText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
