import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function SecondaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function OutlinedButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.outlinedButton} onPress={onPress}>
      <Text style={styles.outlinedText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function IconButton({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={20} color="#fff" style={{ marginRight: 8 }} />
      <Text style={styles.iconText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#444",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 16,
  },
  outlinedButton: {
    borderWidth: 2,
    borderColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  outlinedText: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 16,
  },
  iconButton: {
    flexDirection: "row",
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
