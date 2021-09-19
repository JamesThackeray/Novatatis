import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Plans {
  readonly FloorPlan?: (string | null)[];
  readonly ElevationAndSection?: (string | null)[];
  readonly SitePlan?: (string | null)[];
  readonly Details?: (string | null)[];
  readonly Renders?: (string | null)[];
  constructor(init: ModelInit<Plans>);
}

export declare class Design {
  readonly design?: string;
  readonly feedback?: string;
  constructor(init: ModelInit<Design>);
}

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DesignerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Client {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly phoneNumber?: string;
  readonly ClientProjects?: (Projects | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Client, ClientMetaData>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}

export declare class Projects {
  readonly id: string;
  readonly Budget: string;
  readonly designerId?: string;
  readonly clientId: string;
  readonly Status: string;
  readonly SquareMeterage?: number;
  readonly ShoppingList?: string;
  readonly Room: string;
  readonly PresentationBoards?: string;
  readonly Plans?: (Plans | null)[];
  readonly Designs?: (Design | null)[];
  readonly DateStarted: string;
  readonly DateFinished?: string;
  readonly Address: string;
  readonly designerID?: string;
  readonly clientID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Projects, ProjectsMetaData>);
  static copyOf(source: Projects, mutator: (draft: MutableModel<Projects, ProjectsMetaData>) => MutableModel<Projects, ProjectsMetaData> | void): Projects;
}

export declare class Designer {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly designerProjects?: (Projects | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Designer, DesignerMetaData>);
  static copyOf(source: Designer, mutator: (draft: MutableModel<Designer, DesignerMetaData>) => MutableModel<Designer, DesignerMetaData> | void): Designer;
}