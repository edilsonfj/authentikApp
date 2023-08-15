import { Banner, Account } from "../components";

export function Profile() {
    const screen = 'w-screen h-screen flex flex-row';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            <Account />
            <Banner bg="bg-astroOne" />
        </div>
    );
};