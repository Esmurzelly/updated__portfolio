export interface IProject {
    id: number,
    type?: string,
    title: string,
    description: string,
    mainUrl: string,
    live: string,
    code: string,
    stack?: Array<string>
}

export interface ProjectsState {
    projects: IProject[];
}

export interface ISkill {
    id: number,
    name: string,
    logo: string,
    status?: string
}

export interface SkillsState {
    skills: ISkill[];
}