import React from "react";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, 
  Agenda, ViewsDirective, ViewDirective, 
  TimelineViews, TimelineMonth, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../Calendar/Calendar.css';

export default class Calendar extends React.Component<{}, {}> {

  localData = [{
      id: 1,
      Subject: 'Meditation Time',
      StartTime: new Date(2022, 2, 21, 3, 0),
      EndTime: new Date(2022, 2, 21, 3, 30),
      Location: 'Yoga Center'
    },
    {
      id: 2,
      Subject: 'Skating Class',
      StartTime: new Date(2022, 2, 21, 6, 0),
      EndTime: new Date(2022, 2, 21, 9, 30),
      Location: 'Tower Park'
    }];

    eventTemplate(props: { [key: string]: Object }): JSX.Element {
      return (<div className="month-template-wrap">{props.Location}</div>);
    }

    weekEventTemplate(props: { [key: string]: Object }): JSX.Element {
      return (<div className="template-wrap">{props.Subject}</div>);
    }

    render() {
      return (
      <>
      <Navbar/><br/><br/>
      <div className="calendar">
      <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2022, 2, 23)}
      eventSettings={{ dataSource: this.localData, }}>
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" eventTemplate={this.weekEventTemplate.bind(this)} />
          <ViewDirective option="WorkWeek" />
          <ViewDirective option="Month" eventTemplate={this.eventTemplate.bind(this)}/>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      </div>
      <Footer />
      </>
      );
   }
}

