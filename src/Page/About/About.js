import './about.css'
import {Descriptions, Timeline} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';


const About = ()=>{
    return <div id={"about"}>
        <Descriptions title="Kamome" bordered>
            <Descriptions.Item label="Github"><a href="https://github.com/MakinoharaShoko">Kamome</a></Descriptions.Item>
            <Descriptions.Item label="QQ / TIM">2511134465</Descriptions.Item>
            <Descriptions.Item label="电子邮箱">fu_tianchen@outlook.com</Descriptions.Item>
            <Descriptions.Item label="兴趣/技术方向">
                前端<br/>
                JS,React<br/>
                摄影(也就是三脚猫功夫)<br/>
                PS (主要做轻度修图以及平面设计)<br/>
                摆弄音乐设备(由于没钱已退坑)
            </Descriptions.Item>
            <Descriptions.Item label="专业信息">
                安徽大学计算机科学与技术学院-软件工程
            </Descriptions.Item>
            <Descriptions.Item label="请详细阅读">
                此人患有轻度社交恐惧症，你不去联系他他是几乎不可能主动联系你的。
            </Descriptions.Item>
        </Descriptions>
        <Timeline mode="alternate" style={{padding:'20px 0 0 0'}}>
            <Timeline.Item>开始学习前端技术 2020-02-06</Timeline.Item>
            <Timeline.Item color="green">自制 Hexo 个人博客主题 2020-02-16</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                持续学习前端技术
            </Timeline.Item>
            <Timeline.Item>加入安大通 2021-08</Timeline.Item>
            <Timeline.Item color="red">开始开发网页端 Galgame 引擎
                <a href="https://github.com/MakinoharaShoko/WebGAL" target="_blank" rel="noopener"> WebGAL </a>
                2021-09-15</Timeline.Item>
            <Timeline.Item>重写博客“关于”页面 2021-12-09</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                继续学习，继续务实
            </Timeline.Item>
        </Timeline>
    </div>
}

export default About;