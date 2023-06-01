import { useContext,useState } from "react";
import {AppContext} from '../context/AppContext';
const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const [currency,setCurrency] = useState('');
    const submitEvent = () => {
        
   
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };
    return (
        
        <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
         <select className="custom-select" id="inputGroupSelect01" 
         style={{backgroundColor:"lightgreen"}} onChange={(Event) => setCurrency(Event.target.value)}
         onClick={submitEvent} >
            <option defaultValue>Choose...</option>
            <option value="$" name="dollar"> $Dollar</option>
            <option value="£" name="pound">£Pound</option>
            <option value="€" name="euro">€Euro</option>
            <option value="₹" name="rupee">₹Rupee</option>

        </select>
        
        </div>
    );
};
export default Currency;