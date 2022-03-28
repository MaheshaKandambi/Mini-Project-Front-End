import React, { Component, useEffect, useState } from "react";
import "../Insights/Insights.css";
import { Box, Grid } from "@material-ui/core";
import Poll from "react-polls";
import Navbar from '../Navbar';
import Footer from '../Footer';

const pollAnswers2 = [
{
 id: 1,
 pollQuestion : "Do you work out at home?",
 pollAnswers : [
  { option: "Yes", votes: 10 },
  { option: "No", votes: 40 }
],
category:"Activity"
},
{
  id: 2,
 pollQuestion : "Do you exercise to lose weight?",
 pollAnswers : [
  { option: "Yes", votes: 12 },
  { option: "No", votes: 40 }
],
category:"Activity"
},
{
  id: 3,
pollQuestion : "Do you exercise to build muscle?",
pollAnswers : [
  { option: "Yes", votes: 15},
  { option: "No", votes: 45 }
],
category:"Activity"
},
{
  id: 4,
pollQuestion : "Do you regularly do kegel exercise?",
pollAnswers : [
  { option: "Yes", votes: 13},
  { option: "No", votes: 26, }
],
category:"Activity"
},
{
  id: 5,
pollQuestion : "Have you had a miscarriage before?",
pollAnswers : [
  { option: "Yes", votes: 5},
  { option: "No", votes: 8 }
],
category:"Medical"
},
{
  id: 6,
pollQuestion : "Do you have a history of depression?",
pollAnswers : [
  { option: "Yes", votes: 12},
  { option: "No", votes: 21 },
  { option: "I don't know", votes: 5 }
],
category:"Medical"
},
{
  id: 7,
pollQuestion : "Do you experience morning sickness?",
pollAnswers : [
  { option: "Yes", votes: 15},
  { option: "Not often", votes: 12 },
  { option: "Never", votes: 10 }
],
category:"Medical"
},
{
  id: 8,
pollQuestion : "Have you been eating whole grains?",
pollAnswers : [
  { option: "Yes", votes: 25},
  { option: "No", votes: 12 }
],
category:"Nutrition"
},
{
  id: 9,
pollQuestion : "Have you notices an increase in hunger?",
pollAnswers : [
  { option: "Yes", votes: 29},
  { option: "No", votes: 12 }
],
category:"Nutrition"
},


]
const pollStyles2 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: false,
  questionColor: "#4F70D6",
  align: "center",
  theme: "blue",
};



function Insight(){
  // state = {
  //   pollAnswers2: [...pollAnswers2],
  // };

  const [pollAns,setPollAnswer2]=useState(...pollAnswers2);

  const handleVote = (voteAnswer, pollAnswers, pollNumber) => {
    const newPollAnswers = [pollAnswers].map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });

    if (pollNumber === 1) {
      setPollAnswer2({
        newPollAnswers
      });
    } 
  };
  const [data,setData]=useState(pollAnswers2);
        const filterResult=(catItem)=>{
            const result=pollAnswers2.filter((curData)=>{
                return curData.category===catItem;
            });
            setData(result);
        }

  // componentDidMount() {
  //   const {pollAnswers2} = this.state;
  //   this.autoAddVotes(pollAnswers2, 2);
  // }
  // useEffect(()=>{
  //   const {pollAns} = this.state;
  //   this.autoAddVotes(pollAns, 2);
  // })

  // const autoAddVotes = (pollAnswers, pollNumber) => {
  //   setTimeout(() => {
  //     const choseAnswer = parseInt(Math.random() * 2, 10);
  //     handleVote(pollAnswers[choseAnswer].option, pollAnswers, pollNumber);
  //     autoAddVotes(pollAnswers, pollNumber);
  //   }, Math.random() * 5000);
  // };
  

  // render() {
    
  //   const {  pollAnswers2 } = this.state;

    return (
    <>
      <Navbar />
    
      <section className="poll">
      <h3 className="main-heading center mt-5">MyQ</h3><br/><br/>
      <h5 className="sub center">By Category</h5>
      <div className="underline mx-auto"></div> 
      <div className="pollBtn">
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn me-2" onClick={()=>setData(pollAnswers2)}>All</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Activity')}>Activity</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Medical')}>Medical</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Nutrition')}>Nutrition</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Lifestyle')}>Lifestyle</button>
      </div>
      </div> 

        <div className="row pollQuestions">
       
        <>
        {data.map((values)=>{
        const {id, pollQuestion, pollAnswers, category}=values;
            return(
              <div className="col-md-3 col-sm-8" key={id}>
                <div className="poll-grid"> 
               
                  <Poll
                  question={pollQuestion}
                  answers={pollAnswers}
                  onVote={(voteAnswer) =>
                handleVote(voteAnswer, pollAns, category, 2)
                  }
                  customStyles={pollStyles2}
                  noStorage
                  /> 
                </div>
                <div className="pollCat">{category}</div>
              </div>
            )
        })}
        </>
        </div>
      </section>

      <Footer />
    </>
    );
  }
  export default Insight;
// }