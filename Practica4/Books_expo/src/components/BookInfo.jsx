import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import StarRating from "react-native-star-rating-widget";

const BookInfo = ({
  title,
  imageUri,
  raiting,
  author,
  comments,
  setVisible,
}) => {
  const userImage =
    imageUri !== "../../assets/no-image.png"
      ? { uri: imageUri }
      : require("../../assets/no-image.png");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <Image style={styles.image} source={userImage} />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            alignItems: "stretch",
            gap: 10,
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 10,
            // flex: 1,
            // borderWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              verticalAlign: "middle",
              //   borderWidth: 1,
            }}
          >
            <Text style={{ fontSize: 30, textAlignVertical: "center" }}>
              ✍️
            </Text>
            <Text style={styles.authors}>{author}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              verticalAlign: "middle",
              //   borderWidth: 1,
            }}
          >
            <Text style={{ fontSize: 30, textAlignVertical: "center" }}>
              💬
            </Text>
            <Text style={styles.comments}>{comments}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", height: 100, borderRadius: 1 }}>
          <Text style={{ fontSize: 25, fontWeight: "400" }}>Raiting</Text>
          <StarRating rating={raiting} onChange={() => {}} />
        </View>
        <Button
          title="cerrar"
          onPress={() => {
            setVisible(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    margin: 10,
    // borderWidth: 1,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    resizeMode: "cover",
  },
  title: {
    fontSize: 40,
    padding: 10,
    fontWeight: "700",
  },
  authors: {
    borderRadius: 10,
    borderWidth: 0.6,
    fontSize: 20,
    fontWeight: "500",
    width: "90%",
    padding: 10,
  },
  comments: {
    borderRadius: 10,
    borderWidth: 0.6,
    fontSize: 15,
    fontWeight: "500",
    width: "90%",

    padding: 10,
  },
});

export default BookInfo;
