import { Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.appBar,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={"/"}>
          <Text
            style={{ fontSize: theme.fontSizes.subheading, color: "white" }}
          >
            Repositories{" "}
          </Text>
        </Link>
        <Link to={"/sign-in"}>
          <Text
            style={{ fontSize: theme.fontSizes.subheading, color: "white" }}
          >
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
