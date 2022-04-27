(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{796:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"macro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macro"}},[t._v("#")]),t._v(" "),s("code",[t._v("macro")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("macro")]),t._v(" tag allows you to create a chunk of reusable and dynamic content. The macro can be called"),s("br"),t._v("\nmultiple times in the current template.")]),t._v(" "),s("p",[t._v("It doesn't matter where in the current template you define a macro, i.e. whether it's before or after you call it."),s("br"),t._v("\nHere is an example of how to define a macro:")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("macro")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("endmacro")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])])]),s("p",[t._v("And now the macro can be called numerous times throughout the template, like so:")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("country"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('{# will output: <input type="text" name="country" value="" /> #}')])]),t._v("\n")])])]),s("p",[t._v("A macro does not have access to the same variables that the rest of the template has access to."),s("br"),t._v("\nA macro can only work with the variables provided as arguments.")]),t._v(" "),s("h3",{attrs:{id:"access-to-the-global-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-to-the-global-context"}},[t._v("#")]),t._v(" Access to the global context")]),t._v(" "),s("p",[t._v("You can pass the whole context as an argument by using the special "),s("code",[t._v("_context")]),t._v(" variable if you need to access"),s("br"),t._v("\nvariables outside of the macro scope:")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("macro")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" _context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("endmacro")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token twig language-twig"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# will output: bar #}")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);