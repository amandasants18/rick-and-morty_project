import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { DetailsContent } from '../pages/DetailsContent'
import Home from '../pages/Home'
const AppRoutes = () =>{

    return(
        <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<DetailsContent/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes