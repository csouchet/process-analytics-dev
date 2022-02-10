/**
 * Copyright 2021 Bonitasoft S.A.
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
import * as React from 'react';
import { PAGE, SECTION } from '../../other/src/constants';
import { newsContent } from '../../content/src/NewsContent';
import { PageWithPosts } from '../../page-template/src/PageWithPosts';

const NewsPage = (): JSX.Element => (
  <PageWithPosts
    layoutTitle={PAGE.news}
    containerTitle={SECTION.news}
    posts={newsContent.news}
    description={newsContent.description}
  />
);

export default NewsPage;
