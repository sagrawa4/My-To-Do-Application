import React, {Component} from 'react';
import moment from 'moment';
import { Form, Formik, Field } from 'formik';

class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            id: this.props.match.params.id,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }
    render(){
        return (
            <div>
                <h1>Todo</h1>
                    <div className="container">
                        <Formik>
                            {
                                (props)=> (
                                    <Form>
                                        <fieldset className="form-group">
                                            <label>Description</label>
                                                <Field className="form-control" type="text" name="decription"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>TargetDate</label>
                                                <Field className="form-control" type="date" name="targetDate"/>
                                        </fieldset>
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                )       
                            }
                        </Formik>
                    </div>
            </div>
        )
    }
}

export default TodoComponent;