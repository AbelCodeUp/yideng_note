1、css
  双飞翼: emment 过渡模式 支持IE
          （1）主要是 float 负边距

2、box:旧
  flex:新

3、css核心
  弹性盒模型

4、css HINT   HINT.css库csshint  CSS LINT  检查css规范
  少用float
  少用字号
  0不加单位
  少用web字体
  id不用作 样式选择器

5、BFC(块级元素) IFC(行内元素) GFC(grid Layer) FFC（flex)

  BFC渲染:

    生成方式：
      1、float 不为none
      2、position为absolute或fixed
      3、display为inline-block,table-cell,flex,inline-flex
      4、overflow不为visible
      5、根元素（html）


      Box: css基本单位
        display:box 设置为块级元素
        block-level box 块级别的盒

      生成BFC：（会让内部元素参与计算）
        加overflow:hidden
      清除浮动：
        加了overflow:hidden后 生成 BFC后 ，内部浮动元素也会计算高度
      防止垂直 margin 重叠
        隔离同级的元素（外层加个div 设置overflow:hidden）

    ****每个BFC之间是不重叠的，相互独立的。


6、css分层

CSS 分层
分层是为了可扩展性，性能的提高和代码的组织管理

SMACSS
    SMACSS(Scalable and Modular Architecture for CSS 可扩展的模块化架构的CSS)
    像OOCSS一样以减少重复样式为基础。
    然而SMACSS使用一套五个层次来划分CSS给项目带来更结构化的方法：
    Base -设定标签元素的预设值 PS:html {} input[type=text] {}
    Layout -整个网站的「大架构」的外观 PS:#header { margin: 30px 0; }
    Module -应用在不同页面公共模块 PS:.button{}
    State -定义元素不同的状态 PS:.nav–main { .active {} }
    Theme - 画面上所有「主视觉」的定义 PS: border-color、background-image
    修饰符使用的是–，子模块使用__符号。

BEM
    BEM和SMACCS非常类似，主要用来如何给项目命名。
    一个简单命名更容易让别人一起工作。
    比如选项卡导航是一个块(Block)，这个块里的元素的是其中标签之一(Element)，
    而当前选项卡是一个修饰状态(Modifier)：
    block -代表了更高级别的抽象或组件
    block__element -代表.block的后代，用于形成一个完整的.block的整体。
    .block–modifier -代表.block的不同状态或不同版本。
    修饰符使用的是_，子模块使用–符号。(不用一个-的原因是CSS单词连接)

SUIT
    Suit起源于BEM，但是它对组件名使用驼峰式和连字号把组件从他们的修饰和子孙后代中区分出来：
    修饰符使用的是—，子模块使用–符号。(不用一个-的原因是CSS单词连接)
    如果你不想使用如此严格或者复杂的命名规则，给每一个选择器加前缀同样可以达到这样的效果。

    .s-product-details {}
    .t-product-details {}
    .js-product-details {}

    结构属性将会被应用到s-product-details选择器中。
    主题属性将应用于t-product-details选择器。

ACSS
    原子css，相当于把各个属性拆成一个个class
    考虑如何设计一个系统的接口。原子(Atoms)是创建一个区块的最基本的特质，
    比如说表单按钮。分子(Molecules)是很多个原子(Atoms)的组合，
    比如说一个表单中包括了一个标签，输入框和按钮。
    生物(Organisms)是众多分子(Molecules)的组合物，比如一个网站的顶部区域，
    他包括了网站的标题、导航等。而模板(Templates)又是众多生物(Organisms)的结合体。
    比如一个网站页面的布局。而最后的页面就是特殊的模板。
ITCSS
    ITCSS——“倒三角形CSS”是一种新的方法论。它将整个CSS项目想象成一个分层的、倒置的三角形。这个分层图形表示了一个能帮你以最有效、最节约的方式组织CSS的模型。
    在ITCSS中，每一层都是上一层的逻辑递进。它变得更加明确、有目的性，并缩小了选择器的使用范围。由于我们写CSS是在之前的基础上添加，这意外着我们的CSS本质上更容易扩展。我们不必浪费时间撤销或重写以前的CSS。
    这也意味着，每个元素，以及每一种类型的元素，都有它自己的一致、可预测的地方。这使得查找和添加样式要简单得多。 ITCSS，默认情况下，有以下7层。

    1.Settings — 该层包含了项目中的所有全局设置（如基本字体大小、颜色调色板、配置等）。
    $color-ui: #BADA55; $spacing-unit:10px
    2.Tools — 该层包含了全局可用的工具–即混入和函数。全局工具的例子有梯度混入、字体大小混入等。
    @mixin font-color() {font-color: $color-ui;}
    3.Generic — 该层是第一个实际产生CSS的层。它很少改动，并且通常在不同项目中保持不变。它包括像Normalize. css、全局盒子大小规则、CSS重置等。
    Normalize, resets, box-sizing: border-box;
    4.Base — 该层只包含没有样式的html元素选择器。
    ul {list-style: square outside;}
    5.Objects — 该层是第一个包含了基于类的选择器的层。
    .ui-list__item {padding: $spacing-unit;}
    6.Components — 设计符合你们的组件,该层开始设计有可识别性的DOM元素。
    .products-list {@include font-brand();border-top: 1px solid $color-ui;}
    7.Trumps — 重写，只影响一块的DOM。该层是具有最高特异性的层，可以覆盖之前的样式。该层大部分声明都带有!important 。

注：
  margin 不占距盒模型
  padding 可改变盒模型

  少用*

  Reset.css 重置
  Normalize.css 修复
  Neat.css融合

  移动端必加
  html:{box-sizing:border-box} //忽略margin padding
  *,*:before, X:after{box-sizing:inherit} //继承html

  no-image时代
  cssicon.space/#/  //css图标
