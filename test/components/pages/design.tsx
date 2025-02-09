"use client"
import React from "react";

import {SearchOutlined, TruckOutlined , LockOutlined}  from "@ant-design/icons";
import UiForm from "../ui/form";
import Link from "next/link";
import { Button, Flex ,Card} from "antd";
import Image from "next/image";
import UiButton from "../ui/button";
import { useState } from "react";


const DesignPage = () => { 
      const [visible, setVisible] = useState(false)

      const handleOpen = () => { 
            setVisible(true)

      }
      const handleDeliver = () => {
            
      }
      const handleloadMore = () => { }

      return (
            <div>
                  <div>
                        <div style={{
                              display: "flex", 
                              justifyContent: "space-between", 
                              alignItems: "center", 
                              padding: "1rem 0", 
                              borderBottom: "1px solid #ccc"
                        }}>
                                <div style={{display: "flex", alignItems: "center"}}>
                                <TruckOutlined style={{ fontSize: "30px", color: "#f17228", paddingRight:"10px" }} />
                                <p style={{
                                          color: 'orange',
                                          fontSize: '2rem',
                                          
                                }}><span style={{color:"#f17228"}}>Food</span><span style={{color:"#ffb30e"}}>Wagon</span></p>
                                </div>
                              <UiButton onClick={() => {handleOpen}}style={{color:"white"}} >Add Food</UiButton>
                              
                        </div>
                        <div style={{backgroundColor: "orange", padding: "1rem", borderRadius: "1rem", color: "white"}}>
                              <h1>Are You Starving?</h1>
                              <p>With just a few clicks, find nearby restaurants accessible to you.</p>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
                                    <UiForm>
                                          <div style={{ }}> 
                                                <div style={{display:"flex", justifyContent:"start", alignItems:"center"}}>
                                                      <UiButton style={{backgroundColor:"#fef1e9" ,color:"#f17228"} } onClick={handleDeliver}>Delivery</UiButton>
                                                      <LockOutlined style={{color:"black"}} />
                                                      <p style={{color: "balck"}}>Pick Up</p>
                                                </div>
                                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                                      <input type="text" placeholder="what would you like to do today?" style={{padding: "0.25rem", borderRadius: "0.5rem"}}/>
                                                      <UiButton style={{padding: "0.5rem", borderRadius: "0.5rem", backgroundColor: "#f17228", color: "white"}} onClick={handleOpen}> <SearchOutlined/> find food</UiButton>
                                                </div>
                                                
                                          </div>
                                          
                                    </UiForm>
                                
                                    <img src="/found.avif" alt="food" width={200} height={200} />
                              </div>
                              

                        </div>
                       
                  </div>

                  <div>

                  </div>

                  <div>
                        <div style={{textAlign: "center", padding: "1rem"}}>
                              <h2>Featured Restaurant</h2>
                        </div>
                        


                        <div style={{
                              display: "flex", 
                              flexDirection: "column",
                              borderBottom: "1px solid #ccc",
                              gap: "1rem",
                              alignItems: "center"
                        }}>
                              <div style={{display: "flex", justifyContent: "space-between" , gap: "1rem"}}>
                                    <Card ><img src="/sample.png" alt="Bow Lasagna" width={200} height={200} /></Card>
                                    <Card><img src="/sa.png" alt="Mixed Avocado Smoothy" width={200} height={200} /></Card>
                                    <Card><img src="pic3.avif" alt="pancake" width={200} height={200} /></Card>
                                    <Card><img src="pic4.jpg" alt="capcake" width={200} height={200} /></Card>
                              </div>
                        
                              
                              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem"}}>
                                    <Card><img src="pic5.jpg" alt="creamy stake" width={200} height={200} /></Card>
                                    <Card><img src="pic6.jpg" alt="stake with potatos" width={200} height={200} /></Card>
                                    <Card><img src="pic7.png" alt="indian spicy food" width={200} height={200} /></Card>
                                    <Card><img src="pic8.jpg" alt="stake omelet" width={200} height={200} /></Card>

                              </div>
                              <div>
                                    <UiButton style={{backgroundColor:"#f17228", color:"white", width:"100px"}} onClick={handleloadMore}>load More</UiButton>
                              </div>
                              
                              
                        </div>
                  </div>
            </div>
      );
};
export default DesignPage;