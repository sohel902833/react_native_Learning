import { View, StyleSheet, Text } from "react-native";

const AppBar = ({ title, flex = 1 }) => {
  return (
    <View style={{ ...styles.appHeaderContainer, flex: flex }}>
      <Text style={styles.appHeaderText}>{title}</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appHeaderContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    flexBasis: 8,
    flexShrink: 0,
  },
  appHeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10,
  },
});
