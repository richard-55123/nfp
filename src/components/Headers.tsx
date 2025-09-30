import { GrUserAdd } from "react-icons/gr"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineMenu, HiX } from "react-icons/hi"
import { useState } from "react"
import JoinModal from "./JoinModal"

interface Lien {
      name: string
      href: string
}

function Headers() {
      const [open, setOpen] = useState<boolean>(false)
      const [isModalOpen, setIsModalOpen] = useState(false)

      const liens: Lien[] = [
            { name: "Accueil", href: "/" },
            { name: "Qui sommes-nous ?", href: "/about" },
            { name: "Partis membres", href: "/partis" },
            { name: "Évènements", href: "/evenements" },
            // { name: "Documents", href: "/Documents" },
            { name: "Contact", href: "/contact" },
      ]

      return (
            <>
                  <div className="flex items-center border-t-[3px] border-primary relative bg-[#e5deda] px-[5%] pt-1 pb-3 md:px-[10%] md:pt-2 md:pb-8 justify-between">
                        <div>
                              <Link to={'/'} >
                                    <img
                                          src="/NFP.png"
                                          className="h-[50px] md:h-[100px]"
                                          alt="logo_nfp"
                                    />
                              </Link>
                        </div>
                        <div className="hidden md:flex gap-1.5 items-center">
                              <img src="/icon2.png" alt="#" />

                              <div className="flex flex-col gap-0.5">
                                    <h6 className="text-[.85rem] text-gray-500 font-bold">Support 24h/24</h6>
                                    <span className="text-[1.1rem] font-bold">+237 673 712 522</span>
                              </div>
                        </div>
                        

                        <div className="hidden lg:flex bg-primary z-[1] justify-between items-center absolute w-[80%] -bottom-6">
                              <ul className="flex link-nfp items-center text-white/80 font-light text-[.85rem]">
                                    {liens.map((x, ind) => (
                                          <li className="nav" key={ind}>
                                                <NavLink
                                                      className="py-4 block text-center px-7 border-r border-white/20"
                                                      to={x.href}
                                                >
                                                      {x.name}
                                                </NavLink>
                                          </li>
                                    ))}
                              </ul>
                              <div className="pr-1">
                                    <button
                                          onClick={() => setIsModalOpen(true)}
                                          className="px-7 flex items-center gap-2 text-[.8rem] font-semibold bg-white py-3"
                                    >
                                          <GrUserAdd className="text-[1rem]" strokeWidth={3} /> Rejoindre le
                                          mouvement
                                    </button>
                              </div>
                        </div>

                        <div className="lg:hidden flex items-center">
                              <button onClick={() => setOpen(!open)}>
                                    {open ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
                              </button>
                        </div>
                  </div>

                  {open && (
                        <div className="lg:hidden bg-primary text-white px-6 py-4 space-y-3">
                              {liens.map((x, ind) => (
                                    <NavLink
                                          key={ind}
                                          to={x.href}
                                          className="block py-2 border-b border-white/20"
                                          onClick={() => setOpen(false)}
                                    >
                                          {x.name}
                                    </NavLink>
                              ))}
                              <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-3 inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2"
                              >
                                    <GrUserAdd className="text-[1rem]" strokeWidth={3} /> Rejoindre le
                                    mouvement
                              </button>
                        </div>
                  )}

                  <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
      )
}

export default Headers
