export const schema = {
  models: {
    Client: {
      name: "Client",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        firstName: {
          name: "firstName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        lastName: {
          name: "lastName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        email: {
          name: "email",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        phoneNumber: {
          name: "phoneNumber",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        ClientProjects: {
          name: "ClientProjects",
          isArray: true,
          type: {
            model: "Projects",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "clientID",
          },
        },
      },
      syncable: true,
      pluralName: "Clients",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Projects: {
      name: "Projects",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        Budget: {
          name: "Budget",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        designerId: {
          name: "designerId",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        clientId: {
          name: "clientId",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        Status: {
          name: "Status",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        SquareMeterage: {
          name: "SquareMeterage",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        ShoppingList: {
          name: "ShoppingList",
          isArray: false,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
        },
        Room: {
          name: "Room",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        PresentationBoards: {
          name: "PresentationBoards",
          isArray: false,
          type: "AWSJSON",
          isRequired: false,
          attributes: [],
        },
        Plans: {
          name: "Plans",
          isArray: true,
          type: {
            nonModel: "Plans",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        Designs: {
          name: "Designs",
          isArray: true,
          type: {
            nonModel: "Design",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        DateStarted: {
          name: "DateStarted",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        DateFinished: {
          name: "DateFinished",
          isArray: false,
          type: "AWSDate",
          isRequired: false,
          attributes: [],
        },
        Address: {
          name: "Address",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        designerID: {
          name: "designerID",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
        clientID: {
          name: "clientID",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Projects",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byDesigner",
            fields: ["designerID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byClient",
            fields: ["clientID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Designer: {
      name: "Designer",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        firstName: {
          name: "firstName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        lastName: {
          name: "lastName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        email: {
          name: "email",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        designerProjects: {
          name: "designerProjects",
          isArray: true,
          type: {
            model: "Projects",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "designerID",
          },
        },
      },
      syncable: true,
      pluralName: "Designers",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {
    Plans: {
      name: "Plans",
      fields: {
        FloorPlan: {
          name: "FloorPlan",
          isArray: true,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        ElevationAndSection: {
          name: "ElevationAndSection",
          isArray: true,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        SitePlan: {
          name: "SitePlan",
          isArray: true,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        Details: {
          name: "Details",
          isArray: true,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        Renders: {
          name: "Renders",
          isArray: true,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
      },
    },
    Design: {
      name: "Design",
      fields: {
        design: {
          name: "design",
          isArray: false,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
        },
        feedback: {
          name: "feedback",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
      },
    },
  },
  version: "755de93c2852754ce55947d38339f853",
};
