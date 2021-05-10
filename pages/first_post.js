import Link from 'next/link'
export default ()=>{
    return (
        <>
         <h1>First Post</h1>
         <p>
         Quay về trang {' '}<Link href="/">
             <a>Home</a>
         </Link>
         </p>

        <style jsx>{`
        p a{
            font-size:16px;
            color: blue;
        }
        p a:hover{
            text-decoration: underline;
        }
        `}
            </style> 
        </>

    )
}