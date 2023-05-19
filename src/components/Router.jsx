import { AuthContext } from 'context'
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'routes/routes'

export default function Router() {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <h1>loading</h1>
    }

  return (
    isAuth
        ? <Routes>
            {privateRoutes.map((route, i) => 
            <Route
              key={i}
              element={route.element}
              path={route.path}
              exact={route.exact}
            />
          )}

            <Route path='*' element={<Navigate to='/posts'/>}/>
        </Routes>

        : <Routes>
            {publicRoutes.map((route, i) => 
            <Route
              key={i}
              element={route.element}
              path={route.path}
              exact={route.exact}
            />
          )}

            <Route path='*' element={<Navigate to='/login'/>}/>
        </Routes>
      
  )
}
