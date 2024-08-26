import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import Text from "./Text";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e1e4e8",
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <AppBar />
      <View style={styles.container}>
        <Text fontWeight="bold" fontSize="subheading">
          Rate Repository Application
        </Text>
      </View>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
