"use client"
import React from "react";

import {SearchOutlined, TruckOutlined }  from "@ant-design/icons";
import UiForm from "../ui/form";
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
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
                                    <UiForm>
                                          <h1>jhfjdlkfjlasdfkasdf</h1>
                                          
                                          
                                          {/* <div style={{display: "flex" , alignItems:"center"}}>
                                                <Form.Item>
                                                <input type="text" placeholder="what would you like to do today?" style={{padding: "0.5rem", borderRadius: "0.5rem", width:"100%",textDecoration:""}}/>
                                          </Form.Item>
                                          <Form.Item>
                                                <button style={{padding: "0.5rem", borderRadius: "0.5rem", backgroundColor: "#f17228", color: "white"}}> <SearchOutlined/> find food</button>
                                          </Form.Item>

                                          </div> */}
                                          
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