import React from "react"
import { Button } from "antd-mobile"
import { BrowserRouterProps, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import styles from "./menu.module.scss"
import Cell from "./cell"
import { useSelector } from "react-redux"
import { selectNativeData } from "~/src/store/selectors"


const Menu: React.FC<BrowserRouterProps> = ({ children, window }) => {
  const nativeData = useSelector(selectNativeData)

  const navigate = useNavigate()



  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src="https://india100.oss-ap-south-1.aliyuncs.com/images/logo.png" />
        <span className={styles.title}>Amazon Magic Box</span>
      </div>

      <div className={styles.topBox}>
        <Button color='primary' className={styles.btn} fill='outline' onClick={() => {
          // navigate("/")
        }}>Operation Manual</Button>
      </div>

      <Cell title='怎么注册' imgs={[
        '/images/1/1.jpg',
        '/images/1/2.jpg',
      ]} />


      <Cell title='怎么找到自己的推广码' imgs={[
        '/images/2/1.jpg',
        '/images/2/2.jpg',
        '/images/2/3.jpg',
      ]} />
      <Cell title='怎么让我的下线去绑定推广码' imgs={[
        '/images/3/1.jpg',
        '/images/3/2.jpg',
        '/images/3/3.jpg',
      ]} />
      <Cell title='会员权益' imgs={[
        '/images/4/1.jpg',
        '/images/4/2.jpg',
        '/images/4/3.jpg',
        '/images/4/4.jpg',
      ]} />

      <Cell title='购买产品' imgs={[
        '/images/5/1.jpg',
        '/images/5/2.jpg',
        '/images/5/3.jpg',
        '/images/5/4.jpg',
      ]} />
      <Cell title='购买产品' type="video" imgs={[
        '/images/6/IMG_0335.MP4',
      ]} />

      <Cell title='怎么支付' imgs={[
        '/images/7/1.jpg',
        '/images/7/2.jpg',
        '/images/7/3.jpg',
        '/images/7/4.jpg',
        '/images/7/5.jpg',
        '/images/7/6.png',
      ]} />

      <Cell title='怎么提现' imgs={[
        '/images/8/1.jpg',
        '/images/8/2.jpg',
        '/images/8/3.jpg',
        '/images/8/4.jpg',
        '/images/8/5.jpg',
      ]} />

    </div >
  )
}

export default Menu