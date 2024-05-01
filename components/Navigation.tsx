import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeToggle } from '@/components/ui/ThemeToggle';


const navLinks = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Predict",
        link: "/predict"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
];

interface NavigationProps {
    ulClass: string;
    handleClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ ulClass, handleClick }) => {

    const pathName = usePathname();
    return (
        <ul className={ulClass}>
            <ul className='flex flex-col items-center justify-start flex-1 gap-2 md:gap-5 md:flex-row'>
                {navLinks.map(({ id, link, name }) => {
                    const isActive = `/${pathName?.split('/').pop()}` == link;

                    return (
                        <li key={id}
                            className={`md:px-2 capitalize font-medium text-lg cursor-pointer border-b-2 md:border-b-0 hover:border-b-accent-foreground/80 ${isActive ? "text-accent-foreground border-b-accent-foreground/75 font-semibold" : "text-accent-foreground/50 "} duration-500 hover:text-accent-foreground/80 my-4 py-1 md:my-0 md:py-0`}>
                            <Link
                                onClick={handleClick}
                                href={link}> {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="flex items-center md:gap-1">
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>
            </div>
        </ul>
    )
}

export default Navigation
