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
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface MKSocialButtonRootProps {
  ownerState: any;
}

export const MKSocialButtonRoot = styled(Button)<MKSocialButtonRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const { color, size, iconOnly, circular } = ownerState;

    const { socialMediaColors } = palette;
    const { pxToRem } = functions;

    // backgroundColor value
    const backgroundColorValue = socialMediaColors[color]
      ? socialMediaColors[color].main
      : socialMediaColors.facebook.main;

    const focusedBackgroundColorValue = socialMediaColors[color]
      ? socialMediaColors[color].dark
      : socialMediaColors.facebook.dark;

    // styles for the button with circular={true}
    const circularStyles = (): any => ({
      borderRadius: '50%',
    });

    // styles for the button with iconOnly={true}
    const iconOnlyStyles = (): any => {
      // width, height, minWidth and minHeight values
      let sizeValue = pxToRem(38);

      if (size === 'small') {
        sizeValue = pxToRem(25.4);
      } else if (size === 'large') {
        sizeValue = pxToRem(52);
      }

      // padding value
      let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

      if (size === 'small') {
        paddingValue = pxToRem(4.5);
      } else if (size === 'large') {
        paddingValue = pxToRem(16);
      }

      return {
        width: sizeValue,
        minWidth: sizeValue,
        height: sizeValue,
        minHeight: sizeValue,
        padding: paddingValue,
      };
    };

    return {
      backgroundColor: backgroundColorValue,
      color: 'white',
      boxShadow: 'none',

      '&:hover': {
        backgroundColor: focusedBackgroundColorValue,
        boxShadow: 'none',
      },

      '&:focus:not(:hover)': {
        backgroundColor: socialMediaColors[color]
          ? socialMediaColors[color].dark
          : socialMediaColors.facebook.dark,
        boxShadow: 'none',
      },

      '&:disabled': {
        backgroundColor: backgroundColorValue,
        color: 'white',
      },

      ...(circular && circularStyles()),
      ...(iconOnly && iconOnlyStyles()),
    };
  },
);
