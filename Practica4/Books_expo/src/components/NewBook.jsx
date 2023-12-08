import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import StarRating from "react-native-star-rating-widget";
import * as ImagePicker from "expo-image-picker";
// import Math from "Math";

const CreateBook = ({ dataStore, setDataStore, setVisible }) => {
  const [raiting, setRaiting] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthors] = useState("");
  const [comments, setComments] = useState("");
  const [imageUri, setImageUri] = useState("../../assets/no-image.png");

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      console.log(result);
    } else {
      setImageUri("../../assets/no-image.png");
    }
  };

  const saveData = () => {
    const data = {
      id: Math.random(),
      raiting,
      title,
      author,
      comments,
      imageUri,
    };

    dataStore.push(data);
    setDataStore(dataStore);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.basiForm}>
        <View style={styles.cameraForm}>
          <Pressable onPress={() => pickImageAsync()}>
            {imageUri !== "../../assets/no-image.png" ? (
              <Image
                style={{
                  flex: 1,
                  width: 120,
                  borderRadius: 19,
                  resizeMode: "contain",
                }}
                source={{ uri: imageUri }}
              />
            ) : (
              <Ionicons
                style={styles.iconStyle}
                name="images"
                size={60}
                color="black"
              />
            )}
          </Pressable>
        </View>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(value) => setTitle(value)}
            placeholder="Book Title"
          />
          <TextInput
            style={styles.input}
            value={author}
            onChangeText={(value) => setAuthors(value)}
            placeholder="Book Authors"
          />
        </View>
      </View>
      <View style={styles.secondaryForm}>
        <Text style={styles.titles}>Comments</Text>
        <TextInput
          style={styles.input}
          placeholder="coment"
          value={comments}
          onChangeText={(value) => setComments(value)}
        />
      </View>
      <View style={[styles.secondaryForm, { alignItems: "center" }]}>
        <Text style={styles.titles}>Raiting</Text>
        <StarRating
          rating={raiting}
          onChange={setRaiting}
          enableHalfStar={false}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          //   borderWidth: 1,
          justifyContent: "flex-end",
        }}
      >
        {title && raiting ? (
          <Button
            title="Save"
            onPress={() => {
              saveData();
              setVisible(false);
            }}
          />
        ) : (
          <Button
            title="Cancel"
            onPress={() => {
              setVisible(false);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
    // borderWidth: 1,`
  },
  basiForm: {
    flexDirection: "row",
    width: 360,
    gap: 5,
    alignItems: "stretch",
    justifyContent: "space-around",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  cameraForm: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 18,
  },
  iconStyle: {
    opacity: 0.5,
  },
  inputForm: {
    // marginHorizontal: 5,
    padding: 10,
    width: 230,
    // borderWidth: 1,
    justifyContent: "space-around",
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
  },
  secondaryForm: {
    flexDirection: "column",
    gap: 10,
    alignContent: "stretch",
    justifyContent: "space-around",
    height: 100,
    // borderBottomWidth: 1,
  },

  titles: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    // height: 50,
  },
});

export default CreateBook;
