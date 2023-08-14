import { Wrapper, Banner } from "../components";

export function Home() {
    const screen = 'w-screen h-screen flex flex-row';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            <Wrapper />
            <Banner bg="bg-astroOne" />
        </div>
    );
};