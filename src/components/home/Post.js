import { View, Text, StyleSheet, Button } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
const Post = ({ navigation, route }) => {
  const params = route.params;
  const navigateToReviewDetailsPage = () => {
    navigation.navigate("ReviewDetails", {
      name: "Md Sohrab Hossain",
      roll: 902833,
      email: "sohel@gmail.com",
      title: "SK",
    });
  };
  return (
    <View style={styles.container}>
      <Text>Home Screens</Text>
      {params?.data && <Text>{params?.data}</Text>}
      <Entypo name="home" size={24} color="black" />
      <Button title="Review Details" onPress={navigateToReviewDetailsPage} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
