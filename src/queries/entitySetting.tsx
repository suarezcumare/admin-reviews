import gql from 'graphql-tag';

export const getOneEntitySettingQuery = gql`
query entitySettingById($id: ID!) {
  entitySettingById(id: $id) {
    id
    code
    name
    description
    active
    businessUnit {
      id
      code
      name
      countryId
      active
    }
  }
}`;

export const getListEntitySettingQuery = gql`
query entitySettings {
  entitySettings {
    id
    code
    name
    description
    active
    businessUnitId
    businessUnit {
      id
      code
      name
      countryId
      active
    }
  }
}`;


export const createEntitySettingQuery = gql`
mutation createEntitySetting($id: ID, $code: String!, $name: String!, $description: String!, $active: Boolean, $businessUnitId: ID!) {
  createEntitySetting(id: $id,code: $code, name: $name, description: $description, active: $active, businessUnitId: $businessUnitId) {
    id
    code
    name
    description
    active
    businessUnitId
    businessUnit {
      id
      code
      name
      countryId
      active
    }
  }
}`;

export const updateEntitySettingQuery = gql`
mutation editEntitySetting($id: ID, $code: String!, $name: String!, $description: String!, $active: Boolean, $businessUnitId: ID!) {
  editEntitySetting(id: $id,code: $code, name: $name, description: $description, active: $active, businessUnitId: $businessUnitId) {
    id
    code
    name
    description
    active
    businessUnitId
    businessUnit {
      id
      code
      name
      countryId
      active
    }
  }
}`;

export const deleteEntitySettingQuery = gql`
mutation deleteEntitySetting($id: ID!){
  deleteEntitySetting(id: $id){
    id
    code
    name
    description
    active
    businessUnitId
    businessUnit {
      id
      code
      name
      countryId
      active
    }
  }
}`;
