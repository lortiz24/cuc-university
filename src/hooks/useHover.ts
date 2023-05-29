import { useEffect, useState } from 'react';



export const useHover = <T extends HTMLElement>(id: string) => {
    const [isHovered, setIsHovered] = useState(false);
    const [element, setelement] = useState<any>()
    const handleMouseEnter = () => {
        
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const element = document.querySelector<T>(`#${id}`); // Reemplaza 'id' con el ID del elemento deseado
        setelement(element)
        if (element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []); // Asegúrate de agregar las dependencias necesarias si es necesario

    return { isHovered, element };
};