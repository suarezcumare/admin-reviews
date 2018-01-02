import { 
  getListCountryQuery,
  createCountryQuery,
  updateCountryQuery,
  deleteCountryQuery,
  getOneCountryQuery
} from './country'
import {
  getListBusinessUnitQuery,
  createBusinessUnitQuery,
  updateBusinessUnitQuery,
  deleteBusinessUnitQuery,
  getOneBusinessUnitQuery
} from './businessUnit'
import {
  getListCategorySettingQuery,
  createCategorySettingQuery,
  updateCategorySettingQuery,
  deleteCategorySettingQuery,
  getOneCategorySettingQuery
} from './categorySetting'
import {
  getListRatingSettingQuery,
  createRatingSettingQuery,
  updateRatingSettingQuery,
  deleteRatingSettingQuery,
  getOneRatingSettingQuery
} from './ratingSetting'
import {
  getListReviewSettingQuery,
  createReviewSettingQuery,
  updateReviewSettingQuery,
  deleteReviewSettingQuery,
  getOneReviewSettingQuery
} from './reviewSetting'
import {
  getListReviewCategorySettingQuery,
  createReviewCategorySettingQuery,
  updateReviewCategorySettingQuery,
  deleteReviewCategorySettingQuery,
  getOneReviewCategorySettingQuery
} from './reviewCategorySetting'
import {
  getListReviewQuery,
  createReviewQuery,
  updateReviewQuery,
  deleteReviewQuery,
  getOneReviewQuery
} from './review'
import {
  getListEntitySettingQuery,
  createEntitySettingQuery,
  updateEntitySettingQuery,
  deleteEntitySettingQuery,
  getOneEntitySettingQuery
} from './entitySetting'

export default {
  Country: {
    GET_LIST: getListCountryQuery,
    GET_MANY: getListCountryQuery,
    GET_MANY_REFERENCE: getListCountryQuery,
    CREATE: createCountryQuery,
    UPDATE: updateCountryQuery,
    GET_ONE: getOneCountryQuery,
    DELETE: deleteCountryQuery,
  },
  BusinessUnit: {
    GET_LIST: getListBusinessUnitQuery,
    GET_MANY: getListBusinessUnitQuery,
    GET_MANY_REFERENCE: getListBusinessUnitQuery,
    CREATE: createBusinessUnitQuery,
    UPDATE: updateBusinessUnitQuery,
    GET_ONE: getOneBusinessUnitQuery,
    DELETE: deleteBusinessUnitQuery,
  },
  CategorySetting: {
    GET_LIST: getListCategorySettingQuery,
    GET_MANY: getListCategorySettingQuery,
    GET_MANY_REFERENCE: getListCategorySettingQuery,
    CREATE: createCategorySettingQuery,
    UPDATE: updateCategorySettingQuery,
    GET_ONE: getOneCategorySettingQuery,
    DELETE: deleteCategorySettingQuery,
  },
  RatingSetting: {
    GET_LIST: getListRatingSettingQuery,
    GET_MANY: getListRatingSettingQuery,
    GET_MANY_REFERENCE: getListRatingSettingQuery,
    CREATE: createRatingSettingQuery,
    UPDATE: updateRatingSettingQuery,
    GET_ONE: getOneRatingSettingQuery,
    DELETE: deleteRatingSettingQuery,
  },
  ReviewSetting: {
    GET_LIST: getListReviewSettingQuery,
    GET_MANY: getListReviewSettingQuery,
    GET_MANY_REFERENCE: getListReviewSettingQuery,
    CREATE: createReviewSettingQuery,
    UPDATE: updateReviewSettingQuery,
    GET_ONE: getOneReviewSettingQuery,
    DELETE: deleteReviewSettingQuery,
  },
  ReviewCategorySetting: {
    GET_LIST: getListReviewCategorySettingQuery,
    GET_MANY: getListReviewCategorySettingQuery,
    GET_MANY_REFERENCE: getListReviewCategorySettingQuery,
    CREATE: createReviewCategorySettingQuery,
    UPDATE: updateReviewCategorySettingQuery,
    GET_ONE: getOneReviewCategorySettingQuery,
    DELETE: deleteReviewCategorySettingQuery,

  },
  Review: {
    GET_LIST: getListReviewQuery,
    GET_MANY: getListReviewQuery,
    GET_MANY_REFERENCE: getListReviewQuery,
    CREATE: createReviewQuery,
    UPDATE: updateReviewQuery,
    GET_ONE: getOneReviewQuery,
    DELETE: deleteReviewQuery,

  },
  EntitySetting: {
    GET_LIST: getListEntitySettingQuery,
    GET_MANY: getListEntitySettingQuery,
    GET_MANY_REFERENCE: getListEntitySettingQuery,
    CREATE: createEntitySettingQuery,
    UPDATE: updateEntitySettingQuery,
    GET_ONE: getOneEntitySettingQuery,
    DELETE: deleteEntitySettingQuery,

  }
}
