import { schema } from 'normalizr'

const classes = new schema.Entity('classes', {}, { idAttribute: 'id' });

export default classes;