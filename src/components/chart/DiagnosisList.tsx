// import Diagnostic from "@models/DiagnosticModel";
// import "@styles/table.css";

// interface DiagnosisListProps {
//   diagnosisList: Diagnostic[];
// }

// export default function DiagnosisList({ diagnosisList }: DiagnosisListProps) {
//   return (
//     <section className="">
//       <div className="overflow-hidden rounded-lg text-sm">

//           <div>


//           </div>

//           <div className="overscroll-y-auto max-h-[180px]">
//             {
//               diagnosisList.map((diagnostic, index) => (
//                 <li key={diagnostic.name+'#'+index}>
//                   <p className="px-6 py-4 whitespace-nowrap">
//                     {diagnostic.name}
//                   </p>
//                   <p className="px-6 py-4 whitespace-nowrap">
//                     {diagnostic.description}
//                   </p>
//                   <p className="px-6 py-4 whitespace-nowrap">
//                     {diagnostic.status}
//                   </p>
//                 </li>
//               ))
//             }

//           </div>

//       </div>
//     </section>
//   );
// }


import Diagnostic from "@models/DiagnosticModel";
import "@styles/table.css";

interface DiagnosisListProps {
  diagnosisList: Diagnostic[];
}

export default function DiagnosisList({ diagnosisList }: DiagnosisListProps) {
  return (
    <section className="text-accent-dark dark:text-gray-100">
      <div className="overflow-hidden rounded-lg text-sm">
        <table className="min-w-full">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="text-left font-semibold  border-b-[10px] border-transparent"
              >
                <div className="px-6 py-3 rounded-l-full bg-gray-100 dark:bg-gray-700 -mr-1">
                  Problem/Diagnosis
                </div>
              </th>
              <th
                scope="col"
                className="text-left w-1/2 font-semibold border-b-[10px] border-transparent"
              >
                <div className="px-6 py-3 rounded-none bg-gray-100 dark:bg-gray-700 -mr-1">
                  Description
                </div>
              </th>
              <th
                scope="col"
                className="text-left font-semibold border-b-[10px] border-transparent"
              >
                <div className="px-6 py-3 rounded-r-full bg-gray-100 dark:bg-gray-700">
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody max-h-80 lg:max-h-60 bg-transparent divide-y divide-gray-200">
            {
              diagnosisList.map((diagnostic, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 ">
                    {diagnostic.name}
                  </td>
                  <td className="px-6 py-4 w-1/2 ">
                    {diagnostic.description}
                  </td>
                  <td className="px-6 py-4 ">
                    {diagnostic.status}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}
