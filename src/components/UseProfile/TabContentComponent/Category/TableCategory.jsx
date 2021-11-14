import { Table } from "react-bootstrap"
const TableCategory = () => {
    const flids = [
        {
            name: "ردیف",
            id: 1
        },
        {
            name: "نام دسته",
            id: 2
        },
        {
            name: "عنوان دسته",
            id: 3
        },
        {
            name: "تاریخ ایجاد",
            id: 4
        },
        {
            name: "تاریخ انقضا",
            id: 5
        },
        {
            name: "تاریخ شروع عضویت",
            id: 6
        },
    ]

    const itemBody = [
        {
            number: 1,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
        {
            number: 2,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
        {
            number: 3,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
        {
            number: 4,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
        {
            number: 5,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
        {
            number: 6,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
        {
            number: 7,
            nameCategory: "مشتریان خوب",
            titleCategory: "تخفیف 5% بیشتر",
            createDate: "1400/07/10",
            expirDate: "1400/07/10",
            start: "1400/07/10"
        },
    ]
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {flids.map((item, index) => (
                            <th key={index}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {itemBody.map((item, index) => (
                        <tr key={index}>
                            <td>{item.number}</td>
                            <td>{item.nameCategory}</td>
                            <td>{item.titleCategory}</td>
                            <td>{item.createDate}</td>
                            <td>{item.expirDate}</td>
                            <td>{item.start}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TableCategory;
