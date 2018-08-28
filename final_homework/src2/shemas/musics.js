import { schema } from 'normalizr';

const Musics = new schema.Entity('musics', {}, { idAttribute: 'id' });
const musics = [Musics];
export default musics;
