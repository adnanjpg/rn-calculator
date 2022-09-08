import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  _Text,
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

export default function App() {
  const numbersInArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  if (false)
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}></View>
          <View style={{ flex: 0.1 }} />
          <View
            style={{ backgroundColor: "blue", flex: 2, padding: 10 }}
          ></View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{ backgroundColor: "white", flex: 2, padding: 10 }}
          ></View>
          <View style={{ flex: 0.1 }} />
          <View
            style={{ backgroundColor: "black", flex: 2, padding: 10 }}
          ></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{ backgroundColor: "gray", flex: 1, padding: 10 }}
          ></View>
          <View style={{ flex: 0.1 }} />
          <View
            style={{ backgroundColor: "yellow", flex: 1, padding: 10 }}
          ></View>
        </View>
      </View>
    )
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 2 }}>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          result
        </Text>
      </View>

      {numbersInArrays.map((e) => (
        <View
          key={e.toString()}
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          {e.map((r) => (
            <Text
              key={r}
              style={{
                flex: 1,
                textAlignVertical: "center",
                textAlign: "center",
                backgroundColor: "#301040",
                margin: 10,
                color: "#fff",
              }}
            >
              {r}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )
}
