import { schema } from 'normalizr'

const teachers = new schema.Entity('teachers', {}, { idAttribute: 'id' })

export default teachers;