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

export declare class Client {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly phoneNumber?: string;
  readonly ClientProjects?: (Projects | null)[];
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
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
  constructor(init: ModelInit<Projects>);
  static copyOf(source: Projects, mutator: (draft: MutableModel<Projects>) => MutableModel<Projects> | void): Projects;
}

export declare class Designer {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly designerProjects?: (Projects | null)[];
  constructor(init: ModelInit<Designer>);
  static copyOf(source: Designer, mutator: (draft: MutableModel<Designer>) => MutableModel<Designer> | void): Designer;
}