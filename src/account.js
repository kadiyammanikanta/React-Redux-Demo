import { useSelector } from "react-redux";
function Account() {
    const data = useSelector((state) => {
        return state;
    })
    console.log(data);
    return (<>
        <div className="container mt-5"><h1 className="text-primary">Account Details</h1>
            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark text-center">
                    <tr><th className="br">Blance</th>
                        <th>Name</th>
                        <th>Phone</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {data.account.balance}
                        </td>
                        <td>
                            {data.account.name}
                        </td>
                        <td>
                            {data.account.phonenumber}
                        </td>
                    </tr>

                </tbody>
            </table>
<h1 className="text-primary">Trancastion Details</h1>
             <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark text-center">
                    <tr><th className="br">ID</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                        </tr>
                </thead>
                <tbody>
                    {data.trancationsDetails.map((item)=>(
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.amount}</td>
                        <td>{item.type}</td>
                        <td>{item.date}</td>
                        </tr>
                    ))
                    }
                       

                </tbody>
            </table>
        </div>

    </>)

}
export default Account;