import React from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

const QueryNavLink = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
} & NavLinkProps) => {
  const location = useLocation();

  return (
    <NavLink to={`${to}${location.search}`} {...props}>
      {children}
    </NavLink>
  );
};

export default QueryNavLink;
