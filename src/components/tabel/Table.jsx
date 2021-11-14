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
    <div className="container__table__categoryCostomer pb-2">
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
                <td>{item.code}</td>
                <td>{item.money} تومان</td>
                <td>{item.fullName}</td>
                <td>{item.dateSales}</td>
                <td>{item.productName}</td>
                <td>
                  <div>
                    {item.condition ? (
                      <p className=" fony75 fontfamily text-success text-cenetr m-0">
                        {" "}
                        تسویه شده
                      </p>
                    ) : (
                      <p className="fony75 fontfamily text-danger text-cenetr m-0">
                        تسویه نشده
                      </p>
                    )}
                  </div>
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
