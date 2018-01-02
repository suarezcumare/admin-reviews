import gql from 'graphql-tag';

export const getOneCategorySettingQuery = gql`
query categorySettingById($id: ID!) {
  categorySettingById(id: $id) {
    id
    code
    name
    title
    description
    active
  }
}`;

export const getListCategorySettingQuery = gql`
query categorySettings {
  categorySettings {
    id
    code
    name
    title
    description
    active
  }
}`;


export const createCategorySettingQuery = gql`
mutation createCategorySetting($id: ID, $code: String!, $name: String!, $title: String!, $description: String!, $active: Boolean) {
  createCategorySetting(id: $id,code: $code, name: $name, title: $title, description: $description, active: $active) {
    id
    code
    name
    title
    description
    active
  }
}`;

export const updateCategorySettingQuery = gql`
mutation editCategorySetting($id: ID!, $code: String!, $name: String!, $title: String!, $description: String!, $active: Boolean) {
  editCategorySetting(id: $id,code: $code, name: $name, title: $title, description: $description, active: $active) {
    id
    code
    name
    title
    description
    active
  }
}`;


export const deleteCategorySettingQuery = gql`
mutation deleteCategorySetting($id: ID!){
  deleteCategorySetting(id: $id){
    id
    code
    name
    title
    description
    active
  }
}`;
