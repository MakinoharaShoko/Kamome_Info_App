import './links.css'
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Links = ()=>{
    return <div>
        <Typography>
            <Title>友情链接</Title>
            <Paragraph>
                <a href="http://ylinknest.top/" target="_blank" rel="noopener">ylink’s Nest</a>
            </Paragraph>
            <Paragraph>
                <a href="http://www.zhtsu.cn/" target="_blank" rel="noopener">zhisu</a>
            </Paragraph>
            <Paragraph>
                ……本人乃社交恐惧症患者，不要指望这里有多少友链，如果想加的话可以联系我……
            </Paragraph>
        </Typography>
    </div>
}

export default Links;