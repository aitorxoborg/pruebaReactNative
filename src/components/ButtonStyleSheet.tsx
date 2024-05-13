import React, { useState, forwardRef } from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonProps} from "../Interface/ButtonProps";

const Button = forwardRef<TouchableOpacity, ButtonProps>(({
                               text,
                               onClick,
                               icon,
                               disabled = false,
                               workingIconVisibleOnClick = false,
                               title = '',
                               iconPosition = 'start',  // 'start' o 'end'
                           }, ref) => {
    const [working, setWorking] = useState(false);

    async function handleOnClick() {
        if (!working && !disabled) {
            setWorking(true);
            await onClick();
            setWorking(false);
        }
    }

    return (
        <TouchableOpacity ref={ref} onPress={handleOnClick} style={[styles.button, disabled ? styles.buttonDisabled : null]} disabled={disabled} accessible accessibilityLabel={title}>
            {working && workingIconVisibleOnClick && (
                <ActivityIndicator size="small" color="#000" />
            )}
            {icon && iconPosition === 'start' && !working && (
                <Icon name={icon} style={styles.icon} />
            )}
            <Text style={styles.text}>{text}</Text>
            {icon && iconPosition === 'end' && !working && (
                <Icon name={icon} style={styles.icon} />
            )}
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 4,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    icon: {
        marginRight: 8,
        fontSize: 20,
        color: '#fff',
    },
});

export default Button;
