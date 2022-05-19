import * as React from 'react'
import Navbar from './Navbar'

export interface IAppProps {
  className?: string
  noNavbar?: boolean
  children?: React.ReactNode
}

const Layout = ({ className, noNavbar, children }: IAppProps) =>
  children ? (
    <>
      {/*****************************
        Hide nav if not needed
      ******************************/}
      {noNavbar ? null : <Navbar />}
      <div className={`layout ${className}`}>
        <div>{children}</div>
      </div>
    </>
  ) : null

export default Layout
