import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import './Faq.css';



const Faq = () => {
    return (

<>

<Navbar/>

<section class="main-content">
  <div class="container">
    <h1 class="faq-section text-center text-uppercase mb-5">Frequently Asked Questions</h1>
    <br/>
    <br/>
    <div class="row flex-center">
      <div class="col-sm-10 offset-sm-2">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div class="circle-icon"> <i class="fa fa-question"></i> </div>
              <span> If I have a positive home pregnancy test, am I pregnant?</span> </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body"> <strong>At-home pregnancy tests yield accurate positive results, but frequently inaccurate negative results. </strong>If you think 
                                            you’ve had a false negative test, the best way to confirm your results is through a blood test.If you find out you 
                                            are pregnant, you should schedule your first appointment 6-12 weeks from the first day of your last period. If you 
                                            have bleeding or other concerns, it’s best to see your doctor sooner.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				<div class="circle-icon"> <i class="fa fa-question"></i> </div>
              <span> What if I have spotting during early pregnancy?</span> </button>
				</h2>
            </div>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body"> <strong>Many women who spot during early pregnancy assume they have had a miscarriage, but that isn’t always the case.</strong> 
                                            In fact, approximately 30 percent of women will spot in the first trimester and go on to have a healthy pregnancy. 
                                            If you do notice spotting, notify your doctor just in case.</div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				<div class="circle-icon"> <i class="fa fa-question"></i> </div>
              <span> When will I feel my baby move?</span> </button>
				</h2>
            </div>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body"> <strong>Your baby’s first movements (called “fetal quickening”) will usually occur between 18 and 22 weeks,</strong> 
                                           though some women feel movement prior. Most women describe these movements as “flutters” or “bubbles.”</div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
				<div class="circle-icon"> <i class="fa fa-question"></i> </div>
              <span> How much weight should I gain during pregnancy?</span> </button>
				</h2>
            </div>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body"> <strong>Most doctors suggest gaining 20 to 30 pounds during a single-baby pregnancy.</strong> 
                                           Broken down, that’s about 300 extra calories a day you should be adding to your diet. While it 
                                           may be tempting to load up on fast food and ice cream, 
                                           it’s important that these extra calories come from healthy foods.</div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
				<div class="circle-icon"> <i class="fa fa-question"></i> </div>
              <span>Should I measure my pregnancy by weeks or months?</span> </button>
				</h2>
            </div>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body"> <strong>Measuring your pregnancy by weeks is more accurate than months.</strong> 
                                           Why? Nine months can often be about 39 weeks when doctors consider 40 weeks to be 
                                           a full-term pregnancy. Your first trimester ends around 11-13 weeks and the third 
                                           between 24-26 weeks.</div>
            </div>
          </div>
          </div>
        </div>
      </div>
</section>
<Footer/>

</>
);
}

export default Faq;

