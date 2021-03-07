import React from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Profile } from '@styled-icons/icomoon/Profile';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded';
import {
  Button, H1, H3, Card, FloatLeftBlock, FloatRightBlock, LeftBackground,
  RightBackground, Container, ClearBlock, VARIANT,
} from '../../app/GlobalStyles';

// @ts-ignore
const Home = (): any => (
  <div>
    <LeftBackground>
      <img src="assets/social/img.png" alt="social_img1" />
    </LeftBackground>
    <Container>
      <H1 variant={VARIANT.COMMON}>Share</H1>
      <FloatLeftBlock>
        <H3 variant={VARIANT.PRIMARY}>
          An investment in knowledge
          <br />
          always pays the best interest
        </H3>
      </FloatLeftBlock>
      <FloatRightBlock>
        <Button variant={VARIANT.COMMON}>
          <Plus size={20} />
          {' '}
          Share your idea
        </Button>
      </FloatRightBlock>
      <div>
        <Card>
          <div>
            <FloatLeftBlock>
              <Profile size={20} />
            </FloatLeftBlock>
            <FloatLeftBlock>Vik</FloatLeftBlock>
            <FloatRightBlock>
              <DotsVerticalRounded size={20} />
            </FloatRightBlock>
          </div>
          <ClearBlock>Big News, small-cap international is beating out the S&P 500!</ClearBlock>
        </Card>
      </div>
    </Container>
    <RightBackground>
      <img src="assets/social/img_1.png" alt="social-img2" />
    </RightBackground>
  </div>
);

export default Home;
