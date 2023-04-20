import {faHome, faChartArea, faUserAstronaut, faAddressBook} from "@fortawesome/free-solid-svg-icons"

/**
 * permission 관련
 * 1. home은 모두가
 * 2. 공지사항은 admin만 작성, 수정, 삭제  / user는 읽기 권한
 * 3. 사용자 관리는 admin만 작성, 읽기, 수정
 * 4. 다른 메뉴는 모두 작성, 수정, 읽기 가능.
 */
const ALL = 'ADMIN' || 'USER' || 'SUPER'
export const menuItems = [
    {
      name: 'Home',
      link: '/',
      icon: faHome,
      role: ALL
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: faChartArea,
      role: 'ADMIN' || 'USER',
      submenu: [
        {
          name: 'Overview', 
          link: '/dashboard/overview',
          role: 'ADMIN'
        },
        {
          name: 'Analytics',
          link: '/dashboard/analytics',
          role: 'USER'
        },
        {
          name: 'Settings',
          link: '/dashboard/settings',
          role: 'ADMIN'
        },
      ],
    },
    {
      name: 'Profile',
      link: '/profile',
      icon: faUserAstronaut,
      role: 'USER',
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
      icon: faAddressBook,
      role: ALL,
    },
  ];
  