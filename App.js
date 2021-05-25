import React from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";
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
            <View style={styles.container}>
                <View style={{ width: "100%" }}>
                    <Values
                        tipPercent={this.state.tip}
                        bill={this.state.inputValue}
                    />
                    <View style={styles.inputs}>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ inputValue: text })
                            }
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="0.00"
                            placeholderTextColor="#FFF"
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
                                placeholderTextColor="#FFF"
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        height: "100%",
        width: "100%",
    },
    inputs: {
        backgroundColor: "#212121",
        padding: 20,
    },
    input: {
        height: 40,
        width: "100%",
        padding: 5,
        color: "#FFF",
    },
    buttonGroup: {
        flexDirection: "row",
        margin: 5,
        justifyContent: "space-between",
    },
    customTip: {
        height: 40,
        width: 60,
        padding: 5,
        color: "#FFF",
    },
});
