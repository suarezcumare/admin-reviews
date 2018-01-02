import gql from 'graphql-tag';

export const getOneReviewQuery = gql`
query reviewById($id: ID!) {
  reviewById(id: $id) {
    id
    comment
    value
    userId
    userName
    published
    active
    externalEntityId
    reviewSettingId
    businessUnitId
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
    businessUnit {
      id
      code
      name
      countryId
      active
      reviewSettingId
    }
  }
}`;

export const getListReviewQuery = gql`
query reviews {
  reviews {
    id
    comment
    value
    userId
    userName
    published
    active
    externalEntityId
    reviewSettingId
    businessUnitId
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
    businessUnit {
      id
      code
      name
      countryId
      active
      reviewSettingId
    }
  }
}`;


export const createReviewQuery = gql`
mutation createReview($id: ID,$comment: String!, $value: Int!, $userId: Int!, $userName: String!, $externalEntityId: Int!, $entitySettingCode: String!,  $published: Boolean,  $active: Boolean, $reviewSettingId: ID) {
  createReview(id: $id, comment: $comment, value: $value, userId: $userId, userName: $userName, externalEntityId: $externalEntityId, entitySettingCode: $entitySettingCode, published: $published, active: $active, reviewSettingId: $reviewSettingId) {
    id
    comment
    value
    userId
    userName
    published
    active
    externalEntityId
    reviewSettingId
    businessUnitId
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
    businessUnit {
      id
      code
      name
      countryId
      active
      reviewSettingId
    }
  }
}`;

export const updateReviewQuery = gql`
mutation editReview($id: ID! ,$comment: String!, $value: Int!, $published: Boolean,  $active: Boolean) {
  editReview(id: $id, comment: $comment, value: $value, published: $published, active: $active) {
    id
    comment
    value
    userId
    userName
    published
    active
    externalEntityId
    reviewSettingId
    businessUnitId
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
    businessUnit {
      id
      code
      name
      countryId
      active
      reviewSettingId
    }
  }
}`;

export const deleteReviewQuery = gql`
mutation deleteReview($id: ID!){
  deleteReview(id: $id){
    id
    comment
    value
    userId
    userName
    published
    active
    externalEntityId
    reviewSettingId
    businessUnitId
    reviewSetting {
      id
      detailed
      ratingSettingId
      active
    }
    businessUnit {
      id
      code
      name
      countryId
      active
      reviewSettingId
    }
  }
}`;
