import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, FAMILIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24} />
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <DesktopActionGroup style={{ '--gap': '24px' }}>
                    <button>
                        <Search size={24} />
                    </button>
                    <button>
                        <Menu size={24} />
                    </button>
                </DesktopActionGroup>
                <Logo />
                <DesktopActionGroup style={{ '--direction': 'column' }}>
                    <Button>Subscribe</Button>
                    <SubscriptionText href="#">Already a subscriber?</SubscriptionText>
                </DesktopActionGroup>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const DesktopActionGroup = styled.div`
    display: none;

    @media ${QUERIES.laptopAndUp} {
        display: flex;
        flex-direction: var(--direction, row);
        gap: var(--gap, 8px);
    }
`;
const SubscriptionText = styled.a`
    color: var(--color-gray-900);
    font-family: ${FAMILIES.serif};
    font-style: italic;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        margin-top: 48px;
        margin-bottom: 72px;
    }

    @media ${QUERIES.laptopAndUp} {
        margin-top: 16px;
        justify-content: space-between;
        align-items: baseline;
    }
`;

export default Header;
