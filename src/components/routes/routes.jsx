import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './protected-route'
import Main from '../../pages/main/main'
import Favorites from '../../pages/favorites/favorites'
import SignIn from '../../pages/sign/Signin'
import { SignUp } from '../../pages/sign/Signup'
import { NotFound } from '../../pages/notfound/notfound'
import { Categories } from '../../pages/category/category'

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
 
  const element = useRoutes([
    { path: '/login', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    {
      element: <ProtectedRoute isAllowed={isAuth} />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/favorites', element: <Favorites /> },
        { path: '/category/:id', element: <Categories /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ])
  return element
}
export default AppRoutes