import { Btn, BtnAct } from "./Button.styled"

export default function Button({handleClick, toggle}) {
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