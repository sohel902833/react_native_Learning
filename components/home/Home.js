import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation, route }) => {
  const params = route.params;
  console.log(params);
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

      <Button title="Review Details" onPress={navigateToReviewDetailsPage} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
