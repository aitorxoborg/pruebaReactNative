import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Button from "./src/components/ButtonStyleSheet";
import SearchInput from "./src/components/SearchInput";

const App: React.FC = () => {
    const handlePressStyleSheet = async () => {
        Alert.alert('Stylesheet');
    };

    const handlePressStyled = async () => {
        Alert.alert('Styled components');
    };

    return (<View style={styles.container}>
        <SearchInput></SearchInput>

            <Button
                text="Nuevo cobro"
                onClick={handlePressStyleSheet}
                icon="plus"
                iconPosition="start"
                disabled={false}
            />
            <Text style={styles.heading}>Botón Styled Components</Text>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
    }, heading: {
        fontSize: 24, marginBottom: 20,
    },
});

export default App;
