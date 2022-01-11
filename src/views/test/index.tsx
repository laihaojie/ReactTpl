import React, { FC } from "react"
import { Button } from "antd-mobile"
import { useNavigate } from "react-router"


const Home: FC = () => {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: "center", margin: 20, }}>
      <Button onClick={() => navigate(-1)}>首页</Button>
    </div>
  )
}

export default Home