import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import AppBar from "../util/AppBar";
import ChatInput from "./ChatInput";
import MessageItem from "./MessageItem";

export default function ChatScreen() {
  const data = [...new Array(30)].map((item, index) => ({
    name: "Md Sohrab Hossain Sohel",
    message:
      "Lorem asdfa;sdlkja;lsdfjk;alsdf asdf;aslkdfja;lskdfja;sldfja;sdlfka;sldjf;alskjdf;alskjdf",
    key: index,
    myMessage: index % 2 === 0,
  }));
  return (
    <View style={styles.container}>
      <AppBar title="Hello" flex={1} />
      {/* messages list  */}
      <View style={styles.messageListContainer}>
        <FlatList
          data={data}
          renderItem={(itemValue) => <MessageItem message={itemValue?.item} />}
        />
      </View>

      {/* message input  */}
      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageListContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "black",
  },
});
