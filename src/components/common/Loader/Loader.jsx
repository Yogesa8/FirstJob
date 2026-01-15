import './loader.css'
import DecryptedText from '../DecryptedText'

const Loader = () => {
     return (
          <div className="p-2 flex justify-center items-center h-screen font-mono text-xl font-medium text-gray-800">
               {/* <p className="typewriter text-center font-mono text-2xl text-gray-800">
                    Welcome to the FirstJobInd World
                </p> */}
               <DecryptedText
                    text="Welcome to the FirstJobInd World"
                    className="text-3xl md:text-4xl font-bold text-black"
                    speed={40}
               />
          </div>

     )
}

export default Loader