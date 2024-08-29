import SideBar from '../component/SideBar';
import 'non.geist'
import { Outlet, useParams } from 'react-router-dom';


function Root() {
  const { pageId } = useParams();

  return (
    <div className={`w-full min-h-svh grid grid-cols-6`}>
      <SideBar pageId={pageId}/>
      <div className='col-span-5 border-l'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Root
