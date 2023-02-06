(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{952:function(t,M,e){"use strict";e.r(M);var a=e(19),s=Object(a.a)({},(function(){var t=this,M=t.$createElement,e=t._self._c||M;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[e("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMEQxNTIzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4PSIwcHgiIHk9IjBweCI+PHBhdGggZD0ibTE1LjMyOSAyLjgzMDlzLTAuNzMwODUgOC4wNDA1LTIuOTUxMyAxMC4yNzNjLTIuMjIwNSAyLjIzMjItMTAuMzcxIDMuMTIwNi0xMC4zNzEgMy4xMjA2czguMDAwNCAwLjgzNTQyIDEwLjIzMyAzLjA1NTljMi4yMzIxIDIuMjIwNSAzLjE1ODYgMTAuMjY3IDMuMTU4NiAxMC4yNjdzMC45NTE0MS04LjA1MTggMy4xNzE5LTEwLjI4NGMyLjIyMDUtMi4yMzIyIDEwLjE1My0zLjEwOTIgMTAuMTUzLTMuMTA5MnMtOC4xNDMxLTAuNzkzNTktMTAuMzc1LTMuMDE0MWMtMi4yMzIyLTIuMjIwNS0zLjAxNzktMTAuMzA5LTMuMDE3OS0xMC4zMDl6bTQwLjcyNyA4LjY1MjRzLTIuMjY0IDI0Ljk2LTkuMTU2MyAzMS44ODhjLTYuODkyMyA2LjkyODctMzIuMTk2IDkuNjgzMS0zMi4xOTYgOS42ODMxczI0LjgzNCAyLjU5NDggMzEuNzYzIDkuNDg3MmM2LjkyODcgNi44OTIzIDkuODA4NCAzMS44NjcgOS44MDg0IDMxLjg2N3MyLjk1MjMtMjQuOTkgOS44NDQ0LTMxLjkxOWM2Ljg5MjMtNi45Mjg3IDMxLjUxLTkuNjUyNyAzMS41MS05LjY1MjdzLTI1LjI3NS0yLjQ2MTctMzIuMjA0LTkuMzU0MWMtNi45Mjg3LTYuODkyMy05LjM2OTMtMzItOS4zNjkzLTMyem0tMzIuMjU3IDU4LjUwOXMtMC43Mjg5NCA4LjA0MjMtMi45NDk0IDEwLjI3NWMtMi4yMjA1IDIuMjMyMi0xMC4zNzMgMy4xMTg2LTEwLjM3MyAzLjExODZzOC4wMDI0IDAuODM3MzIgMTAuMjM1IDMuMDU3OGMyLjIzMjIgMi4yMjA1IDMuMTU4NiAxMC4yNjUgMy4xNTg2IDEwLjI2NXMwLjk1MTQxLTguMDQ5OSAzLjE3MTktMTAuMjgzYzIuMjIwNS0yLjIzMjIgMTAuMTUxLTMuMTExIDEwLjE1MS0zLjExMXMtOC4xNDEyLTAuNzkxNjgtMTAuMzczLTMuMDEyMmMtMi4yMzIyLTIuMjIwNS0zLjAxOTgtMTAuMzExLTMuMDE5OC0xMC4zMTF6IiBzdHJva2Utd2lkdGg9Ii45NzM2MyI+PC9wYXRoPjwvc3ZnPg==",alt:"PurgeExecution"}}),t._v(" PurgeExecution\n")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.storages.PurgeExecution"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Purge all files from internal storage created by this execution.")])]),t._v(" "),e("p",[t._v("Will delete all the generated files from a flow for this current execution. This will delete:"),e("br"),t._v("\n+- inputs")]),t._v(" "),e("ul",[e("li",[t._v("outputs")]),t._v(" "),e("li",[t._v("triggers")])]),t._v(" "),e("ul",[e("li",[t._v("If the current execution don't have any generated files, the task will not failed."),e("br"),t._v("\nIf you pass a internal storage uri from another execution, it "),e("strong",[t._v("will not")]),t._v(" be deleted, only current execution is deleted.")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purge_execution"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.storages.PurgeExecution"')]),t._v("\n\n")])])]),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("h2",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),e("h3",{attrs:{id:"uris"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uris"}},[t._v("#")]),t._v(" "),e("code",[t._v("uris")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The deleted files")])])])}),[],!1,null,null,null);M.default=s.exports}}]);