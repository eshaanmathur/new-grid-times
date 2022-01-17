import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <SecondaryStory key={story.id} {...story} />
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStory key={story.id} {...story} />
                    ))}
                </StoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'main-story'
        'secondary-stories'
        'opinion-stories'
        'advertisement';
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        gap: 16px;
        grid-template-columns: 4fr 2fr;
        grid-template-areas:
            'main-story secondary-stories '
            'advertisement advertisement'
            'opinion-stories opinion-stories';
    }

    @media ${QUERIES.laptopAndUp} {
        grid-template-columns: 5fr 4fr 3fr;
        grid-template-areas:
            'main-story secondary-stories opinion-stories'
            'main-story advertisement advertisement  ';
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;

    @media ${QUERIES.laptopAndUp} {
        padding-right: 16px;
        border-right: 1px solid ${COLORS.gray[300]};
    }
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;

    @media ${QUERIES.tabletOnly} {
        padding-left: 16px;
        border-left: 1px solid ${COLORS.gray[300]};
    }
`;

const StoryList = styled.div`
    display: flex;
    flex-direction: column;
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;

    ${StoryList} {
        @media ${QUERIES.tabletOnly} {
            flex-direction: row;
            gap: 32px;
        }
    }

    @media ${QUERIES.laptopAndUp} {
        padding-left: 16px;
        border-left: 1px solid ${COLORS.gray[300]};
    }
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;

    @media ${QUERIES.laptopAndUp} {
        padding-top: 16px;
        border-top: 1px solid ${COLORS.gray[300]};
    }
`;

export default MainStoryGrid;
