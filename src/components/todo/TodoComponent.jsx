import React, {Component} from 'react';
import moment from 'moment';
import { Form, Formik, Field, ErrorMessage } from 'formik';

class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "Learn Forms",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit= this.onSubmit.bind(this);
        this.validate= this.validate.bind(this);
    }

    validate(values){
        let errors ={}
        if(!values.description){
            errors.description= 'Enter a Description'
        }else if (values.description.length<5){
            errors.description = 'Should have atleast 5 char'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter valid Date'
        }
        return errors;
    }
    onSubmit(values){
        console.log(values)
    }
    render(){
        let description = this.state.description
        let targetDate=this.state.description

        return (
            <div>
                <h1>Todo</h1>
                    <div className="container">
                        <Formik
                            initialValues={{description,targetDate}}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            >
                            {
                                (props)=> (
                                    <Form>
                                        <ErrorMessage name="description" component="div"
                                                    className="alert alert-warning"/>
                                        <ErrorMessage name="targetDate" component="div"
                                                    className="alert alert-warning"/>
                                        <fieldset className="form-group">
                                            <label>Description</label>
                                                <Field className="form-control" type="text" name="description"/>
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