import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";

import {fetchListings} from "../../store/action";
import CampCard from "../../components/CampCard/CampCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import MainBlock from "../../components/MainBlock/MainBlock";

import './MainPage.css';

class MainPage extends Component {
    state = {
        number: ""
    };

    setNumber = event => {
        event.preventDefault();
        this.setState({number: event.target.value})
    };

    sendNumberOfListings = event => {
        event.preventDefault();
        this.props.fetchListings(this.state.number);
    };

    render() {
        return (
                <Fragment>
                    <NotificationContainer/>
                    <MainBlock>
                        <form onSubmit={this.sendNumberOfListings}>
                            <input className="Input" type="number"
                                   placeholder="Set number of listings"
                                   required={true}
                                   min={1} max={10}
                                   value={this.state.number}
                                   onChange={this.setNumber}/>
                            <button className="SubmitButton" type="submit">Submit</button>
                        </form>
                    </MainBlock>
                    {this.props.loading ?
                    <Spinner/> :
                    <div className="Camps">
                        {this.props.listings.map((camp) => (
                            <CampCard
                                key={camp.id}
                                price={camp.price}
                                address={camp.slug}
                                image={camp.objects[4].data.small.jpeg}
                            />
                        ))}
                    </div>}
                </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchListings: number => dispatch(fetchListings(number)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
