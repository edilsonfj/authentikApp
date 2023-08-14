export type InputProps = {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};