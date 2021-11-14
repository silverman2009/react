import { useState, useEffect, useMemo } from "react";
import PaginationList from "./Pagintion";
import { fileds, Tbody } from "./data";
import "./table.css";
const TableList = () => {
  const [comments, setComments] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    setComments(Tbody);
  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;
    setTotalItems(computedComments.length);
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage]);

  return (
    <div className="container__table__ManageBusssinessAdmin pb-2">
      <table>
        <thead>
          <tr>
            {fileds.map((item) => (
              <th className="text-center" key={item.id}>
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {commentsData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.no}</td>
                <td>{item.trade}</td>
                <td>{item.bussinessName}</td>
                <td>{item.fullName}</td>
                <td>{item.numberPhone}</td>
                <td>{item.requestDate}</td>
                <td>{item.condition}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <button className="btn_show_profile">مشاهده</button>
                </td>
               
                
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" mt-5"></div>
    </div>
  );
};

export default TableList;
