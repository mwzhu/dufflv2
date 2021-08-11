/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      title
      description
      image
      price
      category
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        price
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchItems = /* GraphQL */ `
  query searchItems(
    $filter: SearchableItemFilterInput
    $sort: SearchableItemSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchItems(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        image
        price
        category
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
