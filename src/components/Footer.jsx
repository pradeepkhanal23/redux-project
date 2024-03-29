// import { useDispatch } from "react-redux";
// import { openModal } from "../features/modal/modalSlice";
// import { useSelector } from "react-redux";

// const Footer = () => {
//   const dispatch = useDispatch();
//   const { total } = useSelector((state) => state.cart);

//   return (
//     <footer className="w-full h-auto p-3 mb-8">
//       <hr className="bg-primary" />
//       <div className="flex flex-col items-center justify-center w-full">
//         <div className="mt-3 flex w-full items-center justify-between px-5 font-bold md:justify-between md:text-lg lg:px-[8rem]">
//           <h1 className="tracking-wider text-green-600">Total</h1>
//           <span className="tracking-wider text-green-600">${total}</span>
//         </div>
//         <div>
//           <button
//             className="px-6 py-1 text-base text-white bg-red-500 rounded-md"
//             onClick={() => dispatch(openModal())}
//           >
//             Clear All
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
