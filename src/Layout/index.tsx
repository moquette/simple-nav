import * as React from 'react'

import Navbar from '../components/navbar'

export interface LayoutProps {
  className?: string
  noNavbar?: boolean
  children?: React.ReactNode
}

const Layout = ({ className, noNavbar, children }: LayoutProps) => (
  <div className="animate-fade-in">
    {/*****************************
        Hide nav if not needed
      ******************************/}
    <Navbar />
    <div className={`layout ${className}`}>
      <div className="pt-5">{children}</div>
    </div>
  </div>
)

export default Layout
