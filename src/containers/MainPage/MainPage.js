import React, {Component, Fragment} from 'react';
import MainBlock from "../../components/MainBlock/MainBlock";

import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <MainBlock>
                    <form>
                        <input className="Input" type="number" placeholder="Set number of listings" required={true} min={1} max={10}/>
                        <button className="SubmitButton">Submit</button>
                    </form>
                </MainBlock>
                <div className="Camps">

                </div>
            </Fragment>
        );
    }
}

export default MainPage;