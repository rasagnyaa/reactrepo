import React from 'react';

export default function SuccessScreen(props) {
  const { data } = props;

  return (
    <div>
      <h3>Welcome {data.username}</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>userexits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.username}</td>
            <td>{data.password}</td>
           <td>{data.exists ? ' true' : 'false'}</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// SuccessScreen.js
// import React from "react";

// export default function SuccessScreen({ data }) {
//   return (
//     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             User Details
//           </h2>
//           <table className="min-w-full divide-y divide-gray-200 mt-4">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Field
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Value
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {Object.keys(data).map((key) => (
//                 <tr key={key}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {key}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {data[key].toString()}
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   User Exists
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {data.message ? "False" : "True"}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
