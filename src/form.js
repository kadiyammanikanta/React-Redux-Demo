import { useDispatch } from "react-redux";
import { useState } from "react";
import {Deposit,Withdraw,Name} from './actions';

function Form() {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id,setId]=useState(0)
  const dates = new Date().toISOString();
  console.log(dates)

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">User Account Management</h2>

      <form className="border p-4 rounded shadow-sm bg-light">
        {/* Deposit Section */}
        <fieldset className="mb-4">
          <legend className="text-success fw-bold">💰 Balance Operations</legend>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="deposit" className="form-label">Deposit Amount</label>
              <input
                type="number"
                id="deposit"
                className="form-control"
                placeholder="Enter deposit amount"
                onChange={(e) => setBalance(Number(e.target.value))}
              />
              <button
                type="button"
                className="btn btn-success mt-2 w-100"
                onClick={() => {dispatch(Deposit(balance));
                    setId(id+ +1);
                dispatch({type:'ADD_Trancastion',payload:{id:id,amount:balance,date:new Date().toISOString(),type:'Credit'}})}}
              >
                Deposit
              </button>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="withdraw" className="form-label">Withdraw Amount</label>
              <input
                type="number"
                id="withdraw"
                className="form-control"
                placeholder="Enter withdrawal amount"
                onChange={(e) => setWithdraw(Number(e.target.value))}
              />
              <button
                type="button"
                className="btn btn-danger mt-2 w-100"
                onClick={() =>{ dispatch(Withdraw (withdraw ));
                     setId(id+ +1);
                    dispatch({type:'ADD_Trancastion',payload:{id:id,amount:balance,date:new Date().toISOString(),type:'debit'}})}}
                    
                
              >
                Withdraw
              </button>
            </div>
          </div>
        </fieldset>

        {/* User Info Section */}
        <fieldset>
          <legend className="text-info fw-bold">👤 Personal Information</legend>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary mt-2 w-100"
              onClick={() => dispatch(Name(name))}
            >
              Update Name
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary mt-2 w-100"
              onClick={() => dispatch({ type: 'phonenumber', payload: phone })}
            >
              Update Phone
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
