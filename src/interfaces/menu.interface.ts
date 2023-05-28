
interface Menu {
    path: string;
    name: string;
}
export interface MenuItem extends Menu {
    dropdown?: Omit<MenuItem, 'icon'>[]
    icon: React.ReactNode;
    sub_dropdown?: Menu[]
}
