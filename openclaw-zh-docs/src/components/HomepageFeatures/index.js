import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const Features = [
  {
    title: '5分钟快速上手',
    description: '无需复杂配置，几分钟内启动你的第一个AI助手',
    icon: '⚡',
    color: '#6366f1',
  },
  {
    title: '智能记忆系统',
    description: 'AI助手拥有长期记忆能力，越用越懂你',
    icon: '🧠',
    color: '#8b5cf6',
  },
  {
    title: '丰富的技能库',
    description: '从 ClawHub 安装现成技能，扩展无限可能',
    icon: '🎨',
    color: '#ec4899',
  },
  {
    title: '多平台支持',
    description: 'Telegram、Discord、微信等多个聊天平台一键集成',
    icon: '💬',
    color: '#14b8a6',
  },
  {
    title: '强大的自动化',
    description: '定时任务、工作流自动化，让AI帮你工作',
    icon: '🤖',
    color: '#f59e0b',
  },
  {
    title: '安全可靠',
    description: '本地运行，数据完全掌控，企业级安全保障',
    icon: '🔒',
    color: '#10b981',
  },
];

const TutorialDays = [
  {
    day: 1,
    title: '快速入门',
    subtitle: '安装配置',
    goals: ['安装OpenClaw', '理解核心概念', '运行第一个助手'],
    icon: '🚀',
    color: 'from-blue-500 to-blue-600',
  },
  {
    day: 2,
    title: '基础配置',
    subtitle: '模型配置',
    goals: ['配置AI模型', '设置消息通道', '高级对话配置'],
    icon: '⚙️',
    color: 'from-purple-500 to-purple-600',
  },
  {
    day: 3,
    title: '工具和技能',
    subtitle: '功能扩展',
    goals: ['使用内置工具', '安装管理技能', '创建自动化任务'],
    icon: '🛠️',
    color: 'from-pink-500 to-pink-600',
  },
  {
    day: 4,
    title: '记忆和上下文',
    subtitle: '智能记忆',
    goals: ['理解记忆系统', '配置长期记忆', '上下文管理'],
    icon: '🧠',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    day: 5,
    title: '自动化和任务',
    subtitle: '工作自动化',
    goals: ['定时任务设置', '任务调度系统', '提醒功能'],
    icon: '⏰',
    color: 'from-orange-500 to-orange-600',
  },
  {
    day: 6,
    title: '实战案例',
    subtitle: '应用实战',
    goals: ['电商数据分析', '内容生成自动化', '工作流构建'],
    icon: '💼',
    color: 'from-teal-500 to-teal-600',
  },
  {
    day: 7,
    title: '进阶开发',
    subtitle: '高级应用',
    goals: ['自定义技能开发', 'API集成', '部署维护'],
    icon: '🎓',
    color: 'from-red-500 to-red-600',
  },
];

const Stats = [
  { value: '50+', label: '内置工具', icon: '🔧' },
  { value: '100+', label: '社区技能', icon: '🎨' },
  { value: '10+', label: '支持平台', icon: '💬' },
  { value: '100K+', label: '活跃用户', icon: '👥' },
];

const UseCases = [
  {
    title: '电商运营',
    description: '自动化数据分析、营销内容生成、竞品监控',
    icon: '🛒',
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: '内容创作',
    description: '文案撰写、图像生成、视频脚本创作',
    icon: '✍️',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: '开发助手',
    description: '代码生成、bug修复、代码审查自动化',
    icon: '💻',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: '个人助理',
    description: '日程管理、邮件处理、提醒事项',
    icon: '📅',
    color: 'from-green-500 to-emerald-500',
  },
];

