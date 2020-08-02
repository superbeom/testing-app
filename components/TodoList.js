import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { colors } from "../styles";
import TodoModal from "./TodoModal";
import {
  SERIOUSLY_DELETE_LIST,
  DELETE,
  CANCEL,
  EDIT_LIST,
  DELETE_LIST,
  WHAT_WANT,
} from "../words";

export default ({ screenList, updateList, deleteList, toggleReviseList }) => {
  const [showListVisible, setShowListVisible] = useState(false);
  const completedCount = screenList.todos.filter((todo) => todo.completed)
    .length;
  const remainingCount = screenList.todos.length - completedCount;

  const toggleListModal = () => {
    setShowListVisible(!showListVisible);
  };

  const DeleteLongPress = (screenList) => {
    Alert.alert(SERIOUSLY_DELETE_LIST, "", [
      {
        text: CANCEL,
        onPress: () => null,
      },
      {
        text: DELETE,
        onPress: deleteList.bind(this, screenList),
      },
    ]);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        visible={showListVisible}
        onRequestClose={toggleListModal}
      >
        <TodoModal
          screenList={screenList}
          closeModal={toggleListModal}
          updateList={updateList}
        />
      </Modal>
      <TouchableOpacity
        style={[
          styles.screenListContainer,
          { backgroundColor: screenList.color },
        ]}
        onPress={toggleListModal}
        onLongPress={() => {
          Alert.alert(WHAT_WANT, "", [
            {
              text: CANCEL,
              onPress: () => null,
            },
            {
              text: EDIT_LIST,
              onPress: toggleReviseList.bind(this, screenList),
            },
            {
              text: DELETE_LIST,
              onPress: DeleteLongPress.bind(this, screenList),
            },
          ]);
        }}
      >
        <Text style={styles.screenListTitle} numberOfLines={1}>
          {screenList.name}
        </Text>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenListContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  screenListTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.whiteColor,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.whiteColor,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.whiteColor,
  },
});
