import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Sobre nosotros',
    href: '/sobre-nosotros',
  },
  {
    label: 'Programas',
    href: '/programas',
    children: [
      {
        label: 'Renacimiento Celular',
        href: '/programas/renacimiento-celular',
      },
      {
        label: 'Co-Creación',
        href: '/programas/co-creacion',
      },
      /*{
        label: 'Máster de Cyberespiración',
        href: '/programas/master',
      },*/
    ],
  },
  {
    label: 'Casos de éxito',
    href: '/casos-exito',
  },
  {
    label: 'Blog / Recursos',
    href: '/blog',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
];