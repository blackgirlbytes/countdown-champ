(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){},36:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(31),l=n.n(s),c=n(9),o=n(10),r=n(13),u=n(11),d=n(14),h=(n(20),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.getTimeUntil(e.props.deadline)},1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),i=Math.floor(t/36e5%24),s=Math.floor(t/864e5);this.setState({days:s,hours:i,minutes:a,seconds:n})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"Clock-days"},this.leading0(this.state.days)," days"),i.a.createElement("div",{className:"Clock-hours"},this.leading0(this.state.hours)," hours"),i.a.createElement("div",{className:"Clock-minutes"},this.leading0(this.state.minutes)," minutes"),i.a.createElement("div",{className:"Clock-seconds"},this.leading0(this.state.seconds)," seconds"))}}]),t}(a.Component)),m=n(80),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={deadline:"December 25, 2019",newDeadline:""},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"changeDeadline",value:function(){this.setState({deadline:this.state.newDeadline})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-title"},"Countdown to ",this.state.deadline),i.a.createElement("div",null,i.a.createElement(h,{deadline:this.state.deadline})),i.a.createElement("div",null,i.a.createElement(m.a,{className:"Deadline-input",placeholder:"new date",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),i.a.createElement("button",{onClick:function(){return e.changeDeadline()}},"Submit")))}}]),t}(a.Component);l.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.7ac5b233.chunk.js.map