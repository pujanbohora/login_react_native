import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eBecf4" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImg}
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            alt="cat"
          ></Image>
          <Text style={styles.title}>Sign in to MyApp</Text>
          <Text style={styles.subtitle}>
            Get access to your portfolio and more...
          </Text>
        </View>
        {/* email */}
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.inputControl}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Enter your email address"
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
            ></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.inputControl}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password"
              placeholderTextColor="#6b7280"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            ></TextInput>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => {
              console.log(form.email);
              Alert.alert('User Login', `${form.email} ${form.password}`)
            }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => {
          }} style={{ marginTop: "auto" }}>
            <View>
              <Text style={styles.formFooter}>
                Don't have an account?{" "}
                <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e1e1e",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: "#929292",
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    color: "#222",
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 16,
  },
  btn: {
    backgroundColor: "#075eec",
    height: 46,
    borderRadius: 12,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    lineHeight: 44,
  },
  formFooter: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0.15,
  },
});
