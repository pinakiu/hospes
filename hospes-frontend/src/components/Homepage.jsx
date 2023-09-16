const Homepage = () => {
    fetch("http://127.0.0.1:8000/getConfig/").then((response) => {
        if(response.ok){
            return response.json()
        }
    }).then((data) => {
        console.log(data);
    });
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
export default Homepage;