import { schema } from 'normalizr';

const users = new schema.Entity('users', {}, { idAttribute: 'mid' });
export default users;
