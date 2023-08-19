import { useState, ChangeEvent } from "react";
import { Logo, Box, Title, Form, ButtonFill } from "./items";
import { HiOutlineIdentification, HiOutlinePhone, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

export function Content() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
        // fetch('http://localhost:3000/user-create', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

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
                <Form onSubmit={handleSubmit}>
                    <Form.Area>
                        <Form.Input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                        <Form.Icon>
                            <HiOutlineIdentification />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                        <Form.Icon>
                            <HiOutlinePhone />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange} />
                        <Form.Icon>
                            <HiOutlineMail />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                        <Form.Icon>
                            <HiOutlineLockClosed />
                        </Form.Icon>
                    </Form.Area>
                    <ButtonFill type="submit">
                        Register
                    </ButtonFill>
                </Form>
            </Box>
        </div>
    );
};