import { HiUsers, HiGlobe, HiHeart, HiLightningBolt, HiStar, HiFlag } from 'react-icons/hi'

function Pourquoi() {
      const prkw = [
            {
                  icon: <HiUsers className="text-4xl md:text-5xl text-nfp-yellow" />,
                  title: "Union Nationale",
                  description: "Une alliance historique qui transcende les clivages traditionnels pour bâtir un Cameroun uni, fort et solidaire."
            },
            {
                  icon: <HiLightningBolt className="text-4xl md:text-5xl text-nfp-yellow" />,
                  title: "Énergie Transformative",
                  description: "Une force nouvelle qui impulse le changement et modernise les institutions pour une gouvernance efficace."
            },
            {
                  icon: <HiGlobe className="text-4xl md:text-5xl text-nfp-yellow" />,
                  title: "Développement Durable",
                  description: "Une vision écologique et économique qui préserve nos ressources tout en créant de la prospérité pour tous."
            },
            {
                  icon: <HiHeart className="text-4xl md:text-5xl text-nfp-yellow" />,
                  title: "Justice Sociale",
                  description: "Un engagement ferme pour l'équité, l'accès aux soins, à l'éducation et à des conditions de vie dignes."
            },
            {
                  icon: <HiStar className="text-4xl md:text-5xl text-nfp-yellow" />,
                  title: "Excellence",
                  description: "Une exigence de qualité dans l'action publique et la gestion des affaires de l'État au service des citoyens."
            },
            {
                  icon: <HiFlag className="text-4xl md:text-5xl text-nfp-yellow" />,
                  title: "Souveraineté",
                  description: "Une affirmation de notre indépendance et de notre identité dans le concert des nations."
            }
      ]
      return (
            <div className='px-[6%] md:px-[10%] py-12 md:py-14 relative'>
                  <img src='/images/prkw.webp' alt='' className='absolute top-0 left-0 w-full h-full object-cover' />
                  <div className='absolute bg-black/60 w-full h-full left-0 top-0' />
                  <div className="relative flex flex-col gap-8">
                        <h2 className="text-white/90 leading-[1.2] text-[1.5rem] md:text-[2.1rem] text-center font-bold">Nos valeurs fondamentales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {prkw?.map((value, ind) =>
                                    <div
                                          key={ind}
                                          className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-[6px] group relative overflow-hidden"
                                    >
                                          <div className="absolute inset-0 bg-gradient-to-br from-nfp-yellow/5 to-nfp-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                          <div className="relative flex flex-col items-center gap-3.5">
                                                <div className="p-3 rounded-[6px] w-fit bg-nfp-yellow/10 group-hover:bg-nfp-yellow/20 transition-colors">
                                                      {value.icon}
                                                </div>
                                                <h4 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-white/80 text-center">
                                                      {value.title}
                                                </h4>

                                                <p className="text-white/50 text-center text-[.8rem] md:text-[.87rem]">
                                                      {value.description}
                                                </p>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      )
}

export default Pourquoi