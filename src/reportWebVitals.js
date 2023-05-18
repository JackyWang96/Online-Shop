
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


/*
我们导入了web-vitals库，并调用了其提供的几个函数。这些函数用于度量和报告网站的几个关键性能指标，它们的含义如下：

getCLS：衡量累积布局偏移（Cumulative Layout Shift）。这个指标可以帮助理解页面在加载过程中有多少意外的布局偏移。例如，如果一个正在读取的段落突然因为一个图片的加载而跳到了别的地方，这就是一个布局偏移。

getFID：衡量首次输入延迟（First Input Delay）。这个指标可以帮助理解用户首次交互（如点击按钮）到浏览器开始处理这个交互的时间。

getFCP：衡量首次内容绘制（First Contentful Paint）。这个指标可以帮助理解浏览器首次绘制任何文本，图像，非空白画布或SVG的时间。

getLCP：衡量最大内容绘制（Largest Contentful Paint）。这个指标可以帮助理解浏览器首次绘制最大图片或文本块的时间。

getTTFB：衡量首字节时间（Time to First Byte）。这个指标可以帮助理解浏览器首次接收到数据的时间。
 */
