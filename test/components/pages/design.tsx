"use client"
import React from "react";

import { Button, Card } from "antd";
import Link from "next/link";

const DesignPage = () => { 

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
                              <p>FoodWagon</p>
                              <Button>Add Food</Button>
                        </div>

                        <h1>Are You Starving?</h1>
                        <p>With just a few clicks, find nearby restaurants accessible to you.</p>
                  </div>

                  <div>

                  </div>

                  <div>
                        <h2>Featured Restaurant</h2>
                        <div style={{
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
                              <img src="/sa.png" alt="Mixed Avocado Smoothy" width={500} height={500} />
                        </div>
                  </div>
            </div>
      );
};
export default DesignPage;