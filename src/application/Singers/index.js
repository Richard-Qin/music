import React from 'react'
import { renderRoutes } from "react-router-config";

function Singers(porps) {
  const { route } = porps
  return (
    <div>
      <div>Singers</div>
      {renderRoutes(route.routes)}
    </div>
  )
}
export default React.memo(Singers)