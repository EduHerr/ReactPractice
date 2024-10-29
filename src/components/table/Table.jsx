import React from "react";
import { theads } from "./static";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {theads.map((thead, index) => (
              <th key={index} className="py-3 px-6 text-left">
                {thead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{item.nombre}</td>
                <td className="py-3 px-6">{item.dob}</td>
                <td className="py-3 px-6">{item.rfc}</td>
                <td className="py-3 px-6">{item.cp}</td>
                <td className="py-3 px-6">{item.direccion}</td>
                <td className="py-3 px-6">{item.prodFav}</td>
                <td className="py-3 px-6">{item.beneficio}</td>
                <td className="py-3 px-6">{item.mail}</td>
                <td className="py-3 px-6">{item.celular}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={theads.length} className="py-3 px-6 text-center">
                Sin registros
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
