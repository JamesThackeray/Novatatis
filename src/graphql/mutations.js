/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createDesigner = /* GraphQL */ `
  mutation CreateDesigner(
    $input: CreateDesignerInput!
    $condition: ModelDesignerConditionInput
  ) {
    createDesigner(input: $input, condition: $condition) {
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
export const updateDesigner = /* GraphQL */ `
  mutation UpdateDesigner(
    $input: UpdateDesignerInput!
    $condition: ModelDesignerConditionInput
  ) {
    updateDesigner(input: $input, condition: $condition) {
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
export const deleteDesigner = /* GraphQL */ `
  mutation DeleteDesigner(
    $input: DeleteDesignerInput!
    $condition: ModelDesignerConditionInput
  ) {
    deleteDesigner(input: $input, condition: $condition) {
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
export const createProjects = /* GraphQL */ `
  mutation CreateProjects(
    $input: CreateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    createProjects(input: $input, condition: $condition) {
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
export const updateProjects = /* GraphQL */ `
  mutation UpdateProjects(
    $input: UpdateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    updateProjects(input: $input, condition: $condition) {
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
export const deleteProjects = /* GraphQL */ `
  mutation DeleteProjects(
    $input: DeleteProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    deleteProjects(input: $input, condition: $condition) {
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
