// import { Link } from 'react-router-dom'
// import error from "../../assets/NotFound.png"

// const Notfound = () => {
//     return (
//         <div className="h-screen bg-white items-center flex justify-center px-5 lg:px-0">
//             <div className="w-103.75 text-center flex-col items-center justify-center mx-auto gap-25">
//                 <div className="mb-8 md:mb-14">
//                     <div className="max-w-78 w-full h-40 relative flex justify-center items-center mx-auto">
//                         <img src={error} alt="Under Maintenance" />
//                     </div>
//                 </div>

//                 <div>
//                     <h3 className="text-4xl md:text-[56px] leading-16 text-[#1A1C16]">
//                         We’re Working on This Page
//                     </h3>
//                 </div>

//                 <div className="flex flex-col gap-6 mt-3">
//                     <div className="text-center">
//                         <p className="text-base leading-6 tracking-wider font-sans">
//                             This page is currently under development.
//                             Please check back soon — we’re making improvements!
//                         </p>
//                     </div>

//                     <div>
//                         <Link
//                             to="/"
//                             className="bg-[#8AC732] text-white font-sans max-w-36.5 w-full h-12 rounded-[100px] font-medium text-sm p-4 inline-flex items-center justify-center"
//                         >
//                             Go to Home
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Notfound
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="text-center">
                <div className="mb-8">
                    <img
                        src="https://z-cdn-media.chatglm.cn/files/59fa5aff-b4be-4a60-8814-021674141c9b.png?auth_key=1866154535-532eb8a847914de6b9be0eabfa4fcc0b-0-b4a77cc716006aeb38d9052128e42bb2"
                        alt="Page Under Construction"
                        className="mx-auto max-w-md"
                    />
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Under Construction</h1>

                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                    We're working hard to improve this page. Please check back soon!
                </p>

                <div className="flex justify-center space-x-4">
                    <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                        <i className="fas fa-home mr-2"></i>
                        Home
                    </Link>
                    <Link to="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300">
                        <i className="fas fa-envelope mr-2"></i>
                        Contact
                    </Link>
                </div>

                <div className="mt-12 text-sm text-gray-500">
                    <p>Estimated completion: Coming soon</p>
                </div>
            </div>
        </div>
    )
}

export default Notfound
