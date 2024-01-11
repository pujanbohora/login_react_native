import {
  View,
  Button,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { width: screenWidth } = Dimensions.get('window');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const image = {
    uri: "https://i.pinimg.com/564x/b9/7d/dd/b97ddd4e6554c9840a8ae3082e05d69e.jpg",
  };

  

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator
          style={{ flexDirection: "column", justifyContent: "center", flex: 1 }}
        />
      ) : (
        <View style={styles.moviesContainer}>
          {data.map((item) => (
            <TouchableOpacity onPress={()=>{
              console.log("pressed")
              navigation.navigate("cardDetail")
            }}>
            <View key={item.key} style={styles.mainCard} >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "powderblue",
                }}
              >
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.image}
                >
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.releaseYear}</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // padding: 10,
    // paddingTop: 20,
    // paddingLeft: 20,
  },
  mainCard: {
    // paddingRight: 5,
    // paddingBottom: 5,
    height: 150,
    width: 191.5,
  
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    textAlign: "center",
    bottom: 0,
    // margin: 6,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: "#929292",
    marginBottom: 6,
  },
  headerImg: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  moviesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    gap: 10,
    gapRow:10
  },
});

export default HomeScreen;
