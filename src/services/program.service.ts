import { graduatePrograms, underGraduatePrograms } from "@/data";
import { ProgramItem } from "@/interfaces";

export const getProgramByTitlePath = (titlePath: string): ProgramItem | undefined => {

    const program = [...underGraduatePrograms, ...graduatePrograms].find(p => p.path === `/${titlePath}`)

    return program
}
export const getProgramById = (id: string): ProgramItem | undefined => {

    const program = [...underGraduatePrograms, ...graduatePrograms].find(p => p.id === id)

    return program
}