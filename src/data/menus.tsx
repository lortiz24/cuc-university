import { MenuItem } from "@/interfaces";
import { graduatePrograms, underGraduatePrograms } from "./programs";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';


export const navItems: MenuItem[] = [
    {
        name: "menu.home",
        path: "/",
        icon: <HomeOutlinedIcon />
    },
    {
        name: "menu.about-us",
        path: "/about-us",
        icon: <Groups2OutlinedIcon />
    },
    {
        name: "menu.academic-programs",
        path: "/academic-programs",
        icon: <SchoolOutlinedIcon />,
        dropdown: [
            {
                name: "menu.academic-programs.UP",
                path: "",
                dropdown: underGraduatePrograms.map((program) => {
                    return {
                        name: program.title,
                        path: program.path,
                    }
                })
            },
            {
                name: "menu.academic-programs.GP",
                path: "",
                dropdown: graduatePrograms.map((program) => {
                    return {
                        name: program.title,
                        path: program.path,
                    }
                })
            },
        ],
    },
    {
        name: "menu.students",
        path: "/students",
        icon: <PeopleOutlineOutlinedIcon />
    },
    {
        name: "menu.admissions",
        path: "/admissions",
        icon: <PeopleOutlineOutlinedIcon />
    },
    {
        name: "menu.scholarships",
        path: "/scholarships",
        icon: <AttachMoneyOutlinedIcon />

    },
    {
        name: "menu.contact-us",
        path: "/contact-us",
        icon: <EmailOutlinedIcon />
    },
];
export const navItemsFooter: MenuItem[] = [
    {
        name: "menu.home",
        path: "/",
        icon: <HomeOutlinedIcon />
    },

    {
        name: "menu.students",
        path: "/students",
        icon: <PeopleOutlineOutlinedIcon />
    },
    {
        name: "menu.about-us",
        path: "/about-us",
        icon: <Groups2OutlinedIcon />
    },
    {
        name: "menu.scholarships",
        path: "/scholarships",
        icon: <AttachMoneyOutlinedIcon />

    },
    {
        name: "menu.academic-programs",
        path: "/academic-programs",
        icon: <SchoolOutlinedIcon />,
        dropdown: [
            {
                name: "menu.academic-programs.UP",
                path: "",
                dropdown: underGraduatePrograms.map((program) => {
                    return {
                        name: program.title,
                        path: program.path,
                    }
                })
            },
            {
                name: "menu.academic-programs.GP",
                path: "",
                dropdown: graduatePrograms.map((program) => {
                    return {
                        name: program.title,
                        path: program.path,
                    }
                })
            },
        ],
    },
    {
        name: "menu.contact-us",
        path: "/contact-us",
        icon: <EmailOutlinedIcon />
    },
    {
        name: "menu.admissions",
        path: "/admissions",
        icon: <PeopleOutlineOutlinedIcon />
    },
];
