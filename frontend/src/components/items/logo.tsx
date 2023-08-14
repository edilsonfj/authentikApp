import { ChildrenProps, LinkProps } from "../../interfaces";

export function Logo({ children, href }: ChildrenProps & LinkProps) {
    const screen = 'w-full h-[10%] px-8 font-logo flex items-center justify-start font-regular text-4xl text-gray-800 uppercase hover:text-indigo-900';
    const desktop = 'desktop:mx-6 desktop:text-3.5xl';
    const laptop = 'laptop:mx-4 laptop:text-3xl';
    const tablet = '';
    const mobile = '';

    return (
        <a href={href}>
            <h1 className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
                {children}
            </h1>
        </a>
    );
};