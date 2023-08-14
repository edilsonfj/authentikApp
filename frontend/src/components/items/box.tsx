import { ChildrenProps } from "../../interfaces";

export function Box({ children }: ChildrenProps) {
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