import Card from "./CardMonyBag"
const ContentTwo = () => {
    return (
        <div>
            <div className="d-flex justify-content-around" >
                <Card title="اعتبار" subTitle="123544 تومان" icon="fa fa-user" />
                <Card title="صندوق" subTitle="10 عدد" icon="fa fa-user" />
                <Card title="زیر مجموعه " subTitle="10 عدد" icon="fa fa-user" />
            </div>
            <div className="d-flex justify-content-around mt-5" >
                <Card title="کارت‌ها" subTitle="1200 عدد" icon="fa fa-user" />
                <Card title="صندوق پدر" icon="fa fa-user" />
                <Card title="زیر مجموعه " subTitle="پدر" icon="fa fa-user" />
            </div>
        </div>
    );
}

export default ContentTwo;
