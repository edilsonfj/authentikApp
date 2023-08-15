import { Logo, Box, Nick, Form, ButtonFill } from "./items";
import Icon from '@mdi/react';
import { mdiAccountEditOutline, mdiPhoneRefreshOutline, mdiEmailEditOutline, mdiLockReset } from '@mdi/js';

export function Account() {
    const screen = 'w-1/2 h-full';
    const desktop = '';
    const laptop = '';
    const tablet = '';
    const mobile = '';

    return (
        <div className={`${screen} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            <Logo href="/">Authentik.App</Logo>
            <Box>
                <Nick>
                    <Nick.Img bg="bg-nick"></Nick.Img>
                    <Nick.Label>
                        <Nick.Title>Joseph Thonpson</Nick.Title>
                        <Nick.Sub>@thon.joseph</Nick.Sub>
                    </Nick.Label>
                </Nick>
                <Form>
                    <Form.Area>
                        <Form.Input name="name" type="text" placeholder="Joseph Smith Thonpson" value="" />
                        <Form.Icon>
                            <Icon path={mdiAccountEditOutline} size={1} color="#1F2937" />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="phone" type="tel" placeholder="(34) 9 8888-7777" value="" />
                        <Form.Icon>
                            <Icon path={mdiPhoneRefreshOutline} size={1} color="#1F2937" />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="email" type="email" placeholder="thon.joseph@profile.com" value="" />
                        <Form.Icon>
                            <Icon path={mdiEmailEditOutline} size={1} color="#1F2937" />
                        </Form.Icon>
                    </Form.Area>
                    <Form.Area>
                        <Form.Input name="password" type="password" placeholder="**********" value="" />
                        <Form.Icon>
                            <Icon path={mdiLockReset} size={1} color="#1F2937" />
                        </Form.Icon>
                    </Form.Area>
                    <ButtonFill>
                        Editar
                    </ButtonFill>
                </Form>
            </Box>
        </div>
    );
}
