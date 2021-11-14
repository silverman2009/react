import "./message.css"
const TabContentOne = () => {
    const items = [
        {
            titleMessage: "موضوع پیام",
            titerMessage: "تیتر پیام",
            message:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",
            dateSend: "1400/07/08",
            watch: "12:00:00",
            contayion: "خوانده شده",
            id: 1,
        },
        {
            titleMessage: "موضوع پیام",
            titerMessage: "تیتر پیام",
            message:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",
            dateSend: "1400/07/08",
            watch: "12:00:00",
            contayion: "خوانده شده",
            id: 2,
        },
        {
            titleMessage: "موضوع پیام",
            titerMessage: "تیتر پیام",
            message:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",
            dateSend: "1400/07/08",
            watch: "12:00:00",
            contayion: "خوانده شده",
            id: 3,
        },
    ]
    return (
        < div className="px-4">
            {
                items.map((item) => {
                    return (
                        <div className="container__message__body">
                            <div>
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" className="checkbos__message_title" />
                                    <p className="title__message">{item.titleMessage}</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" id="checkbos__message_titer" />
                                    <p className="titer__message_tab">{item.titerMessage}</p>
                                </div>
                                <p className="message___tab_message">
                                    {item.message}
                                </p>
                            </div>
                            <div
                                className="details__message_tab d-flex flex-column justify-content-between"
                            >
                                <div>
                                    <p>ارسال شده: {item.dateSend}</p>
                                    <p>ساعت:{item.watch}</p>
                                </div>
                                <p>{item.contayion}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TabContentOne;
