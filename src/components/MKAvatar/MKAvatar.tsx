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

import { AvatarProps } from '@mui/material';
import React from 'react';
import { forwardRef } from 'react';

// Custom styles for MKAvatar
import { MKAvatarRoot } from './MKAvatarRoot';

export const MKAvatar = forwardRef<HTMLDivElement, MKAvatarProps & AvatarProps>(
  ({ bgColor, size, shadow, ...rest }, ref) => (
    <MKAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
  ),
);

// Setting default values for the props of MKAvatar
MKAvatar.defaultProps = {
  bgColor: 'transparent',
  size: 'md',
  shadow: 'none',
};

// Typechecking props for the MKAvatar
interface MKAvatarProps {
  bgColor?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'transparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none' | 'inset';
}
