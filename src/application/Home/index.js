import React from 'react'
import { renderRoutes } from "react-router-config";

function Home(porps) {
  const { route } = porps
  return (
    <div>
      <div>HOME</div>
      {renderRoutes(route.routes)}
    </div>
  )
}
export default React.memo(Home)