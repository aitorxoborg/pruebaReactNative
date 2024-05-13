export interface ButtonProps {
    text: string;
    onClick: () => Promise<void>;
    icon?: string;
    disabled?: boolean;
    workingIconVisibleOnClick?: boolean;
    title?: string;
    iconPosition?: 'start' | 'end';
}