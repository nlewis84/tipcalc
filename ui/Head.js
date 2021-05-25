import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Head extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "tan",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
