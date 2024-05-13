import {TextInputProps} from "react-native";

export interface SearchInputProps extends TextInputProps {
    onSearch?: (value: string) => void;
    onEnter?: (value: string) => void;
    value?: string;
    placeholder?: string;
    iconColor?: string;
}