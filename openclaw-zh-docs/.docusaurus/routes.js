import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '10c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/tags/公告',
    component: ComponentCreator('/blog/tags/公告', '126'),
    exact: true
  },
  {
    path: '/blog/tags/教程',
    component: ComponentCreator('/blog/tags/教程', '8cf'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd9c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '96b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '25a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '98b'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/',
                component: ComponentCreator('/docs/api/', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/',
                component: ComponentCreator('/docs/concepts/', '29a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/',
                component: ComponentCreator('/docs/configuration/', '180'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/',
                component: ComponentCreator('/docs/day-tutorial/', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-1',
                component: ComponentCreator('/docs/day-tutorial/day-1', '7ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-2',
                component: ComponentCreator('/docs/day-tutorial/day-2', '1a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-3',
                component: ComponentCreator('/docs/day-tutorial/day-3', '8f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-4',
                component: ComponentCreator('/docs/day-tutorial/day-4', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-5',
                component: ComponentCreator('/docs/day-tutorial/day-5', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-6',
                component: ComponentCreator('/docs/day-tutorial/day-6', '585'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day-tutorial/day-7',
                component: ComponentCreator('/docs/day-tutorial/day-7', 'de2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/',
                component: ComponentCreator('/docs/examples/', '4e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/home',
                component: ComponentCreator('/docs/home', 'e29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pricing',
                component: ComponentCreator('/docs/pricing', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/',
                component: ComponentCreator('/docs/quick-start/', 'c13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/skills/',
                component: ComponentCreator('/docs/skills/', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
