import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../ProductDetails/ProductDetails.css';

class ProductDetails extends React.Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Simply One Piece Dresses / Frocks Full Sleeves Girl PINK 9-12m",
                "src": [
                    'images/Products/ProductDetails/Product 1/1.png',
                    'images/Products/ProductDetails/Product 1/2.png',
                    'images/Products/ProductDetails/Product 1/3.png'
                ],
                "spe1"  : "Brand - Simply",
                "spe2": "Type - Dungaree Style Frock With Inner Tee", 
                "spe3":"Fabric - Knitted Cotton", 
                "spe4": "Tee Sleeves - Full Sleeves", 
                "spe5":"Tee Neck - Round Neck",
                "price" : 1800,
                "colors" : ["pink",],
                "count": 1
            },
            // {
            //     "_id": "2",
            //     "title": "Simply One Piece Dresses / Frocks Full Sleeves Girl PINK 9-12m",
            //     "src": [
            //         'images/Products/ProductDetails/Product 2/1.png',
            //         'images/Products/ProductDetails/Product 2/2.png',
            //         'images/Products/ProductDetails/Product 2/3.png'
            //     ],
            //     "spe1"  : "Brand - Simply",
            //     "spe2": "Type - Dungaree Style Frock With Inner Tee", 
            //     "spe3":"Fabric - Knitted Cotton", 
            //     "spe4": "Tee Sleeves - Full Sleeves", 
            //     "spe5":"Tee Neck - Round Neck",
            //     "price" : 1800,
            //     "colors" : ["pink",],
            //     "count": 1
            // }
        ],
        index:0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i<images.length; i++){
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
    }

    render(){
        const {products, index} = this.state;
        return(
            <>
            <Navbar />
            <div className="ProductDetails">
              {
                  products.map(item => (
                      <div className="Details" key={item._id}>
                          <div className="big-img">
                              <img src={item.src[index]} alt=""/>
                              <div className="thumb" ref={this.myRef}>
                                      {
                                          item.src.map((img, index) =>(
                                              <img src={img} alt="" key={index}
                                              onClick={() => this.handleTab(index)}/>
                                          ))
                                      }
                                  </div>
                              <button className="Detailscart btn btn-outline-success" type="submit">Add To Cart</button>
                          </div>

                          <div className="box">
                              <div className="row">
                                  <h2>{item.title}</h2>
                                  <div className="underlineItem"></div>
                                  <span>LKR{item.price}</span>
                              </div>

                              <div className="colors">
                              <p className="desTp">Color:</p>
                                  {
                                      item.colors.map((color, index) =>(
                                          <button style={{background: color}} className="btncolors" key={index}></button>
                                      ))
                                  }
                              </div>
                                  <p className="desTp">MATERIAL & CARE INFORMATION</p>
                                  <p>The Product Material is Cotton. It is a Machine washable with warm water and It should be dried with medium heat.</p>
                                  <p className="desTp">Product Description</p>
                                  <p className="des1">Specification:</p>
                                  <div className="detailsContent">
                                  <p>{item.spe1}</p>
                                  <p>{item.spe2}</p>
                                  <p>{item.spe3}</p>
                                  <p>{item.spe4}</p>
                                  <p>{item.spe5}</p>
                                  </div> 
                                  <p className="des1">Styling Tip : <span className="tip">Style with  a pair of bellies & hair accessories for a complete look.</span></p>       
                              
                          </div>
                      </div>
                  ))
              }
            </div>
            <Footer />
            </>
        );
    };
}
export default ProductDetails;

