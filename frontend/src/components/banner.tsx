import { ImageProps } from "../interfaces";

export function Banner({ bgImg }: ImageProps) {
    const screen = 'w-1/2 h-full bg-cover';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile} ${bgImg}`}></div>
    );
};