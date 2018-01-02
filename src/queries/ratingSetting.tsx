import gql from 'graphql-tag';

export const getOneRatingSettingQuery = gql`
query ratingSettingById($id: ID!) {
  ratingSettingById(id: $id) {
    id
    code
    name
    description
    active
  }
}`;

export const getListRatingSettingQuery = gql`
query ratingSettings {
  ratingSettings {
    id
    code
    name
    description
    active
  }
}`;


export const createRatingSettingQuery = gql`
mutation createRatingSetting($id: ID, $code: String!, $name: String!, $description: String!, $active: Boolean) {
  createRatingSetting(id: $id,code: $code, name: $name, description: $description, active: $active) {
    id
    code
    name
    description
    active
  }
}`;

export const updateRatingSettingQuery = gql`
mutation editatingSetting($id: ID!, $code: String!, $name: String!, $description: String!, $active: Boolean) {
  editRatingSetting(id: $id,code: $code, name: $name, description: $description, active: $active) {
    id
    code
    name
    description
    active
  }
}`;


export const deleteRatingSettingQuery = gql`
mutation deleteRatingSetting($id: ID!){
  deleteRatingSetting(id: $id){
    id
    code
    name
    description
    active
  }
}`;
