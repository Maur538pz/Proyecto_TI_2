//import { Geometry } from  './components/Geometry.jsx'
//import { Material } from './components/Material.jsx'
//import { Textures } from './components/Textures.jsx'
//import { Map } from './components/Map.jsx'
//import { Raycaster } from './components/Raycaster.jsx'
import { Content } from './components/Content.jsx'
import { Modelo3D } from './components/Modelo3D.jsx'
//import { Vista45 } from './components/Vista45.jsx'
import { Name } from './components/Name.jsx'
import { Pepo } from './components/Pepo.jsx'

import {useState} from 'react'

import './App.css'

function App() {
  const [view, setView] = useState(false)
  const [site, setSite] = useState('')
  /*
  return (
    <main className='main'>
      <Modelo3D selectSite={selectSite} selectView={selectView}/>
      <Content view={view} site={site} />
    </main>
    
  )
  */
 return (
    <main className='main'>
      <Modelo3D setView={setView} setSite={setSite}/>
      <Content view={view} site={site} />
      <Name  site={site}/>
      <Pepo />
    </main>
    
 )
}

export default App
