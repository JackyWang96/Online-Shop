# 基于 Node.js 官方镜像构建
FROM node:20.1.0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到容器中
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制构建输出到容器中
COPY build ./

EXPOSE 3000

CMD [ "npm", "start" ]
