// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Client, Projects, Designer, Plans, Design } = initSchema(schema);

export {
  User,
  Client,
  Projects,
  Designer,
  Plans,
  Design
};