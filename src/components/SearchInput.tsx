import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SearchInputProps} from "../Interface/SearchInputProps";



const SearchInput = forwardRef<TextInput, SearchInputProps>(({
                                                                 onSearch,
                                                                 onEnter,
                                                                 value = '',
                                                                 placeholder,
                                                                 iconColor = '#007bff',
                                                             }, ref) => {
    const [searchText, setSearchText] = useState(value);

    useEffect(() => {
        setSearchText(value);
    }, [value]);

    function handleOnInput(text: string): void {
        onSearch?.(text);
        setSearchText(text);
    }

    function handleOnKeyDown(e: any): void {
        if (e.nativeEvent.key === 'Enter' && onEnter) {
            onEnter(searchText);
        }
    }

    function clearSearch(): void {
        setSearchText('');
        onSearch?.('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                ref={ref}
                onChangeText={handleOnInput}
                onSubmitEditing={handleOnKeyDown}
                value={searchText}
                style={styles.input}
                placeholder={placeholder}
                cursorColor={'#007bff'}
            />
            <TouchableOpacity onPress={clearSearch} style={styles.iconContainer}>
                {searchText === '' ? (
                    <Icon name="search" size={15} color={iconColor} />
                ) : (
                    <Icon name="times" size={15} color={iconColor} />
                )}
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#007bff',
        width: "auto",
        borderWidth: 1,
        margin: 5
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#000000'
    },
    iconContainer: {
        padding: 10,
    },
});


export default SearchInput;