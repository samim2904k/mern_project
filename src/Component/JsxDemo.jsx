import 'bootstrap/dist/css/bootstrap.min.css';
function JsxDemo() {
    let a = 10;
    return (
        <>
            <h1>This is the first jsx element.</h1>
            <h2 > This is the second jsx element.</h2>
            <p></p>
            <p className='text text-warning'>{a}</p>
            <p className='text text-info'>

                {
                    a > 0 ? "positive" : "negetive"
                }
            </p>
        </>
    )
}
export default JsxDemo;