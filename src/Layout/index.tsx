import * as React from 'react'
import Navbar from './Navbar'

export interface IAppProps {
  className?: string
  children?: React.ReactNode
}

const Layout = ({ className, children }: IAppProps) =>
  children ? (
    <>
      <Navbar />
      <div className={`layout ${className}`}>
        <div>{children}</div>
      </div>
    </>
  ) : null

export default Layout
