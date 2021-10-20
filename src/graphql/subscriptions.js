/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateDesigner = /* GraphQL */ `
  subscription OnCreateDesigner {
    onCreateDesigner {
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
export const onUpdateDesigner = /* GraphQL */ `
  subscription OnUpdateDesigner {
    onUpdateDesigner {
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
export const onDeleteDesigner = /* GraphQL */ `
  subscription OnDeleteDesigner {
    onDeleteDesigner {
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
export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects {
    onCreateProjects {
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
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects {
    onUpdateProjects {
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
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects {
    onDeleteProjects {
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
