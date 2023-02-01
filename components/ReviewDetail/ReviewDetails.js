import { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BackHandler } from "react-native";

const ReviewDetails = ({ navigation, route }) => {
  const params = route.params;
  const openReviewDetailsAgain = () => {
    navigation.push("ReviewDetails", {
      name: "MD Sohel Rana",
      roll: "234",
      email: "sk@gmail.com",
    });
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        console.log("HELLO");
        navigation.navigate({
          name: "Home",
          params: { data: "ReviewDetails Screen Data" },
          merge: true,
        });
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Review Details</Text>
      <Text style={{ textAlign: "center" }}>
        {`<=====Home screens params=====>\n`}
        Name: {params.name + "\n"}
        Email: {params.email + "\n"}
        Roll: {params.roll}
      </Text>
      <Button title="Review Details" onPress={openReviewDetailsAgain} />
      <Button
        title="Update Title"
        onPress={() => {
          navigation.setOptions({
            title: "Title Updated",
          });
        }}
      />
    </View>
  );
};

export default ReviewDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
