(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){"use strict";(function(e){var n=a(31),r=a.n(n),i=a(45),c=a(124),o=a.n(c),s=(a(176),o.a.resolve(e,"..","data")),l=function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.a.resolve(s,"".concat(t,".json")),e.next=5;break;case 4:return e.abrupt("return",e.sent);case 5:return e.next=7,a(399)("./".concat(t,".json"));case 7:return n=e.sent.default,e.abrupt("return",Object.values(n));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.a=l}).call(this,"/")},174:function(e,t,a){e.exports={container:"Home_container__3VlUm"}},259:function(e,t,a){e.exports=a(462)},372:function(e,t){},381:function(e,t){},383:function(e,t){},399:function(e,t,a){var n={"./dependencies.json":[463,3],"./features.json":[464,4],"./frameworks.json":[465,5]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return a.e(t[1]).then(function(){return a.t(r,3)})}r.keys=function(){return Object.keys(n)},r.id=399,e.exports=r},461:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(33),c=a.n(i),o=a(36),s=a(57),l=a(15),u=a(170),f=a(172),m=a(55),d=a(6),p=Object(d.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#ffcc33",contrastText:"#fff"},secondary:{main:"#ffb347",contrastText:"#fff"}}}),h=a(26),g={frameworks:[],features:[],isLoading:!0,userDefinedFramework:{features:[],domains:[],targets:[]},activeStep:0,currentFeatureIndex:0},b=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"LOAD_DATA_PENDING":return Object(h.a)({},t,{isLoading:!0});case"LOAD_DATA_SUCCESS":return Object(h.a)({},t,{frameworks:a.payload.frameworks,features:a.payload.features,isLoading:!1});case"LOAD_DATA_FAILURE":return t;case"REGISTER_FEATURE":return Object(h.a)({},t,{userDefinedFramework:Object(h.a)({},t.userDefinedFramework,{features:t.userDefinedFramework.features.concat((e=a.payload,{id:e.feature.id,value:e.value}))}),currentFeatureIndex:t.currentFeatureIndex+1,activeStep:t.currentFeatureIndex===t.features.length-1?t.activeStep+1:t.activeStep});case"REGISTER_DOMAINS":return Object(h.a)({},t,{userDefinedFramework:Object(h.a)({},t.userDefinedFramework,{domains:a.payload}),activeStep:t.activeStep+1});case"REGISTER_TARGETS":return Object(h.a)({},t,{userDefinedFramework:Object(h.a)({},t.userDefinedFramework,{targets:a.payload}),activeStep:t.activeStep+1});case"UPDATE_FEATURE":return Object(h.a)({},t,{userDefinedFramework:Object(h.a)({},t.userDefinedFramework,{features:t.userDefinedFramework.features.map(function(e){return e.id===a.payload.id?a.payload:e})})});case"REMOVE_DOMAIN":return Object(h.a)({},t,{userDefinedFramework:Object(h.a)({},t.userDefinedFramework,{domains:t.userDefinedFramework.domains.filter(function(e){return e!==a.payload})})});case"REMOVE_TARGET":return Object(h.a)({},t,{userDefinedFramework:Object(h.a)({},t.userDefinedFramework,{targets:t.userDefinedFramework.targets.filter(function(e){return e!==a.payload})})});default:return t}},v={recommendations:[],processing:!0,details:{open:!1,result:null}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"RECOMMEND_FRAMEWORK_PENDING":return Object(h.a)({},e,{processing:!0});case"RECOMMEND_FRAMEWORK_SUCCESS":return Object(h.a)({},e,{recommendations:t.payload,processing:!1});case"TOGGLE_DETAILS":return Object(h.a)({},e,{details:{open:t.payload.open,result:t.payload.id&&e.recommendations.find(function(e){return e.framework.id===t.payload.id})}});default:return e}},y=a(30),O=a(175),w=a(4),j=a.n(w),k=a(21),x=a.n(k),C=a(38),A=a.n(C),N=a(174),S=a.n(N),D=Object(d.withStyles)(function(e){return{button:{margin:e.spacing.unit},startBtn:{backgroundColor:"#fff",border:0,color:"#ffcc33",fontSize:"20px",padding:"10px",textTransform:"initial",width:"200px","&:hover":{backgroundColor:"#f8f8f8",border:0}},readMoreBtn:{color:"#fff"},linkIcon:{marginRight:"5px"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:S.a.container},r.a.createElement("div",null,r.a.createElement("h1",null,"Find the best matching",r.a.createElement("br",null),"gamification framework",r.a.createElement("br",null),"for your project"),r.a.createElement("div",null,r.a.createElement(x.a,{variant:"outlined",size:"large",color:"primary",className:j()(t.button,t.startBtn),component:O.a,to:"/get-started"},"Get started"),r.a.createElement(x.a,{className:j()(t.button,t.readMoreBtn)},r.a.createElement(A.a,{className:t.linkIcon},r.a.createElement("path",{d:"m19.818 8.9715c-1.4849-1.4849-3.8891-1.2021-5.9397-1.2728 0.14142 0.14142 0.42426 0.28284 0.6364 0.49497 0.35355 0.35355 0.6364 0.77782 0.84853 1.2728 1.1314 0 2.3335-0.070711 3.182 0.77782 0.42426 0.42426 0.70711 1.1314 0.77782 1.7678 0 1.4142-1.1314 2.5456-2.5456 2.5456h-3.677c-0.56568 0-1.3435-0.35355-1.7678-0.77782-0.98995-0.98995-0.84853-2.1213-0.42426-3.2527h-1.8385c-0.49497 1.6263-0.42426 3.2527 0.84853 4.5255 0.84853 0.84853 1.9799 1.2728 3.0406 1.2021h3.677c1.2728 0 2.4749-0.35355 3.3941-1.2728 1.4142-1.6971 1.3435-4.4548-0.21213-6.0104zm-11.597 5.5154h-1.2728c-0.56569 0-1.3435-0.35355-1.7678-0.77782-0.42426-0.42426-0.70711-1.1314-0.77782-1.7678 0-1.4142 1.2021-2.6163 2.5456-2.5456h3.677c0.56568 0 1.3435 0.35355 1.7678 0.77782 0.98995 0.98995 0.77782 2.192 0.42426 3.2527h1.8385c0.49498-1.6263 0.42426-3.2527-0.84853-4.5255-0.84853-0.84853-1.9799-1.2728-3.0406-1.2021h-3.677c-2.4042 0-4.3134 1.9092-4.2426 4.2426 0 2.2627 1.9092 4.3134 4.1719 4.1719h2.687c-0.28284-0.14142-0.49497-0.35355-0.70711-0.56568-0.35355-0.35355-0.6364-0.6364-0.77782-1.0607z"})),"Read more"))))}),F=a(10),T=a(11),R=a(23),M=a(22),_=a(24),I=a(12),U=a(29),L=a(31),G=a.n(L),B=a(45),P=function(){function e(t){Object(F.a)(this,e),this.registry={},this.cb=t}return Object(T.a)(e,[{key:"fetchOrCreate",value:function(e){var t=this;return this.registry[e.id]?this.registry[e.id]:this.cb.call(null,e,function(a){t.registry=Object.assign({},t.registry,Object(I.a)({},e.id,a))})}},{key:"clear",value:function(){this.registry={}}}]),e}(),W=a(52),V=new P(function(e,t){return new z(e,t)}),z=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};Object(F.a)(this,e),this.id=t.id,this.title=t.title,this.authors=t.authors,this.year=t.year,this.url=t.url,a(this),this.dependencies=H(t.dependencies)}return Object(T.a)(e,[{key:"flattenedDependencies",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set;return e.add(this),Array.from(this.dependencies.reduce(function(t,a){return e.has(a)?t:new Set([].concat(Object(W.a)(t),Object(W.a)(a.flattenedDependencies(e))))},new Set(this.dependencies)))}},{key:"displayAuthor",get:function(){var e=this.authors[0];if(1===this.authors.length)return e;var t=e.split(". ").pop();return"".concat(t," et al.")}}],[{key:"create",value:function(e){return V.fetchOrCreate(e)}},{key:"clearRegistry",value:function(){V.clear()}}]),e}(),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.from(e.reduce(function(e,t){return e.add(z.create(t))},new Set))},K=["E","I","U"],q=Symbol("validate"),J=function(){function e(t){var a=t.id,n=t.value;Object(F.a)(this,e),this.id=a,this.canonicalValue=n,this[q]()}return Object(T.a)(e,[{key:"compare",value:function(e){return"U"===this.canonicalValue?"U"===e.canonicalValue?1:0:1-Math.abs(this.value-e.value)}},{key:q,value:function(){if(!K.includes(this.canonicalValue))throw new Error('"'.concat(this.canonicalValue,'" is not permitted as a feature value.'))}},{key:"value",get:function(){switch(this.canonicalValue){case"E":return 1;case"I":return.5;case"U":default:return 0}}}]),e}(),Y={GENERIC:"generic",LEARNING:"learning",BUSINESS:"business",HEALTH:"health"},$={GENERAL:"general",DESIGNER:"designer",SOFTWARE_DEVELOPER:"software developer",RESEARCHER:"researcher",EDUCATOR:"educator"},Q=function(e,t,a){var n=Array.from(e).reduce(function(e,a){return Object.assign(e,Object(I.a)({},a,t.has(a)?1:0))},{}),r=Math.max.apply(Math,Object(W.a)(Object.values(n)));return r<1&&(r=a()?.5:0),Object.assign(n,{score:r})},X=function(e,t){return Q(e.domains,t.domains,function(){return t.domains.has(Y.GENERIC)})},Z=function(e,t){return Q(e.targets,t.targets,function(){return t.targets.has($.GENERAL)})},ee=function(e,t){return Object.keys(e.features).reduce(function(a,n){return Object.assign(a,Object(I.a)({},n,e.features[n].compare(t.features[n])))},{})},te=function(e,t){var a=e.domains,n=e.targets,r=e.features,i=t.domains*Math.max.apply(Math,Object(W.a)(Object.values(a))),c=t.targets*Math.max.apply(Math,Object(W.a)(Object.values(n))),o=t.features*Object.values(r).reduce(function(e,t){return e+t}),s=Object.keys(r).length;return(i+c+o)/(t.domains+t.targets+t.features*s)},ae=function(e,t){return Object(W.a)(e).filter(function(e){return!t.has(e)})},ne=function(){function e(t,a,n){Object(F.a)(this,e),this.base=t,this.other=a,this.weights=n,this.domains=X(this.base,this.other),this.targets=Z(this.base,this.other),this.features=ee(this.base,this.other),this.score=te(this,n)}return Object(T.a)(e,[{key:"framework",get:function(){return this.other}},{key:"missingFeatures",get:function(){var e=this;return Object.keys(this.features).filter(function(t){return 0===e.features[t]&&"U"===e.other.features[t].canonicalValue})}},{key:"partiallyMatchedFeatures",get:function(){var e=this;return Object.keys(this.features).filter(function(t){return.5===e.features[t]})}},{key:"matchedFeatures",get:function(){var e=this;return Object.keys(this.features).filter(function(t){return 1===e.features[t]})}},{key:"extraFeatures",get:function(){var e=this;return Object.keys(this.features).filter(function(t){return 0===e.features[t]&&"E"===e.other.features[t].canonicalValue})}},{key:"missingDomains",get:function(){return ae(this.base.domains,this.other.domains)}},{key:"missingTargets",get:function(){return ae(this.base.targets,this.other.targets)}}]),e}(),re=new P(function(e,t){return new ce(e,t)}),ie=function(e){return new Set(Array.isArray(e)?e:[e])},ce=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(R.a)(this,Object(M.a)(t).call(this,e)))._displayName=e.display_name,a.description=e.description,a.domains=ie(e.application_area||e.domains),a.targets=ie(e.target||e.targets),a.features=e.features.reduce(function(e,t){return Object.assign(e,Object(I.a)({},t.id,new J(t)))},{}),a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"compare",value:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{domains:t=Object.keys(this.features).length,targets:t,features:1};return new ne(this,e,a)}},{key:"displayName",get:function(){return this._displayName||this.title}}],[{key:"create",value:function(e){return re.fetchOrCreate(e)}},{key:"clearRegistry",value:function(){re.clear()}}]),t}(z),oe=function(e){function t(){return Object(F.a)(this,t),Object(R.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,null,[{key:"create",value:function(e){return new t(Object.assign({},e,{id:"reference-framework"}))}}]),t}(ce),se=a(123),le=function(){function e(t,a){Object(F.a)(this,e),this.reference=oe.create(a),this.frameworks=t.map(function(e){return ce.create(e)})}return Object(T.a)(e,[{key:"results",get:function(){var e=this;return Promise.resolve(this.frameworks.map(function(t){return e.reference.compare(t)}).sort(function(e,t){return t.score-e.score}))}}],[{key:"availableDomains",value:function(){return Object.values(Y)}},{key:"availableTargets",value:function(){return Object.values($)}},{key:"loadFeatures",value:function(){var e=Object(B.a)(G.a.mark(function e(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.a)("features");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"loadFrameworks",value:function(){var e=Object(B.a)(G.a.mark(function e(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.a)("frameworks");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),e}();le.MATCH=1,le.PARTIAL_MATCH=.5,le.MISMATCH=0;var ue=function(e){return{type:"REGISTER_DOMAINS",payload:e}},fe=function(e){return{type:"REGISTER_TARGETS",payload:e}},me=function(e,t){return{type:"UPDATE_FEATURE",payload:{id:e,value:t}}},de=function(e){return{type:"REMOVE_DOMAIN",payload:e}},pe=function(e){return{type:"REMOVE_TARGET",payload:e}},he=a(95),ge=a.n(he),be=a(104),ve=a(48),Ee=a.n(ve),ye=a(49),Oe=a.n(ye),we=a(50),je=a.n(we),ke=a(9),xe=a.n(ke),Ce=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(R.a)(this,Object(M.a)(t).call(this,e))).handleAnswer=a.handleAnswer.bind(Object(be.a)(a)),a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"handleAnswer",value:function(e,t){(0,this.props.dispatch)(function(e,t){return{type:"REGISTER_FEATURE",payload:{feature:e,value:t}}}(e,t))}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.isLoading,i=t.currentFeature,c=t.currentFeatureNumber,o=t.totalFeatures,s=!n&&c<=o;return r.a.createElement(Ee.a,this.props.ownProps,r.a.createElement(Oe.a,null,"Select the features you need"),r.a.createElement(je.a,null,r.a.createElement(xe.a,null,"In this step, you will be presented with numerous features a gamification design framework might incorporate in its methodologies. Based on your project requirements, select how much in detail should the framework tackle the particular feature."),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.featureContainer},r.a.createElement("div",{className:a.descriptionContainer},r.a.createElement(xe.a,{variant:"h5",className:a.featureName},function(e){return(t=e,"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)).replace("_"," ");var t}(i.id)),r.a.createElement(xe.a,null,"Description: ",i.description)),r.a.createElement("div",{className:a.answerContainer},r.a.createElement(x.a,{variant:"contained",size:"large",color:"primary",className:a.btn,onClick:function(){return e.handleAnswer(i,"U")}},"Not important"),r.a.createElement(x.a,{variant:"contained",size:"large",color:"primary",className:a.btn,onClick:function(){return e.handleAnswer(i,"I")}},"Might come in handy"),r.a.createElement(x.a,{variant:"contained",size:"large",color:"primary",className:a.btn,onClick:function(){return e.handleAnswer(i,"E")}},"Very important"))),r.a.createElement(xe.a,{align:"center",variant:"caption"},"Feature: ",c," of ",o))))}}]),t}(r.a.Component),Ae=Object(l.c)(function(e,t){var a=e.getStarted;return{isLoading:a.isLoading,currentFeature:a.features[a.currentFeatureIndex],currentFeatureNumber:a.currentFeatureIndex+1,totalFeatures:a.features.length,ownProps:t}})(Object(d.withStyles)(function(e){return{featureContainer:{display:"flex",flexDirection:"column"},descriptionContainer:{alignSelf:"flex-start",margin:"30px 0 50px 0",minHeight:"145px"},answerContainer:{alignSelf:"center",marginBottom:"15px",textAlign:"center"},featureName:{fontSize:"3rem",fontWeight:"100",marginBottom:"15px"},btn:{margin:e.spacing.unit}}})(Ce)),Ne=a(39),Se=a.n(Ne),De=a(44),Fe=a.n(De),Te=a(42),Re=a.n(Te),Me=a(51),_e=a.n(Me),Ie=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(R.a)(this,Object(M.a)(t).call(this,e))).handleCheck=function(e){return function(t){var n=t.target.checked;a.setState(function(t){var a=t.chosenDomains;return{chosenDomains:n?a.concat([e]):a.filter(function(t){return t!==e})}})}},a.handleNext=function(){(0,a.props.dispatch)(ue(a.state.chosenDomains))},a.state={chosenDomains:[]},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.chosenDomains;return r.a.createElement(Ee.a,this.props.ownProps,r.a.createElement(Oe.a,null,"Select the framework's domain"),r.a.createElement(je.a,null,r.a.createElement(xe.a,null,"Which of the following domains are the closest to your project?"),r.a.createElement(xe.a,{variation:"caption"},r.a.createElement("i",null,"Note: You may choose multiple domains.")),r.a.createElement("div",{className:t.domainContainer},r.a.createElement(Se.a,{container:!0,spacing:24},le.availableDomains().map(function(n){return r.a.createElement(Se.a,{item:!0,xs:12,sm:6,key:n},r.a.createElement(Fe.a,{className:t.paper},r.a.createElement(Re.a,{control:r.a.createElement(_e.a,{checked:a.includes(n),onChange:e.handleCheck(n),value:n,color:"primary"}),label:(i=n,"string"!==typeof i?"":i.charAt(0).toUpperCase()+i.slice(1))})));var i}))),r.a.createElement("div",{className:t.nextContainer},r.a.createElement(x.a,{variant:"contained",size:"medium",color:"primary",className:t.btn,onClick:function(){return e.handleNext()}},"Next"))))}}]),t}(r.a.Component),Ue=Object(l.c)(function(e,t){return{ownProps:t}})(Object(d.withStyles)(function(e){return{domainContainer:{flexGrow:1,margin:"50px 0"},descriptionContainer:{alignSelf:"flex-start",margin:"30px 0 50px 0"},nextContainer:{alignSelf:"center",marginBottom:"15px",textAlign:"center"},paper:{padding:2*e.spacing.unit,textAlign:"left",color:"#111"},btn:{margin:e.spacing.unit}}})(Ie)),Le=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(R.a)(this,Object(M.a)(t).call(this,e))).handleCheck=function(e){return function(t){var n=t.target.checked;a.setState(function(t){var a=t.chosenTargets;return{chosenTargets:n?a.concat([e]):a.filter(function(t){return t!==e})}})}},a.handleNext=function(){(0,a.props.dispatch)(fe(a.state.chosenTargets)),window.scrollTo(0,0)},a.state={chosenTargets:[]},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.chosenTargets;return r.a.createElement(Ee.a,this.props.ownProps,r.a.createElement(Oe.a,null,"Select who will use the framework"),r.a.createElement(je.a,null,r.a.createElement(xe.a,null,"Who will work on the gamification design in your project?"),r.a.createElement(xe.a,{variation:"caption"},r.a.createElement("i",null,"Tip: Think of skills rather than profession. If none of the below describe the person, choose 'General' or the closest option.",r.a.createElement("br",null),"Multiple options can be chosen.")),r.a.createElement("div",{className:t.targetContainer},r.a.createElement(Se.a,{container:!0,spacing:24},le.availableTargets().map(function(n){return r.a.createElement(Se.a,{item:!0,xs:12,sm:6,key:n},r.a.createElement(Fe.a,{className:t.paper},r.a.createElement(Re.a,{control:r.a.createElement(_e.a,{checked:a.includes(n),onChange:e.handleCheck(n),value:n,color:"primary"}),label:(i=n,"string"!==typeof i?"":i.charAt(0).toUpperCase()+i.slice(1))})));var i}))),r.a.createElement("div",{className:t.nextContainer},r.a.createElement(x.a,{variant:"contained",size:"medium",color:"primary",className:t.btn,onClick:function(){return e.handleNext()}},"Next"))))}}]),t}(r.a.Component),Ge=Object(l.c)(function(e,t){return{ownProps:t}})(Object(d.withStyles)(function(e){return{targetContainer:{flexGrow:1,margin:"50px 0"},descriptionContainer:{alignSelf:"flex-start",margin:"30px 0 50px 0"},nextContainer:{alignSelf:"center",marginBottom:"15px",textAlign:"center"},paper:{padding:2*e.spacing.unit,textAlign:"left",color:"#111"},btn:{margin:e.spacing.unit}}})(Le)),Be=a(56),Pe=a.n(Be),We=a(78),Ve=a.n(We),ze=a(79),He=a.n(ze),Ke=function(e){return function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}(e).replace("_"," ")},qe=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(R.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).handleCheck=function(e,t){return function(){var n=a.props.dispatch,r=["U","I","E"],i=r.indexOf(t),c=r[r.length===i+1?0:i+1];n(me(e,c))}},a.handleDeleteDomain=function(e){return function(){(0,a.props.dispatch)(de(e))}},a.handleDeleteTarget=function(e){return function(){(0,a.props.dispatch)(pe(e))}},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.framework,i=t.locked;return r.a.createElement("div",{className:a.container},r.a.createElement(xe.a,{variant:"h6",gutterBottom:!0},"Requirements"),r.a.createElement(xe.a,{variant:"subtitle1",gutterBottom:!0},"Features:"),n.features.map(function(t){var n=t.id,c=t.value;return r.a.createElement(Re.a,{key:n,control:r.a.createElement(_e.a,{checked:"U"!==c,onChange:e.handleCheck(n,c),value:n,disabled:!!i,indeterminate:"I"===c||null,className:j()(Object(I.a)({},a.checked,"E"===c&&!i)),color:"primary"}),label:Ke(n)})}),r.a.createElement(Ve.a,{className:a.divider}),r.a.createElement(xe.a,{variant:"subtitle1",gutterBottom:!0},"Domains:"),n.domains.map(function(t){return r.a.createElement(Pe.a,{key:t,label:Ke(t),onDelete:i?null:e.handleDeleteDomain(t),className:a.chip})}),r.a.createElement(Ve.a,{className:a.divider}),r.a.createElement(xe.a,{variant:"subtitle1",gutterBottom:!0},"Targets:"),n.targets.map(function(t){return r.a.createElement(Pe.a,{key:t,label:Ke(t),onDelete:i?null:e.handleDeleteTarget(t),className:a.chip})}))}}]),t}(r.a.Component),Je=Object(l.c)(function(e){return{framework:e.getStarted.userDefinedFramework}})(Object(d.withStyles)(function(e){return{container:Object(I.a)({backgroundColor:"#f8f8f8",flex:"1 1 100%",height:"100%",order:"1",padding:"50px"},e.breakpoints.up("md"),{flex:"0 1 450px",height:"calc(100vh - 2 * 50px)",overflow:"auto"}),chip:{margin:e.spacing.unit},divider:{marginBottom:e.spacing.unit,marginTop:e.spacing.unit},checked:{color:He.a[500],"&$checked":{color:He.a[500]}}}})(qe)),Ye=a(177),$e=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(R.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).handleFinish=function(){(0,a.props.dispatch)(Object(U.d)("/results"))},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.dispatch)(function(){var e=Object(B.a)(G.a.mark(function e(t){var a,n;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_DATA_PENDING"}),e.prev=1,e.next=4,le.loadFeatures();case 4:return a=e.sent,e.next=7,le.loadFrameworks();case 7:n=e.sent,t({type:"LOAD_DATA_SUCCESS",payload:{features:a,frameworks:n}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:"LOAD_DATA_FAILURE"});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.classes,i=a.activeStep,c=a.setupFinished,o=!c,s=c;return r.a.createElement("div",{className:j()((e={},Object(I.a)(e,n.container,!0),Object(I.a)(e,n.reducedContainer,s),e))},o&&r.a.createElement("div",{className:n.stepperContainer},r.a.createElement(ge.a,{activeStep:i,orientation:"vertical"},r.a.createElement(Ae,null),r.a.createElement(Ue,null),r.a.createElement(Ge,null))),s&&r.a.createElement("div",{className:j()(n.stepperContainer,n.reviewContainer)},r.a.createElement(Ye.a,{variant:"subtitle1"},"Please, review you configuration in the sidebar and hit 'Finish' when done."),r.a.createElement(x.a,{className:n.btn,variant:"contained",size:"medium",color:"primary",onClick:function(){return t.handleFinish()}},"Finish")),r.a.createElement(Je,null))}}]),t}(r.a.Component),Qe=Object(l.c)(function(e){var t=e.getStarted;return{activeStep:t.activeStep,setupFinished:3===t.activeStep}})(Object(d.withStyles)(function(e){return{container:Object(I.a)({display:"flex",height:"200vh",justifyContent:"space-between",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row",height:"100vh"}),reducedContainer:Object(I.a)({},e.breakpoints.down("md"),{height:"150vh"}),stepperContainer:Object(I.a)({flex:"1 1 100%",minWidth:"0",order:"0"},e.breakpoints.up("md"),{overflow:"auto",padding:"50px"}),reviewContainer:Object(I.a)({alignItems:"center",display:"flex",flexDirection:"column",height:"calc(50vh - 2*50px)",justifyContent:"center",order:"2",padding:"50px"},e.breakpoints.up("md"),{height:"calc(100vh - 2*50px)",order:"0"}),btn:{margin:e.spacing.unit}}})($e)),Xe=a(185),Ze=a.n(Xe),et=a(102),tt=a.n(et),at=a(96),nt=a.n(at),rt=a(97),it=a.n(rt),ct=a(98),ot=a.n(ct),st=a(99),lt=a.n(st),ut=a(178),ft=a.n(ut),mt=function(e,t){return{type:"TOGGLE_DETAILS",payload:{id:t,open:e}}},dt=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(R.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).handleOpenDetails=function(){return function(){var e=a.props,t=e.dispatch,n=e.data;t(mt(!0,n.other.id))}},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,n=a.other;return r.a.createElement(nt.a,{className:t.card},r.a.createElement(it.a,{action:r.a.createElement(xe.a,{variant:"subtitle1"},Math.round(100*a.score),"%"),title:n.displayName,subheader:"".concat(n.displayAuthor," (").concat(n.year,")")}),r.a.createElement(ot.a,null,r.a.createElement(xe.a,{component:"p"},n.description)),r.a.createElement(lt.a,{className:t.actions,disableActionSpacing:!0},r.a.createElement(x.a,{className:t.button,"aria-label":"Open in a new tab",href:n.url,target:"_blank",rel:"nofollow noopener"},r.a.createElement(ft.a,{style:{marginRight:"5px"}}),"Read"),r.a.createElement(x.a,{color:"primary",onClick:this.handleOpenDetails()},"Details")))}}]),t}(r.a.Component),pt=Object(l.c)()(Object(d.withStyles)(function(e){return{card:{maxWidth:400},actions:{display:"flex",justifyContent:"space-between",padding:"16px"},btn:{margin:e.spacing.unit}}})(dt)),ht=a(101),gt=a.n(ht),bt=Object(d.withStyles)({inline:{display:"inline-block"}})(function(e){var t=e.classes,a=e.name,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:t.inline},r.a.createElement(xe.a,{variant:"subtitle2",gutterBottom:!0},a,":")),n)}),vt=function(e){var t=e.classes,a=e.children,n=e.indicator,i=e.inline;return r.a.createElement(r.a.Fragment,null,r.a.createElement("dd",{className:j()(t.dd,Object(I.a)({},t.inline,i))},r.a.createElement(xe.a,{variant:"body2",gutterBottom:!0},Ke(a.toString()),n)),i&&r.a.createElement("br",null))};vt.defaultProps={indicator:null,inline:!1};var Et=Object(d.withStyles)({inline:{display:"inline-block"},dd:{marginInlineStart:"10px"}})(vt),yt=a(183),Ot=a.n(yt),wt=a(184),jt=a.n(wt),kt=a(181),xt=a.n(kt),Ct=a(182),At=a.n(Ct),Nt=a(121),St=a.n(Nt),Dt=a(179),Ft=a.n(Dt),Tt=a(180),Rt=a.n(Tt),Mt={icon:{fontSize:"18px",verticalAlign:"top"},match:{color:He.a[500]},mismatch:{color:St.a[500]},partial:{color:Ft.a[500]},extra:{color:Rt.a[500]}},_t=function(e){var t=e.classes,a=e.variant,n=e.position,i=function(e){switch(e){case"match":return xt.a;case"mismatch":return At.a;case"partial":return Ot.a;case"extra":return jt.a;default:throw new Error("Not implemented")}}(a),c="left"===n?{marginRight:"5px"}:{marginLeft:"5px"};return r.a.createElement(i,{className:j()(t.icon,t[a]),style:c})};_t.defaultProps={position:"left"};var It=Object(d.withStyles)(Mt)(_t),Ut=function(e,t){return Array.from(e).map(function(e){if("score"===e)return null;var a;switch(t[e]){case le.MATCH:a="match";break;case le.PARTIAL_MATCH:a="partial";break;case le.MISMATCH:case void 0:a="mismatch";break;default:throw new Error("Not implemented")}return{value:e,indicator:r.a.createElement(It,{variant:a,position:"right"})}}).filter(function(e){return e})},Lt=Object(d.withStyles)(function(e){return{overview:{borderRight:"1px solid #ccc",flex:"0 1 25%",minWidth:"200px",padding:"20px"},dl:{marginBlockEnd:"0"}}})(function(e){var t=e.classes,a=e.result,n=a.framework,i=Ut(n.domains,a.domains),c=Ut(n.targets,a.targets);return r.a.createElement("div",{id:"overview",className:t.overview},r.a.createElement(xe.a,{variant:"subtitle1",gutterBottom:!0},"Overview"),r.a.createElement("dl",{className:t.dl},r.a.createElement(bt,{name:"Title"},r.a.createElement(Et,{inline:!0},n.displayName)),r.a.createElement(bt,{name:"Authors"},r.a.createElement(Et,{inline:!0},n.displayAuthor)),r.a.createElement(bt,{name:"Year"},r.a.createElement(Et,{inline:!0},n.year)),r.a.createElement(bt,{name:"Application area"},i.map(function(e){var t=e.value,a=e.indicator;return r.a.createElement(Et,{key:t,indicator:a,inline:!0},t)})),r.a.createElement(bt,{name:"Target"},c.map(function(e){var t=e.value,a=e.indicator;return r.a.createElement(Et,{key:t,indicator:a,inline:c.length<=1},t)}))))}),Gt=a(100),Bt=a.n(Gt),Pt=Object(l.c)(function(e){return{featureDefinitions:e.getStarted.features}})(Object(d.withStyles)(function(e){return{col:{flex:"1 1 auto",padding:"10px 0 10px","&:first-child":{paddingTop:"0"}},chip:{margin:e.spacing.unit,cursor:"pointer"},iconHeading:{display:"flex",alignItems:"center"},tooltip:{backgroundColor:e.palette.common.black}}})(function(e){var t=e.classes,a=e.features,n=e.variant,i=e.count,c=e.featureDefinitions;if(0===a.length)return null;var o=function(e){switch(e){case"match":return"Matching features";case"mismatch":return"Missing features";case"partial":return"Partially matched features";case"extra":return"Extra features";default:throw new Error("Not implemented")}}(n);return r.a.createElement("div",{id:"features-".concat(n),className:t.col},r.a.createElement(xe.a,{className:t.iconHeading,variant:"subtitle1",gutterBottom:!0},r.a.createElement(It,{variant:n}),"".concat(o," (").concat(a.length,"/").concat(i,")")),a.map(function(e){return r.a.createElement(Bt.a,{key:e,classes:{tooltip:t.tooltip},interactive:!0,title:c.find(function(t){return t.id===e}).description},r.a.createElement(Pe.a,{label:Ke(e),className:t.chip,variant:"outlined"}))}))})),Wt=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(R.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).toggleDrawer=function(e){return function(){(0,a.props.dispatch)(mt(e))}},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,n=e.result;if(!n)return null;var i=Object.keys(n.features).length;return r.a.createElement(gt.a,{anchor:"bottom",open:a,onClose:this.toggleDrawer(!1),onOpen:this.toggleDrawer(!0)},r.a.createElement("div",{className:t.container,tabIndex:0,role:"button"},r.a.createElement(Lt,{result:n}),r.a.createElement("div",{className:t.featuresContainer},r.a.createElement(Pt,{variant:"match",features:n.matchedFeatures,count:i}),r.a.createElement(Pt,{variant:"partial",features:n.partiallyMatchedFeatures,count:i}),r.a.createElement(Pt,{variant:"mismatch",features:n.missingFeatures,count:i}),r.a.createElement(Pt,{variant:"extra",features:n.extraFeatures,count:i}))))}}]),t}(r.a.Component),Vt=Object(l.c)(function(e){return{open:e.results.details.open,result:e.results.details.result}})(Object(d.withStyles)(function(e){return{container:Object(I.a)({display:"flex",flexDirection:"column",height:"355px",overflow:"auto"},e.breakpoints.up("md"),{flexDirection:"row"}),featuresContainer:Object(I.a)({display:"flex",flexDirection:"column",padding:"20px",paddingTop:"0"},e.breakpoints.up("md"),{height:"calc(100% - 2*20px)",overflow:"auto",paddingTop:"20px"})}})(Wt)),zt=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(R.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).state={showConfiguration:!1},a.switchConfiguration=function(){return function(){a.setState(function(e){return{showConfiguration:!e.showConfiguration}})}},a}return Object(_.a)(t,e),Object(T.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch;if(!e.isConfigured)return t(Object(U.d)("/get-started"));t(function(){var e=Object(B.a)(G.a.mark(function e(t,a){var n,r,i,c,o;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.getStarted,i=r.frameworks,c=r.userDefinedFramework,t({type:"RECOMMEND_FRAMEWORK_PENDING"}),e.prev=2,e.next=5,new le(i,c).results;case 5:o=e.sent,t({type:"RECOMMEND_FRAMEWORK_SUCCESS",payload:o}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:"RECOMMEND_FRAMEWORK_FAILURE"});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,a){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.recommendations,n=this.state.showConfiguration;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.resultsContainer},r.a.createElement("div",{className:t.toolbar},r.a.createElement(x.a,{size:"small",className:t.btn,href:"/"},r.a.createElement(Ze.a,{style:{marginLeft:"5px"}}),"Back to home"),r.a.createElement(Re.a,{control:r.a.createElement(tt.a,{checked:n,onChange:this.switchConfiguration(),value:"configurationVisibility",color:"primary"}),label:"Show requirements"})),r.a.createElement(Se.a,{container:!0,spacing:24},a.map(function(e){return r.a.createElement(Se.a,{item:!0,xs:12,sm:6,md:4,key:e.other.id},r.a.createElement(pt,{data:e}))}))),n&&r.a.createElement(Je,{locked:!0})),r.a.createElement(Vt,null))}}]),t}(r.a.Component),Ht=Object(l.c)(function(e){return{recommendations:e.results.recommendations,isConfigured:0!==e.getStarted.userDefinedFramework.features.length}})(Object(d.withStyles)(function(e){return{container:Object(I.a)({display:"flex",flexDirection:"column",justifyContent:"space-between"},e.breakpoints.up("md"),{flexDirection:"row"}),resultsContainer:Object(I.a)({display:"flex",flex:"1 1 100%",flexDirection:"column",order:"2",overflow:"auto",padding:"50px",paddingTop:"15px"},e.breakpoints.up("md"),{height:"calc(100vh - 15px - 50px)"}),toolbar:{display:"flex",justifyContent:"space-between",marginBottom:"35px"},btn:{margin:e.spacing.unit}}})(zt));var Kt=Object(l.c)()(function(){return r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:D}),r.a.createElement(y.a,{exact:!0,path:"/get-started",component:Qe}),r.a.createElement(y.a,{exact:!0,path:"/results",component:Ht}))}),qt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Jt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(461);var Yt,$t=Object(o.a)({}),Qt=[Object(u.a)($t),f.a],Xt=s.a.apply(void 0,Qt),Zt=Object(s.d)((Yt=$t,Object(s.c)({router:Object(m.b)(Yt),getStarted:b,results:E})),void 0,Xt);c.a.render(r.a.createElement(l.a,{store:Zt},r.a.createElement(m.a,{history:$t},r.a.createElement(d.MuiThemeProvider,{theme:p},r.a.createElement(Kt,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");qt?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Jt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Jt(t,e)})}}()}},[[259,1,2]]]);
//# sourceMappingURL=main.408805c8.chunk.js.map