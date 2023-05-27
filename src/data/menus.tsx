import { MenuItem } from "@/interfaces";
import { graduatePrograms, underGraduatePrograms } from "./programs";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export const navItems: MenuItem[] = [
    {
        path: "/",
        name: "Home",
        icon: <HomeOutlinedIcon />
    },
    {
        name: "About Us",
        path: "/about-us",
        icon: <HomeOutlinedIcon />
    },
    {
        name: "Academic Programs",
        path: "/academic-programs",
        icon: <SchoolOutlinedIcon />,
        dropdown: [
            {
                name: "Undergraduate Programs",
                path: "",
                dropdown: underGraduatePrograms.map((program) => {
                    return {
                        name: program.title,
                        path: program.path,
                    }
                })
            },
            {
                name: "Graduate Programs",
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
        name: "Students",
        path: "/students",
        icon: <PeopleOutlineOutlinedIcon />
    },
    {
        name: "Scholarships",
        path: "/scholarships",
        icon: <AttachMoneyOutlinedIcon />

    },
    {
        name: "Contact Us",
        path: "/contact-us",
        icon: <EmailOutlinedIcon />
    },
];
