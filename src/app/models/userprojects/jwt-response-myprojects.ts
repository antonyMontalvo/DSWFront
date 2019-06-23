import { myProjectI } from './myproject';

export interface JwtResponseMyProjects {
    message: Array<myProjectI>
    status: string;
}