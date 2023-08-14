import { ChildrenProps, ButtonProps } from "../../interfaces";

export function ButtonFill({ children, type }: ChildrenProps & ButtonProps) {
    const screen = 'w-100 h-14 flex flex-row items-center justify-center rounded-full bg-gray-900 font-sans font-bold text-md text-gray-50 hover:text-gray-900 hover:bg-indigo-600 hover:shadow-lg focus:outline-none focus:text-gray-900 focus:bg-indigo-600';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <button type={type} className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </button>
    );
};