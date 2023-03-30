export const menuItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
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
    },
  ];
  