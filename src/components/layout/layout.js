import React from 'react'

import './layout.css'

const Layout = ({ children, data }) => (
  <div className="wrapper">
    {children}
  </div>
)

export default Layout;