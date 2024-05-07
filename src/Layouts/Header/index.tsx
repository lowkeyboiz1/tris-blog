'use client'

import Link from 'next/link'
import { useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'

import Driver from '@/components/Driver'

import styles from './index.module.scss'
import { Navbar, NavbarBrand } from '@nextui-org/react'

function Header() {
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      classNames={{
        base: '*:max-w-none',
      }}
    >
      <div className='ct-container w-full flex items-center justify-between h-[60px] px-6'>
        <Link href={'/'}>
          <p className='font-bold'>IELTS TRIS</p>
        </Link>
        <div className='hidden lg:block'>
          <RenderListMenu />
        </div>
        <div className='block lg:hidden'>
          <Driver>
            <MenuIcon className='size-6' />
          </Driver>
        </div>
      </div>
    </Navbar>
  )
}

export default Header

const RenderListMenu = () => {
  const menuList = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Writing Task 1',
      url: 'WT1',
      children: [
        {
          id: 8,
          title: 'Compare/Contrast',
          url: '',
        },
        {
          id: 9,
          title: 'Khang',
          url: '',
        },
      ],
    },
    {
      id: 3,
      title: 'Writing Task 2',
      url: '',
      children: [
        {
          id: 10,
          title: 'Compare/Contrast',
          url: '',
        },
        {
          id: 11,
          title: 'Khang123',
          url: '',
        },
      ],
    },
    {
      id: 4,
      title: 'Easy Essays',
      url: '',
    },
    {
      id: 5,
      title: 'About Me',
      url: '',
    },
    {
      id: 6,
      title: 'Hall Of Fame',
      url: '',
    },
    {
      id: 7,
      title: 'Courses',
      url: '',
    },
  ]

  return (
    <div className='flex gap-4'>
      {menuList.map((menu) => (
        <ItemMenuList menu={menu} key={menu.id} />
      ))}
    </div>
  )
}

const ItemMenuList = ({ menu }: { menu: any }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div className={styles.list}>
        <Link className={styles.listTitle} href={menu.url}>
          {menu.title}
        </Link>
        {menu?.children && (
          <>
            <div className={styles.moreIcon}>
              <ExpandMoreIcon />
            </div>
          </>
        )}
        {menu?.children && (
          <div className={styles.lisItem}>
            {menu?.children.map((item: any, index: number) => (
              <ItemMenu handleClose={handleClose} menuChildren={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const ItemMenu = ({
  handleClose,
  menuChildren,
}: {
  handleClose: () => void
  menuChildren: any
}) => {
  return (
    <>
      <Link href={menuChildren.url}>
        <div className={styles.menuItem} onClick={handleClose}>
          {menuChildren.title}
        </div>
      </Link>
      <div className={styles.divider}>
        <Divider />
      </div>
    </>
  )
}
