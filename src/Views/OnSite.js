import React, {Component} from "react";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
class OnSite extends Component {
    render() {
        return (
            <div
                style={{
                backgroundImage: "url(" + myImage + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh"
            }}>

                <center>
                    <br/>
                    <br/>

                    <h1>
                        On Site
                    </h1>
                    <p1>
                        How long will you be onsite?</p1>
                    <br/>
                    <br/>
                    <input id="my-time" placeholder="Time (hh:mm)"/>
                    <br/>
                    <Button label="Confirm" onClick={this.toggleData}/>
                </center>
            </div>
        );
    }
}

export default OnSite;
