import { clsx } from 'clsx';
import css from "./button.module.scss" 
const ButtonPrimary:React.FC<ButtonProps> =({cname,callback,text})=>
{
    return (
        <button className={clsx(getClass(cname))} onClick={callback()} >{text} </button>
    );
}

const getClass =(cname : string)=>{
    if(cname == "primary") return css.primary ; 
    else return css.secondary
}
export default ButtonPrimary;