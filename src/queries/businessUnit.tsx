import gql from 'graphql-tag';

export const getOneBusinessUnitQuery = gql`
query businessUnitById($id: ID!) {
  businessUnitById(id: $id) {
    id
    code
    name
    countryId
    active
    reviewSettingId
    country {
      id
      code
      name
      active
    }
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
  }
}`;

export const getListBusinessUnitQuery = gql`
query businessUnits {
  businessUnits {
    id
    code
    name
    countryId
    active
    reviewSettingId
    country {
      id
      code
      name
      active
    }
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
  }
}`;


export const createBusinessUnitQuery = gql`
mutation createBusinessUnit($id: ID,$code: String!, $name: String!, $countryId: ID!, $reviewSettingId: ID!, $active: Boolean) {
  createBusinessUnit(id: $id, code: $code, name: $name, countryId: $countryId, reviewSettingId: $reviewSettingId, active: $active) {
    id
    code
    name
    countryId
    active
    reviewSettingId
    country {
      id
      code
      name
    }
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
  }
}`;

export const updateBusinessUnitQuery = gql`
mutation editBusinessUnit($id: ID!,$code: String!, $name: String!, $countryId: ID!, $reviewSettingId: ID!, $active: Boolean) {
  editBusinessUnit(id: $id, code: $code, name: $name, countryId: $countryId, reviewSettingId: $reviewSettingId, active: $active) {
    id
    code
    name
    countryId
    active
    reviewSettingId
    country {
      id
      code
      name
      active
    }
    reviewSetting {
      id
      detailed

      ratingSettingId
      active
    }
  }
}`;

export const deleteBusinessUnitQuery = gql`
mutation deleteBusinessUnit($id: ID!){
  deleteBusinessUnit(id: $id){
    id
    code
    name
    countryId
    active
    reviewSettingId
    country {
      id
      code
      name
      active
    }
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
  }
}`;
