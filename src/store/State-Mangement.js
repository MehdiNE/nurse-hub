import React from "react";

const StateContext = React.createContext({
  clicked: false,
  title: "افزودن خدمت",
});

// export const StateContextProvider = (props) => {
//   const [clicked, setClicked] = useState(false);
//   const [title, setTtitle] = useState("افزودن خدمت");

//   const handlerBuy = () => {
//     setClicked(true);
//     setTtitle("خدمت اضافه شد");
//   };

//   const resetHandler = () => {
//     setClicked(false);
//     setTtitle("افزودن خدمت");
//   };
//   return (
//     <StateContext.Provider
//       value={{
//         clicked: clicked,
//         title: title,
//         onBuy: handlerBuy,
//         onReset: resetHandler,
//       }}
//     >
//       {props.children}
//     </StateContext.Provider>
//   );
// };

export default StateContext;
