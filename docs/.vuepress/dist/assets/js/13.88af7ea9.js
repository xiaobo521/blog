(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{219:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何写优雅的sql原生语句？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何写优雅的sql原生语句？"}},[t._v("#")]),t._v(" 如何写优雅的SQL原生语句？")]),t._v(" "),a("h2",{attrs:{id:"前言："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言："}},[t._v("#")]),t._v(" 前言：")]),t._v(" "),a("p",[t._v("上一篇讲Mysql基本架构时，以“sql查询语句在MySql架构中具体是怎么执行的？”进行了全面的讲解。知道了sql查询语句在MySql架构中的具体执行流程，但是为了能够更好更快的写出sql语句，我觉得非常有必要知道sql语句中各子句的执行顺序。看过上一篇文章的小伙伴应该都知道，sql语句最后各子句的执行应该是在执行器中完成的，存储引擎对执行器提供的数据读写接口。现在开始我们的学习")]),t._v(" "),a("h2",{attrs:{id:"语句中各子句完整执行顺序概括（按照顺序号执行）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语句中各子句完整执行顺序概括（按照顺序号执行）"}},[t._v("#")]),t._v(" 语句中各子句完整执行顺序概括（按照顺序号执行）")]),t._v(" "),a("ol",[a("li",[t._v("from (注:这里也包括from中的子语句)")]),t._v(" "),a("li",[t._v("join")]),t._v(" "),a("li",[t._v("on")]),t._v(" "),a("li",[t._v("where")]),t._v(" "),a("li",[t._v("group by(开始使用select中的别名，后面的语句中都可以使用)")]),t._v(" "),a("li",[t._v("avg,sum.... 等聚合函数")]),t._v(" "),a("li",[t._v("having")]),t._v(" "),a("li",[t._v("select")]),t._v(" "),a("li",[t._v("distinct")]),t._v(" "),a("li",[t._v("order by")]),t._v(" "),a("li",[t._v("limit")])]),t._v(" "),a("h3",{attrs:{id:"每个子句执行顺序分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个子句执行顺序分析"}},[t._v("#")]),t._v(" 每个子句执行顺序分析")]),t._v(" "),a("p",[t._v("所有的 查询语句都是从from开始执行的，在执行过程中，每个步骤都会为下一个步骤生成一个虚拟表，这个虚拟表将作为下一个执行步骤的输入。")]),t._v(" "),a("h4",{attrs:{id:"_1-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-from"}},[t._v("#")]),t._v(" 1. from")]),t._v(" "),a("p",[t._v("form是一次查询语句的开端。")]),t._v(" "),a("ul",[a("li",[t._v("如果是一张表，会直接操作这张表；")]),t._v(" "),a("li",[t._v("如果这个from后面是一个子查询，会先执行子查询中的内容，子查询的结果也就是第一个虚拟表T1。（注意：子查询中的执行流程也是按照本篇文章讲的顺序哦）。")]),t._v(" "),a("li",[t._v("如果需要关联表，使用join，请看2，3")])]),t._v(" "),a("h4",{attrs:{id:"_2-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-join"}},[t._v("#")]),t._v(" 2. join")]),t._v(" "),a("p",[t._v("如果from后面是多张表，join关联，会首先对前两个表执行一个笛卡尔乘积，这时候就会生成第一个虚拟表T1（注意：这里会选择相对小的表作为基础表）；")]),t._v(" "),a("h4",{attrs:{id:"_3-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-on"}},[t._v("#")]),t._v(" 3.  on")]),t._v(" "),a("p",[t._v("对虚表T1进行ON筛选，只有那些符合"),a("join-condition",[t._v("的行才会被记录在虚表T2中。（注意，这里的这里如果还有第三个表与之关联，会用T2与第三个表进行笛卡尔乘积生产T3表，继续重复3. on步骤生成T4表，不过下面的顺序讲解暂时不针对这里的T3和T4，只是从一个表关联查询T2继续说）")])],1),t._v(" "),a("h4",{attrs:{id:"_4-where"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-where"}},[t._v("#")]),t._v(" 4. where")]),t._v(" "),a("p",[t._v("对虚拟表T2进行WHERE条件过滤。只有符合"),a("where-condition",[t._v("的记录才会被插入到虚拟表T3中。")])],1),t._v(" "),a("h4",{attrs:{id:"_5-group-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-group-by"}},[t._v("#")]),t._v(" 5.group by")]),t._v(" "),a("p",[t._v("group by 子句将中的唯一的值组合成为一组，得到虚拟表T4。如果应用了group by，那么后面的所有步骤都只能操作T4的列或者是执行6.聚合函数（count、sum、avg等）。（注意：原因在于分组后最终的结果集中只包含每个组中的一行。谨记，不然这里会出现很多问题，下面的代码误区会特别说。）")]),t._v(" "),a("h4",{attrs:{id:"_6-avg-sum-等聚合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-avg-sum-等聚合函数"}},[t._v("#")]),t._v(" 6. avg,sum.... 等聚合函数")]),t._v(" "),a("p",[t._v("聚合函数只是对分组的结果进行一些处理，拿到某些想要的聚合值，例如求和，统计数量等，并不生成虚拟表。")]),t._v(" "),a("h4",{attrs:{id:"_7-having"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-having"}},[t._v("#")]),t._v(" 7.  having")]),t._v(" "),a("p",[t._v("应用having筛选器，生成T5。HAVING子句主要和GROUP BY子句配合使用，having筛选器是第一个也是为唯一一个应用到已分组数据的筛选器。")]),t._v(" "),a("h4",{attrs:{id:"_8-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-select"}},[t._v("#")]),t._v(" 8.  select")]),t._v(" "),a("p",[t._v("执行select操作，选择指定的列，插入到虚拟表T6中。")]),t._v(" "),a("h4",{attrs:{id:"_9-distinct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-distinct"}},[t._v("#")]),t._v(" 9.  distinct")]),t._v(" "),a("p",[t._v("对T6中的记录进行去重。移除相同的行，产生虚拟表T7.（注意：事实上如果应用了group by子句那么distinct是多余的，原因同样在于，分组的时候是将列中唯一的值分成一组，同时只为每一组返回一行记录，那么所以的记录都将是不相同的。 ）")]),t._v(" "),a("h4",{attrs:{id:"_10-order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-order-by"}},[t._v("#")]),t._v(" 10. order by")]),t._v(" "),a("p",[t._v("应用order by子句。按照order_by_condition排序T7，此时返回的一个游标，而不是虚拟表。sql是基于集合的理论的，集合不会预先对他的行排序，它只是成员的逻辑集合，成员的顺序是无关紧要的。对表进行排序的查询可以返回一个对象，这个对象包含特定的物理顺序的逻辑组织。这个对象就叫游标。"),a("br"),t._v("\noder by的几点说明")]),t._v(" "),a("ul",[a("li",[t._v("因为order by返回值是游标，那么使用order by 子句查询不能应用于表表达式。")]),t._v(" "),a("li",[t._v("order by排序是很需要成本的，除非你必须要排序，否则最好不要指定order by，")]),t._v(" "),a("li",[t._v("order by的两个参数  asc（升序排列）  desc（降序排列）")])]),t._v(" "),a("h4",{attrs:{id:"_11-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-limit"}},[t._v("#")]),t._v(" 11. limit")]),t._v(" "),a("p",[t._v("取出指定行的记录，产生虚拟表T9, 并将结果返回。")]),t._v(" "),a("p",[t._v("limit后面的参数可以是 一个limit m ，也可以是limit m n，表示从第m条到第n条数据。")]),t._v(" "),a("p",[t._v("（注意：很多开发人员喜欢使用该语句来解决分页问题。对于小数据，使用LIMIT子句没有任何问题，当数据量非常大的时候，使用LIMIT n, m是非常低效的。因为LIMIT的机制是每次都是从头开始扫描，如果需要从第60万行开始，读取3条数据，就需要先扫描定位到60万行，然后再进行读取，而扫描的过程是一个非常低效的过程。所以，对于大数据处理时，是非常有必要在应用层建立一定的缓存机制）")]),t._v(" "),a("h2",{attrs:{id:"开发某需求写的一段sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发某需求写的一段sql"}},[t._v("#")]),t._v(" 开发某需求写的一段sql")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("avatar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_avatar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("answer_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pkrecord  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'m_6da5d9e0-4629-11e9-b5f7-694ced396953'")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("查询结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/1/16b0ea85ba531a1a?w=1008&h=122&f=png&s=39868",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("先简要说一下我要查询的内容：")])]),t._v(" "),a("p",[t._v("想要查询pk记录表中分数最高的9个用户记录和他们的头像。")]),t._v(" "),a("ul",[a("li",[t._v("通过这段sql实际想一遍sql各字句的执行顺序")])]),t._v(" "),a("p",[t._v("pk记录表的数据结构设计，每个用户每天每个馆下可能会有多条记录，所以需要进行分组，并且"),a("strong",[t._v("查询结果只想拿到每个分组内最高的那条记录")]),t._v("。")]),t._v(" "),a("p",[t._v("这段sql的一些说明：")]),t._v(" "),a("ol",[a("li",[t._v("可能有些同学会认为子查询没有必要\n直接查询pk记录表就可以，但是并不能拿到预期的结果，因为"),a("strong",[t._v("分组后的每个组结果是不进行排序的")]),t._v("，而且max拿到的最高分数肯定是对应的该分组下最高分数，但是其它记录可能就不是最高分数对应的那条记录。所以子查询非常有必要，"),a("strong",[t._v("它能够对原始的数据首先进行排序")]),t._v("，分数最高的那条就是第一条对应的第一条记录。")])]),t._v(" "),a("p",[t._v("看一下代码和执行结果与带有子查询的进行比较，就能理解我上面说的一段话：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不使用子查询")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("avatar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_avatar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("answer_record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" pkrecord\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("userspk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'m_6da5d9e0-4629-11e9-b5f7-694ced396953'")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("pkrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("查询结果\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/1/16b0ea8fae4441e6?w=920&h=116&f=png&s=27790",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在子查询中对数据已经进行排序后，外层排序方式如果和子查询排序分数相同，都是分数倒序，外层的排序可以去掉，没有必要写两遍。")])]),t._v(" "),a("h2",{attrs:{id:"sql语句中的别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql语句中的别名"}},[t._v("#")]),t._v(" sql语句中的别名")]),t._v(" "),a("h4",{attrs:{id:"别名在哪些情况使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名在哪些情况使用"}},[t._v("#")]),t._v(" 别名在哪些情况使用")]),t._v(" "),a("p",[t._v("在 SQL 语句中，可以为表名称及字段（列）名称指定别名")]),t._v(" "),a("ul",[a("li",[t._v("表名称指定别名")])]),t._v(" "),a("p",[t._v("同时查询两张表的数据的时候：\n未设置别名前：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid\n")])])]),a("p",[t._v("设置别名后：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" article "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" u "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid\n")])])]),a("p",[t._v("好处：使用表别名查询，可以使 SQL 变得简洁而更易书写和阅读，尤其在 SQL 比较复杂的情况下")]),t._v(" "),a("ul",[a("li",[t._v("查询字段指定别名")])]),t._v(" "),a("p",[t._v("查询一张表，直接对查询字段设置别名")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" username "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v("\n")])])]),a("p",[t._v("查询两张表")]),t._v(" "),a("p",[t._v("好处：字段别名一个明显的效果是可以自定义查询数据返回的字段名；当两张表有相同的字段需要都被查询出，使用别名可以完美的进行区分，避免冲突")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" atitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" utitle "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" article "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" u "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid\n")])])]),a("ul",[a("li",[a("p",[t._v("关联查询时候，关联表自身的时候，一些分类表，必须使用别名。")])]),t._v(" "),a("li",[a("p",[t._v("别名也可以在group         by与having的时候都可使用")])]),t._v(" "),a("li",[a("p",[t._v("别名可以在order by排序的时候被使用")]),t._v(" "),a("p",[t._v("查看上面一段sql")])]),t._v(" "),a("li",[a("p",[t._v("delete ， update MySQL都可以使用别名，别名在多表（级联）删除尤为有用")])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_a t1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t_b t2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])]),a("ul",[a("li",[a("p",[t._v("子查询结果需要使用别名")]),t._v(" "),a("p",[t._v("查看上面一段sql")])])]),t._v(" "),a("h4",{attrs:{id:"别名使用注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名使用注意事项"}},[t._v("#")]),t._v(" 别名使用注意事项")]),t._v(" "),a("ul",[a("li",[t._v("虽然定义字段别名的 AS 关键字可以省略，但是在使用别名时候，建议不要省略 AS 关键字")])]),t._v(" "),a("h2",{attrs:{id:"书写sql语句的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#书写sql语句的注意事项"}},[t._v("#")]),t._v(" 书写sql语句的注意事项")]),t._v(" "),a("h4",{attrs:{id:"书写规范上的注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#书写规范上的注意"}},[t._v("#")]),t._v(" 书写规范上的注意")]),t._v(" "),a("ul",[a("li",[t._v("字符串类型的要加单引号")]),t._v(" "),a("li",[t._v("select后面的每个字段要用逗号分隔，但是最后连着from的字段不要加逗号")]),t._v(" "),a("li",[t._v("使用子查询创建临时表的时候要使用别名，否则会报错。")])]),t._v(" "),a("h4",{attrs:{id:"为了增强性能的注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为了增强性能的注意"}},[t._v("#")]),t._v(" 为了增强性能的注意")]),t._v(" "),a("ul",[a("li",[t._v("不要使用“select * from ……”返回所有列，只检索需要的列，可避免后续因表结构变化导致的不必要的程序修改，还可降低额外消耗的资源")]),t._v(" "),a("li",[t._v("不要检索已知的列")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select  user_id,name from User where user_id = ‘10000050’\n")])])]),a("ul",[a("li",[t._v("使用可参数化的搜索条件，如=, >, >=, <, <=, between, in, is null以及like ‘"),a("literal",[t._v("%’；尽量不要使用非参数化的负向查询，这将导致无法使用索引，如<>, !=, !>, !<, not in, not like, not exists, not between, is not null, like ‘%"),a("literal",[t._v("’")])],1)],1),t._v(" "),a("li",[t._v("当需要验证是否有符合条件的记录时，使用exists，不要使用count(*)，前者在第一个匹配记录处返回，后者需要遍历所有匹配记录")]),t._v(" "),a("li",[t._v("Where子句中列的顺序与需使用的索引顺序保持一致，不是所有数据库的优化器都能对此顺序进行优化，保持良好编程习惯（索引相关）")]),t._v(" "),a("li",[t._v("不要在where子句中对字段进行运算或函数（索引相关）")])]),t._v(" "),a("ol",[a("li",[t._v("如where  amount / 2 > 100，即使amount字段有索引，也无法使用，改成where amount > 100 * 2就可使用amount列上的索引")]),t._v(" "),a("li",[t._v("如where substring( Lastname, 1, 1) = ‘F’就无法使用Lastname列上的索引，而where Lastname like ‘F%’或者where Lastname >= ‘F’ and Lastname < ‘G’就可以")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在有min、max、distinct、order by、group by操作的列上建索引，避免额外的排序开销（索引相关）")])]),t._v(" "),a("li",[a("p",[t._v("小心使用or操作，and操作中任何一个子句可使用索引都会提高查询性能，但是or条件中任何一个不能使用索引，都将导致查询性能下降，如where member_no = 1 or provider_no = 1，在member_no或provider_no任何一个字段上没有索引，都将导致表扫描或聚簇索引扫描（索引相关）")])]),t._v(" "),a("li",[a("p",[t._v("Between一般比in/or高效得多，如果能在between和in/or条件中选择，那么始终选择between条件，并用>=和<=条件组合替代between子句，因为不是所有数据库的优化器都能把between子句改写为>=和<=条件组合，如果不能改写将导致无法使用索引（索引相关）")])]),t._v(" "),a("li",[a("p",[t._v("调整join操作顺序以使性能最优，join操作是自顶向下的，尽量把结果集小的两个表关联放在前面，可提高性能。（join相关）\n注意：索引和关联我会单独拿出来两篇文章进行详细讲解，在这个注意事项中只是简单提一下。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);