export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};