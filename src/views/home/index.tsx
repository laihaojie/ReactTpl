import { Button } from "antd-mobile"
import React, { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import { BrowserRouterProps, useNavigate } from "react-router-dom"
import { selectNativeData } from "~/src/store/selectors"


import style from "./index.module.scss"



const Home: FC<BrowserRouterProps> = function ({ }) {

  const navigate = useNavigate()
  // redux 数据
  const nativeData = useSelector(selectNativeData)

  return (
    <>
      <div className={style.header}>
        <div>{nativeData}</div>
        <Button onClick={() => navigate("/test")}>Test</Button>
      </div >
    </>
  )
}


export default Home