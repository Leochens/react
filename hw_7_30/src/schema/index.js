import { schema, normalize } from 'normalizr'

const lessonSchema = new schema.Entity('lesson', {}, { idAttribute: 'id' })
const lessonListSchema = [ lessonSchema ];


const Schemas = {
    lessonListSchema
}

export default Schemas;