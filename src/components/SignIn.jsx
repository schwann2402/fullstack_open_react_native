import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import theme from "../theme";
const validationSchema = yup.object().shape({
  username: yup.string().required("User is required"),
  password: yup.mixed().required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Username is :", values.username);
      console.log("Password is :", values.password);
    },
    validationSchema,
  });
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable
        style={{
          backgroundColor: theme.backgroundColor.language,
          ...styles.input,
        }}
        onPress={formik.handleSubmit}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Log in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "grey",
    width: 360,
    padding: 10,
  },
  form: {
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
});
