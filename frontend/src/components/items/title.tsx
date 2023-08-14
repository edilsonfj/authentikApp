import { ChildrenProps } from "../../interfaces";

export function Title({ children }: ChildrenProps) {
    const screen = 'flex flex-col itens-center justify-center';
    const desktop = 'desktop:';
    const laptop = 'laptop:';
    const tablet = 'tablet:';
    const mobile = 'mobile:';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};

export function OnTitle({ children }: ChildrenProps) {
    const screen = 'font-title font-bold text-8xl text-center text-gray-900';
    const desktop = 'desktop:text-7xl';
    const laptop = 'laptop:text-6xl';
    const tablet = 'tablet:text-8xl';
    const mobile = 'mobile:text-6xl';

    return (
        <h1 className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </h1>
    );
};
Title.On = OnTitle;

export function TwoTitle({ children }: ChildrenProps) {
    const screen = 'font-title font-bold text-6xl text-center text-gray-900';
    const desktop = 'desktop:text-4xl';
    const laptop = 'laptop:text-4xl';
    const tablet = 'tablet:text-6xl';
    const mobile = 'mobile:text-4xl';

    return (
        <h1 className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </h1>
    );
};
Title.Two = TwoTitle;

export function SubTitle({ children }: ChildrenProps) {
    const screen = 'font-sans font-medium text-2xl text-center text-gray-500';
    const desktop = 'desktop:text-xl';
    const laptop = 'laptop:text-lg';
    const tablet = 'tablet:text-8xl';
    const mobile = 'mobile:text-lg';

    return (
        <h2 className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </h2>
    );
};
Title.Sub = SubTitle;