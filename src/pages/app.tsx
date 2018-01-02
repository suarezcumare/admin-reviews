

import React, { Component } from 'react';
import { buildApolloClient } from 'aor-simple-graphql-client';
import {
  Admin,
  Resource,
  resolveBrowserLocale,
  Delete
} from 'admin-on-rest';
import {
  CountryList,
  CountryEdit,
  CountryCreate,
  CountryShow,
  CountryIcon
} from './country';
import {
  BusinessUnitList,
  BusinessUnitEdit,
  BusinessUnitCreate,
  BusinessUnitShow,
  BusinessUnitIcon
} from './businessUnit';
import {
  CategorySettingList,
  CategorySettingEdit,
  CategorySettingCreate,
  CategorySettingShow,
  CategorySettingIcon
} from './categorySetting';
import {
  RatingSettingList,
  RatingSettingEdit,
  RatingSettingCreate,
  RatingSettingShow,
  RatingSettingIcon
} from './ratingSetting';
import {
  ReviewSettingList,
  ReviewSettingEdit,
  ReviewSettingCreate,
  ReviewSettingShow,
  ReviewSettingIcon
} from './reviewSetting';
import {
  ReviewCategorySettingList,
  ReviewCategorySettingEdit,
  ReviewCategorySettingCreate,
  ReviewCategorySettingShow,
  ReviewCategorySettingIcon
} from './reviewCategorySetting';
import {
  ReviewList,
  ReviewEdit,
  ReviewShow,
  ReviewIcon
} from './review';
import {
  EntitySettingList,
  EntitySettingEdit,
  EntitySettingCreate,
  EntitySettingShow,
  EntitySettingIcon
} from './entitySetting';

import loginPage from './loginPage';
/*import './App.css';*/
import authClient from './../authClient';
import Dashboard from './dashboard';
import translations from './..//i18n/index';
import myQueries from './../queries/index';
import myGraphCoolFlavor from './../flavors/default'
import {APP_URL} from './../constants'

class App extends Component {
  constructor() {
    super();
    this.state = { restClient: null };
  }
  componentDidMount() {
    buildApolloClient({
      clientOptions: { uri: APP_URL },
      introspection: false,
      queries: myQueries,
      flavor: myGraphCoolFlavor
    }).then(restClient => this.setState({ restClient }));
  }

  render() {
    const { restClient } = this.state;

    if (!restClient) {
      return <div>Loading...</div>;
    }

    return (
      <Admin
        loginPage={loginPage}
        title='Reviews'
        locale={resolveBrowserLocale()}
        messages={translations}
        authClient={authClient}
        dashboard={Dashboard}
        restClient={restClient}>

        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
          remove={Delete}
          icon={CountryIcon} />

        <Resource
          name="BusinessUnit"
          list={BusinessUnitList}
          edit={BusinessUnitEdit}
          create={BusinessUnitCreate}
          show={BusinessUnitShow}
          remove={Delete}
          icon={BusinessUnitIcon} />

        <Resource
          name="CategorySetting"
          list={CategorySettingList}
          edit={CategorySettingEdit}
          create={CategorySettingCreate}
          show={CategorySettingShow}
          remove={Delete}
          icon={CategorySettingIcon} />
        <Resource
          name="EntitySetting"
          list={EntitySettingList}
          edit={EntitySettingEdit}
          create={EntitySettingCreate}
          show={EntitySettingShow}
          remove={Delete}
          icon={EntitySettingIcon} />

        <Resource
          name="RatingSetting"
          list={RatingSettingList}
          edit={RatingSettingEdit}
          create={RatingSettingCreate}
          show={RatingSettingShow}
          remove={Delete}
          icon={RatingSettingIcon} />

        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          show={ReviewShow}
          remove={Delete}
          icon={ReviewIcon} />

        <Resource
          name="ReviewSetting"
          list={ReviewSettingList}
          edit={ReviewSettingEdit}
          create={ReviewSettingCreate}
          show={ReviewSettingShow}
          remove={Delete}
          icon={ReviewSettingIcon} />

        <Resource
          name="ReviewCategorySetting"
          list={ReviewCategorySettingList}
          edit={ReviewCategorySettingEdit}
          create={ReviewCategorySettingCreate}
          show={ReviewCategorySettingShow}
          remove={Delete}
          icon={ReviewCategorySettingIcon} />
    </Admin>
    );
  }
}

export default App;
