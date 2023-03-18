export function User(){
    let data = 'Ganesh';
    function apple(){
        data = 'Pawar';
        alert(data);
    }
    return(
        <div>
            <p>User component</p>
            <button onClick={apple}>Click Me</button>
        </div>
    )
}