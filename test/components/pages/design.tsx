"use client"
import React from "react";

import {SearchOutlined, TruckOutlined , LockOutlined}  from "@ant-design/icons";
import UiForm from "../ui/form";
import Link from "next/link";
import { Button, Flex } from "antd";
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
                              <UiButton onClick={() => {handleOpen}} color="orange">Add Food</UiButton>
                              
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
                        <h2>Featured Restaurant</h2>


                        {/* <div style={{
                              display: "flex", 
                              justifyContent: "space-between", 
                              alignItems: "center", 
                              padding: "1rem 0", 
                              borderBottom: "1px solid #ccc"
                        }}>
                              <Card>
                                    <img src="/sample.png" alt="Bow Lasagna" width={500} height={500} />
                              </Card>
                        </div>
                        
                        <div>
                              <Card>
                                    <img src="/sa.png" alt="Mixed Avocado Smoothy" width={500} height={500} />
                                    
                              </Card>
                              
                        </div> */}
                  </div>
            </div>
      );
};
export default DesignPage;