"use client"
import React from "react";

import {TruckOutlined }  from "@ant-design/icons";
import { Card, Modal } from "antd";
import Link from "next/link";
import Image from "next/image";
import UiButton from "../ui/button";
import { useState } from "react";


const DesignPage = () => { 
      const [visible, setVisible] = useState(false)

      const handleOpen = () => { 
            setVisible(true)

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
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Modal>
                                          
                                    </Modal>
                                
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