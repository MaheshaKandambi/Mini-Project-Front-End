import React, { Component } from "react";
import Navbar from "../Navbar";
import '../Inthewomb/Inthewomb.css';
import Footer from '../Footer';
import { Link } from "react-router-dom";



function Pregnancybyweek() {
    return (
        <>
<Navbar/>
<br/><br/><br/>
<div id="carouselExampleCaptions" className="my-carousel carousel slide" data-bs-ride="carousel"> 
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='images/Pregnancybyweek/Inthewomb_banner.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>In The Womb</h5>
              <p>Get Updates on baby's development, decode your pregnancy Symptoms and see your weekly to-dos.</p>
              {/* <div className="slider-btn">
                  <button className="btn btn-1">Read More</button>
              </div> */}
            </div>
          </div>  
        </div>
      </div>


      <h3 className="main-head2"></h3>
      <div className="col-md-12 text-center">
                 <h3 className="main-heading">In the Womb</h3>
                 <h5 className="sub">Supporting Your Pregnancy Journey</h5>
                 <p className="para">From conception through birth and all the 
                 wonderful in-betweens, <br/>our nurses and pregnancy educators are 
                 here to provide the resources and information <br/>you need for the 
                 healthiest possible <br/>pregnancy.</p>
                 <div className="underline mx-auto">   
                 </div>
                 </div>
<div class="cards">
  <div class="card">
    {/* <h2 class="card-title">Seal</h2> */}
    <img src='images/Pregnancybyweek/Week1.jpg'alt=""/>
    <p class="card-desc">The human egg is incredibly complex and different from any other cell in the body. 
                          This illustration shows the sheer size and power of a single egg. 
                          If you look closer, you'll see the thick, transparent exterior 
                          of the cell surrounding the cell organelles that are the building blocks for life.</p>
    <button class="card-button">Week 1</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week2.jpg'alt=""/>
    <p class="card-desc">At the start of this week, ovulation occurs, and the egg is ready to be fertilized. In this depiction, 
                          the focus is on the texture of the egg, which almost looks like a planet. 
                          Each sperm is a little different, with motion in each of the whip-like 
                          tails as the sperm orbit the egg.</p>
    <button class="card-button">Week 2</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week3.jpg'alt=""/>
    <p class="card-desc">This painting shows the first of many cell divisions of the oocyte after fertilization. 
                        You can see all the activity taking place beneath the surface in the deep colors and textural variation.</p>
      <button class="card-button">Week 3</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week4.jpg'alt=""/>
    <p class="card-desc">In this illustration, the semi-transparent outer layer of the embryo shows the mound of cells, 
                         called the embryo blast, on the inside. The uterine wall can be seen under the embryo, and it's 
                         here that implantation will happen. </p>
      <button class="card-button">Week 4</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week5.jpg'alt=""/>
    <p class="card-desc">This structure might look unfamiliar, but it shows an important part of early development 
                         of an embryo. The shape of the figure shows the beginnings of cell differentiation and major 
                         body systems. The series of small, round nodes will form the spinal column, and the larger, 
                         divided sphere at the top will become the two hemispheres of the brain. </p>
      <button class="card-button">Week 5</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week6.jpg'alt=""/>
    <p class="card-desc">Subtle differences in colors and textures show where more recognizable features will soon develop. 
                         The dark areas of overlapping color in the lower part of the embryo will soon grow into the digestive 
                         system. If you look closer you will see the blood vessels and organs taking shape. </p>
      <button class="card-button">Week 6</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week7.jpg'alt=""/>
    <p class="card-desc">This week's highlight is the four-chambered heart, which you can see developing in the tiny bubble on 
                         the front of the chest. The blood vessels carry the blood to the newly formed heart. which is beating 
                         more than twice as fast as yours.</p>
      <button class="card-button">Week 7</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week8.jpg'alt=""/>
    <p class="card-desc">At week eight, you might finally be able to see Cute on an ultrasound. The highlight this week is the 
                         growth of the skeletal system. You can just barely see the rib cage and spine starting to show between 
                         colorful organs and blood vessels. </p>
      <button class="card-button">Week 8</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week9.jpg'alt=""/>
    <p class="card-desc">It's hard not to notice the dark, intense eye staring back at you this week. In early stages of development, 
                         the iris is becoming more and more pigmented, but the eyelid won't form quite yet. </p>
      <button class="card-button">Week 9</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week10.jpg' alt=""/>
    <p class="card-desc">By this week, Cute's embryonic tail is completely gone and fingers and toes are looking less webbed. 
                         Though there are no fingernails yet, you can see the more 
                         in the painting by the shadows and highlights wrapped around each digit. </p>
      <button class="card-button">Week 10</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week11.jpg' alt=""/>
    <p class="card-desc">Finally, we start to see Cute's face becoming more recognizable. The eyelids are in place to protect 
                         the now light-sensitive eyes. The ears are also becoming more structured, and they're highlighted by 
                         soft contours and shadows. </p>
      <button class="card-button">Week 11</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week12.jpg' alt=""/>
    <p class="card-desc">Now that the skeletal and muscular systems are growing more developed, Cute can start to move around 
                        more inside the womb. In this illustration series, this means you'll start to see the body in different 
                        positions, which have so far been limited to a static profile view. This week the body is slightly turned, 
                        with arms and legs exploring for the first time.</p>
      <button class="card-button">Week 12</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week13.jpg' alt=""/>
    <p class="card-desc">As your first trimester comes to a close, your baby is starting to become more proportional as her body 
                         starts catching up with her head. Cute's intestines are maturing and settling into the right position, 
                         which is highlighted here with a subtle pink glow.</p>
      <button class="card-button">Week 13</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week14.jpg' alt=""/>
    <p class="card-desc">At week 14, Cute is focused on developing her kidney, liver, and spleen functions. Lanugo, a thin peach 
                         fuzz-like hair, is also starting to cover your baby's body to keep her warm. </p>
      <button class="card-button">Week 14</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week15.jpg' alt=""/>
    <p class="card-desc">At this point, Cute is testing out all of her new parts and will practice swallowing, sucking, hiccuping, 
                         and yawning. As Cute uses new facial muscles, a tiny smile escapes, shown here by the creases around the 
                         mouth and the highlight on the cheek.</p>
      <button class="card-button">Week 15</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week16.jpg' alt=""/>
    <p class="card-desc">Around this time, Cute is going through some major growth spurts. She's developing taste buds, hair follicles
                         eyelashes, eyebrows, and inner ear bones. This means she might even be able to hear your voice soon.</p>
      <button class="card-button">Week 16</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week17.jpg' alt=""/>
    <p class="card-desc">Your baby's skin is finally starting to thicken and become less see-through. You'll notice that in these
                         illustrations, the internal organs and the skeleton have become harder and harder to see. Though you 
                         can still see some blood vessels under the skin, those are very close to the surface, while all major organs 
                         are now too far below the skin to see.</p>
      <button class="card-button">Week 17</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week18.jpg' alt=""/>
    <p class="card-desc">At week 18, you might start to feel Cute move, and if not quite yet, you probably will soon! Your baby's 
                         nervous system is becoming more fully developed 
                         and myelin is starting to cover and protect her nerves.</p>
      <button class="card-button">Week 18</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week19.jpg' alt=""/>
    <p class="card-desc">At this point, Cute is developing something called the vernix caseosa, which is a waxy 
                         substance that will cover and protect baby's delicate skin in the womb. New wrinkles and 
                         skin folds are shown here by careful placement of shadows and highlights that coordinate 
                         with the direction of light hitting the body.</p>
      <button class="card-button">Week 19</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week20.jpg' alt=""/>
    <p class="card-desc">While it will still be a while before baby's body catches up to her head size, she is finally
                         reaching a point where her limbs are longer and more filled-out. In this illustration, this is 
                         shown by the shapes of her arms and legs, which are more contoured so you can see where the muscles 
                         under the skin are starting to develop.</p>
      <button class="card-button">Week 20</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week21.jpg' alt=""/>
    <p class="card-desc">By around week 21 you may start to notice more intense movement because Cute is not only bigger, 
                         but is also practicing stretching, kicking, and swimming around. Cute is also developing more 
                         mature taste buds, eyelids, and eyebrows around this week.</p>
      <button class="card-button">Week 21</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week22.jpg' alt=""/>
    <p class="card-desc">You may already know the sex of your baby by now (or are choosing to keep it a mystery!), 
                        but we intentionally have left the sex organs out of the equation to be inclusive of all 
                        situations. Instead, this painting highlights the overlapping limbs as baby continues to 
                        move and explore. The use of shadows helps to create perspective where the legs are crossed 
                        and the chin tucked into the chest.</p>
      <button class="card-button">Week 22</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week23.jpg' alt=""/>
    <p class="card-desc">You'll notice this week that Cute's mouth is slightly open, showing how she is swallowing 
                         amniotic fluid. This is how babies kick-start kidney function by allowing fluid to be 
                         filtered through the body. In this painting, some new details have been added to baby's 
                         environment, which shows all of the nutrients and antibodies in the protective amniotic fluid.</p>
      <button class="card-button">Week 23</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week24.jpg' alt=""/>
    <p class="card-desc">As Cute grows, she is becoming more and more recognizable. You'll start to notice more 
                         variation in facial features in this week's illustration and all the rest to come, 
                         because no two babies are alike.</p>
      <button class="card-button">Week 24</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week25.jpg' alt=""/>
    <p class="card-desc">At this point, Cute still has a lot of baby fat to grow. Her skin is also becoming even 
                         less see-through and is forming a bigger network of capillaries to make her skin have a rosy glow.</p>
      <button class="card-button">Week 25</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week26.jpg' alt=""/>
    <p class="card-desc">By week 26, Cute is testing out her lungs by inhaling and exhaling amniotic fluid, which is a
                         crucial part of development. Cute will also start practicing opening her eyes and might respond 
                         with a punch if you shine a flashlight onto your belly.</p>
      <button class="card-button">Week 26</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week27.jpg' alt=""/>
    <p class="card-desc">By now Cute's brain is beginning to show electrical activity. This brain activity will become 
                         more and more complex as time goes on. She is also sleeping and waking on a pretty regular schedule.</p>
      <button class="card-button">Week 27</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week28.jpg' alt=""/>
    <p class="card-desc">By week 28, Cute is packing on more fat and is filling out your womb more each day. 
                         She is also getting ready for life outside the womb, by hiccuping, breathing, and blinking frequently.</p>
      <button class="card-button">Week 28</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week29.jpg' alt=""/>
    <p class="card-desc">At week 29, you might start to notice that Cute will respond if she sees, hears, or tastes something. 
                        You might feel some extra kicks in response to lights, sound, movement, or something you ate or drank.</p>
      <button class="card-button">Week 29</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week30.jpg' alt=""/>
    <p class="card-desc">Cute is putting on weight pretty quickly now, and as she forms more subcutaneous white fat, her skin will 
                         start to smooth out and become less wrinkly.</p>
      <button class="card-button">Week 30</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week31.jpg' alt=""/>
    <p class="card-desc">Week 31 means major development in Cute's brain and nervous system. You may notice increased movement as 
                         Cute tests out her five senses.</p>
      <button class="card-button">Week 31</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week32.jpg' alt=""/>
    <p class="card-desc">By week 32, Cute is now likely in her final position, which usually means facing head down. She is 
                         filling out even more and is getting ready to meet the world!</p>
      <button class="card-button">Week 32</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week33.jpg' alt=""/>
    <p class="card-desc">At week 33, Cute officially has her own immune system. But your antibodies continue to be passed 
                         on to your baby and are helping to prepare her for all of the germs in the outside world.</p>
      <button class="card-button">Week 33</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week34.jpg' alt=""/>
    <p class="card-desc">Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size.
      The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.</p>
      <button class="card-button">Week 34</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week35.jpg' alt=""/>
    <p class="card-desc">If you're expecting twins, you're probably starting to feel pretty uncomfortable as your babies press on 
                        your internal organs. As you get closer to your due date they will move down 
                        in your pelvis, which may make it more comfortable for you to breathe.</p>
      <button class="card-button">Week 35</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week36.jpg' alt=""/>
    <p class="card-desc">By week 36, Cute is running out of room to explore, but you will still 
                         be feeling regular kicks and hiccups. She has fully functioning kidneys now, and her liver can process waste.</p>
      <button class="card-button">Week 36</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week37.jpg' alt=""/>
    <p class="card-desc">At week 37, Cute is starting to lose the layers of lanugo and vernix caseosa that protected her skin in the 
                         womb, Underneath will be the smooth, lovely skin you've been imagining!</p>
      <button class="card-button">Week 37</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week38.jpg' alt=""/>
    <p class="card-desc">At week 38, Cute's eyes are ready to see the world and are already the color 
                         they will be at birth. If your baby is born with brown eyes, they will likely 
                         stay that color, but for babies born with blue or grey eyes, they may change 
                         color within the first 9 months.</p>
      <button class="card-button">Week 38</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week39.jpg' alt=""/>
    <p class="card-desc">Congratulations! At 39 weeks, you are now officially considered full-term. 
                         You and Cute are in the home stretch, and it's only a matter of time before
                         your labor begins. She has plenty of baby fat at this point and is moving 
                         closer and closer to the birth canal.</p>
      <button class="card-button">Week 39</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week40.jpg' alt=""/>
    <p class="card-desc">Hooray! It's the week of your due date! Cute could arrive any day now,
                         so you should be prepared with a hospital bag and any other items you will need during or after delivery.</p>
      <button class="card-button">Week 40</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week41.jpg' alt=""/>
    <p class="card-desc">If Cute is still hanging around, don't stress. Around 10 percent of babies are born after their due date,
                          and this probably just means your due date was off to begin with.</p>
      <button class="card-button">Week 41</button>
  </div>
  <div class="card">
    <img src='images/Pregnancybyweek/Week42.jpg' alt=""/>
    <p class="card-desc">If you haven't met Cute yet, you're now considered postterm, but don't worry!
                         This is still considered normal and your baby will be on the way very soon.</p>
      <button class="card-button">Week 42</button>
  </div>
</div>
      <Footer />
</>
    );
}

export default Pregnancybyweek;