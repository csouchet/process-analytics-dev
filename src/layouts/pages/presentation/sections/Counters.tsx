/**
 * Copyright 2022 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Material Kit 2 React components
import { MKBox2 } from '../../../../components';

// Material Kit 2 React examples
import DefaultCounterCard from '../../../../examples/Cards/CounterCards/DefaultCounterCard';

import React from 'react';

function Counters(): JSX.Element {
  return (
    <MKBox2 component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={70}
              suffix="+"
              title="Coded Elements"
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
          </Grid>

          <Grid item xs={12} md={4} display="flex">
            <Divider
              orientation="vertical"
              sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }}
            />
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Design Blocks"
              description="Mix the sections, change the colors and unleash your creativity"
            />

            <Divider
              orientation="vertical"
              sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Pages"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox2>
  );
}

export default Counters;
