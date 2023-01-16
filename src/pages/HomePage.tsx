import React from 'react';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import {
  ButtonsSection,
  CardContent,
  RewardsSection,
  RulesSection,
} from './HomePage.styles';

export const HomePage = () => {
  return (
    <>
      <ButtonsSection>
        <Card>
          <CardContent>
            <div>Want to play?</div>
            <Button>Play</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>Check the results</div>
            <Button>Results</Button>
          </CardContent>
        </Card>
      </ButtonsSection>
      <RulesSection>
        <h3>How to play?</h3>
        <ul>
          <li>Try to relax and indulge yourself with a pint of decent quality beer.</li>
          <li>Think of 6 lucky numbers, from 1 to 99.</li>
          <li>Numbers must be distinct.</li>
          <li>Go straight to the lottery page, and input your lucky numbers.</li>
          <li>Note your coupon identifier and wait for the winning numbers draw date!</li>
        </ul>
      </RulesSection>
      <RewardsSection>
        <h3>Rewards</h3>
        <p>
          Your reward is a unique opportunity to do something good. For each level of win,
          you can support animal shelters!
        </p>
      </RewardsSection>
    </>
  );
};