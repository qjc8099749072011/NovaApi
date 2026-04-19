/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useEffect, useState } from 'react';
import { API, showError } from '../../helpers';
import { marked } from 'marked';
import { Empty } from '@douyinfe/semi-ui';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';
import { useTranslation } from 'react-i18next';
import {
  Card,
  Typography,
  Tag,
  Divider,
  Banner,
  Button,
} from '@douyinfe/semi-ui';
import { IconGithubLogo, IconSend } from '@douyinfe/semi-icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const { t } = useTranslation();
  const [about, setAbout] = useState('');
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const currentYear = new Date().getFullYear();

  const displayAbout = async () => {
    setAbout(localStorage.getItem('about') || '');
    const res = await API.get('/api/about');
    const { success, message, data } = res.data;
    if (success) {
      let aboutContent = data;
      if (!data.startsWith('https://')) {
        aboutContent = marked.parse(data);
      }
      setAbout(aboutContent);
      localStorage.setItem('about', aboutContent);
    } else {
      showError(message);
      setAbout(t('加载关于内容失败...'));
    }
    setAboutLoaded(true);
  };

  useEffect(() => {
    displayAbout().then();
  }, []);

  const emptyStyle = {
    padding: '24px',
  };

  const customDescription = (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* NovaAPI 平台介绍 */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Title heading={2} style={{ marginBottom: 8 }}>
          🌟 NovaAPI
        </Title>
        <Paragraph
          style={{ fontSize: 16, color: 'var(--semi-color-text-1)', lineHeight: 1.8 }}
        >
          智能 AI API 聚合服务平台
        </Paragraph>
      </div>

      <Card
        title='🎯 平台简介'
        style={{ marginBottom: 16, textAlign: 'left' }}
      >
        <Paragraph style={{ lineHeight: 1.8 }}>
          NovaAPI 是一个专业的 AI API
          聚合服务平台，致力于为开发者提供简单、高效、稳定的人工智能接口服务。
          我们聚合了全球主流的 AI 大模型，通过统一的 API
          格式对外提供服务，让您无需对接多个供应商，一个接口即可调用所有模型。
        </Paragraph>
      </Card>

      <Card
        title='🤖 支持的模型'
        style={{ marginBottom: 16, textAlign: 'left' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Tag color='green' size='large'>OpenAI (GPT-4o, o1, o3)</Tag>
          <Tag color='orange' size='large'>Anthropic (Claude)</Tag>
          <Tag color='blue' size='large'>Google (Gemini)</Tag>
          <Tag color='purple' size='large'>智谱 (GLM)</Tag>
          <Tag color='cyan' size='large'>DeepSeek</Tag>
          <Tag color='violet' size='large'>Moonshot (Kimi)</Tag>
          <Tag color='teal' size='large'>阿里通义 (Qwen)</Tag>
          <Tag size='large'>Meta (Llama)</Tag>
          <Tag size='large'>Mistral</Tag>
          <Tag size='large'>百度文心</Tag>
          <Tag size='large'>讯飞星火</Tag>
          <Tag size='large'>xAI (Grok)</Tag>
        </div>
        <Paragraph
          type='tertiary'
          style={{ marginTop: 12, fontSize: 13 }}
        >
          以及更多模型持续接入中...
        </Paragraph>
      </Card>

      <Card
        title='✨ 平台特点'
        style={{ marginBottom: 16, textAlign: 'left' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            {
              icon: '🔗',
              title: '统一 API 接口',
              desc: '兼容 OpenAI API 格式，无缝迁移现有项目',
            },
            {
              icon: '💰',
              title: '按量计费',
              desc: '用多少付多少，无最低消费，价格透明',
            },
            {
              icon: '⚡',
              title: '高可用性',
              desc: '多节点负载均衡，自动故障转移，保障稳定',
            },
            {
              icon: '🛡️',
              title: '安全可靠',
              desc: 'HTTPS 加密传输，数据隐私保护',
            },
            {
              icon: '📊',
              title: '用量可视',
              desc: '详细的使用日志和费用统计',
            },
            {
              icon: '🔄',
              title: '模型丰富',
              desc: '持续接入最新模型，满足各类需求',
            },
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '8px 0' }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{item.icon}</div>
              <Text strong style={{ fontSize: 14 }}>{item.title}</Text>
              <br />
              <Text type='tertiary' style={{ fontSize: 13 }}>{item.desc}</Text>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title='📬 联系我们'
        style={{ marginBottom: 16, textAlign: 'left' }}
      >
        <Paragraph style={{ lineHeight: 2 }}>
          <Text strong>客服邮箱：</Text>
          <Text copyable style={{ color: 'var(--semi-color-primary)' }}>
            support@novaapi.cn
          </Text>
        </Paragraph>
        <Paragraph style={{ lineHeight: 2 }}>
          <Text strong>官方网站：</Text>
          <Text copyable style={{ color: 'var(--semi-color-primary)' }}>
            https://novaapi.cn
          </Text>
        </Paragraph>
        <Banner
          type='info'
          description='如遇到任何问题，欢迎通过邮件联系我们的技术支持团队，我们会在工作时间内尽快回复。'
          style={{ marginTop: 8 }}
        />
      </Card>

      <Divider />

      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <Text type='tertiary' style={{ fontSize: 13 }}>
          © {currentYear} NovaAPI — 智能 AI API 聚合服务平台
        </Text>
      </div>
    </div>
  );

  return (
    <div className='mt-[60px] px-2'>
      {aboutLoaded && about === '' ? (
        <div className='flex justify-center items-center h-screen p-8'>
          <Empty
            image={
              <IllustrationConstruction style={{ width: 150, height: 150 }} />
            }
            darkModeImage={
              <IllustrationConstructionDark
                style={{ width: 150, height: 150 }}
              />
            }
            description={t('管理员暂时未设置任何关于内容')}
            style={emptyStyle}
          >
            {customDescription}
          </Empty>
        </div>
      ) : (
        <>
          {about.startsWith('https://') ? (
            <iframe
              src={about}
              style={{ width: '100%', height: '100vh', border: 'none' }}
            />
          ) : (
            <div
              style={{ fontSize: 'larger' }}
              dangerouslySetInnerHTML={{ __html: about }}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default About;
