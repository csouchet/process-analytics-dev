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

import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';
// Material Kit 2 React base styles
import typography from '../../base/typography';
import colors from '../../base/colors';

// Material Kit 2 React helper functions
import pxToRem from '../../functions/pxToRem';
import rgba from '../../functions/rgba';

const { size, fontWeightRegular } = typography;
const { white } = colors;

const stepLabel: {
  defaultProps?: ComponentsProps['MuiStepLabel'];
  styleOverrides?: ComponentsOverrides['MuiStepLabel'];
  variants?: ComponentsVariants['MuiStepLabel'];
} = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: '#9fc9ff',
      textTransform: 'uppercase',

      '&.Mui-active': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      '&.Mui-completed': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};
export default stepLabel;
