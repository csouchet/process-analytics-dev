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
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

import { withStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Icon from '@mui/material/Icon';

// core components
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

import customTabsStyle from '../../assets/jss/material-kit-react/components/customTabsStyle';

class CustomTabs extends React.Component {
  state = {
    value: 0,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  handleChange = (event, value): void => {
    this.setState({ value });
  };

  render(): JSX.Element {
    const { classes, headerColor, plainTabs, tabs, title, rtlActive } = this
      .props as React.PropsWithChildren<CustomTabsProps>;

    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive,
    });

    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title && <div className={cardTitle}>{title}</div>}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              root: classNames(classes.tabsRoot),
              indicator: classNames(classes.displayNone),
            }}
          >
            {tabs.map((prop, key) => {
              let icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon:
                    typeof prop.tabIcon === 'string' ? (
                      <Icon>{prop.tabIcon}</Icon>
                    ) : (
                      <prop.tabIcon />
                    ),
                };
              }

              return (
                <Tab
                  classes={{
                    root: "minHeight: 'unset !important', backgroundColor: 'transparent'",
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    labelContainer: classNames(classes.tabLabelContainer),
                    label: classNames(classes.tabLabel),
                    textColorInherit: classNames(classes.tabLabel),
                    selected: classNames(classes.tabSelected),
                    wrapper: classNames(classes.tabWrapper),
                  }}
                  key={key}
                  label={prop.tabName}
                  textColor="inherit"
                  disableRipple
                  {...icon}
                />
              );
            })}
          </Tabs>
        </CardHeader>
        <CardBody>
          {tabs
            .map((prop, key) => {
              if (key === this.state.value) {
                return <div key={key}>{prop.tabContent}</div>;
              }
            })
            .filter(x => x)}
        </CardBody>
      </Card>
    );
  }
}

interface TabProps {
  tabName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabIcon: (props: any) => JSX.Element;
  tabContent: JSX.Element;
}

interface CustomTabsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes: { [key: string]: any };
  headerColor: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
  title: JSX.Element;
  tabs: TabProps[];
  rtlActive: boolean;
  plainTabs: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withStyles(customTabsStyle)(CustomTabs);
