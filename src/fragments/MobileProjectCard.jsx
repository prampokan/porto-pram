import TechStackCard from "./TechStackCard"
import GithubProjectButton from "../elements/GithubProjectButton"
import { motion } from "framer-motion"

const MobileProjectCard = () => {
  const isMobile = window.innerWidth <= 768;
  if(isMobile) {
  return (
    <div className={`rounded-3xl p-[2px] bg-gradient-to-br from-green-300 via-slate-50 to-green-300 mt-10`}>
        <div className='bg-slate-50 w-full sm:h-[40rem] pt-10 rounded-[calc(25px-3px)] text-center flex flex-col items-center sm:overflow-hidden shadow p-10'>
            <h1 className='text-3xl font-bold text-slate-600'>Spotify Clone🎸</h1>
            <p className='text-slate-500 mt-5 xl:w-[50rem] leading-relaxed'>I also work on mobile apps, this is Spotify Clone provide tons of songs in the world using Shazam API, the UI is made as similar as possible to Spotify and it actually can play songs, built using React Native and Expo Framework</p>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-5 sm:mt-0">
                <GithubProjectButton
                    url="https://github.com/prampokan/spotify-clone"
                />
                <p className='text-lg font-medium text-slate-600 border-r-2 border-slate-300 pr-10'>Tech Stack</p>
                <TechStackCard
                    image='images/react.png'
                    width='w-[40px]'
                    height='h-[40px]'
                />
            </div>
            <div className='flex'>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: -6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/spoticlone2.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer mt-5 sm:mt-0 z-[10]'
                    initial={{
                        translateY: 30
                    }}
                    whileHover={{
                        translateY: 20,
                    }}
                >
                    <img src="images/spoticlone1.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: 6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/spoticlone3.png" alt="" className=''/>
                </motion.div>
            </div>
        </div>
    </div>
  )
} 

return (
    <motion.div className={`rounded-3xl p-[2px] bg-gradient-to-br from-green-300 via-slate-50 to-green-300 mt-10`}
    initial={{ opacity: 0, translateX: 500}}
    whileInView={{ opacity: 1, translateX: 0}}
    viewport={{once: true}}
    transition={{
        delay: 0.2
    }}
    >
        <div className='bg-slate-50 w-full sm:h-[40rem] pt-10 rounded-[calc(25px-3px)] text-center flex flex-col items-center sm:overflow-hidden shadow p-10'>
            <h1 className='text-3xl font-bold text-slate-600'>Spotify Clone🎸</h1>
            <p className='text-slate-500 mt-5 xl:w-[50rem]'>I also work on mobile apps, this is Spotify Clone provide tons of songs in the world using Shazam API, the UI is made as similar as possible to Spotify and it actually can play songs, built using React Native and Expo Framework</p>
            <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
                <GithubProjectButton
                    url="https://github.com/prampokan/spotify-clone"
                />
                <p className='text-lg font-medium text-slate-600 border-r-2 border-slate-300 pr-10'>Tech Stack</p>
                <TechStackCard
                    image='images/react.png'
                    width='w-[40px]'
                    height='h-[40px]'
                />
            </div>
            <div className='flex'>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: -6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/spoticlone2.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer mt-5 sm:mt-0 z-[10]'
                    initial={{
                        translateY: 30
                    }}
                    whileHover={{
                        translateY: 20,
                    }}
                >
                    <img src="images/spoticlone1.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: 6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/spoticlone3.png" alt="" className=''/>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default MobileProjectCard