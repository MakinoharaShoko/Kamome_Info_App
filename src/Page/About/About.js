import './about.css'
import {Descriptions, Timeline} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';


const About = () => {
    return <div id={"about"}>
        <Descriptions title="Mahiru（真昼酱）" bordered>
            <Descriptions.Item label="Github"><a
                href="https://github.com/MakinoharaShoko">Mahiru</a></Descriptions.Item>
            <Descriptions.Item label="QQ / TIM">2511134465</Descriptions.Item>
            <Descriptions.Item label="电子邮箱">Mahiru_@outlook.com</Descriptions.Item>
            <Descriptions.Item label="兴趣/技术方向">
                前端开发，人机交互与体验设计方向<br/>
                JavaScript / TypeScript, React, Vue<br/>
                PS（主要做轻度修图以及平面设计）<br/>
                摆弄音乐设备（由于没钱已退坑）<br/>
                事二次元，Galgame 爱好者～(∠・ω&lt; )⌒★<br/>
            </Descriptions.Item>
            <Descriptions.Item label="教育经历">
                安徽大学（本科 211）——软件工程专业
            </Descriptions.Item>
            <Descriptions.Item label="当前状态">
                秋招 last day，知无不言<br/>
                  >>>  你在玩一种很新的东西
            </Descriptions.Item>
            <Descriptions.Item label="个人项目">
                <a href="https://github.com/MakinoharaShoko/WebGAL" target="_blank" rel="noopener">WebGAL</a>, 全新的网页端视觉小说引擎<br/>
                <a href="https://github.com/MakinoharaShoko/CloudLog.JS" target="_blank" rel="noopener">CloudLog</a>, JavaScript 日志工具，格式化输出 & 上传 & 在线可视化查看
            </Descriptions.Item>
        </Descriptions>
        <div style={{textAlign:'center',padding:'2em 0 2em 0',fontSize:'large',fontWeight:'bold'}}>个人经历</div>
        <Timeline mode="alternate" style={{padding: '20px 0 0 0'}}>
            <Timeline.Item>开始学习前端技术 2020-02-06</Timeline.Item>
            <Timeline.Item color="green">自制 Hexo 个人博客主题 2020-02-16</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
                持续学习前端技术
            </Timeline.Item>
            <Timeline.Item>加入安大通 2021-08</Timeline.Item>
            <Timeline.Item color="red">开始开发网页端 Galgame 引擎
                <a href="https://github.com/MakinoharaShoko/WebGAL" target="_blank" rel="noopener"> WebGAL </a>
                2021-09-15</Timeline.Item>
            <Timeline.Item>重写博客“关于”页面 2021-12-09</Timeline.Item>
            <Timeline.Item>开始开发 WebGAL 图形化编辑器 2022-1-17</Timeline.Item>
            <Timeline.Item color='red'>WebGAL 星标突破 1000 2022-6-08</Timeline.Item>
            <Timeline.Item>加入快手实习 2022-6-27</Timeline.Item>
            <Timeline.Item>加入腾讯实习 2022-8-23</Timeline.Item>
            <Timeline.Item>返校待业摆烂 2022-11-11</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
                继续学习，继续务实
            </Timeline.Item>
        </Timeline>
    </div>
}

export default About;
