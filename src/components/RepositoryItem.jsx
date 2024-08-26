import { View, Text, Image, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 6,
    backgroundColor: "white",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={{ height: 40, width: 40 }}
            src={repository.ownerAvatarUrl}
          />
        </View>
        <View style={{ flexShrink: 1 }}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {repository.fullName}
          </Text>
          <Text>Description: {repository.description}</Text>
          <Text
            style={{
              backgroundColor: theme.backgroundColor.language,
              alignSelf: "flex-start",
              color: "white",
              padding: 3,
            }}
          >
            {repository.language}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.container,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.details}>
          <Text style={{ fontWeight: "bold" }}>
            {repository.stargazersCount > 1000
              ? (repository.stargazersCount / 1000).toFixed(1) + "k"
              : repository.stargazersCount}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.details}>
          <Text style={{ fontWeight: "bold" }}>
            {repository.forksCount > 1000
              ? (repository.forksCount / 1000).toFixed(1) + "k"
              : repository.forksCount}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.details}>
          <Text style={{ fontWeight: "bold" }}>{repository.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.details}>
          <Text style={{ fontWeight: "bold" }}>{repository.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </>
  );
};

export default RepositoryItem;
