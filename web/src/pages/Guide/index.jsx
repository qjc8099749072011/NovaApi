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

import React from 'react';
import {
  Card,
  Typography,
  Banner,
  Tabs,
  TabPane,
  Collapse,
  Tag,
  Button,
  Divider,
} from '@douyinfe/semi-ui';
import {
  IconCode,
  IconHelpCircle,
  IconCoinMoneyStroked,
  IconKey,
  IconBolt,
  IconCopy,
  IconInfoCircle,
} from '@douyinfe/semi-icons';
import { useTranslation } from 'react-i18next';
import { showSuccess } from '../../helpers';

const { Title, Paragraph, Text } = Typography;

const CodeBlock = ({ code, language = 'bash' }) => {
  const { t } = useTranslation();
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    showSuccess(t('已复制到剪贴板'));
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--semi-color-bg-1)',
        border: '1px solid var(--semi-color-border)',
        borderRadius: 8,
        margin: '12px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 12px',
          backgroundColor: 'var(--semi-color-bg-2)',
          borderBottom: '1px solid var(--semi-color-border)',
        }}
      >
        <Text type='tertiary' size='small'>
          {language}
        </Text>
        <Button
          icon={<IconCopy />}
          size='small'
          theme='borderless'
          onClick={handleCopy}
        />
      </div>
      <pre
        style={{
          margin: 0,
          padding: '12px 16px',
          overflowX: 'auto',
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Guide = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{ maxWidth: 960, margin: '60px auto 40px', padding: '0 16px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Title heading={2} style={{ marginBottom: 8 }}>
          📖 NovaAPI 使用指南
        </Title>
        <Paragraph type='tertiary' style={{ fontSize: 16 }}>
          从零开始，快速上手 NovaAPI AI 聚合服务平台
        </Paragraph>
      </div>

      <Tabs
        type='button'
        size='large'
        style={{ marginBottom: 24 }}
        contentStyle={{
          paddingTop: 16,
          minHeight: 600,
        }}
      >
        {/* ===== 快速开始 ===== */}
        <TabPane
          tab={
            <span>
              <IconBolt style={{ marginRight: 4 }} />
              快速开始
            </span>
          }
          itemKey='quickstart'
        >
          <Card title='🚀 快速开始' style={{ marginBottom: 16 }}>
            <Paragraph style={{ fontSize: 15, lineHeight: 1.8 }}>
              只需三步，即可开始使用 NovaAPI 调用各种主流 AI 模型。
            </Paragraph>

            <Title heading={5} style={{ marginTop: 20 }}>
              第一步：注册账号
            </Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              1. 访问{' '}
              <Text copyable style={{ color: 'var(--semi-color-primary)' }}>
                https://novaapi.cn
              </Text>
              ，点击右上角「注册」按钮。
            </Paragraph>
            <Paragraph style={{ lineHeight: 1.8 }}>
              2. 填写用户名、密码和邮箱，完成注册。支持 GitHub、Discord
              等第三方账号快捷登录。
            </Paragraph>

            <Title heading={5} style={{ marginTop: 20 }}>
              第二步：充值余额
            </Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              注册成功后，进入「个人中心 → 钱包管理」页面进行充值。我们支持多种充值方式：
            </Paragraph>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>在线支付（支付宝、微信等）</li>
              <li>兑换码兑换（在「钱包管理」页面输入兑换码）</li>
            </ul>

            <Title heading={5} style={{ marginTop: 20 }}>
              第三步：创建令牌并调用 API
            </Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              进入「控制台 → 令牌管理」页面，创建一个新的 API 令牌。复制生成的令牌（格式类似
              <Text code>sk-xxx</Text>），即可开始调用 API。
            </Paragraph>

            <Banner
              type='info'
              description='新注册用户可能会获赠一定的免费额度，具体以平台公告为准。'
              style={{ marginTop: 16 }}
            />
          </Card>
        </TabPane>

        {/* ===== 充值说明 ===== */}
        <TabPane
          tab={
            <span>
              <IconCoinMoneyStroked style={{ marginRight: 4 }} />
              充值说明
            </span>
          }
          itemKey='topup'
        >
          <Card title='💰 充值说明' style={{ marginBottom: 16 }}>
            <Title heading={5}>在线充值</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              进入「个人中心 → 钱包管理」页面，选择充值金额，通过在线支付完成充值。充值到账通常为即时到账。
            </Paragraph>

            <Divider />

            <Title heading={5}>兑换码充值</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              如果您有兑换码，可以在「钱包管理」页面的兑换码输入框中输入，点击兑换即可。兑换码可从以下途径获取：
            </Paragraph>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>平台官方活动赠送</li>
              <li>合作伙伴发放</li>
              <li>社区福利活动</li>
            </ul>

            <Divider />

            <Title heading={5}>余额与计费</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              NovaAPI
              采用按量计费模式，根据您实际使用的 Token 数量（输入 +
              输出）进行扣费。不同模型的单价不同，您可以在「模型广场」页面查看各模型的详细价格。
            </Paragraph>

            <Banner
              type='warning'
              description='请注意保管您的 API 令牌，避免泄露导致余额被恶意消耗。如发现异常使用，请立即删除或禁用相关令牌。'
              style={{ marginTop: 16 }}
            />
          </Card>
        </TabPane>

        {/* ===== 创建令牌 ===== */}
        <TabPane
          tab={
            <span>
              <IconKey style={{ marginRight: 4 }} />
              创建令牌
            </span>
          }
          itemKey='token'
        >
          <Card title='🔑 创建令牌' style={{ marginBottom: 16 }}>
            <Title heading={5}>什么是 API 令牌？</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              API 令牌是您调用 NovaAPI
              接口的身份凭证，类似于密码。每个令牌以{' '}
              <Text code>sk-</Text> 开头。您可以创建多个令牌，分别用于不同的项目或场景。
            </Paragraph>

            <Divider />

            <Title heading={5}>创建步骤</Title>
            <ol style={{ paddingLeft: 20, lineHeight: 2.2 }}>
              <li>登录后，进入「控制台 → 令牌管理」页面</li>
              <li>点击「创建令牌」按钮</li>
              <li>填写令牌名称（用于标识用途，如"我的项目"）</li>
              <li>
                设置额度和过期时间（可选）
                <ul style={{ paddingLeft: 20 }}>
                  <li>
                    <Text strong>额度限制</Text>：设置该令牌可使用的最大金额
                  </li>
                  <li>
                    <Text strong>过期时间</Text>：设置令牌的有效期
                  </li>
                </ul>
              </li>
              <li>设置模型白名单（可选）：限制该令牌只能访问指定的模型</li>
              <li>设置 IP 白名单（可选）：限制该令牌只能从指定的 IP 访问</li>
              <li>点击确认，复制生成的令牌并妥善保管</li>
            </ol>

            <Divider />

            <Title heading={5}>安全建议</Title>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>
                不要将令牌提交到代码仓库（如 GitHub），建议使用环境变量存储
              </li>
              <li>为不同项目创建不同的令牌，便于管理和追踪</li>
              <li>设置合理的额度和过期时间，降低风险</li>
              <li>
                如怀疑令牌泄露，立即在「令牌管理」页面禁用或删除
              </li>
            </ul>

            <Banner
              type='warning'
              description='令牌创建后仅显示一次完整内容，请务必立即复制保存。之后只能查看前几位字符。'
              style={{ marginTop: 16 }}
            />
          </Card>
        </TabPane>

        {/* ===== API 调用 ===== */}
        <TabPane
          tab={
            <span>
              <IconCode style={{ marginRight: 4 }} />
              API 调用
            </span>
          }
          itemKey='api'
        >
          <Card title='💻 API 调用指南' style={{ marginBottom: 16 }}>
            <Paragraph style={{ lineHeight: 1.8 }}>
              NovaAPI 完全兼容 OpenAI API
              格式，您可以将现有项目中的 API Base URL 替换为
              NovaAPI 的地址，即可无缝切换。
            </Paragraph>

            <Title heading={5} style={{ marginTop: 20 }}>
              接口地址
            </Title>
            <CodeBlock code={`Base URL: https://novaapi.cn/v1`} language='text' />

            <Title heading={5} style={{ marginTop: 20 }}>
              cURL 调用示例
            </Title>
            <CodeBlock
              code={`curl https://novaapi.cn/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer sk-你的令牌" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "你是一个有帮助的助手。"},
      {"role": "user", "content": "你好！"}
    ]
  }'`}
              language='bash'
            />

            <Title heading={5} style={{ marginTop: 20 }}>
              Python 调用示例
            </Title>
            <CodeBlock
              code={`from openai import OpenAI

client = OpenAI(
    api_key="sk-你的令牌",
    base_url="https://novaapi.cn/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "你是一个有帮助的助手。"},
        {"role": "user", "content": "你好！"}
    ]
)

print(response.choices[0].message.content)`}
              language='python'
            />

            <Title heading={5} style={{ marginTop: 20 }}>
              Node.js 调用示例
            </Title>
            <CodeBlock
              code={`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-你的令牌',
  baseURL: 'https://novaapi.cn/v1',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: '你是一个有帮助的助手。' },
      { role: 'user', content: '你好！' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();`}
              language='javascript'
            />

            <Title heading={5} style={{ marginTop: 20 }}>
              流式调用示例（Python）
            </Title>
            <CodeBlock
              code={`from openai import OpenAI

client = OpenAI(
    api_key="sk-你的令牌",
    base_url="https://novaapi.cn/v1"
)

stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "写一首关于春天的诗"}
    ],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)`}
              language='python'
            />

            <Title heading={5} style={{ marginTop: 20 }}>
              常用接口列表
            </Title>
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginTop: 8,
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: 'var(--semi-color-bg-2)',
                      borderBottom: '2px solid var(--semi-color-border)',
                    }}
                  >
                    <th
                      style={{
                        padding: '10px 16px',
                        textAlign: 'left',
                        fontSize: 14,
                      }}
                    >
                      接口
                    </th>
                    <th
                      style={{
                        padding: '10px 16px',
                        textAlign: 'left',
                        fontSize: 14,
                      }}
                    >
                      路径
                    </th>
                    <th
                      style={{
                        padding: '10px 16px',
                        textAlign: 'left',
                        fontSize: 14,
                      }}
                    >
                      说明
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      'Chat Completions',
                      '/v1/chat/completions',
                      '对话补全（最常用）',
                    ],
                    ['Completions', '/v1/completions', '文本补全'],
                    ['Embeddings', '/v1/embeddings', '文本向量化'],
                    ['Models', '/v1/models', '获取可用模型列表'],
                    [
                      'Images',
                      '/v1/images/generations',
                      '图片生成',
                    ],
                    ['Audio/TTS', '/v1/audio/speech', '文字转语音'],
                    [
                      'Audio/STT',
                      '/v1/audio/transcriptions',
                      '语音转文字',
                    ],
                  ].map(([name, path, desc], idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--semi-color-border)',
                      }}
                    >
                      <td style={{ padding: '8px 16px', fontSize: 14 }}>
                        <Text strong>{name}</Text>
                      </td>
                      <td style={{ padding: '8px 16px', fontSize: 13 }}>
                        <Text code>{path}</Text>
                      </td>
                      <td style={{ padding: '8px 16px', fontSize: 14 }}>
                        {desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Banner
              type='info'
              description={
                <span>
                  更多接口详情请参考{' '}
                  <a
                    href='https://platform.openai.com/docs/api-reference'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: 'var(--semi-color-primary)' }}
                  >
                    OpenAI API 文档
                  </a>
                  ，NovaAPI 保持完全兼容。
                </span>
              }
              style={{ marginTop: 16 }}
            />
          </Card>
        </TabPane>

        {/* ===== 支持的模型 ===== */}
        <TabPane
          tab={
            <span>
              <IconInfoCircle style={{ marginRight: 4 }} />
              支持的模型
            </span>
          }
          itemKey='models'
        >
          <Card title='🌟 支持的模型' style={{ marginBottom: 16 }}>
            <Paragraph style={{ lineHeight: 1.8 }}>
              NovaAPI
              聚合了多家主流 AI 厂商的模型，统一通过 OpenAI
              兼容格式提供服务。以下是主要支持的模型系列：
            </Paragraph>

            {[
              {
                vendor: 'OpenAI',
                color: 'green',
                models: [
                  'gpt-4o / gpt-4o-mini',
                  'gpt-4-turbo / gpt-4',
                  'gpt-3.5-turbo',
                  'o1 / o1-mini / o3-mini',
                  'dall-e-3（图片生成）',
                  'tts-1 / whisper-1（语音合成/识别）',
                  'text-embedding-3-large / text-embedding-3-small',
                ],
              },
              {
                vendor: 'Anthropic (Claude)',
                color: 'orange',
                models: [
                  'claude-sonnet-4-20250514',
                  'claude-3-5-sonnet-20241022',
                  'claude-3-5-haiku-20241022',
                  'claude-3-opus-20240229',
                ],
              },
              {
                vendor: 'Google (Gemini)',
                color: 'blue',
                models: [
                  'gemini-2.5-pro-preview-05-06',
                  'gemini-2.5-flash-preview-05-20',
                  'gemini-2.0-flash',
                  'gemini-1.5-pro / gemini-1.5-flash',
                ],
              },
              {
                vendor: '智谱 (GLM)',
                color: 'purple',
                models: [
                  'glm-4-plus / glm-4-0520',
                  'glm-4-flash（免费模型）',
                  'glm-4v（多模态）',
                  'embedding-3',
                ],
              },
              {
                vendor: 'DeepSeek',
                color: 'cyan',
                models: [
                  'deepseek-chat（DeepSeek-V3）',
                  'deepseek-reasoner（DeepSeek-R1）',
                ],
              },
              {
                vendor: '月之暗面 (Moonshot)',
                color: 'violet',
                models: [
                  'moonshot-v1-8k / moonshot-v1-32k / moonshot-v1-128k',
                ],
              },
              {
                vendor: '阿里通义 (Qwen)',
                color: 'teal',
                models: [
                  'qwen-turbo / qwen-plus / qwen-max',
                  'qwen-vl（多模态）',
                ],
              },
              {
                vendor: '其他模型',
                color: 'grey',
                models: [
                  'Meta Llama 3 / 3.1 系列',
                  'Mistral 系列',
                  '百度文心一言',
                  '讯飞星火',
                  'xAI Grok 系列',
                  '更多模型持续接入中...',
                ],
              },
            ].map((group, idx) => (
              <Card
                key={idx}
                style={{ marginBottom: 12 }}
                bodyStyle={{ padding: '12px 16px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <Tag color={group.color} size='large'>
                    {group.vendor}
                  </Tag>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {group.models.map((model, mIdx) => (
                    <Tag key={mIdx} style={{ margin: 0 }}>
                      {model}
                    </Tag>
                  ))}
                </div>
              </Card>
            ))}

            <Banner
              type='info'
              description='完整模型列表和实时价格请查看「模型广场」页面。我们持续接入新的模型，满足您的多样化需求。'
              style={{ marginTop: 16 }}
            />
          </Card>
        </TabPane>

        {/* ===== 定价说明 ===== */}
        <TabPane
          tab={
            <span>
              <IconInfoCircle style={{ marginRight: 4 }} />
              定价说明
            </span>
          }
          itemKey='pricing'
        >
          <Card title='📋 定价说明' style={{ marginBottom: 16 }}>
            <Title heading={5}>计费方式</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              NovaAPI
              采用按量计费模式，根据您实际消耗的 Token
              数量进行扣费，无最低消费，用多少付多少。
            </Paragraph>

            <Divider />

            <Title heading={5}>什么是 Token？</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              Token 是模型处理文本的基本单位。通常来说，一个中文字约等于
              1-2 个 Token，一个英文单词约等于 1 个
              Token。每次请求消耗的 Token
              数量包括输入（Prompt）和输出（Completion）两部分。
            </Paragraph>

            <Divider />

            <Title heading={5}>定价规则</Title>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>
                <Text strong>输入 Token</Text> 和{' '}
                <Text strong>输出 Token</Text>{' '}
                价格可能不同（输出通常比输入贵）
              </li>
              <li>不同模型的单价差异较大，越强大的模型价格越高</li>
              <li>部分模型提供免费额度（如 glm-4-flash）</li>
              <li>
                图片生成、语音合成等多模态功能有独立的计费标准
              </li>
            </ul>

            <Divider />

            <Title heading={5}>如何查看价格</Title>
            <Paragraph style={{ lineHeight: 1.8 }}>
              在顶部导航栏点击「模型广场」，即可查看所有可用模型的详细价格信息。价格以每百万
              Token（1M Tokens）为单位展示。
            </Paragraph>

            <Banner
              type='info'
              description='我们会定期优化模型价格，为您提供更具性价比的服务。关注平台公告获取最新优惠信息。'
              style={{ marginTop: 16 }}
            />
          </Card>
        </TabPane>

        {/* ===== 常见问题 ===== */}
        <TabPane
          tab={
            <span>
              <IconHelpCircle style={{ marginRight: 4 }} />
              常见问题
            </span>
          }
          itemKey='faq'
        >
          <Card title='❓ 常见问题 (FAQ)' style={{ marginBottom: 16 }}>
            <Collapse accordion>
              <Collapse.Panel header='如何获取 API Key？' itemKey='q1'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  注册并登录后，进入「控制台 →
                  令牌管理」页面，点击「创建令牌」按钮即可生成
                  API Key。详细步骤请参考上方「创建令牌」标签页。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='API 兼容哪些格式？' itemKey='q2'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  NovaAPI 完全兼容 OpenAI API
                  格式。任何支持 OpenAI API 的客户端、SDK
                  或框架（如 LangChain、AutoGen 等）都可以直接使用，只需将
                  Base URL 替换为{' '}
                  <Text code>https://novaapi.cn/v1</Text>
                  ，并使用您的 NovaAPI 令牌即可。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='支持哪些编程语言？' itemKey='q3'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  所有编程语言均可通过 HTTP 请求调用。我们提供了
                  Python 和 Node.js
                  的示例代码。此外，任何支持 OpenAI SDK
                  的语言都可以直接使用，包括 Java、Go、Rust、PHP
                  等。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='余额不足怎么办？' itemKey='q4'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  当余额不足时，API
                  请求将返回错误。请及时在「钱包管理」页面充值。建议开启余额提醒，避免服务中断。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='如何查看用量明细？' itemKey='q5'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  进入「控制台 → 使用日志」页面，可以查看每次 API
                  调用的详细信息，包括使用的模型、Token
                  消耗量、费用等。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='响应速度慢怎么优化？' itemKey='q6'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  以下建议可能有助于提升响应速度：
                  <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                    <li>减少 Prompt 长度，精简输入内容</li>
                    <li>
                      选择更轻量的模型（如 gpt-4o-mini 替代 gpt-4o）
                    </li>
                    <li>
                      使用流式（Stream）模式，可以更快获得首个 Token
                    </li>
                    <li>适当降低 max_tokens 参数</li>
                  </ul>
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='支持流式输出吗？' itemKey='q7'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  支持！在请求中设置{' '}
                  <Text code>"stream": true</Text>{' '}
                  即可启用流式输出。所有主流模型均支持流式响应，适合聊天对话、实时生成等场景。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='如何联系客服？' itemKey='q8'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  如遇到任何问题，可以通过以下方式联系我们：
                  <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                    <li>发送邮件至：support@novaapi.cn</li>
                    <li>加入官方交流群（详见平台公告）</li>
                    <li>在「关于」页面查看更多联系方式</li>
                  </ul>
                  我们会在工作时间内尽快回复您的问题。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='Token 用量如何计算？' itemKey='q9'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  每次请求会消耗输入 Token（您发送的内容）和输出
                  Token（模型生成的内容）。具体消耗量取决于文本长度和模型类型。您可以在「使用日志」中查看每次请求的精确
                  Token 消耗。
                </Paragraph>
              </Collapse.Panel>

              <Collapse.Panel header='数据安全如何保障？' itemKey='q10'>
                <Paragraph style={{ lineHeight: 1.8 }}>
                  NovaAPI 严格保护用户数据安全：
                  <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                    <li>所有 API 通信均使用 HTTPS 加密传输</li>
                    <li>不会存储或记录用户的请求和响应内容</li>
                    <li>令牌信息加密存储，支持随时禁用和删除</li>
                    <li>遵守相关数据保护法规</li>
                  </ul>
                </Paragraph>
              </Collapse.Panel>
            </Collapse>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Guide;
