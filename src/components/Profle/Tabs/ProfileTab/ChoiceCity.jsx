import { useEffect, useState } from "react";


const ChoiceCity = ({ classNameInput, option }) => {
    console.log(option);
    return (
        <div>
            <input className={classNameInput} list="my-list" />
            <datalist id="my-list">
                {option.map((item) => {
                    return (
                        <option key={item.id} value={item.name}></option>
                    )
                })}
            </datalist>
        </div>
    );
}

export default ChoiceCity;
