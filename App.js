import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Head from "./ui/Head";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            tip: 0.2,
        };
    }

    updateCustomTip(text) {
        if (text.customTip) {
            this.setState({ tip: parseFloat(text.customTip) / 100 });
        } else {
            this.setState({ tip: 0 });
        }
    }

    alert() {
        Alert.alert("Just saying hi", "This alert does nothing.", [
            {
                text: "OK",
                onPress: () => console.log("hit ok"),
            },
            {
                text: "Cancel",
                onPress: () => console.log("hit cancel"),
            },
        ]);
    }

    render() {
        let tip = 0.0;
        if (this.state.inputValue) {
            tip = parseFloat(this.state.inputValue) * this.state.tip;
            tip = (Math.round(tip * 100) / 100).toFixed(2);
        }

        return (
            <View>
                <View>
                    <Head />
                </View>
                <View style={styles.container}>
                    <Button title="Alert" onPress={this.alert} />
                    <Text>${tip}</Text>
                    <TextInput
                        onChangeText={(text) =>
                            this.setState({ inputValue: text })
                        }
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="0.00"
                        value={this.state.inputValue}
                    />
                    <View style={styles.buttonGroup}>
                        <Button
                            title="10%"
                            onPress={() => this.setState({ tip: 0.1 })}
                        />
                        <Button
                            title="20%"
                            onPress={() => this.setState({ tip: 0.2 })}
                        />
                        <Button
                            title="25%"
                            onPress={() => this.setState({ tip: 0.25 })}
                        />
                        <TextInput
                            value={(this.state.tip * 100).toString()}
                            style={styles.customTip}
                            onChangeText={(customTip) =>
                                this.updateCustomTip({ customTip })
                            }
                            keyboardType="numeric"
                            placeholder="0.00"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "#333",
        borderWidth: 1,
        padding: 5,
    },
    buttonGroup: {
        flexDirection: "row",
        margin: 5,
    },
    customTip: {
        height: 30,
        width: 60,
        borderColor: "#333",
        borderWidth: 1,
        padding: 5,
    },
});
