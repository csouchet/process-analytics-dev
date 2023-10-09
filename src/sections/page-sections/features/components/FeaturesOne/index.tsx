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
import Stack from '@mui/material/Stack';
import {
  ArrowForward,
  SettingsOverscan,
  Mediation,
  Token,
  Link,
} from '@mui/icons-material';

import React from 'react';

// Material Kit 2 React components
import { MKBox2, MKTypography2 } from '../../../../../components';

function FeaturesOne(): JSX.Element {
  return (
    <MKBox2 component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography2 variant="h3" my={1}>
              Read More About Us
            </MKTypography2>

            <MKTypography2 variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by
              others, lose trust for those others. We get back stabbed by
              friends. It becomes harder for us to give others a hand.
            </MKTypography2>
            <MKTypography2
              component={Link}
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                '& .material-icons-round': {
                  fontSize: '1.125rem',
                  transform: 'translateX(3px)',
                  transition:
                    'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                },

                '&:hover .material-icons-round, &:focus .material-icons-round':
                  {
                    transform: 'translateX(6px)',
                  },
              }}
            >
              More about us
              <ArrowForward sx={{ fontWeight: 'bold' }} />
            </MKTypography2>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            sx={{ ml: { xs: -2, lg: 'auto' }, mt: { xs: 6, lg: 0 } }}
          >
            <Stack>
              <MKBox2 display="flex" alignItems="center" p={2}>
                <MKBox2
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  shadowColor="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Mediation fontSize="small" />
                </MKBox2>

                <MKTypography2 variant="body2" color="text" pl={2}>
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </MKTypography2>
              </MKBox2>

              <MKBox2 display="flex" alignItems="center" p={2}>
                <MKBox2
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  shadowColor="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <SettingsOverscan fontSize="small" />
                </MKBox2>

                <MKTypography2 variant="body2" color="text" pl={2}>
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </MKTypography2>
              </MKBox2>

              <MKBox2 display="flex" alignItems="center" p={2}>
                <MKBox2
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  shadowColor="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Token fontSize="small" />
                </MKBox2>

                <MKTypography2 variant="body2" color="text" pl={2}>
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </MKTypography2>
              </MKBox2>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox2>
  );
}

export default FeaturesOne;