function Feature({ title, description, icon, color }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon} style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}>
        <span style={{ fontSize: '2.5rem' }}>{icon}</span>
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function TutorialDayCard({ day, title, subtitle, goals, icon, color }) {
  return (
    <div className={styles.dayCard}>
      <div className={styles.dayHeader}>
        <div className={styles.dayNumber}>Day {day}</div>
        <div className={styles.dayIcon}>{icon}</div>
      </div>
      <div className={styles.dayBody}>
        <Heading as="h3">{title}</Heading>
        <p className={styles.daySubtitle}>{subtitle}</p>
        <ul className={styles.goalsList}>
          {goals.map((goal, idx) => (
            <li key={idx}>
              <span className={styles.goalIcon}>✓</span>
              {goal}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.dayFooter}>
        <Link to={`/docs/7-day-tutorial/day-${day}`} className={styles.dayLink}>
          开始学习
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function UseCaseCard({ title, description, icon, color }) {
  return (
    <div className={styles.useCaseCard}>
      <div className={styles.useCaseIcon} style={{ background: `linear-gradient(135deg, ${color})` }}>
        <span style={{ fontSize: '2rem' }}>{icon}</span>
      </div>
      <Heading as="h4">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* Hero 区域增强 */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1 className={styles.heroTitle}>
                智能AI助手
                <span className={styles.heroHighlight}> 轻松上手</span>
              </h1>
              <p className={styles.heroSubtitle}>
                OpenClaw 是一个强大的 AI 助手框架，
                让你轻松创建和管理智能助手。
              </p>
              <div className={styles.heroButtons}>
                <Link className="button button--primary button--lg" to="/docs/7-day-tutorial/index">
                  开始七日学习之旅 🚀
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/home">
                  查看文档 📖
                </Link>
              </div>
              {/* 统计数据 */}
              <div className={styles.statsSection}>
                {Stats.map((stat, idx) => (
                  <StatCard key={idx} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心特性 */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <Heading as="h2" className={styles.sectionTitle}>
                为什么选择 OpenClaw
              </Heading>
              <p className={styles.sectionSubtitle}>
                六大核心优势，让AI助你轻松工作
              </p>
            </div>
          </div>
          <div className="row">
            {Features.map((feature, idx) => (
              <div key={idx} className="col col--4">
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 七天教程 */}
      <section className={styles.tutorialSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.sectionHeader}>
                <Heading as="h2" className={styles.sectionTitle}>
                  七天入门教程
                </Heading>
                <p className={styles.sectionSubtitle}>
                  从零开始，七天掌握 OpenClaw 核心技能
                </p>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>🎯</span>
                  适合所有水平的学习者
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {TutorialDays.map((day) => (
              <div key={day.day} className="col col--4">
                <TutorialDayCard {...day} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className={styles.useCasesSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <Heading as="h2" className={styles.sectionTitle}>
                丰富的应用场景
              </Heading>
              <p className={styles.sectionSubtitle}>
                无论你是开发者、运营者还是创作者，都有适合你的解决方案
              </p>
            </div>
          </div>
          <div className="row">
            {UseCases.map((useCase, idx) => (
              <div key={idx} className="col col--3">
                <UseCaseCard {...useCase} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 社区与支持 */}
      <section className={styles.communitySection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <Heading as="h2" className={styles.sectionTitle}>
                加入我们的社区
              </Heading>
              <p className={styles.sectionSubtitle}>
                与全球开发者一起学习、分享、成长
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--4">
              <Link to="https://discord.gg/clawd" className={styles.communityCard}>
                <div className={styles.communityIcon}>💬</div>
                <Heading as="h3">Discord 社区</Heading>
                <p>实时交流讨论，获取帮助</p>
              </Link>
            </div>
            <div className="col col--4">
              <Link to="https://github.com/openclaw/openclaw" className={styles.communityCard}>
                <div className={styles.communityIcon}>🐛</div>
                <Heading as="h3">GitHub</Heading>
                <p>开源贡献，提交问题</p>
              </Link>
            </div>
            <div className="col col--4">
              <Link to="https://docs.openclaw.ai" className={styles.communityCard}>
                <div className={styles.communityIcon}>📖</div>
                <Heading as="h3">官方文档</Heading>
                <p>完整技术文档和API</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.ctaCard}>
                <Heading as="h2">
                  准备好开始了吗？
                </Heading>
                <p>
                  立即加入 OpenClaw 社区，开启你的AI助手之旅
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/7-day-tutorial/index"
                  >
                  开始学习 🚀
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
