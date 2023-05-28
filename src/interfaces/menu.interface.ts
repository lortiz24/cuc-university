

interface Menu {
    path: string;
    name: string;
}

interface Menu {
    path: string;
    name: string;

}
export interface MenuItem extends Menu {
    path: string;
    name: string;
    dropdown?: Omit<MenuItem, 'icon'>[]
    icon: React.ReactNode;
}

