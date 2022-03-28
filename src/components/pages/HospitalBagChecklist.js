import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import '../HospitalBagChecklist/Checklist.css';
import Navbar from '../Navbar';
import Footer from '../Footer';


export default class App extends React.Component {
    constructor() {
        super(...arguments);
        //define the array of JSON
        this.data1 = [
            { text: 'Birth plan', id: '1' },
            { text: 'Insurance card', id: '2' },
            { text: 'Photo ID', id: '3' },
            { text: 'Pregnancy medical record', id: '4' },
            { text: 'Your pediatrician\'s contact info', id: '5' },
        ];
        this.data2 = [
            { text: 'Robe', id: '1' },
            { text: 'Comfy clothes you don\'t care much about', id: '2' },
            { text: 'Going-home clothes (6 month maternity size)', id: '3' },
            { text: 'Non-slip socks/slippers', id: '4' },
            { text: 'Hair elastic/headband', id: '5' },
            { text: 'Nursing bra for comfort', id: '1' },
            { text: 'Breast pads', id: '2' },
            { text: 'Maxi pads', id: '3' },
            { text: 'Medication/vitamins', id: '4' },
            { text: 'Snacks/drinks', id: '5' },
            { text: 'Music/book/magazine', id: '2' },
            { text: 'Cell phone and charger', id: '3' },
            { text: 'Toiletries', id: '4' },
            { text: 'Overnight items for your partner', id: '5' },
        ];
        this.data3 = [
            { text: 'Swaddling cloths', id: '1' },
            { text: 'Weather-appropriate going home outfit', id: '2' },
            { text: 'Approved infant seat', id: '3' },
        ];
    }
    render() {
        return (
        // specifies the tag to render the ListView component
        <>
        <Navbar/>
          
     
      
        <form className='check'>
        <h3 className="main-heading center">Hospital Bag Checklist</h3><br/>
        <h5 className="sub center">Everything you need to ensure your comfort while in the hospital</h5><br/>
        <div className="col-md-12 text-center">
        <img src='images/Icons/todo.png' alt="logo" width="230" height="260"/>
        </div>
        <ListViewComponent id='list' dataSource={this.data1} showCheckBox={true} headerTitle='MEDICAL - What the hospital will ask you for:' showHeader={true}></ListViewComponent>
        <ListViewComponent id='list' dataSource={this.data2} showCheckBox={true} headerTitle="FOR YOU - Everything you'll need to be comfortable:" showHeader={true}></ListViewComponent>
        <ListViewComponent id='list' dataSource={this.data3} showCheckBox={true} headerTitle="FOR YOUR BABY - Your baby's welcome to the world basket:" showHeader={true}></ListViewComponent>
        <br/><br/><br/>
        <div class="center">
          <button className="see-more btn btn-outline-success" type="submit">Save</button>
          </div>
        </form>
        <Footer/>
        </>
        );
        
    }
}