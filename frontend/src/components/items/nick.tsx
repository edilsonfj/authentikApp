import { ChildrenProps, ImageProps } from "../../interfaces";

export function Nick({ children }: ChildrenProps) {
    const screen = 'w-max h-max flex flex-col items-center justify-center gap-3';
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

export function ImgNick({ bg }: ImageProps) {
    const screen = 'w-28 h-28 bg-cover rounded-full';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile} ${bg}`}></div>
    );
};
Nick.Img = ImgNick;

export function LabelNick({ children }: ChildrenProps) {
    const screen = 'w-max h-max flex flex-col items-center justify-center';
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
Nick.Label = LabelNick;

export function TitleNick({ children }: ChildrenProps) {
    const screen = 'font-title text-2xl font-bold text-gray-800';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <h2 className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </h2>
    );
};
Nick.Title = TitleNick;

export function SubNick({ children }: ChildrenProps) {
    const screen = 'font-sans font-medium text-1.5xl text-gray-500';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <span className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </span>
    );
};
Nick.Sub = SubNick;
