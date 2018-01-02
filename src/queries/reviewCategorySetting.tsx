import gql from 'graphql-tag';

export const getOneReviewCategorySettingQuery = gql`
query reviewCategorySettingById($id: ID!) {
  reviewCategorySettingById(id: $id) {
    id
    reviewSettingId
    categorySettingId
    active
    categorySetting {
      id
      code
      name
      active
      description
    }
    reviewSetting {
      id
      active
      detailed
    }
  }
}`;

export const getListReviewCategorySettingQuery = gql`
query reviewCategorySettings {
  reviewCategorySettings {
    id
    reviewSettingId
    categorySettingId
    active
    categorySetting {
      id
      code
      name
      active
      description
    }
    reviewSetting {
      id
      active
      detailed
    }
  }
}`;


export const createReviewCategorySettingQuery = gql`
mutation createReviewCategorySetting($reviewSettingId: ID!, $categorySettingId: ID!, $active: Boolean) {
  createReviewCategorySetting(reviewSettingId: $reviewSettingId, categorySettingId: $categorySettingId, active: $active) {
    id
    reviewSettingId
    categorySettingId
    active
    categorySetting {
      id
      code
      name
      active
      description
    }
    reviewSetting {
      id
      active
      detailed
    }
  }
}`;

export const updateReviewCategorySettingQuery = gql`
mutation editReviewCategorySetting($id: ID!, $reviewSettingId: ID!, $categorySettingId: ID!, $active: Boolean) {
  editReviewCategorySetting(id: $id, reviewSettingId: $reviewSettingId, categorySettingId: $categorySettingId, active: $active) {
    id
    reviewSettingId
    categorySettingId
    active
    categorySetting {
      id
      code
      name
      active
      description
    }
    reviewSetting {
      id
      active
      detailed
    }
  }
}`;

export const deleteReviewCategorySettingQuery = gql`
mutation deleteReviewCategorySetting($id: ID!){
  deleteReviewCategorySetting(id: $id){
    id
    reviewSettingId
    categorySettingId
    active
    categorySetting {
      id
      code
      name
      active
      description
    }
    reviewSetting {
      id
      active
      detailed
    }
  }
}`;
