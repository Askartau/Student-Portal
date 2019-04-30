import React, { Component } from 'react';
import { connect } from 'react-redux';
import Subject from './Subject';
import Teacher from './Teacher';
import * as subjectAction from '../../actions/subjectAction';
import * as teachersAction from '../../actions/teachersAction';

class TwiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
    componentDidMount() {
        this.props.getTeachers(); 
        this.props.getSubjects();
    }

    render() {
        return(
            <>
            <section className="flush-with-above space-0">
                <div className="bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="teachers-tab" data-toggle="tab" href="#teachers" role="tab" aria-controls="teachers" aria-selected="true">Teachers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="subjects-tab" data-toggle="tab" href="#subjects" role="tab" aria-controls="subjects" aria-selected="false">Subjects</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flush-with-above">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="teachers" role="tabpanel" aria-labelledby="teachers-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                                
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                            </div>
                        </div>    
                    </div>
                
                    <div className="tab-pane fade" id="subjects" role="tabpanel" aria-labelledby="subjects-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    teachers: state.teacher.teachers,
    subjects: state.subject.subjects
  })

const mapDispatchToProps = {
    getTeachers: teachersAction.getTeachersForFaculty,
    getSubjects: subjectAction.getSubjectsForFaculty
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TwiceList);
