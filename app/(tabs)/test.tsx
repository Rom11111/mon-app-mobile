import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {TestComponent} from "@/components/TestComponent";

export default function Test() {

    /* ajoute automatiquement du padding en fonction des "safe areas" de l’appareil.*/
    return (
        <SafeAreaView style={styles.container}>
            <TestComponent value="titi" callback={()=>console.log("titi")}></TestComponent>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    myText : {
        color : "red"
    },
    container : {
        display: "flex",
        flexDirection: "row"
    }

});