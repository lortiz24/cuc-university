import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface MenuItem {
    path: string;
    name: string;
    dropdown?: Omit<MenuItem,'icon'>[]
    icon: React.ReactNode;
}
