(this["webpackJsonpcyf-homework-tracker"]=this["webpackJsonpcyf-homework-tracker"]||[]).push([[0],{407:function(e,t,a){e.exports=a(535)},412:function(e,t,a){},413:function(e,t,a){},535:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),s=a(90),c=a(99),l=(a(412),a(21)),u=a(30),h=a(32),d=a(31),m=(a(413),a(197)),f=a.n(m),b=a(392),g=a.n(b),p=a(217),v=a.n(p),k=a(227),w=a.n(k),E=a(218),y=a.n(E),O=a(225),j=a.n(O),S=a(137),R=a.n(S),N=a(136),C=a.n(N),P=a(219),T=a.n(P),A=a(220),F=a.n(A),L=a(222),H=a.n(L),I=a(223),_=a.n(I),M=a(224),U=a.n(M),D=a(228),x=a.n(D),G=a(221),W=a.n(G),z=a(226),q=a.n(z),V=a(229),B=a.n(V),Y=[{name:"London",tracker:"https://docs.google.com/spreadsheets/d/1B_08AtHWy8FwGnfjTmj5TzuNKtBf2ov31BFPnJs2DR0/edit#gid=1726249445",students:["ferhatu","Hamidreza-Fakharzadeh","minwwgo","yusuf963","Rayhan94","Sonjide","TamBahri","cyeburu","Hanifix","HarrisSheraz20","279Roxana","sabia-m","abbasmokhtari","Jreo123","kiowd","SCavus","tayfuntayfun","AKaramifar","AlexeyBrambalov","naderakhgari","leealex88","Alisina92","banirezaie","cockochan","abcelen","babakjahangiri","ellietms","sugunum","mahmutsel","melanieet","AlexandruBudaca","byohannes","Erwin6997","mnashawati","tanianm"]},{name:"Manchester",tracker:"https://docs.google.com/spreadsheets/d/1o70LeHJfe8VzMQzv7hKfDV3qzuKpX9cNfB7houm9XQQ/edit#gid=1726249445",students:["Vijith46","ghost","bridgetkalinda","maali9","ramanan2017","kiyaGu","mhallaq","supertata","elsahib20","NawalC","cobrac2001","FatimaAbdimalik","OBakir90","erol-g","shaimaa-stack","halitos","Taslima26","SULAIMAN-100","Leidagandy","Iman-feisali","Hedyeh65","AlanaTheQueen","bash93","shahdalhaj","Buchraatkeh1984","zision71","FarhanaFKhan","roza8765","tintax01","Bek0o0","azadaafo"]},{name:"Scotland",tracker:"https://docs.google.com/spreadsheets/d/12HcEzJKENgAcEeVN3X-zo-LrwX10MFpF3UX8L86nnwI/edit#gid=1726249445",students:["andsemenov","Arasko87","hacersk","ismihan34","mara-ber","AaishaMohamad","Munish909","r4c00n4","NataliaCoder","Ruthsuleiman","Sportysam2000","dreamycodex","zuhalzuhal"]},{name:"Birmingham",tracker:"https://docs.google.com/spreadsheets/d/1EWtTEGuu8Or0RLMEYM72RBsbhz7fL4WBOEQCZhQ_bEA/edit#gid=1726249445",students:["nouri89","Ade0211","AliHaider-1","numbthumb","bireworld","carterd888","davibaweja","edksam","ISTANBULBEKLE","fwrat-94","GTabala","g1st","HadiyahL","Hiba-CYF","Jamesdiop","leroy-douglas","MartinBoylan","murselaysan","NihalAli2","nos6","lolabakk","osagiestar","pchan2","sadatakhtar","Tedros-Ghebrekirstos","zubedauk"]},{name:"All",tracker:"",students:[]}],K=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={pullData:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://preview.cyf.illicitonion.com/"+this.props.pull.base.repo.full_name+"/files/"+this.props.pull.number,{headers:new Headers({Accept:"application/json",Authorization:"Bearer ".concat(this.props.token)})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({pullData:t})}))}},{key:"getFolderNameFromPath",value:function(e){var t=e.split("/");console.log(t);var a=t[t.length-2];return void 0===a?t[0]:a}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.pullData.filter((function(e){return e.path.includes(".html")})).map((function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm m-1",key:t.path,href:t.href,target:"_blank"},e.getFolderNameFromPath(t.path))})))}}]),a}(r.a.Component),J=Object(c.e)(K),Q={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(q.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))}))},X=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).columns=[{defaultSortOrder:"asc",render:function(e,t){var a=e.labels.some((function(e){return"reviewed"===e.name})),n=e.assignees[0];return a?r.a.createElement("div",{className:"btn btn-success btn-sm"},"Reviewed"):null!=n?r.a.createElement("div",{className:"btn btn-warning btn-sm"},"In Review ",r.a.createElement("br",null),"by ",n.login):r.a.createElement("div",{className:"btn btn-success btn-sm"},"To Review")}},{render:function(e,t){return e.labels.some((function(e){return"graded"===e.name}))?r.a.createElement("div",{className:"btn btn-success btn-sm"},"Graded"):r.a.createElement("div",null)}},{title:"Title",field:"title"},{title:"Student",field:"user.login",render:function(e){return r.a.createElement("a",{href:e.user.html_url},e.user.login)}},{title:"School",render:function(e){var t="Unknown";return Y.forEach((function(a){a.students.includes(e.user.login)&&(t=a.name)})),t.toString()}},{title:"Submitted",field:"created_at",defaultSort:"asc",render:function(e){return n.dateToString(new Date(e.created_at))}},{title:"Homework Module",field:"base.repo.name",render:function(e){return r.a.createElement("a",{href:e.base.repo.html_url},e.base.repo.name)}},{render:function(e){return r.a.createElement("a",{className:"btn btn-outline-primary btn-sm",href:"https://www.gitpod.io/#"+e.html_url,role:"button",target:"_blank",rel:"noopener noreferrer",onClick:function(){n.onViewPullRequestClicked(e.id)}},"View Source")}},{render:function(e){return r.a.createElement(g.a,{isOpen:n.state["isGitPopoverOpen"+e.number],position:"top",content:r.a.createElement("div",{className:"card shadow my-1"},r.a.createElement("div",{className:"card-body p-2"},r.a.createElement("p",null,"Copied to clipboard!"),r.a.createElement("p",null,"Paste into a terminal to retrieve pull request."))),onClickOutside:function(){var t={};t["isGitPopoverOpen"+e.number]=!1,n.setState(t)}},r.a.createElement("div",{className:"btn btn-outline-primary btn-sm",onClick:function(){n.copyToClipboard(e.number);var t={};t["isGitPopoverOpen"+e.number]=!0,n.setState(t)}},"Copy Git Command"))}},{render:function(e){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",href:e.html_url,role:"button",target:"_blank",rel:"noopener noreferrer",onClick:function(){n.onViewPullRequestClicked(e.id)}},"View Pull Request")}}],n.options={search:n.props.search||!0,pageSize:n.props.size||20,defaultExpanded:!0,headerStyle:{zIndex:1}},n.state={columns:n.columns,options:n.options},n}return Object(u.a)(a,[{key:"copyToClipboard",value:function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=this.getGitCommand(e),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},{key:"getGitCommand",value:function(e){return'git fetch origin "+pull/'.concat(e,"/head:pull/").concat(e,'/head" && git checkout "refs/heads/pull/').concat(e,'/head"')}},{key:"dateToString",value:function(e){var t=e.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],n=e.getDate(),r=e.getHours(),o=e.getMinutes();return n+" "+a+" "+t+" "+this.formatTime(r)+":"+this.formatTime(o)}},{key:"formatTime",value:function(e){return("0"+e).slice(-2)}},{key:"onViewPullRequestClicked",value:function(e){this.props.onClick(e)}}]),Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{icons:Q,columns:this.state.columns,data:this.props.data,title:"",isLoading:this.props.isLoading,options:this.state.options,detailPanel:function(t){return r.a.createElement(J,{pull:t,token:e.props.token})}})}}]),a}(r.a.Component),Z=Object(c.e)(X),$=["html-css-project","js-exercises","HTML-CSS-Homework"],ee=a(138),te=a.n(ee),ae=a(230),ne=a.n(ae),re={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(q.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))}))},oe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).columns=[{title:"Project Name",field:"longName"},{title:"Success",field:"success"},{render:function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",href:"https://cyf-".concat(e.props.studentName,"-").concat(t.shortName,".netlify.com"),role:"button",target:"_blank",rel:"noopener noreferrer"},"View Live")}},{render:function(t){return r.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",href:"https://github.com/".concat(e.props.studentName,"/").concat(t.repoName),role:"button",target:"_blank",rel:"noopener noreferrer"},"View on Github")}}],e.options={search:!1,pageSize:8,defaultExpanded:!0},e}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){return r.a.createElement(f.a,{icons:re,columns:this.columns,data:this.props.data,title:"",isLoading:this.props.isLoading,options:this.options})}}]),a}(r.a.Component),ie=Object(c.e)(oe),se=[{repoName:"responsive-cake-webpage",shortName:"cakes",longName:"Responsive Cake Website"},{repoName:"karma-clone",shortName:"karma-clone",longName:"Karma Clone"},{repoName:"responsive-grid-project",shortName:"grid",longName:"Responsive Grid Website"},{repoName:"p5js-minimal",shortName:"p5js",longName:"P5JS"},{repoName:"js-exercises",shortName:"alarm-clock",longName:"Alarm Clock"},{repoName:"js-exercises",shortName:"quotes",longName:"Quote Generator"},{repoName:"js-exercises",shortName:"slideshow",longName:"Image Slideshow"},{repoName:"tv-show-dom-project",shortName:"tv",longName:"Television Shows"}],ce=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:se},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;void 0!==this.props.student.name&&e.student.login!==this.props.student.login&&this.state.data.forEach((function(e,a){fetch("https://cyf-".concat(t.props.student.login,"-").concat(e.shortName,".netlify.com")).then((function(n){console.log(n),e.success=200===n.status;var r=t.state.data;r[a]=e,t.setState({data:r})})).catch((function(e){console.log(e)}))}))}},{key:"getProjectDetails",value:function(){return se.map((function(e){return e}))}},{key:"getStudentName",value:function(){var e=null===this.props.student.name?this.props.student.login:this.props.student.name;return void 0===e?"Loading...":this.toTitleCase(e)}},{key:"toTitleCase",value:function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}},{key:"closeModal",value:function(){this.props.closeModal()}},{key:"getSchoolFromUsername",value:function(e){return void 0===e?"Loading...":(Y.forEach((function(a){a.students.includes(e)&&(t=a)})),t);var t}},{key:"getPullRequestsForStudent",value:function(e){return this.props.pullRequestData.filter((function(t){return t.user.login===e}))}},{key:"render",value:function(){var e=this,t=this.getSchoolFromUsername(this.props.student.login);return r.a.createElement(ne.a,{isOpen:this.props.showModal,onRequestClose:function(){e.closeModal()},contentLabel:"Example Modal"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"media"},r.a.createElement("img",{class:"align-self-start mr-3",height:"128",width:"128",src:this.props.student.avatar_url,alt:this.getStudentName()+"'s Avatar"}),r.a.createElement("div",{class:"media-body"},r.a.createElement("h3",{class:"mt-0"},this.getStudentName()),r.a.createElement("p",null,"School: ",t.name,r.a.createElement("br",null),"Student Tracker:"," ",r.a.createElement("a",{href:t.tracker,target:"_blank"},"Link"),r.a.createElement("br",null),"Github Profile:"," ",r.a.createElement("a",{href:this.props.student.html_url,target:"_blank"},"Link"))))),r.a.createElement("hr",null),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{className:"font-weight-light"},"Open Pull Requests"),r.a.createElement(Z,{onClick:function(t){e.onViewPullRequestClick(t)},size:5,search:!1,data:this.getPullRequestsForStudent(this.props.student.login)})),r.a.createElement("hr",null),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{className:"font-weight-light"},"Projects"),r.a.createElement(ie,{data:this.getProjectDetails(),studentName:this.props.student.login})))}}]),a}(r.a.Component),le=Object(c.e)(ce),ue=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(ne.a,{isOpen:this.props.showModal,onRequestClose:function(){e.props.closeModal()},contentLabel:"Example Modal"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"First Time Here?"),r.a.createElement("p",{className:"lead"},"Thank you for helping mark our students homework. Homework feedback provides the backbone of our tracking of our students progress and is vital in order to encourage growth and build confidence in our students."),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"1. Read the guide"),r.a.createElement("p",null,"The guide gives high level information and what we're trying to achieve with the feedback that we give and the steps required to fully mark the homework."),r.a.createElement("p",null,"You can read the full guide"," ",r.a.createElement("a",{href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback",target:"_blank"},"here")),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"2. Choose your city"),r.a.createElement("p",null,"In the previous screen you can select the school that you volunteer with. You are - of course - welcome to mark the homework of our any of our students but we suggest sticking to a single school to start off with."),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"3. Give feedback"),r.a.createElement("p",null,"On each of row of the table below you can find"),r.a.createElement("ul",null,r.a.createElement("li",null,"Information about the homework"),r.a.createElement("li",null,"A link to view the source code in an online editor"),r.a.createElement("li",null,"A link to the students pull request")),r.a.createElement("p",null,"Peer review style feedback should be given to the student on their pull requests. Please read the guide above for full guidelines. You should make sure to tag the homework correctly when you have reviewed it."),r.a.createElement("p",null,"See"," ",r.a.createElement("a",{href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback#labelling-the-pull-request",target:"_blank"},"here")," ","for more information."),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"4. Give a grade"),r.a.createElement("p",null,"It is very important that when you finish giving feedback on a students homework that you record the results in the tracking spreadsheet. These are city specific and you can find the link to your cities in the card below."),r.a.createElement("p",null,"Record the grade here"),r.a.createElement("div",null,r.a.createElement("a",{className:"btn btn-primary",href:this.props.school.tracker,target:"_blank",rel:"noopener noreferrer"},"Record grade")),r.a.createElement("br",null),r.a.createElement("h3",{className:"font-weight-light"},"Questions"),r.a.createElement("p",null,"Speak to your Class Coordinator or Chris Owen."),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.hideOnboarding()}},"Close")))))}}]),a}(r.a.Component),he=Object(c.e)(ue),de=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isLoading:!1,data:[],school:"None",showOnboarding:!1,showModal:!1,student:{}},n.githubRepo=n.props.githubRepo,n.authRepo=n.props.authRepo,n.reviewRepo=n.props.reviewRepo,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;this.setState({isLoading:!0});var a=te.a.load("chosenSchool");null!=a&&this.setState({school:this.getSchoolFromName(a)}),this.setSchoolFromParams(),this.authRepo.registerOnAuthListener((function(a){console.log("user"),a?e.githubRepo.setToken().then((function(t){e.loadHomeworkRepos(),e.setStudentFromParams()})):t.replace("/CYFHomeworkTracker/login")}),(function(){t.replace("/CYFHomeworkTracker/login")}),(function(e){console.log(e)}))}},{key:"setSchoolFromParams",value:function(){var e=new URLSearchParams(window.location.search).get("school");null!==e&&this.setState({school:this.getSchoolFromName(e)})}},{key:"setStudentFromParams",value:function(){var e=new URLSearchParams(window.location.search).get("student");null!==e&&this.onStudentClicked(e)}},{key:"loadHomeworkRepos",value:function(){var e=this;this.githubRepo.getAllHomeworkToReview($).then((function(t){e.setState({isLoading:!1,data:t})}))}},{key:"setSchool",value:function(e){te.a.save("chosenSchool",e,{path:"/"}),this.setState({school:this.getSchoolFromName(e)})}},{key:"getSchoolFromName",value:function(e){return Y.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()}))[0]}},{key:"getDataForSchool",value:function(e){return this.state.data.filter((function(t){return"All"===e.name||e.students.includes(t.user.login)}))}},{key:"hideOnboarding",value:function(){te.a.save("onboardingShown",!1,{path:"/"}),this.setState({showOnboarding:!1})}},{key:"showOnboarding",value:function(){te.a.save("onboardingShown",!0,{path:"/"}),this.setState({showOnboarding:!0})}},{key:"onStudentClicked",value:function(e){var t=this;this.setState({showModal:!0}),this.githubRepo.getStudent(e).then((function(e){console.log(e.data),t.setState({student:e.data})}))}},{key:"onViewPullRequestClick",value:function(e){!1===te.a.load("onboardingShown")&&this.showOnboarding(),this.reviewRepo.reportRepoInReview(e,"Chris")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"background-body"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"CodeYourFuture Homework Tracker"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback",target:"_blank"},"Feedback Guide")))))),r.a.createElement(le,{student:this.state.student,githubRepo:this.githubRepo,school:this.state.school,showModal:this.state.showModal,pullRequestData:this.state.data,closeModal:function(){e.setState({showModal:!1})}}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"Welcome to the Homework Tracker"),r.a.createElement("p",{className:"lead"},"Select your school:"),r.a.createElement("div",null,Y.map((function(t){return r.a.createElement("button",{key:t.name,className:e.state.school.name===t.name?"btn btn-primary":"btn btn-outline-primary",onClick:function(){return e.setSchool(t.name)}},t.name)}))),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Need some tips?"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e.showOnboarding()}},"Show Onboarding"))))),"None"===this.state.school?null:r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"Students"),this.state.school.students.map((function(t){return r.a.createElement("button",{key:t,className:"btn btn-outline-secondary btn-sm m-1",onClick:function(){e.onStudentClicked(t)}},t)}))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card border-0 shadow my-5"},r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("h1",{className:"font-weight-light"},"Remember to give a grade"),r.a.createElement("p",null,"It's important that you give a grade on the students homework so that we can track their development and growth over the course."),r.a.createElement("p",null,"You can find a guide on how grade homework"," ",r.a.createElement("a",{href:"https://docs.codeyourfuture.io/volunteers/education/homework-feedback#2-homework-grading",target:"_blank",rel:"noopener noreferrer"},"here")),r.a.createElement("p",null,"Give feedback here:"),r.a.createElement("div",null,r.a.createElement("a",{className:"btn btn-primary",href:this.state.school.tracker,target:"_blank",rel:"noopener noreferrer"},"Give Feedback"))))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(Z,{isLoading:this.state.isLoading,data:this.getDataForSchool(this.state.school),token:this.githubRepo.getToken(),onClick:function(t){e.onViewPullRequestClick(t)}})),r.a.createElement(he,{hideOnboarding:function(){e.hideOnboarding()},showModal:this.state.showOnboarding,school:this.state.school,closeModal:function(){e.setState({showOnboarding:!1})}})))}}]),a}(r.a.Component),me=Object(c.e)(de),fe=a(85),be=a.n(fe),ge=(a(516),a(518),{apiKey:"AIzaSyAMog4hpMuZVXjWZT5zw5HXaYLq_dF61Ho",authDomain:"cyfhomeworktracker.firebaseapp.com",databaseURL:"https://cyfhomeworktracker.firebaseio.com",projectId:"cyfhomeworktracker",storageBucket:"cyfhomeworktracker.appspot.com",messagingSenderId:"708461557840",appId:"1:708461557840:web:2449c2f1daabec198f3955",measurementId:"G-ZE8EQM853K"}),pe=function e(){var t=this;Object(l.a)(this,e),this.currentUser=function(){return t.auth.currentUser},this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignInWithGithub=function(){return t.auth.signInWithPopup(t.githubProvider)},this.doSignInAnonymous=function(){return t.auth.signInAnonymously()},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"/CYFHomeworkTracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged((function(t){t?e(t):a()}))},this.users=function(){return t.db.collection("users")},this.inUseData=function(){return t.db.collection("inUseData")},be.a.initializeApp(ge),this.serverValue=be.a.firestore.ServerValue,this.emailAuthProvider=be.a.auth.EmailAuthProvider,this.auth=be.a.auth(),this.db=be.a.firestore(),this.db.enablePersistence().catch((function(e){console.log(e.toString())})),this.googleProvider=new be.a.auth.GoogleAuthProvider,this.facebookProvider=new be.a.auth.FacebookAuthProvider,this.twitterProvider=new be.a.auth.TwitterAuthProvider,this.githubProvider=new be.a.auth.GithubAuthProvider},ve=a(92),ke=a(80),we=a(394),Ee=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!1},console.log("Login");var r=n.props.history;return n.handleInputChange=n.handleInputChange.bind(Object(ke.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ke.a)(n)),n.authRepo=n.props.authRepo,n.authRepo.registerOnAuthListener((function(e){console.log(e),e&&(r.push("/CYFHomeworkTracker/"),n.showToast("User Logged In. Welcome "+e.email))}),(function(){}),(function(e){console.log(e)})),n}return Object(u.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name;this.setState(Object(ve.a)({},a,t.value))}},{key:"handleSubmit",value:function(e){var t=this;this.setState({loading:!0}),e.preventDefault(),this.authRepo.doSignInWithGithub((function(e){t.showToast("Something went wrong. Call Chris."),t.setState({loading:!1})}))}},{key:"showToast",value:function(e){Object(we.a)(e,{autoClose:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"row no-gutter"},r.a.createElement("div",{class:"d-none d-md-flex col-md-4 col-lg-6 bg-image"}),r.a.createElement("div",{class:"col-md-8 col-lg-6 white-background"},r.a.createElement("div",{class:"login d-flex align-items-center py-5"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-9 col-lg-8 mx-auto"},r.a.createElement("h3",{class:"login-heading mb-4"},"Welcome to the CodeYourFuture Homework Tracker"),r.a.createElement("form",null,r.a.createElement("button",{class:"btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2",type:"submit",onClick:this.handleSubmit},"Sign in with Github")))))))))}}]),a}(r.a.Component),ye=Object(c.e)(Ee),Oe=function(){function e(t){Object(l.a)(this,e),this.firebase=t}return Object(u.a)(e,[{key:"registerOnAuthListener",value:function(e,t,a){this.firebase.onAuthUserListener((function(a){a?e(a):t()}),(function(e){t()}))}},{key:"doSignInWithGithub",value:function(e){var t=this;this.firebase.doSignInWithGithub().then((function(e){console.log(e),t.token=e.credential.accessToken;var a={token:e.credential.accessToken};t.firebase.users().doc(e.user.uid).set(a)})).catch((function(t){e(t)}))}},{key:"getCurrentUser",value:function(){return this.firebase.currentUser()}},{key:"logout",value:function(){this.firebase.doSignOut()}},{key:"getToken",value:function(){return console.log("CURRENT_USER "+this.getCurrentUser().uid),this.firebase.users().doc(this.getCurrentUser().uid).get().then((function(e){return console.log("TOKEN "+e.data().token),e.data().token}))}}]),e}(),je=a(399),Se=function(){function e(t){Object(l.a)(this,e),this.authRepo=t}return Object(u.a)(e,[{key:"setToken",value:function(){var e=this;return this.authRepo.getToken().then((function(t){e.token=t,e.octokit=new je.a({userAgent:"CyfHomeworkTracker",auth:t,log:{debug:function(){},info:function(){},warn:console.warn,error:console.error},request:{agent:void 0,fetch:void 0,timeout:0}})}))}},{key:"getToken",value:function(){return this.token}},{key:"getStudent",value:function(e){return this.octokit.users.getByUsername({username:e})}},{key:"getAllHomework",value:function(e,t){return this.octokit.pulls.list({owner:"CodeYourFuture",repo:e,per_page:100,page:t}).catch((function(e){console.log(e)}))}},{key:"getHomeworkToReview",value:function(e,t){var a=this;return this.getAllHomework(e,t).then((function(e){return e.data.filter((function(e){return a.isNotReviewed(e)}))})).catch((function(e){console.log(e)}))}},{key:"getAllHomeworkToReview",value:function(e){var t=this,a=e.map((function(e){return t.getHomeworkToReview(e,1)})),n=e.map((function(e){return t.getHomeworkToReview(e,2)})),r=e.map((function(e){return t.getHomeworkToReview(e,3)}));return a=(a=a.concat(n)).concat(r),Promise.all(a).then((function(e){return console.log(e),t.flatten(e)}))}},{key:"getAllHomeworkToReviewForSchool",value:function(e,t){return this.getAllHomeworkToReview(e).then((function(e){return"Unknown"===t?e:e.filter((function(e){return t.students.contains(e.user.login)}))}))}},{key:"flatten",value:function(e){var t=this;return e.reduce((function(e,a){return e.concat(Array.isArray(a)?t.flatten(a):a)}),[])}},{key:"isNotReviewed",value:function(e){var t=e.labels;return void 0===t||0===t.length||!1===e.labels.some((function(e){return"reviewed"===e.name.toLowerCase()}))}}]),e}(),Re=function(){function e(t){Object(l.a)(this,e),this.firebase=t}return Object(u.a)(e,[{key:"reportRepoInReview",value:function(e,t){var a={id:e,name:t,time:Date.now()};this.firebase.inUseData().doc(e.toString()).set(a)}},{key:"registerForDataChanges",value:function(e){this.inUseData.doc("SF").onSnapshot((function(t){var a=t.map((function(e){return{id:e.id,name:e.name,time:e.time}}));e(a)}))}}]),e}(),Ne=new pe,Ce=new Re(Ne),Pe=new Oe(Ne),Te=new Se(Pe),Ae=r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/CYFHomeworkTracker/",component:function(){return r.a.createElement(me,{githubRepo:Te,authRepo:Pe,reviewRepo:Ce})}}),r.a.createElement(c.a,{path:"/CYFHomeworkTracker/login",component:function(){return r.a.createElement(ye,{authRepo:Pe})}})));i.a.render(Ae,document.getElementById("root"))}},[[407,1,2]]]);
//# sourceMappingURL=main.a7b65589.chunk.js.map