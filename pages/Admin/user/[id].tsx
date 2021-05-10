import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../../styles/user.module.css'
const User=()=>{
     const router= useRouter();
     const {id}= router.query;
     console.log('router: ',router.query);
    return (
        <div className={styles.content}>
             <h1>
                 Admin ={'>'} User {id} 
             </h1>
             <Link href='/Admin'>
                <a>Admin</a>
             </Link>
        </div>
    )
}
export default User;