import React, { useState, useEffect } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { Collapse } from '@mui/material'
import { useRouter } from 'next/navigation'

function Driver({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const menuList = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Writing Task 1',
      url: '',
      children: [
        {
          id: 8,
          title: 'Compare/Contrast',
        },
        {
          id: 9,
          title: 'Khang',
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
        },
        {
          id: 11,
          title: 'Khang123',
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

  type Anchor = 'top' | 'left' | 'bottom' | 'right'
  const [state, setState] = useState<Record<Anchor, boolean>>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  return (
    <>
      <div className='cursor-pointer' onClick={toggleDrawer('right', true)}>
        {children}
      </div>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 400,
            minWidth: 320,
            bgcolor: 'background.paper',
          }}
          component='nav'
          aria-labelledby='nested-list-subheader'
        >
          {menuList.map((menu, index) => (
            <RenderMenuItem menu={menu} key={index} state={state} setState={setState} />
          ))}
        </List>
      </Drawer>
    </>
  )
}

const RenderChildrenMenu = ({
  menu,
  setState,
  state,
}: {
  menu: any
  setState: any
  state: any
}) => {
  const router = useRouter()

  return (
    <ListItemButton
      sx={{ pl: 4 }}
      onClick={() => {
        setState({ ...state, right: false })
        router.push(`/${menu?.title}`)
      }}
    >
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={menu?.title} />
    </ListItemButton>
  )
}

const RenderMenuItem = ({
  menu,
  setState,
  state,
}: {
  menu: any
  setState: any
  state: any
}) => {
  const [showChildrenItem, setShowChildrenItem] = useState(false)
  const router = useRouter()

  return (
    <>
      <ListItemButton
        onClick={() => {
          if (!menu?.children?.length) {
            router.push(`/${menu.title !== 'Home' ? menu?.title : ''}`)
            setState({ ...state, right: false })
          } else {
            setShowChildrenItem(!showChildrenItem)
          }
        }}
      >
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary={menu.title} />
        {menu.children && (showChildrenItem ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {menu.children && (
        <Collapse in={showChildrenItem} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {menu?.children.map((item: any, index: any) => (
              <RenderChildrenMenu
                key={index}
                menu={item}
                setState={setState}
                state={state}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

export default Driver
