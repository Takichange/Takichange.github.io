// nav 配置, 即上方导航栏
// @ts-ignore
import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "前端",
    link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: "前端",
        link: "/web/",
      },
      {
        text: "Http",
        link: "/pages/1d1b92/",
      },
      {
        text: "Ajax",
        link: "/pages/43a79d/",
      },
      {
        text: "Node",
        link: "/pages/079821/",
      },
      {
        text: "MongoDB",
        link: "/pages/934d6e/",
      },
      {
        text: "Axios",
        link: "/pages/2135b2/",
      },
      {
        text: "Git",
        link: "/pages/06c08b/",
      },
      {
        text: "Webpack",
        link: "/pages/df6335/",
      },
      {
        text: "React",
        link: "/pages/50bb3f/",
      },
      {
        text: "Vue",
        link: "/pages/92b496/",
      },
      {
        text: "Uni-app",
        link: "/pages/bdbd49/",
      },
      {
        text: "性能优化",
        link: "/pages/01a636/",
      },
      {
        text: "移动端",
        link: "/pages/3b5bc6/",
      },
    ],
  },
  {
    text: "技术",
    link: "/skill/",
    items: [
      {
        text: "技术",
        link: "/skill/",
      },
      {
        text: "vue3学习记录",
        link: "/pages/f2223/",
      },
      {
        text: "TS学习记录",
        link: "/pages/fb23314/",
      },
    ],
  },
  {
    text: "UI",
    link: "/UI/",
    items: [
      {
        text: "UI",
        link: "/UI/",
      },
      {
        text: "单行多行文本超出隐藏解决方法",
        link: "/pages/43a79122/",
      },
    ],
  },
  {
    text: "收藏",
    link: "/collect/",
    items: [
      { text: "收藏", link: "/collect/" },
      { text: "实用网站", link: "/pages/beb6c0bd8a66cea6/" },
      { text: "资源库", link: "/pages/eee83a9211a70f9d/" },
      { text: "Vue专区", link: "/pages/12df8ace52d493f6/" },
    ],
  },
  {
    text: "随笔",
    link: "/pages/fb2914/",
    items: [
      {
        text: "你知道的越多，不知道的也就越多",
        link: "/pages/fb2914/",
      },
      {
        text: "拥抱生活，拥抱快乐",
        link: "/pages/cd8bde/",
      },
    ],
  },
  { text: "关于", link: "/about/" },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
];
