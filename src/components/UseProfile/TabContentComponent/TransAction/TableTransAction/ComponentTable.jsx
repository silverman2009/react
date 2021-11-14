import { Table } from "react-bootstrap"
import PaginationTable from "./PaginationTable"
import { fileds, Tbody } from "./data"
import { useEffect, useState, useMemo } from "react"

const ComponentTable = () => {
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
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {fileds.map((item) => {
                            return (

                                <th key={item.id}>{item.name}</th>

                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {commentsData.map((comment, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {comment.money}
                            </th>
                            <td>{comment.date}</td>
                            <td>{comment.watch}</td>
                            <td>{comment.condition}</td>
                            <td>{comment.code}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <PaginationTable
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}

export default ComponentTable;
