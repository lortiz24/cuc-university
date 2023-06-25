import { ProgramItem } from "@/interfaces/Programs.interface"

export const underGraduatePrograms: ProgramItem[] = [
    {
        id: 'e15f1e9f1e651f59ef196564ef45e',
        pdf: {
            name: 'Associates of Science in International Plan.pdf',
            ruta: '/files/pdf/Associates-of-Science-in-International-Plan.pdf'
        },
        publicImg: '/assets/team-work-2.jpg',
        contactImage: '/assets/Alumno1-2.png',
        path: '/associates-science-international-business-administration',
        title: 'menu.academic-programs.aosiba',
        titleComplete: {
            type: 'programs.aosiba.title-complete.type',
            specialty: 'programs.aosiba.title-complete.specialty'
        },
        overView: {
            duration: 'programs.aosiba.overview.duration.content',
            credits: 'programs.aosiba.overview.credits.content',
            modality: 'programs.aosiba.overview.modality.content',
            language: 'programs.aosiba.overview.language.content',
        },
        description: 'programs.aosiba.description.body',
        objective: 'programs.aosiba.objective.body'
    },
    {
        id: 'f451e58f1ef1e1f5ef1e5f',
        pdf: {
            name: 'Bachelors of Science in International Business Administration Plan.pdf',
            ruta: '/files/pdf/Bachelors-of-Science-in-International-Business-Administration-Plan.pdf'
        },
        publicImg: '/assets/bachelors.jpg',
        contactImage: '/assets/alumna-contact.png',
        path: '/bachelors-of-science-in-international-business-administration',
        title: 'menu.academic-programs.bosiiba',
        titleComplete: {
            type: 'programs.bosiiba.title-complete.type',
            specialty: 'programs.bosiiba.title-complete.specialty'
        },
        overView: {
            duration: 'programs.bosiiba.overview.duration.content',
            credits: 'programs.bosiiba.overview.credits.content',
            modality: 'programs.bosiiba.overview.modality.content',
            language: 'programs.bosiiba.overview.language.content',
        },
        description: 'programs.bosiiba.description.body',
        objective: 'programs.bosiiba.objective.body'
    },
]
export const graduatePrograms: ProgramItem[] = [
    {
        title: 'menu.academic-programs.mosiiba',
        pdf: {
            name: 'Master of Science in International Business Administration PLAN.pdf',
            ruta: '/files/pdf/Master-of-Science-in-International-Business-Administration-PLAN.pdf'
        },
        path: '/master-of-science-in-international-business-administration',
        publicImg: '/assets/master-of-science.jpg',
        contactImage: '/assets/Alumna-contact-2.png',
        id: 'f9e8f51e85f1e891f8e1f5',
        titleComplete: {
            type: 'programs.mosiiba.title-complete.type',
            specialty: 'programs.mosiiba.title-complete.specialty'
        },
        overView: {
            duration: 'programs.mosiiba.overview.duration.content',
            credits: 'programs.mosiiba.overview.credits.content',
            modality: 'programs.mosiiba.overview.modality.content',
            language: 'programs.mosiiba.overview.language.content',
        },
        description: 'programs.mosiiba.description.body',
        objective: 'programs.mosiiba.objective.body'
    },
    {
        title: 'menu.academic-programs.mosim',
        pdf: {
            name: 'Master of Science in Marketing.pdf',
            ruta: '/files/pdf/Master-of-Science-in-Marketing.pdf'
        },

        path: '/master-of-science-in-marketing',
        publicImg: '/assets/master-marketing.jpg',
        contactImage: '/assets/Alumna-contact-2.png',
        id: 'e89f1e1fe1f9e1f98e1f',
        titleComplete: {
            type: 'programs.mosim.title-complete.type',
            specialty: 'programs.mosim.title-complete.specialty'
        },
        overView: {
            duration: 'programs.mosim.overview.duration.content',
            credits: 'programs.mosim.overview.credits.content',
            modality: 'programs.mosim.overview.modality.content',
            language: 'programs.mosim.overview.language.content',
        },
        description: 'programs.mosim.description.body',
        objective: 'programs.mosim.objective.body'
    },
    {
        id: '56e1f561e98f419e162e15',
        title: 'menu.academic-programs.mosimmcamt',
        contactImage: '/assets/Alumno1-2.png',
        pdf: {
            name: 'Master of Science in Mass Media Communication and Media Technology.pdf',
            ruta: '/files/pdf/Master-of-Science-in-Mass-Media-Communication-and-Media-Technology.pdf'
        },
        path: '/master-of-science-in-mass-media-communication-and-media-technology',
        publicImg: '/assets/master-comunication.jpg',
        titleComplete: {
            type: 'programs.mosimmcamt.title-complete.type',
            specialty: 'programs.mosimmcamt.title-complete.specialty'
        },
        overView: {
            duration: 'programs.mosimmcamt.overview.duration.content',
            credits: 'programs.mosimmcamt.overview.credits.content',
            modality: 'programs.mosimmcamt.overview.modality.content',
            language: 'programs.mosimmcamt.overview.language.content',
        },
        description: 'programs.mosimmcamt.description.body',
        objective: 'programs.mosimmcamt.objective.body'
    },
]


export const overviewAttributes = ['duration', 'durationSemesters', 'credits', 'modality', 'language']