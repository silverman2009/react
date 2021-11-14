import "./note.css"
const ContentOne = () => {
    const items = [
        {
            titleNote: "موضوع یاداشت",
            titerNote: "تیتر یاداشت",
            message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",

        },
        {
            titleNote: "موضوع یاداشت",
            titerNote: "تیتر یاداشت",
            message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",

        },
        {
            titleNote: "موضوع یاداشت",
            titerNote: "تیتر یاداشت",
            message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",

        },
        {
            titleNote: "موضوع یاداشت",
            titerNote: "تیتر یاداشت",
            message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاز طراحان گرافیک است",

        },
    ]
    return (
        <div className="px-4">
            {items.map((item, index) => (
                <div className="coontainer__contentOne__note pt-2" key={index}>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbos__message_title" />
                        <p className="title__message">{item.titleNote}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" id="checkbos__message_titer" />
                        <p className="titer__message_tab">{item.titerNote}</p>
                    </div>
                    <p className="message___tab_message text-right">
                        {item.message}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ContentOne;
