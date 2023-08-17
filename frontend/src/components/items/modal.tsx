import { ChildrenProps, LinkProps, LabelProps, ImageProps } from "../../interfaces";

export function Modal({ children }: ChildrenProps) {
    const screen = 'w-full h-[90%] flex flex-col items-center justify-center gap-10';
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

export function ImgModal({ bg, bgImg }: ImageProps) {
    const screen = `w-60 h-60 rounded-full`;
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile} ${bg}`}>
            <div className={`w-full h-full ${bgImg} bg-cover`}></div>
        </div>
    );
};
Modal.Img = ImgModal;

export function LabelModal({ children, color }: ChildrenProps & LabelProps) {
    const screen = `font-title text-4xl font-bold ${color}`;
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
Modal.Label = LabelModal;

export function ButtonModal({ children, href }: ChildrenProps & LinkProps) {
    const screen = 'w-100 h-14 flex flex-row items-center justify-center rounded-full bg-gray-900 font-sans font-bold text-md text-gray-50 hover:text-gray-900 hover:bg-indigo-600 hover:shadow-lg focus:outline-none focus:text-gray-900 focus:bg-indigo-600';
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
Modal.Button = ButtonModal;

