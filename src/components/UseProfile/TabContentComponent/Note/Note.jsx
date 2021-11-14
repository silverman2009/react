import Input from "../../../InputSearch";
import Filter from "./FilterNote";
import TabNote from "../../TabsComponent";
import ContentOne from "./ContentOne";
import Write from "../../Write";
import { useNote } from "./useNote";
import CreateNewNote from "./CreateNewNote";
import "./note.css";

const Note = () => {
  const { isClick, clickCrateNewNote } = useNote()

  return (
    <div >
      <div className={isClick ? " d-none" : "grid__container__search"}>
        <Input />
        <Filter
          nameBtn="فیلتر"
          classNameBtn="button__filter__group__transAction"
        />
      </div>
      <div className="text-right mt-3">
        <Write handleClickWrite={clickCrateNewNote}
          nameBtn="ایجاد یاداشت جدید">
          <CreateNewNote />
        </Write>
      </div>
      <div className={isClick ? " d-none" : "d-block"}>
        <TabNote
          itemOne="همه"
          contentOne={<ContentOne />}
          itemTwo="ارسال شده"
          itemThree="دریافت شده"
          itemFour="ستاره دار"
        />
      </div>
    </div>
  );
};

export default Note;
