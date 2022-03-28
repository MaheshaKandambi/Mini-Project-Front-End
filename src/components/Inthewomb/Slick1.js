import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Inthewomb/Slick.css";
import { Link  } from "react-router-dom";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className='trime'>
        <h2 className="main-head2"> First Trimester</h2>
        <p className='first-info'>After fertilization and implantation, a baby is at first just an embryo: two layers of cells from which all the organs and body parts will <br/>
        develop. Growing quickly, your baby is soon about the size of a kidney bean and constantly moving. The heart is beating quickly <br/>
        and the intestines are forming. Your budding son or daughter's earlobes, eyelids, mouth, and nose are also taking shape.</p>
        <Slider {...settings}>
          <div>
            <Link to="/week1"  className='byweek'>
            <img src="images/Pregnancybyweek/1-week-pregnant.png" />
            <h4>Week 1</h4>
            </Link>
          </div>
          <div>
          <Link to="/week2"  className='byweek'>
          <img src="images/Pregnancybyweek/2-week-pregnant.png" />
            <h4>Week 2</h4>
            </Link>
          </div>
          <div>
          <Link to="/week3"  className='byweek'>
          <img src="images/Pregnancybyweek/3-week-pregnant.png" />
            <h4>Week 3</h4>
            </Link>
          </div>
          <div>
          <Link to="/week4"  className='byweek'>
          <img src="images/Pregnancybyweek/4-week-pregnant.png" />
            <h4>Week 4</h4>
            </Link>
          </div>
          <div>
          <Link to="/week5"  className='byweek'>
          <img src="images/Pregnancybyweek/5-week-pregnant.png" />
            <h4>Week 5</h4>
            </Link>
          </div>
          <div>
          <Link to="/week6"  className='byweek'>
          <img src="images/Pregnancybyweek/6-week-pregnant.png" />
            <h4>Week 6</h4>
            </Link>
          </div>
          <div>
          <Link to="/week7"  className='byweek'>
          <img src="images/Pregnancybyweek/7-week-pregnant.png" />
            <h4>Week 7</h4>
            </Link>
          </div>
          <div>
          <Link to="/week8"  className='byweek'>
          <img src="images/Pregnancybyweek/8-week-pregnant.png" />
            <h4>Week 8</h4>
            </Link>
          </div>
          <div>
          <Link to="/week9"  className='byweek'>
          <img src="images/Pregnancybyweek/9-week-pregnant.png" />
            <h4>Week 9</h4>
            </Link>
          </div>
          <div>
          <Link to="/week10"  className='byweek'>
          <img src="images/Pregnancybyweek/10-week-pregnant.png" />
            <h4>Week 10</h4>
            </Link>
          </div>
          <div>
          <Link to="/week11"  className='byweek'>
          <img src="images/Pregnancybyweek/11-week-pregnant.png" />
            <h4>Week 11</h4>
            </Link>
          </div>
          <div>
          <Link to="/week12"  className='byweek'>
          <img src="images/Pregnancybyweek/12-week-pregnant.png" />
            <h4>Week 12</h4>
            </Link>
          </div>
          <div>
          <Link to="/week13"  className='byweek'>
          <img src="images/Pregnancybyweek/13-week-pregnant.png" />
            <h4>Week 13</h4>
            </Link>
          </div>
        </Slider>
        </div>
       
        <div className='trime'>
        <h2 className="main-head2"> Second Trimester</h2>
        <p className='second-info'>At the beginning of the second trimester, babies are about 3 1/2 inches long and weigh about 1 1/2 ounces. Tiny, unique fingerprints are now <br/>
        in place, and the heart pumps 25 quarts of blood a day. As the weeks go by, your baby's skeleton starts to harden from rubbery <br/>
        cartilage to bone, and he or she develops the ability to hear. You're likely to feel kicks and flutters soon if you haven't already.</p>
        <Slider {...settings}>
          <div>
          <Link to="/week14"  className='byweek'>
            <img src="images/Pregnancybyweek/14-week-pregnant.png" />
            <h4>Week 14</h4>
            </Link>
          </div>
          <div>
          <Link to="/week15"  className='byweek'>
          <img src="images/Pregnancybyweek/15-week-pregnant.png" />
            <h4>Week 15</h4>
            </Link>
          </div>
          <div>
          <Link to="/week16"  className='byweek'>
          <img src="images/Pregnancybyweek/16-week-pregnant.png" />
            <h4>Week 16</h4>
            </Link>
          </div>
          <div>
          <Link to="/week17"  className='byweek'>
          <img src="images/Pregnancybyweek/17-week-pregnant.png" />
            <h4>Week 17</h4>
            </Link>
          </div>
          <div>
          <Link to="/week18"  className='byweek'>
          <img src="images/Pregnancybyweek/18-week-pregnant.png" />
            <h4>Week 18</h4>
            </Link>
          </div>
          <div>
          <Link to="/week19"  className='byweek'>
          <img src="images/Pregnancybyweek/19-week-pregnant.png" />
            <h4>Week 19</h4>
            </Link>
          </div>
          <div>
          <Link to="/week20"  className='byweek'>
          <img src="images/Pregnancybyweek/20-week-pregnant.png" />
            <h4>Week 20</h4>
            </Link>
          </div>
          <div>
          <Link to="/week21"  className='byweek'>
          <img src="images/Pregnancybyweek/21-week-pregnant.png" />
            <h4>Week 21</h4>
            </Link>
          </div>
          <div>
          <Link to="/week22"  className='byweek'>
          <img src="images/Pregnancybyweek/22-week-pregnant.png" />
            <h4>Week 22</h4>
            </Link>
          </div>
          <div>
          <Link to="/week23"  className='byweek'>
          <img src="images/Pregnancybyweek/23-week-pregnant.png" />
            <h4>Week 23</h4>
            </Link>
          </div>
          <div>
          <Link to="/week24"  className='byweek'>
          <img src="images/Pregnancybyweek/24-week-pregnant.png" />
            <h4>Week 24</h4>
            </Link>
          </div>
          <div>
          <Link to="/week25"  className='byweek'>
          <img src="images/Pregnancybyweek/25-week-pregnant.png" />
            <h4>Week 25</h4>
            </Link>
          </div>
          <div>
          <Link to="/week26"  className='byweek'>
          <img src="images/Pregnancybyweek/26-week-pregnant.png" />
            <h4>Week 26</h4>
            </Link>
          </div>
          <div>
          <Link to="/week27"  className='byweek'>
            <img src="images/Pregnancybyweek/27-week-pregnant.png" />
            <h4>Week 27</h4>
            </Link>
          </div>
        </Slider>
        </div>



        <div className='trime'>
        <h2 className="main-head2"> Third Trimester</h2>
        <p className='third-info'>Babies weigh about 2 1/4 pounds by the start of the third trimester. 
          They can blink their eyes, which now sport lashes. And their wrinkled <br/>
          skin is starting to smooth out as they put on baby fat. They're also 
          developing fingernails, toenails, and real hair (or at least some <br/> peach fuzz),
          and adding billions of neurons to their brain. Your blossoming baby will spend 
          his or her final weeks in  <br/>utero putting on weight. At full term, the average baby 
          is more than 19 inches long and weighs nearly 7 pounds.</p>
        <Slider {...settings}>
          <div>
          <Link to="/week28"  className='byweek'>
          <img src="images/Pregnancybyweek/28-week-pregnant.png" />
            <h4>Week 28</h4>
            </Link>
          </div>
          <div>
          <Link to="/week29"  className='byweek'>
          <img src="images/Pregnancybyweek/29-week-pregnant.png" />
            <h4>Week 29</h4>
            </Link>
          </div>
          <div>
          <Link to="/week30"  className='byweek'>
          <img src="images/Pregnancybyweek/30-week-pregnant.png" />
            <h4>Week 30</h4>
            </Link>
          </div>
          <div>
          <Link to="/week31"  className='byweek'>
          <img src="images/Pregnancybyweek/31-week-pregnant.png" />
            <h4>Week 31</h4>
            </Link>
          </div>
          <div>
          <Link to="/week32"  className='byweek'>
          <img src="images/Pregnancybyweek/32-week-pregnant.png" />
            <h4>Week 32</h4>
            </Link>
          </div>
          <div>
          <Link to="/week33"  className='byweek'>
          <img src="images/Pregnancybyweek/33-week-pregnant.png" />
            <h4>Week 33</h4>
            </Link>
          </div>
          <div>
          <Link to="/week34"  className='byweek'>
          <img src="images/Pregnancybyweek/34-week-pregnant.png" />
            <h4>Week 34</h4>
            </Link>
          </div>
          <div>
          <Link to="/week35"  className='byweek'>
          <img src="images/Pregnancybyweek/35-week-pregnant.png" />
            <h4>Week 35</h4>
            </Link>
          </div>
          <div>
          <Link to="/week36"  className='byweek'>
          <img src="images/Pregnancybyweek/36-week-pregnant.png" />
            <h4>Week 36</h4>
            </Link>
          </div>
          <div>
          <Link to="/week37"  className='byweek'>
          <img src="images/Pregnancybyweek/37-week-pregnant.png" />
            <h4>Week 37</h4>
            </Link>
          </div>
          <div>
          <Link to="/week38"  className='byweek'>
          <img src="images/Pregnancybyweek/38-week-pregnant.png" />
            <h4>Week 38</h4>
            </Link>
          </div>
          <div>
          <Link to="/week39"  className='byweek'>
          <img src="images/Pregnancybyweek/39-week-pregnant.png" />
            <h4>Week 39</h4>
            </Link>
          </div>
          <div>
          <Link to="/week40"  className='byweek'>
          <img src="images/Pregnancybyweek/40-week-pregnant.png" />
            <h4>Week 40</h4>
            </Link>
          </div>
          <div>
          <Link to="/week41"  className='byweek'>
          <img src="images/Pregnancybyweek/41-week-pregnant.png" />
            <h4>Week 41</h4>
            </Link>
          </div>
          <div>
          <Link to="/week42"  className='byweek'>
          <img src="images/Pregnancybyweek/42-week-pregnant.png" />
            <h4>Week 42</h4>
            </Link>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}