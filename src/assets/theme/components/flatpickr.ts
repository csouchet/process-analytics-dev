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

import {
  PaletteColor,
  SimplePaletteColorOptions,
} from '@mui/material/styles/createPalette';
// Material Kit 2 React base styles
import { palette } from '../base/colors';

// Material Kit 2 React helper functions
import { rgba } from '../functions/rgba';

const { info } = palette;

const infoMain = (info as PaletteColor).main;
const infoContrastText = (info as PaletteColor).contrastText;

export default {
  '.flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus':
    {
      background: rgba(infoMain, 0.28),
      border: 'none',
    },

  '.flatpickr-day.today': {
    background: infoMain,
    color: 'white',
    border: 'none',

    '&:hover, &:focus': {
      background: `${infoContrastText} !important`,
    },
  },

  '.flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus':
    {
      background: `${(info as PaletteColor).dark} !important`,
      color: 'white',
      border: 'none',
    },

  '.flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg':
    {
      color: `${infoMain} !important`,
      fill: `${infoMain} !important`,
    },
};
