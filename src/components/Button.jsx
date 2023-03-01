import { Btn, BtnAct } from "./Button.styled"



export default function Button({handleClick, toggle}) {
    // let classNaming = "btn";

    // if(toggle === true) {
    //     classNaming += "active";
    //     console.log(classNaming)
    // }

    return (
        <>
             {toggle === false ? (
                <Btn type="button" onClick={handleClick}>
                    Follow
                </Btn>
             ) : (
                <BtnAct type="button" onClick={handleClick}>
                    Following
                </BtnAct>
             )}
            
        </>
    )
}