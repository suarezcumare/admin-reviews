import gql from 'graphql-tag';

export const getOneCountryQuery = gql`
query countryById($id: ID!) {
  countryById(id: $id) {
    id
    code
    name
    active
  }
}`;

export const getListCountryQuery = gql`
query countries {
  countries {
    id
    code
    name
    active
  }
}`;

export const createCountryQuery = gql`
mutation createCountry($id: ID, $code: String!, $name: String!, $active: Boolean) {
  createCountry(id: $id, code: $code, name: $name, active: $active) {
    id
    code
    name
    active
  }
}`;

export const updateCountryQuery = gql`
mutation editCountry($id: ID!, $code: String!, $name: String!, $active: Boolean) {
  editCountry(id: $id, code: $code, name: $name, active: $active) {
    id
    code
    name
    active
  }
}`;

export const deleteCountryQuery = gql`
mutation deleteCountry($id: ID!){
  deleteCountry(id: $id){
    id
    code
    name
    active
  }
}`;
