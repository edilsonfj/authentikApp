import { ChildrenProps, ImageProps, LinkProps } from "../../interfaces";

export function ButtonThin({ children, href }: ChildrenProps & LinkProps) {
    const screen = 'w-96 h-14 flex flex-row items-center justify-center border-2 border-gray-300 rounded-md text-gray-600 hover:text-gray-900 hover:bg-indigo-300 hover:border-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <a href={href} className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </a>
    );
};

export function ButtonIcon({ bg }: ImageProps) {
    const screen = 'w-8 h-8 bg-rocket bg-cover';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile} ${bg}`}></div>
    );
};
ButtonThin.Icon = ButtonIcon;

export function ButtonLabel({ children }: ChildrenProps) {
    const screen = 'font-sans font-medium text-base text-center';
    const desktop = 'desktop:text-xl';
    const laptop = 'laptop:text-lg';
    const tablet = 'tablet:text-8xl';
    const mobile = 'mobile:text-md';

    return (
        <span className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </span>
    );
};
ButtonThin.Label = ButtonLabel;