import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {fetchListings} from "../../store/action";
import CampCard from "../../components/CampCard/CampCard.tsx";
import Spinner from "../../components/UI/Spinner/Spinner";
import MainBlock from "../../components/MainBlock/MainBlock";

import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
                <Fragment>
                    <NotificationContainer/>
                    <MainBlock>
                        <Formik
                            initialValues={{ number: ''}}
                            validate={values => {
                                let errors = {};
                                if (!values.number) {
                                    errors.number = 'Required';
                                } else if (
                                   values.number <= 0 || values.number > 10
                                ) {
                                    errors.number = 'Enter number from 1 to 10';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => {
                                this.props.fetchListings(values.number);
                            }}
                        >
                            {() => (
                                <Form>
                                    <Field className="Input" type="number" name="number" />
                                    <ErrorMessage name="number" component="div" />
                                    <button className="SubmitButton" type="submit">
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
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
