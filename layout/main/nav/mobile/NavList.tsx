import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Collapse } from '@mui/material';
// hooks
import useActiveLink from 'src/hooks/useActiveLink';
// components
import { NavSectionVertical } from 'src/components/nav-section';
//
import { NavItemBaseProps } from '../types';
import NavItem from './NavItem';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemBaseProps;
};

export default function NavList({ item }: NavListProps) {
  const { pathname } = useRouter();

  const { path, children } = item;

  const { isExternalLink } = useActiveLink(path);

  const [open, setOpen] = useState(false);

  return (
    <>
      <NavItem
        item={item}
        open={open}
        onClick={() => setOpen(!open)}
        active={pathname === path}
        isExternalLink={isExternalLink}
      />

      {!!children && (
        <Collapse in={open} unmountOnExit>
          <NavSectionVertical data={children} />
        </Collapse>
      )}
    </>
  );
}
