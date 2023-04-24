import { useState, useEffect } from 'react'
// next
import { useRouter } from 'next/router'
// @mui
import { Collapse } from '@mui/material'
// hooks
import useActiveLink from 'utils/hooks/useActiveLink'
//
import { NavListProps } from '../types'
import NavItem from './NavItem'

// ----------------------------------------------------------------------

type NavListRootProps = {
  data: NavListProps
  depth: number
  hasChild: boolean
}

export default function NavList({ data, depth, hasChild }: NavListRootProps) {
  const { pathname } = useRouter()

  const { active, isExternalLink } = useActiveLink(data.path)

  const [open, setOpen] = useState(active)

  useEffect(() => {
    if (!active) {
      handleClose()
    }
  }, [pathname])

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.children} depth={depth} />
        </Collapse>
      )}
    </>
  )
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  data: NavListProps[]
  depth: number
}

function NavSubList({ data, depth }: NavListSubProps) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
        />
      ))}
    </>
  )
}
