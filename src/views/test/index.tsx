import React, { FC } from "react"
import { Button } from "antd-mobile"
import { useNavigate } from "react-router"


const Home: FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate("/")}>首页</Button>
    </div>
  )
}

export default Home