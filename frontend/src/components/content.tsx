import { Logo, Box, Title, Form, ButtonFill } from "./items";
import { HiOutlineIdentification, HiOutlinePhone, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

export function Content() {
    const screen = 'w-1/2 h-full';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            <Logo href="/">Authentik.App</Logo>
            <Box>
                <Title>
                    <Title.Two>Board with us!</Title.Two>
                    <Title.Sub>Come live a new experience.</Title.Sub>
                </Title>
                <Form>
                    <Form.Area>
                        <Form.Input name="name" type="text" placeholder="Name" value="" />
                        <Form.Icon>
                            <HiOutlineIdentification />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="phone" type="tel" placeholder="Phone" value="" />
                        <Form.Icon>
                            <HiOutlinePhone />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="email" type="email" placeholder="E-mail" value="" />
                        <Form.Icon>
                            <HiOutlineMail />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="password" type="password" placeholder="Password" value="" />
                        <Form.Icon>
                            <HiOutlineLockClosed />
                        </Form.Icon>
                    </Form.Area>
                    <ButtonFill>
                        Register
                    </ButtonFill>
                </Form>
            </Box>
        </div>
    );
};