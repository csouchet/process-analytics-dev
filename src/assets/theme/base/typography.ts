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

/**
 * The base typography styles for the Material Kit 2 React.
 * You can add new typography style using this file.
 * You can customize the typography styles for the entire Material Kit 2 React using this file.
 */

import { TypographyOptions } from '@mui/material/styles/createTypography';

const baseHeadingProperties = {
  color: 'inherit',
  fontWeight: 700,
  fontFamily: 'inherit',
  margin: '1.5rem 0 1.5rem 0',
};

export const typography: TypographyOptions = {
  fontFamily: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  fontSize: 10,
  htmlFontSize: 10,

  h1: {
    fontSize: '3rem',
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: '2.25rem',
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: '1.875rem',
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: '1.5rem',
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: '1.25rem',
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: '1rem',
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: 1.6,
  },

  body1: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.625,
  },

  body2: {
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: 1.6,
  },

  button: {
    fontSize: '0.875rem',
    fontWeight: 300,
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },

  caption: {
    fontSize: '0.75rem',
    fontWeight: 300,
    lineHeight: 1.25,
  },

  overline: {
    // Keep default theme
  },
};
