import {user} from "./types"
import { clsx } from 'clsx'; 
import styles  from "./user.module.scss"

const Uservalue  = ( )=>{
   return <div className={clsx(styles.name)}></div>
}

export default Uservalue;