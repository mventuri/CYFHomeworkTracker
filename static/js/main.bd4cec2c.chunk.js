(this["webpackJsonpcyf-homework-tracker"]=this["webpackJsonpcyf-homework-tracker"]||[]).push([[0],{459:function(e,t,n){e.exports=n(706)},464:function(e,t,n){},465:function(e,t,n){},687:function(e,t){},706:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),s=n(83),l=n(103),c=(n(464),n(21)),u=n(30),h=n(32),d=n(31),m=(n(465),n(215)),f=n.n(m),p=n(302),g=n.n(p),b=n(235),v=n.n(b),k=n(245),w=n.n(k),E=n(236),y=n.n(E),O=n(243),S=n.n(O),N=n(149),R=n.n(N),j=n(148),C=n.n(j),P=n(237),A=n.n(P),T=n(238),F=n.n(T),M=n(240),H=n.n(M),L=n(241),B=n.n(L),_=n(242),I=n.n(_),q=n(246),D=n.n(q),G=n(239),x=n.n(G),W=n(244),U=n.n(W),z=n(247),V=n.n(z),Y=[{name:"London",tracker:"https://docs.google.com/spreadsheets/d/1B_08AtHWy8FwGnfjTmj5TzuNKtBf2ov31BFPnJs2DR0/edit#gid=1726249445",students:["ferhatu","Hamidreza-Fakharzadeh","minwwgo","yusuf963","Rayhan94","Sonjide","TamBahri","cyeburu","Hanifix","HarrisSheraz20","279Roxana","sabia-m","abbasmokhtari","Jreo123","kiowd","SCavus","tayfuntayfun","AKaramifar","AlexeyBrambalov","naderakhgari","leealex88","Alisina92","banirezaie","cockochan","abcelen","babakjahangiri","ellietms","sugunum","mahmutsel","melanieet","AlexandruBudaca","byohannes","Erwin6997","mnashawati","tanianm"]},{name:"Manchester",tracker:"https://docs.google.com/spreadsheets/d/1o70LeHJfe8VzMQzv7hKfDV3qzuKpX9cNfB7houm9XQQ/edit#gid=1726249445",students:["Vijith46","ghost","bridgetkalinda","maali9","ramanan2017","kiyaGu","mhallaq","supertata","elsahib20","NawalC","cobrac2001","FatimaAbdimalik","OBakir90","erol-g","shaimaa-stack","halitos","Taslima26","SULAIMAN-100","Leidagandy","Iman-feisali","Hedyeh65","AlanaTheQueen","bash93","shahdalhaj","Buchraatkeh1984","zision71","FarhanaFKhan","roza8765","tintax01","Bek0o0","azadaafo"]},{name:"Scotland",tracker:"https://docs.google.com/spreadsheets/d/12HcEzJKENgAcEeVN3X-zo-LrwX10MFpF3UX8L86nnwI/edit#gid=1726249445",students:["andsemenov","Arasko87","hacersk","ismihan34","mara-ber","AaishaMohamad","Munish909","r4c00n4","NataliaCoder","Ruthsuleiman","Sportysam2000","dreamycodex","zuhalzuhal"]},{name:"Birmingham",tracker:"https://docs.google.com/spreadsheets/d/1EWtTEGuu8Or0RLMEYM72RBsbhz7fL4WBOEQCZhQ_bEA/edit#gid=1726249445",students:["nouri89","Ade0211","AliHaider-1","numbthumb","bireworld","carterd888","davibaweja","edksam","ISTANBULBEKLE","fwrat-94","GTabala","g1st","HadiyahL","Hiba-CYF","Jamesdiop","leroy-douglas","MartinBoylan","murselaysan","NihalAli2","nos6","lolabakk","osagiestar","pchan2","sadatakhtar","Tedros-Ghebrekirstos","zubedauk"]},{name:"All",tracker:"",students:[]}],K=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={pullData:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://preview.cyf.illicitonion.com/"+this.props.pull.base.repo.full_name+"/files/"+this.props.pull.number,{headers:new Headers({Accept:"application/json",Authorization:"Bearer ".concat(this.props.token)})}).then((function(e){return e.json()})).then((function(t){e.setState({pullData:t})}))}},{key:"getFolderNameFromPath",value:function(e){var t=e.split("/"),n=t[t.length-2];return void 0===n?t[0]:n}},{key:"getFolderAndFileNameFromPath",value:function(e){var t=e.split("/"),n=t[t.length-2],a=t[t.length-1];return void 0===n?t[0]:n+"/"+a}},{key:"getHTMLButtons",value:function(){var e=this;return void 0===this.state.pullData||0===this.state.pullData.length?this.getLoading():this.state.pullData.filter((function(e){return e.path.includes(".html")})).map((function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm m-1",key:t.path,href:t.href,target:"_blank",rel:"noopener noreferrer"},e.getFolderNameFromPath(t.path))}))}},{key:"getLoading",value:function(){return r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}},{key:"getOtherButtons",value:function(){var e=this;return void 0===this.state.pullData||0===this.state.pullData.length?this.getLoading():this.state.pullData.filter((function(e){return!1===e.path.includes(".html")})).map((function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm m-1",key:t.path,href:t.href,target:"_blank",rel:"noopener noreferrer"},e.getFolderAndFileNameFromPath(t.path))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"font-weight-light"},"Projects"),r.a.createElement("h3",{className:"font-weight-light"},"Websites"),r.a.createElement("div",null,this.getHTMLButtons()),r.a.createElement("h3",{className:"font-weight-light"},"Supporting Files"),r.a.createElement("div",null,this.getOtherButtons()))}}]),n}(r.a.Component),J=Object(l.e)(K),Q={Add:Object(a.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))}))},X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).columns=[{defaultSortOrder:"asc",render:function(e,t){var n=e.labels.some((function(e){return"reviewed"===e.name})),a=e.assignees[0];return n?r.a.createElement("div",{className:"btn btn-success btn-sm"},"Reviewed"):null!=a?r.a.createElement("div",{className:"btn btn-warning btn-sm"},"In Review ",r.a.createElement("br",null),"by ",a.login):r.a.createElement("div",{className:"btn btn-success btn-sm"},"To Review")}},{render:function(e,t){return e.labels.some((function(e){return"graded"===e.name}))?r.a.createElement("div",{className:"btn btn-success btn-sm"},"Graded"):r.a.createElement("div",null)}},{title:"Title",field:"title"},{title:"Student",field:"user.login",render:function(e){return r.a.createElement("a",{href:"#",onClick:function(){a.props.onStudentClicked(e.user.login)}},e.user.login)}},{title:"School",render:function(e){var t="Unknown";return Y.forEach((function(n){n.students.includes(e.user.login)&&(t=n.name)})),t.toString()}},{title:"Submitted",field:"created_at",defaultSort:"asc",render:function(e){return a.dateToString(new Date(e.created_at))}},{title:"Homework Module",field:"base.repo.name",render:function(e){return r.a.createElement("a",{href:e.base.repo.html_url},e.base.repo.name)}},{render:function(e){return r.a.createElement("div",{className:"btn btn-primary btn",role:"button",target:"_blank",rel:"noopener noreferrer",onClick:function(){a.props.onReviewClicked(e)}},"Review Homework")}}],a.options={search:a.props.search||!0,pageSize:a.props.size||20,defaultExpanded:!0,headerStyle:{zIndex:0}},a.state={columns:a.columns,options:a.options},a}return Object(u.a)(n,[{key:"dateToString",value:function(e){var t=e.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getDate(),r=e.getHours(),o=e.getMinutes();return a+" "+n+" "+t+" "+this.formatTime(r)+":"+this.formatTime(o)}},{key:"formatTime",value:function(e){return("0"+e).slice(-2)}},{key:"onViewPullRequestClicked",value:function(e){this.props.onClick(e)}}]),Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{icons:Q,columns:this.state.columns,data:this.props.data,title:"",isLoading:this.props.isLoading,options:this.state.options,onRowClick:function(t,n,a){return e.props.onReviewClicked(n)}})}}]),n}(r.a.Component),Z=Object(l.e)(X),$=["html-css-project","js-exercises","HTML-CSS-Homework"],ee=n(150),te=n.n(ee),ne=n(102),ae=n.n(ne),re={Add:Object(a.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))}))},oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).columns=[{title:"Project Name",field:"longName"},{title:"Success",field:"success"},{render:function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",href:"https://cyf-".concat(e.props.studentName,"-").concat(t.shortName,".netlify.com"),role:"button",target:"_blank",rel:"noopener noreferrer"},"View Live")}},{render:function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",href:"https://github.com/".concat(e.props.studentName,"/").concat(t.repoName),role:"button",target:"_blank",rel:"noopener noreferrer"},"View on Github")}}],e.options={search:!1,pageSize:8,defaultExpanded:!0},e}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){return r.a.createElement(f.a,{icons:re,columns:this.columns,data:this.props.data,title:"",isLoading:this.props.isLoading,options:this.options})}}]),n}(r.a.Component),ie=(Object(l.e)(oe),[{repoName:"responsive-cake-webpage",shortName:"cakes",longName:"Responsive Cake Website"},{repoName:"karma-clone",shortName:"karma-clone",longName:"Karma Clone"},{repoName:"responsive-grid-project",shortName:"grid",longName:"Responsive Grid Website"},{repoName:"p5js-minimal",shortName:"p5js",longName:"P5JS"},{repoName:"js-exercises",shortName:"alarm-clock",longName:"Alarm Clock"},{repoName:"js-exercises",shortName:"quotes",longName:"Quote Generator"},{repoName:"js-exercises",shortName:"slideshow",longName:"Image Slideshow"},{repoName:"tv-show-dom-project",shortName:"tv",longName:"Television Shows"}]),se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={data:ie,school:{}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){ae.a.setAppElement("#root")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.student.name&&e.student.login!==this.props.student.login&&(this.getAverageHomeworkScore(),this.setState({school:this.getSchoolFromUsername(this.props.student.login)}))}},{key:"getProjectsOnline",value:function(){var e=this;this.state.data.forEach((function(t,n){fetch("https://cyf-".concat(e.props.student.login,"-").concat(t.shortName,".netlify.com")).then((function(a){t.success=200===a.status;var r=e.state.data;r[n]=t,e.setState({data:r})})).catch((function(e){console.log(e)}))}))}},{key:"getProjectDetails",value:function(){return ie.map((function(e){return e}))}},{key:"getStudentName",value:function(){var e=null===this.props.student.name?this.props.student.login:this.props.student.name;return void 0===e?"Loading...":this.toTitleCase(e)}},{key:"toTitleCase",value:function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}},{key:"closeModal",value:function(){this.props.closeModal()}},{key:"getSchoolFromUsername",value:function(e){return void 0===e?"Loading...":(Y.forEach((function(n){n.students.includes(e)&&(t=n)})),t);var t}},{key:"getPullRequestsForStudent",value:function(e){return this.props.pullRequestData.filter((function(t){return t.user.login===e}))}},{key:"getAverageHomeworkScore",value:function(){var e=this;this.props.studentRepo.getHomeworkForStudentByName(this.props.student.login,(function(t){var n=0;t.forEach((function(e){n+=e.result}));var a=(n/t.length).toFixed(2);e.setState({averageHomeworkScore:a})}))}},{key:"getStudentColumn",value:function(e){return r.a.createElement("div",null,r.a.createElement("img",{className:"align-self-start mr-3",height:"128",width:"128",src:this.props.student.avatar_url,alt:this.getStudentName()+"'s Avatar"}),r.a.createElement("h3",{className:"mt-0"},this.getStudentName()),r.a.createElement("p",null,"School: ",e.name,r.a.createElement("br",null),"Student Tracker:"," ",r.a.createElement("a",{href:e.tracker,target:"_blank",rel:"noopener noreferrer"},"Link"),r.a.createElement("br",null),"Github Profile:"," ",r.a.createElement("a",{href:this.props.student.html_url,target:"_blank",rel:"noopener noreferrer"},"Link"),r.a.createElement("br",null)),r.a.createElement("hr",null),r.a.createElement("h3",{className:"font-weight-light"},"Average Score"),this.state.averageHomeworkScore)}},{key:"getDetailsColumn",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h2",{className:"font-weight-light"},"Open Pull Requests"),r.a.createElement(Z,{onClick:function(t){e.onViewPullRequestClick(t)},size:5,search:!1,data:this.getPullRequestsForStudent(this.props.student.login)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(ae.a,{isOpen:this.props.showModal,onRequestClose:function(){e.closeModal()},contentLabel:"Example Modal"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 rightRuleColumn"},this.getStudentColumn(this.state.school)),r.a.createElement("div",{className:"col-10"},this.getDetailsColumn()))))}}]),n}(r.a.Component),le=Object(l.e)(se),ce=n(448),ue=n.n(ce),he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){ae.a.setAppElement("#root")}},{key:"closeModal",value:function(){this.props.closeModal()}},{key:"copyToClipboard",value:function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=this.getGitCommand(e),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},{key:"getGitCommand",value:function(e){return'git fetch origin "+pull/'.concat(e,"/head:pull/").concat(e,'/head" && git checkout "refs/heads/pull/').concat(e,'/head"')}},{key:"getGitCommandButton",value:function(){var e=this;return r.a.createElement(g.a,{isOpen:this.state["isGitPopoverOpen"+this.props.pullRequest.number],position:"top",content:r.a.createElement("div",{className:"card shadow my-1"},r.a.createElement("div",{className:"card-body p-2"},r.a.createElement("p",null,"Copied to clipboard!"),r.a.createElement("p",null,"Paste into a terminal to retrieve pull request."))),onClickOutside:function(){var t={};t["isGitPopoverOpen"+e.props.pullRequest.number]=!1,e.setState(t)}},r.a.createElement("div",{className:"btn btn-primary m-1 min-200",onClick:function(){e.copyToClipboard(e.props.pullRequest.number);var t={};t["isGitPopoverOpen"+e.props.pullRequest.number]=!0,e.setState(t)}},"Copy Git Pull Command"))}},{key:"getViewSourceButton",value:function(){return r.a.createElement("a",{className:"btn btn-primary m-1 min-200",href:"https://www.gitpod.io/#"+this.props.pullRequest.html_url,role:"button",target:"_blank",rel:"noopener noreferrer"},"View Source Online")}},{key:"getViewStudentButton",value:function(){var e=this;return r.a.createElement("div",{className:"btn btn-primary m-1 min-200",role:"button",target:"_blank",rel:"noopener noreferrer",onClick:function(){e.props.onViewStudentClicked(e.props.pullRequest.head.user.login)}},"View Student")}},{key:"getFeedbackButton",value:function(){return r.a.createElement("a",{className:"btn btn-primary m-1 min-200",href:"https://www.gitpod.io/#"+this.props.pullRequest.html_url,role:"button",target:"_blank",rel:"noopener noreferrer"},"View Source Online")}},{key:"getOpenPullRequestButton",value:function(){return r.a.createElement("a",{className:"btn btn-primary m-1 min-200 btn-lg",href:this.props.pullRequest.html_url,role:"button",target:"_blank",rel:"noopener noreferrer"},"View Pull Request")}},{key:"getGradeButton",value:function(){return r.a.createElement("a",{className:"btn btn-primary m-1 min-200 btn-lg",href:this.props.school.tracker,target:"_blank",rel:"noopener noreferrer"},"Give Feedback")}},{key:"getPullBody",value:function(){return this.props.pullRequest.body.replace(/\n/gi,"\n\n")}},{key:"render",value:function(){var e=this;return r.a.createElement(ae.a,{isOpen:this.props.showModal,style:{content:{backgroundColor:"#fff",borderRadius:5,maxWidth:1e3,minHeight:300,margin:"0 auto",padding:30}},onRequestClose:function(){e.closeModal()},contentLabel:"Example Modal"},!0===this.props.showModal?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-body p-3"},r.a.createElement("h1",{className:"font-weight-light"},this.props.pullRequest.title),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9 rightRuleColumn"},r.a.createElement("div",{className:"code"},r.a.createElement(ue.a,{source:this.getPullBody(),escapeHtml:!1})),r.a.createElement(J,{pull:this.props.pullRequest,token:this.props.token})),r.a.createElement("div",{className:"col-3"},this.getOpenPullRequestButton(),this.getGradeButton(),r.a.createElement("hr",null),this.getGitCommandButton(),this.getViewSourceButton(),this.getViewStudentButton())))):null)}}]),n}(r.a.Component),de=Object(l.e)(he),me=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(ae.a,{style:{content:{backgroundColor:"#fff",borderRadius:5,maxWidth:1e3,minHeight:300,margin:"0 auto",padding:30}},isOpen:this.props.showModal,onRequestClose:function(){e.props.closeModal()},contentLabel:"Example Modal"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"First Time Here?"),r.a.createElement("p",{className:"lead"},"Thank you for helping mark our students homework. Homework feedback provides the backbone of our tracking of our students progress and is vital in order to encourage growth and build confidence in our students."),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"1. Read the guide"),r.a.createElement("p",null,"The guide gives high level information and what we're trying to achieve with the feedback that we give and the steps required to fully mark the homework."),r.a.createElement("p",null,"You can read the full guide"," ",r.a.createElement("a",{href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback",target:"_blank",rel:"noopener noreferrer"},"here")),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"2. Choose your city"),r.a.createElement("p",null,"In the previous screen you can select the school that you volunteer with. You are - of course - welcome to mark the homework of our any of our students but we suggest sticking to a single school to start off with."),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"3. Give feedback"),r.a.createElement("p",null,"On each of row of the table below you can find"),r.a.createElement("ul",null,r.a.createElement("li",null,"Information about the homework"),r.a.createElement("li",null,"A link to view the source code in an online editor"),r.a.createElement("li",null,"A link to the students pull request")),r.a.createElement("p",null,"Peer review style feedback should be given to the student on their pull requests. Please read the guide above for full guidelines. You should make sure to tag the homework correctly when you have reviewed it."),r.a.createElement("p",null,"See"," ",r.a.createElement("a",{href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback#labelling-the-pull-request",target:"_blank",rel:"noopener noreferrer"},"here")," ","for more information."),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"4. Give a grade"),r.a.createElement("p",null,"It is very important that when you finish giving feedback on a students homework that you record the results in the tracking spreadsheet. These are city specific and you can find the link to your cities in the card below."),r.a.createElement("p",null,"Record the grade here"),r.a.createElement("div",null,r.a.createElement("a",{className:"btn btn-primary",href:this.props.school.tracker,target:"_blank",rel:"noopener noreferrer"},"Record grade")),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"Questions"),r.a.createElement("p",null,"Speak to your Class Coordinator or Chris Owen."),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.hideOnboarding()}},"Close"))))}}]),n}(r.a.Component),fe=Object(l.e)(me),pe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={isLoading:!1,data:[],school:"None",showOnboarding:!1,studentModal:{show:!1,student:{}},reviewModal:{show:!1,pullRequest:{}}},a.githubRepo=a.props.githubRepo,a.authRepo=a.props.authRepo,a.studentRepo=a.props.studentRepo,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;this.setState({isLoading:!0});var n=te.a.load("chosenSchool");null!=n&&this.setState({school:this.getSchoolFromName(n)}),this.setSchoolFromParams(),this.authRepo.registerOnAuthListener((function(n){n?e.githubRepo.setToken().then((function(t){e.loadHomeworkRepos(),e.setStudentFromParams()})):t.replace("/CYFHomeworkTracker/login")}),(function(){t.replace("/CYFHomeworkTracker/login")}),(function(e){console.log(e)}))}},{key:"setSchoolFromParams",value:function(){var e=new URLSearchParams(window.location.search).get("school");null!==e&&this.setState({school:this.getSchoolFromName(e)})}},{key:"setStudentFromParams",value:function(){var e=new URLSearchParams(window.location.search).get("student");null!==e&&this.onStudentClicked(e)}},{key:"loadHomeworkRepos",value:function(){var e=this;this.githubRepo.getAllHomeworkToReview($).then((function(t){e.setState({isLoading:!1,data:t})}))}},{key:"setSchool",value:function(e){te.a.save("chosenSchool",e,{path:"/"}),this.setState({school:this.getSchoolFromName(e)})}},{key:"getSchoolFromName",value:function(e){return Y.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()}))[0]}},{key:"getDataForSchool",value:function(e){return this.state.data.filter((function(t){return"All"===e.name||e.students.includes(t.user.login)}))}},{key:"hideOnboarding",value:function(){te.a.save("onboardingShown",!1,{path:"/"}),this.setState({showOnboarding:!1})}},{key:"showOnboarding",value:function(){te.a.save("onboardingShown",!0,{path:"/"}),this.setState({showOnboarding:!0})}},{key:"onStudentClicked",value:function(e){var t=this;this.githubRepo.getStudent(e).then((function(e){console.log(e.data),t.setState({studentModal:{show:!0,student:e.data}})}))}},{key:"onReviewClicked",value:function(e){!1===te.a.load("onboardingShown")&&this.showOnboarding(),this.setState({reviewModal:{show:!0,pullRequest:e}})}},{key:"getNavigation",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand font-weight-light"},"CodeYourFuture Homework Tracker"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback",target:"_blank",rel:"noopener noreferrer"},"Feedback Guide"))))))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"background-body"},this.getNavigation(),r.a.createElement(de,{showModal:this.state.reviewModal.show,pullRequest:this.state.reviewModal.pullRequest,token:this.githubRepo.getToken(),school:this.state.school,onViewStudentClicked:function(t){console.log(t),e.onStudentClicked(t)},closeModal:function(){e.setState({reviewModal:{show:!1,pullRequest:e.state.reviewModal.pullRequest}})}}),r.a.createElement(le,{student:this.state.studentModal.student,githubRepo:this.githubRepo,school:this.state.school,showModal:this.state.studentModal.show,pullRequestData:this.state.data,studentRepo:this.studentRepo,closeModal:function(){e.setState({studentModal:{show:!1,student:e.state.studentModal.student}})}}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"Welcome to the Homework Tracker"),r.a.createElement("p",{className:"lead"},"Select your school:"),r.a.createElement("div",null,Y.map((function(t){return r.a.createElement("button",{key:t.name,className:e.state.school.name===t.name?"btn btn-primary":"btn btn-outline-primary",onClick:function(){return e.setSchool(t.name)}},t.name)}))),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Need some tips?"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e.showOnboarding()}},"Show Onboarding"))))),"None"===this.state.school?null:r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"Students"),this.state.school.students.map((function(t){return r.a.createElement("button",{key:t,className:"btn btn-outline-secondary btn-sm m-1",onClick:function(){e.onStudentClicked(t)}},t)}))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"Remember to give a grade"),r.a.createElement("p",null,"It's important that you give a grade on the students homework so that we can track their development and growth over the course."),r.a.createElement("p",null,"You can find a guide on how grade homework"," ",r.a.createElement("a",{href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback#2-homework-grading",target:"_blank",rel:"noopener noreferrer"},"here")),r.a.createElement("p",null,"Give feedback here:"),r.a.createElement("div",null,r.a.createElement("a",{className:"btn btn-primary",href:this.state.school.tracker,target:"_blank",rel:"noopener noreferrer"},"Give Feedback"))))),r.a.createElement("div",{className:"container"},r.a.createElement(Z,{isLoading:this.state.isLoading,data:this.getDataForSchool(this.state.school),token:this.githubRepo.getToken(),onReviewClicked:function(t){e.onReviewClicked(t)},onStudentClicked:function(t){e.onStudentClicked(t)}})),r.a.createElement(fe,{hideOnboarding:function(){e.hideOnboarding()},showModal:this.state.showOnboarding,school:this.state.school,closeModal:function(){e.setState({showOnboarding:!1})}})))}}]),n}(r.a.Component),ge=Object(l.e)(pe),be=n(90),ve=n.n(be),ke=(n(696),n(698),{apiKey:"AIzaSyAMog4hpMuZVXjWZT5zw5HXaYLq_dF61Ho",authDomain:"cyfhomeworktracker.firebaseapp.com",databaseURL:"https://cyfhomeworktracker.firebaseio.com",projectId:"cyfhomeworktracker",storageBucket:"cyfhomeworktracker.appspot.com",messagingSenderId:"708461557840",appId:"1:708461557840:web:2449c2f1daabec198f3955",measurementId:"G-ZE8EQM853K"}),we=function e(){var t=this;Object(c.a)(this,e),this.currentUser=function(){return t.auth.currentUser},this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignInWithGithub=function(){return t.auth.signInWithPopup(t.githubProvider)},this.doSignInAnonymous=function(){return t.auth.signInAnonymously()},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"/CYFHomeworkTracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged((function(t){t?e(t):n()}))},this.users=function(){return t.db.collection("users")},this.students=function(){return t.db.collection("students")},this.getStudentByName=function(e){return t.students().where("githubName","==",e)},ve.a.initializeApp(ke),this.serverValue=ve.a.firestore.ServerValue,this.emailAuthProvider=ve.a.auth.EmailAuthProvider,this.auth=ve.a.auth(),this.db=ve.a.firestore(),this.db.enablePersistence().catch((function(e){console.log(e.toString())})),this.googleProvider=new ve.a.auth.GoogleAuthProvider,this.facebookProvider=new ve.a.auth.FacebookAuthProvider,this.twitterProvider=new ve.a.auth.TwitterAuthProvider,this.githubProvider=new ve.a.auth.GithubAuthProvider},Ee=n(96),ye=n(60),Oe=n(449),Se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).state={loading:!1};var r=a.props.history;return a.handleInputChange=a.handleInputChange.bind(Object(ye.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(ye.a)(a)),a.authRepo=a.props.authRepo,a.authRepo.registerOnAuthListener((function(e){e&&(r.push("/CYFHomeworkTracker/"),a.showToast("User Logged In. Welcome "+e.email))}),(function(){}),(function(e){console.log(e)})),a}return Object(u.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.name;this.setState(Object(Ee.a)({},n,t.value))}},{key:"handleSubmit",value:function(e){var t=this;this.setState({loading:!0}),e.preventDefault(),this.authRepo.doSignInWithGithub((function(e){t.showToast("Something went wrong. Call Chris."),t.setState({loading:!1})}))}},{key:"showToast",value:function(e){Object(Oe.a)(e,{autoClose:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"row no-gutter"},r.a.createElement("div",{class:"d-none d-md-flex col-md-4 col-lg-6 bg-image"}),r.a.createElement("div",{class:"col-md-8 col-lg-6 white-background"},r.a.createElement("div",{class:"login d-flex align-items-center py-5"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-9 col-lg-8 mx-auto"},r.a.createElement("h3",{class:"login-heading mb-4"},"Welcome to the CodeYourFuture Homework Tracker"),r.a.createElement("form",null,r.a.createElement("button",{class:"btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2",type:"submit",onClick:this.handleSubmit},"Sign in with Github")))))))))}}]),n}(r.a.Component),Ne=Object(l.e)(Se),Re=function(){function e(t){Object(c.a)(this,e),this.firebase=t}return Object(u.a)(e,[{key:"registerOnAuthListener",value:function(e,t,n){this.firebase.onAuthUserListener((function(n){n?e(n):t()}),(function(e){t()}))}},{key:"doSignInWithGithub",value:function(e){var t=this;this.firebase.doSignInWithGithub().then((function(e){t.token=e.credential.accessToken;var n={token:e.credential.accessToken};t.firebase.users().doc(e.user.uid).set(n)})).catch((function(t){e(t)}))}},{key:"getCurrentUser",value:function(){return this.firebase.currentUser()}},{key:"logout",value:function(){this.firebase.doSignOut()}},{key:"getToken",value:function(){return this.firebase.users().doc(this.getCurrentUser().uid).get().then((function(e){return e.data().token}))}}]),e}(),je=n(453),Ce=function(){function e(t){Object(c.a)(this,e),this.authRepo=t}return Object(u.a)(e,[{key:"setToken",value:function(){var e=this;return this.authRepo.getToken().then((function(t){e.token=t,e.octokit=new je.a({userAgent:"CyfHomeworkTracker",auth:t,log:{debug:function(){},info:function(){},warn:console.warn,error:console.error},request:{agent:void 0,fetch:void 0,timeout:0}})}))}},{key:"getToken",value:function(){return this.token}},{key:"getStudent",value:function(e){return this.octokit.users.getByUsername({username:e})}},{key:"getAllHomework",value:function(e,t){return this.octokit.pulls.list({owner:"CodeYourFuture",repo:e,per_page:100,page:t}).catch((function(e){console.log(e)}))}},{key:"getHomeworkToReview",value:function(e,t){var n=this;return this.getAllHomework(e,t).then((function(e){return e.data.filter((function(e){return n.isNotReviewed(e)}))})).catch((function(e){console.log(e)}))}},{key:"getAllHomeworkToReview",value:function(e){var t=this,n=e.map((function(e){return t.getHomeworkToReview(e,1)})),a=e.map((function(e){return t.getHomeworkToReview(e,2)})),r=e.map((function(e){return t.getHomeworkToReview(e,3)}));return n=(n=n.concat(a)).concat(r),Promise.all(n).then((function(e){return console.log(e),t.flatten(e)}))}},{key:"getAllHomeworkToReviewForSchool",value:function(e,t){return this.getAllHomeworkToReview(e).then((function(e){return"Unknown"===t?e:e.filter((function(e){return t.students.contains(e.user.login)}))}))}},{key:"flatten",value:function(e){var t=this;return e.reduce((function(e,n){return e.concat(Array.isArray(n)?t.flatten(n):n)}),[])}},{key:"isNotReviewed",value:function(e){var t=e.labels;return void 0===t||0===t.length||!1===e.labels.some((function(e){return"reviewed"===e.name.toLowerCase()}))}}]),e}(),Pe=function(){function e(t){Object(c.a)(this,e),this.firebase=t}return Object(u.a)(e,[{key:"getAttendanceForStudentByName",value:function(e,t){this.getDetailsForStudentByName(e,"attendance",t)}},{key:"getHomeworkForStudentByName",value:function(e,t){this.getDetailsForStudentByName(e,"homework",t)}},{key:"getDetailsForStudentByName",value:function(e,t,n){this.firebase.getStudentByName(e).get().then((function(e){return e.docs[0].ref})).then((function(e){return e.collection(t).get()})).then((function(e){var t=e.docs.map((function(e){return e.data()}));n(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}}]),e}(),Ae=new we,Te=new Pe(Ae),Fe=new Re(Ae),Me=new Ce(Fe),He=r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{exact:!0,path:"/CYFHomeworkTracker/",component:function(){return r.a.createElement(ge,{githubRepo:Me,authRepo:Fe,studentRepo:Te})}}),r.a.createElement(l.a,{path:"/CYFHomeworkTracker/login",component:function(){return r.a.createElement(Ne,{authRepo:Fe})}})));i.a.render(He,document.getElementById("root"))}},[[459,1,2]]]);
//# sourceMappingURL=main.bd4cec2c.chunk.js.map