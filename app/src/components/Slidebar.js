import React from 'react'

import { useState } from 'react';
export default function Slidebar({ handlePlusClick, elementsCount }) {


  return (
    <div className=" slide">
      <div className=" slide1  start-0 text-white" >
        <div className='plus'><i
          className="fa-solid fa-plus"
          style={{
            border: "2px solid transparent",
            padding: "4px",
            fontSize: "30px",
            borderRadius: "5px",

            margin: "7px 5px 5px "
          }}
          onClick={handlePlusClick}
        /></div>
        <div>
          {Array(elementsCount).fill(0).map((_, index) => (
            <div key={index} className="name" style={{
              border: "2px solid transparent",
              padding: "5px 13px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              margin: "7px 5px 5px 5px ",
              marginBottom: "10px",
            }}>V</div>
          ))}

        </div>
      </div>
      <button class="btn  slide2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars" style={{ height: "4%", fontSize: "28px", marginTop: "4px" }}></i></button>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{backgroundColor:"rgba(255 255 255 / 24%)"}}>
        <div class="offcanvas-header">

          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" >
          <p>
            <div className='plus'><i
              className="fa-solid fa-plus"
              style={{
                border: "2px solid transparent",
                padding: "4px",
                fontSize: "30px",
                borderRadius: "5px",
                color:"white",
                margin: "7px 5px 5px "
              }}
              onClick={handlePlusClick}
            />
              {Array(elementsCount).fill(0).map((_, index) => (
                <div key={index} className="name" style={{
                  border: "2px solid transparent",
                  padding: "5px 13px",
                  borderRadius: "8px",
                  color:"white",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  margin: "7px 5px 5px 5px ",
                  marginBottom: "10px",
                }}>V</div>
              ))}
            </div></p>
        </div>
      </div>
    </div>



  );
}



