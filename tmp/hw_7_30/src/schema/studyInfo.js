import { schema } from 'normalizr'

const studyInfoSchema = new schema.Entity('studyInfo', {}, { idAttribute: 'time' })
const studyInfoListSchema = [studyInfoSchema];

export default studyInfoListSchema;