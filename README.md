# antlr4_calculator

基于 [ANTLR4](https://www.antlr.org/) 的交互式四则运算计算器,支持变量赋值。同时也是 ANTLR4 JavaScript target 的一个最小入门示例:一个 `.g4` 语法定义、一个 Visitor 实现、一个 REPL 入口。

## 特性

- 整数四则运算:`+` `-` `*` `/`,支持括号与运算优先级
- 变量赋值与引用:`a = 5`
- 交互式 REPL:逐行输入,即时求值输出

## 环境要求

- Node.js ≥ 16
- Java ≥ 8(仅修改语法定义后重新生成解析器时需要,见下文)

## 快速开始

```bash
# 安装依赖(antlr4 JS runtime)
npm install

# 启动
npm start
```

`antlr/` 目录下已提交由 [Calculator.g4](Calculator.g4) 生成的词法/语法分析器代码,克隆后无需安装 Java、无需本地生成,装好依赖即可直接运行。

## 使用示例

```
> 1 + 2 * 3
7
> a = 5
> b = 2
> (a + b) * 2
14
> 193
193
```

## 修改语法后重新生成(可选)

只有当你修改了 [Calculator.g4](Calculator.g4) 时,才需要重新生成 `antlr/` 目录下的解析器代码,此时需要 Java 环境:

**方式一**:按 [ANTLR 官网](https://www.antlr.org/download.html)的安装说明把 `antlr4` 命令配置好(macOS/Linux 下通常是为 `antlr-4.x-complete.jar` 建一个别名),然后:

```bash
npm run generate
```

**方式二**:不想配置别名的话,直接下载 [ANTLR 的 complete jar](https://www.antlr.org/download.html) 用 `java -jar` 运行:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor Calculator.g4 -o antlr
```

## 项目结构

```
Calculator.g4            ANTLR 语法定义(核心,改语法后重新生成即可)
CalculatorVisitorImpl.js 遍历语法树并求值的 Visitor 实现
index.js                 REPL 入口:读入一行 → 词法/语法分析 → 求值
antlr/                   由 Calculator.g4 生成的解析器代码(已提交,克隆即可运行)
```

## License

[MIT](LICENSE)
