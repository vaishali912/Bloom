import React from 'react'
import "./Page.css"
export default function Page() {
    return (

        <div class="d-flex" style={{ height: "100vh" }}>
            <div class="p-6   flex-shrink-1 border-start" style={{ width: "30%" }}>
                <div className="chatbox d-flex">
                    <div ckassName="name" style={{
                        border: "2px solid transparent",
                        padding: "5px 13px",
                        borderRadius: "50%",
                        backgroundColor: "black",
                        margin: "7px 10px 6px 10px ",

                    }}>V</div>
                    <div>
                        <div >Name</div>
                    </div>
                </div>
            </div>
            <div class="p-2 w-100">
                <input ></input>
            </div>
        </div>

    )
}
