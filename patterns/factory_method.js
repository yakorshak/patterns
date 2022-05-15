export class ProjectsFactoryX {
    team = 'X';
    create(type, name, license) {
        if (type === 'b2c') {
            return new Project(type, name, license, 'v3', this.team);
        } 
        if (type === 'b2b') {
            return new Project(type, name, license, 'v2', this.team)
        }
    } 
}

export class ProjectsFactoryY {
    team = 'Y';
    create(type, name, license) {
        if (type === 'b2c') {
            return new Project(type, name, license, 'v3', this.team);
        } 
        if (type === 'b2b') {
            return new Project(type, name, license, 'v2', this.team);
        }
    } 
}

export class ProjectsFactory {
    create(type, name, license) {
        if (type === 'b2c') {
            return new Project(type, name, license, 'v3');
        } 
        if (type === 'b2b') {
            return new Project(type, name, license, 'v2')
        }
    } 
}

class Project {
    constructor(type, name, license, platform, team) {
        this.type = type
        this.name = name
        this.license = license
        this.platform = platform
        if (typeof(team)  === 'undefined') {
            this.team = 'common';
        } else {
            this.team = team;
        }
    }
}