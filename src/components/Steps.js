import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {img} from './images'

export default function Steps() {
    const [data, setData]=useState()

    useEffect(() => {
        axios.get(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))

    }, [])

const filter_through=()=>{
    let sort_data= data.sort((a,b)=>(a.stepNumber - b.stepNumber))
    let map_the_data= sort_data.map(item=>{

        let is_it_there=item.versionContent.map(thing=>thing)
        if(is_it_there.length >2){
        return (
        <div className="filter_section" data-testid={`steps-${item.id}`} key={item.id}>
            <h3>0{item.stepNumber}</h3>
            <h4>{is_it_there[1].title}</h4>
            <p>{is_it_there[1].body} </p>
        </div>
        )}
        
        else {
            return (
                <div className="filter_section" data-testid={`steps-${item.id}`} key={item.id}>
                <h3>0{item.stepNumber}</h3>
                <h4>{is_it_there[0].title}</h4>
                <p>{is_it_there[0].body} </p>
            </div>
        )}

    })
    return map_the_data
}


    return (
        <>
        <section data-testid="steps-1" className="static section2">
        <div className="section2_centered" style={{ color: "bisque"}}>
<h2 className="how_it_works">New Collection</h2>
<div className="filter_container" style={{    display: "flex"}}>
    {/* {img.map(i=> <img src={i} style={{width:"200px", height:"280px" }}/>)} */}
    {img.map(i=> <div style={{width:"200px", height:"280px", background:"lightgrey" }}/>)}
</div>
        
        </div> 
      </section>

      <section data-testid="steps-1" className="static" 
      style={{
        //   top: "-539px", 
    //   background:"#10060b",
      background:"rgb(41 40 43);"
    }}
      >
        <div className="section2_centered" style={{color: "bisque"}}>
<h2 className="how_it_works">Our Products</h2>
<div className="filter_container sect3" style={{ gridTemplateColumns: "unset", width:"700px"}}>
    <div style={{display:"inline-flex", height:"150px"}}>
    <div
    style={{width: "250px",height: "330px",margin:"20px",position: "relative",
    left: "-131px",top: "-140px",  boxShadow: "#060606b0 0px 0px 23px -1px;", background:"gold"}}/>
    {/* <img src="./images/img_lamp2.jpg" 
    style={{width: "250px",height: "330px",margin:"20px",position: "relative",
    left: "-131px",top: "-140px",  boxShadow: "0px 0px 23px -1px black"}}/> */}

        <div style={{width:"500px", margin:"20px", textAlign:"left",
            position: "relative",
            left:" -143px",
            top:" -4px",
            height: "fit-content",
    }}>
            <h2>Fixtures</h2>
            <p>No matter what your personal style, Alaluxe has just the right light fixture for your living environment.
            Element brings extrodianry, distinctive and unique light fixtures. A collection that blends
            classic style with luxury quality.</p>
            <span>Shop Online</span>
            <hr/>
            </div>
    </div>

    <div style={{display:"inline-flex", height:"300px"}}>
        <div style={{width:"500px", margin:"20px", textAlign:"right"}}>
            <h2>Features</h2>
            <p>Our lights can add spiritual simplicity to your space, warm your living room or seperate two different areas in your 
                dining room. 
                </p>
                <span>Shop Online</span>
                <hr/>
                </div>

                <div style={{width: "250px",height: "330px",margin:"20px",  boxShadow: "#060606b0 0px 0px 23px -1px", background:"orangered"}}/>
                
        {/* <img src="./images/img_lamp3.jpg" style={{width: "250px",height: "330px",margin:"20px",  boxShadow: "0px 0px 23px -1px black"}}/> */}
    </div>

    <div style={{display:"inline-flex", height:"150px"}}>
    {/* <img src="./images/img_lamp4.jpg" style={{width: "250px",height: "330px",margin:"20px",position: "relative",
    left: "-131px",top: "-140px",     boxShadow: "0px 0px 23px -1px black"}}/> */}
    <div
    style={{width: "250px",height: "330px",margin:"20px",position: "relative",
    left: "-131px",top: "-95px",  boxShadow: "#060606b0 0px 0px 23px -1px;", background:"salmon"}}/>
        <div style={{width:"500px", margin:"20px", textAlign:"left",
    position: "relative",
    left:" -143px",
    top:" -4px",
    height: "fit-content"}}>
            <h2>Lighting</h2>
            <p>Our lights add character, warmth and value to any room n your house. We offer exceptional 
                lights that will help you enhance the look of your home. You can get wood floors that look siny and new, or you can buy 
                brand new light that looks like an antique.</p>
                <span>Shop Online</span>
                <hr/>
            
            </div>
    </div>

</div>
        
        </div> 
      </section>


      <section data-testid="steps-1" className="static" 
      style={{
          marginTop: "5%", 
      background:"#29282b"
    }}
      >
        <div className="section2_centered" style={{color: "bisque"}}>
<h2 className="how_it_works">Contact us</h2>
<form style={{boxShadow: "rgb(6 6 6 / 46%) 0px 0px 23px -1px", width: "500px",
    margin: "0 auto", padding: "5%"}}>
    <input placeholder="Name" style={{float:"left"}}/>
    <input placeholder="Email" style={{float:"right"}}/>
    <div>
    <textarea placeholder="Message" />
    <button className="btn-2">Submit</button>

    </div>
</form>
</div>
      </section>

        </>
    )
}
