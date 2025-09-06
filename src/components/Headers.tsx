import React from 'react'
import { GrUserAdd } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

function Headers() {

      const liens = [
            { name: 'Accueil', href: '#home' },
            { name: 'À propos', href: '/about' },
            { name: 'Missions', href: '/missions' },
            { name: 'Partis', href: '/parties'},
            { name: 'Évènements', href: '/evenements' },
            { name: 'Contact', href: '/contact' },
          ]
      return (
            <>
                  <div className='flex items-center relative bg-[#e5deda] px-[10%] pt-2 pb-8 justify-between'>
                        <div><img src="/NFP.png" className='h-[100px]' alt='logo_nfp' /></div>
                        <div className='flex gap-1.5 items-center'>
                              <img src="/icon2.png" alt='#' />
                              <div className="flex flex-col gap-0.5">
                                    <h6 className='text-[.85rem] text-gray-500 font-bold'>Support 24h/24</h6>
                                    <span className='text-[1.1rem] font-bold'>+237 673 712 522</span>
                              </div>
                        </div>

                        <div className='bg-primary z-[1] flex justify-between items-center absolute w-[80%] -bottom-8'>
                              <ul className='flex link-nfp items-center text-white/80 font-light text-[.85rem]'>
                                    {liens?.map((x,ind)=>
                                          <li className='nav' key={ind}><NavLink className="py-5 block text-center px-9 border-r border-white/20" to={x.href}>{x.name}</NavLink></li>
                                    )}
                              </ul>
                              <div className='pr-2'>
                                    <NavLink to={"#"} className="px-7 flex items-center gap-2 text-[.8rem] font-semibold bg-white py-3.5"><GrUserAdd className='text-[1rem]' strokeWidth={3}/> Rejoindre le mouvement</NavLink>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Headers