import { DownOutline, RightOutline } from "antd-mobile-icons";
import React, { Fragment } from "react";
import { Player } from "video-react";
import styles from "./menu.module.scss"
import "video-react/dist/video-react.css";
interface IProps {
  title: string
  imgs: string[]
  type?: string
}

export default function Cell({ title, imgs, type }: IProps) {
  const [showContent, setShowContent] = React.useState(true)
  const player = React.useRef(null)
  const show = () => {
    setShowContent(showContent => !showContent)
  }

  return (
    <>
      <div className={styles.cell} onClick={show}>
        <div className={styles.title}>{title}</div>
        {
          showContent ?
            <DownOutline /> :
            <RightOutline />
        }
      </div>
      {
        showContent && <div className={styles.imgs}>
          {
            imgs.map((i, idx) => <Fragment key={idx} >
              {
                type == "video" ?
                  <div className={styles.video}>
                    <Player
                      ref={player}
                      autoPlay
                      fluid={false}
                      videoId="video-1">
                      <source src={i} />
                    </Player>
                  </div>
                  : //<video className={styles.video} src={i}></video>
                  <img className={styles.img} src={i} />
              }
            </Fragment>

            )
          }
        </div>
      }
    </>

  )
}