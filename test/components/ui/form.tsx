import { Ref } from "react";
import { Form } from "antd";

interface form{
      children: React.ReactNode
      

}

export default function UiForm({children}: form) {
      return (
            <div style={{
                  backgroundColor: "white",
                  width: "600px",
                  height: "150px",
                  borderRadius: "2rem",
                  alignItems: "center",
                  paddingRight:"20px"
            }}>
                  {children}

            </div>
      )
      
}