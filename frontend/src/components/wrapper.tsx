import { Box, Logo, Title, ButtonThin } from "./items";

export function Wrapper() {

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
            </Box>
        </div>
    );
};