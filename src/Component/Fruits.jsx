function Fruits({fruits}){
    return(
        <>
            <ol>{fruits.map((element,index)=>{
                return(
                    <li key={index}>{element}</li>
                )
            })}</ol>
        </>
    )
}
export default Fruits;