import { Button } from "antd-mobile"
import React, { FC, useEffect } from "react"
import { BrowserRouterProps, useNavigate } from "react-router-dom"


import style from "./index.module.scss"



const Home: FC<BrowserRouterProps> = function ({ }) {

  const navigate = useNavigate()

  return (
    <>
      <div className={style.header}>
        <Button onClick={() => navigate("/test")}>Test</Button>
      </div >
    </>
  )
}


export default Home