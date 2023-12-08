import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Modal,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useState } from "react";
import CreateBook from "./src/components/NewBook";
import Ionicons from "@expo/vector-icons/Ionicons";

import BookCard from "./src/components/BookCard";

const Data = [
  {
    id: 1,
    title: "Ejemplo Libro 1",
  },
  {
    id: 2,
    title: "Ejemplo Libro 2",
  },
  {
    id: 3,
    title: "Ejemplo Libro iusyhdksjhdskjdhksajhdsdkjh",
  },
  {
    id: 4,
    title: "Ejemplo Libro 3",
  },
  {
    id: 5,
    title: "Ejemplo sjhdg sdjhgs djhgsd sjdhgs djshdgsjhdgsj dhgsjhd  Libro 3",
  },
];

export default function App() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const AddBook = () => {
    return (
      <View style={styles.addBook}>
        <Pressable
          onPress={() => {
            console.log(data);
            setVisible(!visible);
          }}
        >
          <Ionicons name="add-circle" size={50} color="black" />
        </Pressable>
        <Modal
          visible={visible}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <CreateBook
            dataStore={data}
            setDataStore={setData}
            setVisible={setVisible}
          />
        </Modal>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View>
        <Text style={styles.title}>Mis Libros 📚📚</Text>
      </View>
      <View style={styles.container}>
        {data.length ? (
          <FlatList
            // style={{ margin: 10 }}
            data={data}
            renderItem={({ item }) => <BookCard Data={item} />}
            numColumns={3}
          />
        ) : (
          <Text style={[styles.title, { fontSize: 20 }]}>
            No Tienes Libros 😔
          </Text>
        )}
        <AddBook />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addBook: {
    // width: 50,
    // height: 50,
    // borderWidth: 1,
    // justifyContent: "center",
    // alignItems: "center",
    position: "relative",
    translateX: 130,
    translatey: 130,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    padding: 10,
  },
});
