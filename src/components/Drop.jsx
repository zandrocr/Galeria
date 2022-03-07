import { BrowserRouter, Link } from 'react-router-dom';
import '../sass/drop.css'

const Drop = () => {
    return (
    <div className='menu d-flex flex-column justify-content-center'>
        <input type="checkbox" name="dropdow" id="dropdow" />
        <label htmlFor="dropdow" className='drop d-flex flex-column justify-content-around'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </label>
    </div>);
}

export default Drop;