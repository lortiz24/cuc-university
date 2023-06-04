export interface DurationProgram {
    value: number,
    unidad: 'weeks' | 'days' | 'hours' | 'semesters'
}

export interface TitleProgram {
    type: string;
    specialty: string;
}

export interface ProgramItem {
    imgBanner: string;
    publicImg: string;
    path: string;
    title: string;
    titleComplete: TitleProgram;
    id?: string;
    overView: {
        duration: DurationProgram
        durationSemesters: DurationProgram
        credits: number
        modality: string
        language: string
    };
    description: string;
    objective: string;
}
