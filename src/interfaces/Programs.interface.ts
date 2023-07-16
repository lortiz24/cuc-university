export interface DurationProgram {
    value: number,
    unidad: 'weeks' | 'days' | 'hours' | 'semesters'
}

export interface TitleProgram {
    type: string;
    specialty: string;
}


export interface DownloadItem {
    ruta: string;
    name: string;
}
export interface ProgramItem {
    pdf: DownloadItem;
    contactImage: string;
    publicImg: string;
    publicImgBlackAndWhite: string;
    path: string;
    title: string;
    titleComplete: TitleProgram;
    id?: string;
    overView: {
        duration: string
        credits: string
        modality: string
        language: string
    };
    description: string;
    objective: string;
}

interface Overview {
    duration: DurationProgram
    durationSemesters: DurationProgram
    credits: number
    modality: string
    language: string
}


