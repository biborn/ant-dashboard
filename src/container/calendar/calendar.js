import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getEvents, addEvent } from '../../actions/calendar_actions';
import moment from 'moment';
import eventList from './eventList';
import EventForm from './eventForm';
import './calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Icon, message, DatePicker } from 'antd';
const dateFormat = 'YYYY-MM-DD';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      visible: false,
      confirmLoading: false,
    }

    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.success = this.success.bind(this);
  }

  onSubmit = (values) => {
    console.log(values)
    this.success()
    // this.props.addEvent(values);
  }
  success = () => {
    message.success('Event Added', 10);
  };
  handleOk = (slot) => {
    this.setState({
      startDate: JSON.stringify(slot.start),
      endDate: JSON.stringify(slot.end),
      confirmLoading: true,
    });
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { visible, confirmLoading, startDate, endDate } = this.state;
    const { handleSubmit, pristine, reset, submitting } = this.props;
    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center' }}>
        <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
    }
    if (this.props.isError) {
      return (<p>Some Error occoured...</p>)
    }
    console.log(moment(this.state.startDate))
    return (
      <div className="flex-container" style={{ height: '520px', backgroundColor: '#fff', margin: '1rem' }}>
        <BigCalendar
          style={{ flexBasis: '70%' }}
          events={this.props.events}
          defaultDate={new Date()}
          startAccessor={(event) => startDate}
          endAccessor={(event) =>endDate}
          selectable={true}
          dateFormat={dateFormat}
          onSelectSlot={(slot) => this.handleOk(slot)}
          onSelecting={(range) => console.log(range)}
        />
        <div className="event-form" >
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DatePicker defaultValue={moment(this.state.startDate)} />
            {/* <EventForm
              start={startDate}
              end={endDate} /> */}
            <p>{startDate}------{endDate}</p>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.calendarReducer.isLoading,
    isError: state.calendarReducer.isError,
    events: state.calendarReducer.events
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents: getEvents,
    addEvent: addEvent
  }, dispatch);
};

Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default reduxForm({
  form: 'calendarForm'
})(Calendar);