import { ChildrenProps, InputProps, FormProps } from "../../interfaces";

export function Form({ children, onSubmit }: ChildrenProps & FormProps) {
    const screen = 'w-max h-max flex flex-col items-end justify-center gap-4';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <form onSubmit={onSubmit} className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </form>
    );
};

export function FormArea({ children }: ChildrenProps) {
    const screen = 'w-100 h-14 p-4 gap-4 flex flex-row items-center justify-center border-2 border-gray-300 rounded-md text-gray-600 hover:text-gray-800 hover:bg-indigo-200 hover:border-none hover:shadow-lg ';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Form.Area = FormArea;

export function FormInput({ name, type, placeholder, onChange }: InputProps) {
    const screen = 'w-full h-full bg-transparent outline-none text-gray-800 font-sans font-medium text-base text-start placeholder:text-gray-600 focus:outline-none focus:rounded-sm focus:py-4 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <input name={name} type={type} placeholder={placeholder} onChange={onChange} className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`} />
    );
};
Form.Input = FormInput;

export function FormIcon({ children }: ChildrenProps) {
    const screen = 'w-8 h-8 flex items-center justify-center text-2xl';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Form.Icon = FormIcon;

export function FormLabel({ children }: ChildrenProps) {
    const screen = 'font-sans font-bold text-indigo-800 text-base hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:rounded-sm focus:p-0.5';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <a href="" className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </a>
    );
};
Form.Label = FormLabel;