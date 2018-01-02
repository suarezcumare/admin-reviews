import gql from 'graphql-tag';

export const getOneReviewSettingQuery = gql`
query reviewSettingById($id: ID!) {
  reviewSettingById(id: $id) {
    id
    detailed
    ratingSettingId
    active
    ratingSetting {
      id
      code
      name
      description
    }
  }
}`;

export const getListReviewSettingQuery = gql`
query reviewSettings {
  reviewSettings {
    id
    detailed
    ratingSettingId
    active
    ratingSetting {
      id
      code
      name
      description
    }
  }
}`;

export const createReviewSettingQuery = gql`
mutation createReviewSetting ($id: ID, $detailed: Boolean!, $ratingSettingId: ID!, $active: Boolean) {
  createReviewSetting (id: $id, detailed: $detailed, ratingSettingId: $ratingSettingId, active: $active) {
    id
    detailed
    ratingSettingId
    active
    ratingSetting {
      id
      code
      name
      description
    }
  }
}`;

export const updateReviewSettingQuery = gql`
mutation editReviewSetting ($id: ID!, $detailed: Boolean!, $ratingSettingId: ID!, $active: Boolean) {
  editReviewSetting (id: $id, detailed: $detailed, ratingSettingId: $ratingSettingId, active: $active) {
    id
    detailed
    ratingSettingId
    active
    ratingSetting {
      id
      code
      name
      description
    }
  }
}`;

export const deleteReviewSettingQuery = gql`
mutation deleteReviewSetting ($id: ID!) {
  deleteReviewSetting (id: $id) {
    id
    detailed
    ratingSettingId
    active
    ratingSetting {
      id
      code
      name
      description
    }
  }
}`;
