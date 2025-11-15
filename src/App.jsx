import { useEffect } from 'react'
import { config } from './config'
import chinaPrcIcon from './CHINA_PRC.png'
import { FaBlog, FaCloud, FaCode } from 'react-icons/fa'
import './App.css'

function App() {
  // 更新页面标题和 meta 标签
  useEffect(() => {
    document.title = `${config.title} - ${config.subtitle}`
    
    // 更新 meta 标签
    const keywordsMeta = document.querySelector('meta[name="keywords"]')
    const descriptionMeta = document.querySelector('meta[name="description"]')
    
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', config.keywords)
    }
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', config.description)
    }
  }, [])

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  // 图标映射
  const iconMap = {
    blog: FaBlog,
    drive: FaCloud,
    api: FaCode
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561.43 168.09">
            <defs>
              <style>
                {`.cls-1 {
                  fill: none;
                  stroke: #231815;
                  stroke-miterlimit: 10;
                  stroke-width: 22px;
                }
                .kPPuwvOy_0{stroke-dasharray:218 220;stroke-dashoffset:219;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_1{stroke-dasharray:203 205;stroke-dashoffset:204;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_2{stroke-dasharray:71 73;stroke-dashoffset:72;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_3{stroke-dasharray:22 24;stroke-dashoffset:23;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_4{stroke-dasharray:71 73;stroke-dashoffset:72;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_5{stroke-dasharray:22 24;stroke-dashoffset:23;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_6{stroke-dasharray:156 158;stroke-dashoffset:157;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_7{stroke-dasharray:224 226;stroke-dashoffset:225;animation:kPPuwvOy_draw 2000ms ease forwards;}
                .kPPuwvOy_8{stroke-dasharray:52 54;stroke-dashoffset:53;animation:kPPuwvOy_draw 2000ms ease forwards;}
                @keyframes kPPuwvOy_draw{100%{stroke-dashoffset:0;}}`}
              </style>
            </defs>
            <path className="cls-1 kPPuwvOy_0" d="M109.74,112.83c-7.9,10.21-20.27,16.79-34.18,16.79-23.85,0-43.18-19.33-43.18-43.18s19.33-43.18,43.18-43.18c14.91,0,28.05,7.55,35.81,19.04"/>
            <path className="cls-1 kPPuwvOy_1" d="M141.54,136.85L180.01,45.25L182.11,45.25L224.46,136.85"/>
            <path className="cls-1 kPPuwvOy_2" d="M264.02,70.49L264.02,140.72"/>
            <path className="cls-1 kPPuwvOy_3" d="M264.02,35.11L264.02,56.3"/>
            <path className="cls-1 kPPuwvOy_4" d="M521.02,34.89L521.02,105.12"/>
            <path className="cls-1 kPPuwvOy_5" d="M521.02,120.02L521.02,141.2"/>
            <path className="cls-1 kPPuwvOy_6" d="M315.94,35.11L315.94,127.38L378.73,127.38"/>
            <path className="cls-1 kPPuwvOy_7" d="M472.72,45.25L403.73,45.25L403.73,129.38L474.59,129.38"/>
            <path className="cls-1 kPPuwvOy_8" d="M421.37,87.31L472.59,87.31"/>
          </svg>
        </div>
        <div className="title">梦醒花开</div>
        <div className="subtitle">"{config.subtitle}"</div>
        <div className="links">
          {config.links.map((link, index) => {
            const IconComponent = iconMap[link.icon] || null
            return (
              <div 
                key={index}
                className="link-item" 
                onClick={() => handleLinkClick(link.url)}
              >
                {IconComponent && <IconComponent className="link-icon" />}
                <span>{link.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="footer">
        <div>© 2025 {config.title} · All Rights Reserved</div>
        {config.icpLicense && (
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="icp-info"
          >
            <img src={chinaPrcIcon} alt="备案图标" className="icp-icon" />
            <span>备案号：{config.icpLicense}</span>
          </a>
        )}
      </div>
    </>
  )
}

export default App

