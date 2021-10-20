/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      firstName
      lastName
      email
      phoneNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ClientProjects {
        items {
          id
          Budget
          Status
          SquareMeterage
          ShoppingList
          Room
          PresentationBoards
          DateStarted
          DateFinished
          Address
          designerID
          clientID
          clientId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ClientProjects {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ClientProjects {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getDesigner = /* GraphQL */ `
  query GetDesigner($id: ID!) {
    getDesigner(id: $id) {
      id
      firstName
      lastName
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      designerProjects {
        items {
          id
          Budget
          Status
          SquareMeterage
          ShoppingList
          Room
          PresentationBoards
          DateStarted
          DateFinished
          Address
          designerID
          clientID
          clientId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listDesigners = /* GraphQL */ `
  query ListDesigners(
    $filter: ModelDesignerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDesigners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        designerProjects {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDesigners = /* GraphQL */ `
  query SyncDesigners(
    $filter: ModelDesignerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDesigners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        designerProjects {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
      id
      Budget
      Status
      SquareMeterage
      ShoppingList
      Room
      PresentationBoards
      Plans {
        FloorPlan
        ElevationAndSection
        SitePlan
        Details
        Renders
      }
      Designs {
        design
        feedback
      }
      DateStarted
      DateFinished
      Address
      designerID
      clientID
      clientId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Budget
        Status
        SquareMeterage
        ShoppingList
        Room
        PresentationBoards
        Plans {
          FloorPlan
          ElevationAndSection
          SitePlan
          Details
          Renders
        }
        Designs {
          design
          feedback
        }
        DateStarted
        DateFinished
        Address
        designerID
        clientID
        clientId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Budget
        Status
        SquareMeterage
        ShoppingList
        Room
        PresentationBoards
        Plans {
          FloorPlan
          ElevationAndSection
          SitePlan
          Details
          Renders
        }
        Designs {
          design
          feedback
        }
        DateStarted
        DateFinished
        Address
        designerID
        clientID
        clientId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
