// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Client, Projects, Designer, Plans, Design } = initSchema(schema);

export {
  Client,
  Projects,
  Designer,
  Plans,
  Design
};