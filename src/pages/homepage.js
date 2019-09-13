import React, { Component } from 'react';


export default class HomePage extends Component {
    render() {
        return (
            <div id="homepage">
                <div className="container">
                   
                    <div className="row ai">
                        <div className="col-xl-7">
                            <img src="https://try.handl.ai/static/demo/aabb/appartment.jpg" alt="" id="photo" className="ai-image" />
                        </div>
                        <div className="col-xl-4">
                            <div className="ai-box">
                                <div className="ai-box-title">
                                    <h2> Mark objects seen in the image</h2>
                                </div>
                                <div className="ai-box-description">
                                    <p>
                                        Mark each object with an appropriate label using a bounding box tool. if nothing fits, click the button for that.
                                    </p>
                                </div>
                                <div className="ai-box-list">
                                   <form action="/">
                                       <div className="selected">
                                           <a href="#" data-role="tab">1.Girl</a>
                                       </div>
                                       <div className="selected">
                                           <a href="#" data-role="tab">2.Fire</a>
                                       </div>
                                       <div className="selected">
                                           <a href="#" data-role="tab">3.Window</a>
                                       </div>
                                   </form>
                                   
                                    
                                </div>
                                <div className="ai-box-steps">
                                    <button type="submit" className="complete">Complete</button>
                                    <button className="cancle">No objects</button>
                                </div>
                                <div className="ai-box-next">
                                    <button className="skip">
                                        skip
                                    </button>
                                    <p>the result :  <span id="idchanged">YOU SELECT!</span></p>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}