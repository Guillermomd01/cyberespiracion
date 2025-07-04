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
    href: '/programas-respiracion-consciente',
    children: [
      {
        label: 'Renacimiento Celular',
        href: '/programas-respiracion-consciente/renacimiento-celular',
      },
      {
        label: 'Co-Creación',
        href: '/programas-respiracion-consciente/co-creacion',
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