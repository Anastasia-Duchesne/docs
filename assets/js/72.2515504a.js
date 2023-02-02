(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{765:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deployment-on-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-on-kubernetes"}},[e._v("#")]),e._v(" Deployment on Kubernetes")]),e._v(" "),a("p",[e._v("The recommended deployment environment for "),a("strong",[e._v("production")]),e._v(" workloads is "),a("a",{attrs:{href:"http://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),a("OutboundLink")],1),e._v("."),a("br"),e._v("\nWe provide a "),a("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Chart"),a("OutboundLink")],1),e._v(" in order to deploy your cluster.")]),e._v(" "),a("ul",[a("li",[e._v("The chart repository is available "),a("a",{attrs:{href:"https://helm.kestra.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("The source code of the charts can be found "),a("a",{attrs:{href:"https://github.com/kestra-io/helm-charts",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" kestra https://helm.kestra.io/\nhelm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" kestra kestra/kestra\n")])])]),a("h2",{attrs:{id:"details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[e._v("#")]),e._v(" Details")]),e._v(" "),a("p",[e._v("You can change the default behavior and configure your cluster changing the "),a("a",{attrs:{href:"https://github.com/kestra-io/helm-charts/blob/master/charts/kestra/values.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("defaults values"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("By default, the chart will only deploy one kestra standalone "),a("a",{attrs:{href:"../../../architecture"}},[e._v("service")]),e._v(" (all kestra servers in only one pod) with only 1 replica.")]),e._v(" "),a("p",[e._v("You can also deploy each server independently, using these values:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deployments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("webserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("executor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("indexer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("scheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("standalone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n")])])]),a("p",[e._v("The chart could also deploy all needed services:")]),e._v(" "),a("ul",[a("li",[e._v("A Kafka cluster and Zookeeper using "),a("code",[e._v("kafka.enabled: true")])]),e._v(" "),a("li",[e._v("An Elasticsearch cluster using "),a("code",[e._v("elasticsearch.enabled: true")])]),e._v(" "),a("li",[e._v("A Minio standalone using "),a("code",[e._v("minio.enabled: true")])]),e._v(" "),a("li",[e._v("A PostgreSQL using "),a("code",[e._v("postgresql.enabled: true")])])]),e._v(" "),a("p",[e._v("By default, we enable Minio & PostgreSQL to have a working version.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("All services (Kafka, Elasticsearch, Zookeeper, Minio, PostgreSQL) are deployed using unsecured configurations (no authentication, no TLS, ...). When installing for a production environnement, you "),a("strong",[e._v("need")]),e._v(" to secure all these services and adapt all services configurations to be production ready.")])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[a("a",{attrs:{href:"../../configuration"}},[e._v("Configuration")]),e._v(" of Kestra could be made:")]),e._v(" "),a("ul",[a("li",[e._v("In a Kubernetes "),a("code",[e._v("ConfigMap")]),e._v(" via the "),a("code",[e._v("configuration")]),e._v(" Helm value.")]),e._v(" "),a("li",[e._v("In a Kubernetes "),a("code",[e._v("Secret")]),e._v(" via the "),a("code",[e._v("secrets")]),e._v(" Helm value."),a("br"),e._v("\nBoth must be valid YAML that will be merged as the Kestra configuration file.")])]),e._v(" "),a("p",[e._v("For example, to enable Kafka as the queue implementation and configure its "),a("code",[e._v("bootstrap.servers")]),e._v(" property inside a secret:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" kafka\n\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("secrets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kafka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("bootstrap.servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"localhost:9092"')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);