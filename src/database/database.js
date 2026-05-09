import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const defaultData = { usuarios: [], cursos: [] };

const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);

export default db;