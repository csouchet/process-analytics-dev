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
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import React from 'react';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';

function HorizontalTeamCard({
  image,
  name,
  position,
  description,
}: HorizontalTeamCardProps): JSX.Element {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>

        <Grid item xs={12} md={6} lg={8} sx={{ my: 'auto' }}>
          <MKBox
            pt={{ xs: 1, lg: 2.5 }}
            pb={2.5}
            pr={4}
            pl={{ xs: 4, lg: 1 }}
            lineHeight={1}
          >
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
interface HorizontalTeamCardProps {
  image: string;
  name: string;
  position: {
    color?:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark';
    label: string;
  };
  description: string;
}

export default HorizontalTeamCard;
