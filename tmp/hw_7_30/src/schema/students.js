import { schema } from 'normalizr'

const studentSchema = new schema.Entity('students', {}, { idAttribute: "mid" })
const studentListSchema = [ studentSchema ];
export default studentListSchema;

