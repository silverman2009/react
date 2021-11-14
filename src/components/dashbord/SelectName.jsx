import Input from './../Input';
import {useState} from "react"
const SelectName = ({ nameLabel, disabled, className, valueNameOfProductOrService, nameNameOfProductOrService, onChange, ProductCount, nameProductCount, errorNameOfProductOrService, onKeyUp, defaultValueNameOfProductOrService, defaultValueProtect }) => {
  const [toggle,setToggle] = useState(false)
    return (
        <div className="text-right">
            <div className="container__selectName">
                <p className="fony80 fontfamily m-0 title">{nameLabel}</p>
                <div className="container__selectName" >
                    <p className=" fontfamily m-0 px-1 label1">کالا</p>
                    <input type="checkbox"  checked={toggle} onChange={()=>setToggle(!toggle)} disabled={disabled}  />
                </div>
                <div className="container__selectName mx-2">
                    <p className=" fontfamily m-0 px-1 label2">خدمات</p>
                    <input type="checkbox"   disabled={disabled} defaultChecked/>
                </div>
            </div>
            <Input value={valueNameOfProductOrService}
                name={nameNameOfProductOrService}
                onChange={onChange}
                disabled={disabled}
                className={className}
                error={errorNameOfProductOrService}
                onKeyUp={onKeyUp}
            />
            <div className={`${toggle ? "d-block mt-3" : "d-none"}`}>
                <label className="fony80 fontfamily px-1 m-0" >تعداد کالا :</label>
                <input defaultValue={defaultValueProtect} value={ProductCount} name={nameProductCount} onChange={onChange} type="number" className={`input__how_count fontfamily fony80 ${className}`} disabled={disabled} />
                <p className="m-0 fony75 fontfamily text_validation pt-1"></p>
            </div>
        </div>
    );
}

export default SelectName;
