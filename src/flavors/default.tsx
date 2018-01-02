import pluralize from 'pluralize';
import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
  QUERY_TYPES
} from '../constants';

export const buildGetListErrorMessage = resource =>
    `The data returned by the graphql endpoint for the GET_LIST query on resource ${resource} does not contains a \`totalCount\` property which is needed to build the pagination. The query result must conform to this schema: \`{ totalCount: Int, items: [] }\``; // eslint-disable-line

const getApolloResultKey = (type, apolloParams) =>
    QUERY_TYPES.includes(type)
        ? apolloParams.query.definitions[0].selectionSet.selections[0].name.value
        : apolloParams.mutation.definitions[0].selectionSet.selections[0].name.value;

export default {
  [GET_LIST]: {
    operationName: resourceType => `getPageOf${pluralize(resourceType.name)}`,
    getParameters: params => ({
      filter: null,
      page: 0,
      perPage: 100,
      sortField: null,
      sortOrder: null,
    }),
    parseResponse: (response, resource, apolloParams) => {
      const { data } = response;
      const dataKey = getApolloResultKey(GET_LIST, apolloParams);
      const dataForType = data[dataKey];
      return {
          data: dataForType.map(x => x),
          total: dataForType.length,
      };
    },
  },

  [GET_MANY]: {
    parseResponse: (response, resource, apolloParams) => {
      const { data } = response;
      const dataKey = getApolloResultKey(GET_MANY, apolloParams);
      const dataForType = data[dataKey];
      return { data: dataForType };
    },
  },

  [GET_MANY_REFERENCE]: {
    operationName: resourceType => `${pluralize(resourceType.name)}`,
    getParameters: params => ({
      filter: JSON.stringify({ [params.target]: params.id }),
      perPage: 1000,
    }),

    parseResponse: (response, resource, apolloParams) => {
      const { data } = response;
      const dataKey = getApolloResultKey(GET_MANY_REFERENCE, apolloParams);
      const dataForType = data[dataKey];
      
      if (dataForType.totalCount) {
        return { data: dataForType.items.map(x => x) };
      }

      return { data: dataForType };
    },
  },

  [GET_ONE]: {
    operationName: resourceType => `${resourceType.name}`,
    getParameters: params => ({ id: params.id }),
    parseResponse: (response, resource, apolloParams) => {
      const { data } = response;
      const dataKey = getApolloResultKey(GET_ONE, apolloParams);

      return { data: data[dataKey] };
    },
  },

  [CREATE]: {
    operationName: resourceType => `create${resourceType.name}`,
    getParameters: params => {
      const _params = {};
      for( var _param in params.data) {
        if (typeof params.data[_param] === 'object') {
          _params[_param+"Id"] = params.data[_param].id 
        } else {
         _params[_param] = params.data[_param] 
       }
      }
       return _params
    },

    parseResponse: (response, resource, apolloParams) => {
      const { data } = response;
      const dataKey = getApolloResultKey(CREATE, apolloParams);

      return { data: data[dataKey] };
    },
  },
  
  [UPDATE]: {
    operationName: resourceType => `update${resourceType.name}`,
    getParameters: params => ( params.data ),
    parseResponse: (response, resource, apolloParams) => {
        const { data } = response;
        const dataKey = getApolloResultKey(UPDATE, apolloParams);

        return { data: data[dataKey] };
    },
  },
  
  [DELETE]: {
    operationName: resourceType => `remove${resourceType.name}`,
    getParameters: params => ({ id: params.id }),
    parseResponse: (response, resource, apolloParams) => {
      const { data } = response;
      const dataKey = getApolloResultKey(DELETE, apolloParams);

      return { data: data[dataKey] };
    },
  },
};
