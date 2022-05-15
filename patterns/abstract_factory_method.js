import {ProjectsFactoryX, ProjectsFactoryY} from './factory_method.js';
export class AbsctractProjectsFactory {
    assignTeam(team) {
        return team === 'X' ? ProjectsFactoryX : ProjectsFactoryY;
    }
}

