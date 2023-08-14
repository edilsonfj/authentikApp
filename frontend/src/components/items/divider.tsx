import { ChildrenProps } from "../../interfaces";

export function Divider({ children }: ChildrenProps) {
    const screen = 'w-100 flex flex-row items-center justify-center gap-4';
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

export function Line() {
    const screen = 'w-20 h-0.5 bg-gray-300';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}></div>
    );
};
Divider.Line = Line;

export function Label({ children }: ChildrenProps) {
    const screen = 'font-sans font-medium text-base text-gray-900';
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
Divider.Label = Label;
