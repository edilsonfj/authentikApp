import { Content, Banner } from "../components";

export function Register() {
    const screen = 'w-screen h-screen flex flex-row';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            <Banner bg="bg-astroTwo" />
            <Content />
        </div>
    );
};