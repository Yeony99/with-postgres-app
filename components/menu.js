import {faHome, faChartArea, faUserAstronaut, faAddressBook} from "@fortawesome/free-solid-svg-icons"
export const menuItems = [
    {
      name: 'Home',
      link: '/',
      icon: faHome
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: faChartArea,
      submenu: [
        {
          name: 'Overview',
          link: '/dashboard/overview',
        },
        {
          name: 'Analytics',
          link: '/dashboard/analytics',
        },
        {
          name: 'Settings',
          link: '/dashboard/settings',
        },
      ],
    },
    {
      name: 'Profile',
      link: '/profile',
      icon: faUserAstronaut,
      submenu: [
        {
          name: 'Edit Profile',
          link: '/profile/edit',
        },
        {
          name: 'Change Password',
          link: '/profile/change-password',
        },
      ],
    },
    {
      name: 'Contact Us',
      link: '/contact',
      icon: faAddressBook
    },
  ];
  