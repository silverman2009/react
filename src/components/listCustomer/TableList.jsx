import { useState, useEffect, useMemo } from "react"
import PaginationList from "./PagenitionList"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import { fileds, Tbody } from "./data"
import "./list.css"
import index from './../UseProfile/TabContentComponent/UserProfile/index';
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
        setTotalItems(computedComments.length)
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage])

    return (
        <div className="container__table__list pb-2">
            <table className="table__list_custom">
                <thead>
                    <tr>
                        {fileds.map((item) => (
                            <th className={item.className} key={item.id}>
                                {item.name}
                                <br />
                                {item.nameTwo}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        commentsData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>{item.nameFamily}</td>
                                    <td>{item.nameUser}</td>
                                    <td>{item.nameUser}</td>
                                    <td>{item.valiId}</td>
                                    <td className="last__child_td">
                                        <div>
                                            <Link to="/"><span> <i className="fa fa-user text-white"></i></span></Link>
                                            <Link to="/"><span> <i className="fa fa-ban text-white"></i></span></Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <PaginationList
                    total={totalItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}

export default TableList;








































