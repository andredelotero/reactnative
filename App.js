import { useState } from "react";

import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { FlatList } from "react-native";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const onHandlerChangeText = (texto) => setTextItem(texto);
  const addItem = () => {
    setListItem((currentItems) => [
      ...currentItems,
      { id: Math.random.toString(), value: textItem },
    ]);
    setTextItem("");
  };

  const renderItem = (data) => (
    <Text style={styles.listItem}>{data.item.value}</Text>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de Lista"
          style={styles.input}
          value={textItem}
          onChangeText={onHandlerChangeText}
        />
      </View>
      <View style={styles.add}>
        <Button title="ADD" onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listItem}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  add: {
    width: 100,
  },
  listContainer: {
    marginTop: 40,
    backgroundColor: "#999",
    width: "100%",
    height: "60%",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 6,
  },
  listItem: {
    fontSize: 18,
    lineHeight: 40,
    color: "black",
  },
});
