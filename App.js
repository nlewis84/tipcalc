import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Head from "./ui/Head";
import Values from "./ui/Values";

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

    render() {
        return (
            <View>
                <View>
                    <Head />
                </View>
                <View style={styles.container}>
                    <Values
                        tipPercent={this.state.tip}
                        bill={this.state.inputValue}
                    />
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
