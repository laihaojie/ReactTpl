import React from 'react'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import routes from './routes'


const RouteComponent: React.FC = function () {

  return (
    <Router basename="/">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes >
    </Router >
  )
}

export default RouteComponent
