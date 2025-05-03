// import { useState } from "react";

// const CountryDropdown = ({ data }) => {
//   console.log(data);

//   const [selectCountry, setSelectCountry] = useState("");
//   const [selectLanguage, setSelectLanguage] = useState("");

//   console.log(selectCountry);

//   const handleCountryChange = (e) => {
//     setSelectCountry(e.target.value);
//     setSelectLanguage("");
//   };

//   const handleLanguageChange = (e) => {
//     setSelectLanguage(e.target.value);
//     setSelectCountry("");
//   };

//   const selectAutoLanguage =
//     selectCountry &&
//     data.find((item) => item.country === item.includes(selectLanguage));
//   return (
//     <>
//       <div>
//         <label>
//           Country Dropdown:
//           <select value={selectCountry} onChange={handleCountryChange}>
//             <option>Select Country</option>
//             {data.map((item, index) => (
//               <option key={index} value={item.country}>
//                 {item.country}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>

//       {/* Language Selection */}
//       <div style={{ marginTop: "10px" }}>
//         <label>
//           Language Dropdown:
//           <select value={selectLanguage} onChange={handleLanguageChange}>
//             <option>Select Language</option>
//             {selectAutoLanguage &&
//               selectAutoLanguage.map((item, index) => (
//                 <option key={index} value={item}>
//                   {item}
//                 </option>
//               ))}
//           </select>
//         </label>
//       </div>
//     </>
//   );
// };

// export default CountryDropdown;
