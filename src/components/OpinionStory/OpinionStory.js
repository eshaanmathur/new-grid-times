import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
    return (
        <Link href={`/story/${id}`}>
            <Wrapper>
                <Avatar alt="" src={avatar} />
                <div>
                    <AuthorName>{author}</AuthorName>
                    <ArticleTitle>{title}</ArticleTitle>
                </div>
            </Wrapper>
        </Link>
    );
};

const Link = styled.a`
    &:not(:first-child) {
        padding-top: 16px;
    }
    &:not(:last-child) {
        padding-bottom: 16px;
        border-bottom: 1px solid var(--color-gray-300);
    }

    @media ${QUERIES.tabletOnly} {
        flex: 1 1 172px;
        &:not(:first-child) {
            padding-top: 0px;
        }
        &:not(:last-child) {
            padding-bottom: 0px;
            border-bottom: 0px;
        }
    }
`;

const Wrapper = styled.article`
    color: var(--color-gray-900);
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;

    @media ${QUERIES.tabletOnly} {
        flex-direction: column;
    }
`;

const Avatar = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
`;

const AuthorName = styled.p`
    font-size: 1.125rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-700);
    margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.3;
`;

export default OpinionStory;
