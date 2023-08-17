import { Modal } from "../components/items";

export function Notfound() {
    const screen = 'w-screen h-screen flex flex-col items-center justify-center bg-gray-50';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            <Modal>
                <Modal.Img bg="bg-red-200" bgImg="bg-rocketRed"></Modal.Img>
                <Modal.Label color="text-red-600">404 - Page not found!</Modal.Label>
            </Modal>
        </div>
    );
};