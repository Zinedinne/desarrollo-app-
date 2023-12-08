import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Modal,
} from "react-native";

import { useState } from "react";
import BookInfo from "./BookInfo";

const BookCard = ({ Data }) => {
  const { imageUri, title } = Data;
  const [visible, setVisible] = useState(false);

  const transformedTitle =
    title.length > 25 ? title.slice(0, 23) + "..." : title;
  const userImage =
    imageUri !== "../../assets/no-image.png"
      ? { uri: imageUri }
      : require("../../assets/no-image.png");
  return (
    <>
      <Pressable onPress={() => setVisible(true)}>
        <SafeAreaView style={style.container}>
          <View style={style.imageContainer}>
            <Image style={style.image} source={userImage} />
          </View>
          <View style={style.titleContainer}>
            <Text style={style.name}>{transformedTitle}</Text>
          </View>
        </SafeAreaView>
      </Pressable>
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <BookInfo setVisible={setVisible} {...Data} />
      </Modal>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    // borderWidth: 1,
    gap: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    borderRadius: 18,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 18,
    resizeMode: "cover",
  },
  titleContainer: {
    width: 100,
    height: 37,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  name: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
    color: "black",
    textTransform: "capitalize",
  },
});

export default BookCard;
