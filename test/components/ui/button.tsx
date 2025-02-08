import React, { Children } from "react";
import { Button, Card } from "antd";
interface button{
      color: string,
      onClick: () => void,
      children: React.ReactNode
      }
      


export default function UiButton({onClick, children}: button) { 
    

      return (
            <div style={{
                  backgroundColor: "orange",
                  textAlign: "center",
                  padding: "1rem",
                  borderRadius: "1rem",
                  color: "white",

            }}> 
                  
            {children}

            </div>
            
      )

}