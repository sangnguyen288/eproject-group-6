export default function Search() {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        <div className="search">
        <form className="d-flex" action={search} style={{ width: "40%", marginLeft: "30%" }}>
            <input name="query" placeholder="search" style={{marginRight: "15px"}}/>
            <button type="submit" className="btn btn-outline-success">Search</button>
        </form>
        </div>
    );
}