import { useState, ChangeEvent } from 'react';
import { Box, Logo, Title, ButtonThin, Divider, Form, ButtonFill } from "./items";
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLockOutline } from '@mdi/js';

export function Wrapper() {

    const [formData, setFormData] = useState({
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
                    <Title.On>Hi there!</Title.On>
                    <Title.Sub>Welcome to Authentik App</Title.Sub>
                </Title>
                <ButtonThin href="/register">
                    <ButtonThin.Icon bg='bg-rocket' />
                    <ButtonThin.Label>Register now</ButtonThin.Label>
                </ButtonThin>
                <Divider>
                    <Divider.Line />
                    <Divider.Label>or</Divider.Label>
                    <Divider.Line />
                </Divider>
                <Form onSubmit={handleSubmit}>
                    <Form.Area>
                        <Form.Input name="email" type="text" placeholder="E-mail" value={formData.email} onChange={handleInputChange} />
                        <Form.Icon>
                            <Icon path={mdiEmailOutline} size={1} color="#1F2937" />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                        <Form.Icon>
                            <Icon path={mdiLockOutline} size={1} color="#1F2937" />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Label>Forgot password?</Form.Label>
                    <ButtonFill type="submit">
                        Log in
                    </ButtonFill>
                </Form>
            </Box>
        </div>
    );
};