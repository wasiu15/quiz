(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var i,s,a=n(1),c=n.n(a),o=n(60),r=n.n(o),l=(n(66),n(17)),u=n(3),d=(n(67),n(68),n(0)),j=(n(77),function(e){var t=e.game_type;return Object(d.jsx)("div",{className:"Single"==t?"rules_container":"m_rules_container",children:Object(d.jsxs)("div",{className:"info_box",children:[Object(d.jsx)("div",{className:"info-title",children:Object(d.jsx)("span",{children:"Some Rules of this Quiz"})}),Object(d.jsxs)("div",{className:"info-list purple",children:[Object(d.jsx)("span",{className:"info-number",children:"1."}),Object(d.jsx)("div",{className:"info",children:"Single"==t?Object(d.jsxs)("p",{children:["You will have only ",Object(d.jsx)("span",{children:"15 seconds"})," for each question."]}):Object(d.jsxs)("p",{children:["To host a game: Copy the Booking code then click on"," ",Object(d.jsx)("span",{children:"Create Game"}),' send the code to your partner"']})}),Object(d.jsx)("span",{className:"info-number",children:"2."}),Object(d.jsx)("div",{className:"info",children:"Single"==t?"Once you select your answer, it can't be undone.":Object(d.jsxs)("p",{children:["To Join a game: Click on ",Object(d.jsx)("span",{children:"Join Game"})," then enter the code from partner"]})}),Object(d.jsx)("span",{className:"info-number",children:"3."}),Object(d.jsx)("div",{className:"info",children:"Single"==t?"You can't exit from the Quiz while you're playing.":Object(d.jsxs)("p",{children:["You will have only ",Object(d.jsx)("span",{children:"15 seconds"})," for each question."]})}),Object(d.jsx)("span",{className:"info-number",children:"4."}),Object(d.jsx)("div",{className:"info",children:"Single"==t?"You can't select any option once time goes off.":"You can only select an answer when its your turn to play. This will be indicated on the top left corner."}),Object(d.jsx)("span",{className:"info-number",children:"5."}),Object(d.jsx)("div",{className:"info",children:"Single"==t?"You'll get points on the basis of your correct answers.":"Try to select an option before the time runs out. So, you don't keep your partner waiting."}),Object(d.jsx)("span",{}),Object(d.jsx)("p",{className:"setCenter",children:"Happy Gaming :)"})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("a",{href:"https://yos-quiz.herokuapp.com/",className:"quit btn",children:"Exit Quiz"}),Object(d.jsx)(l.b,{to:"Single"==t?"/quiz_page":"/m_quiz",className:"restart btn",children:"Continue"})]})]})})}),b=n(25),h=n(2),m=(n(37),function(e){var t=e.correctAnswerMarker,n=e.totalQuestions,i=(e.navigateStart,e.navigateQuit,t),s="and congrats! \ud83c\udf89 You got "+i+" out of "+n,a="and nice \ud83d\ude0e You got "+i+" out of "+n,c="and sorry \ud83d\ude10 You got only "+i+" out of "+n;return Object(d.jsx)("div",{className:"result_container",children:Object(d.jsxs)("div",{className:"result_box",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-crown"})}),Object(d.jsx)("div",{className:"complete_text",children:"You've completed the Quiz!"}),Object(d.jsx)("div",{className:"score_text",children:Object(d.jsx)("span",{children:i>7?s:i>5?a:c})}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("a",{href:"https://yos-quiz.herokuapp.com/m_quiz",className:"restart btn",children:"Replay Quiz"}),Object(d.jsx)("a",{href:"https://yos-quiz.herokuapp.com/",className:"quit btn",children:"Quit Quiz"})]})]})})}),O=(n(78),n(18),"https://yos-quiz.herokuapp.com/"),p="https://yos-quiz.herokuapp.com/",x=!1,f=0,v=0,N="doOnce",y=0,g=function(e){var t=e.questions,n=Object(a.useState)(t[0].question),s=Object(h.a)(n,2),c=s[0],o=s[1],r=a.useState.apply(void 0,Object(b.a)(t[0].options)),l=Object(h.a)(r,2),u=l[0],j=l[1],g=Object(a.useState)(0),w=Object(h.a)(g,2),k=w[0],S=w[1],_=Object(a.useState)(""),q=Object(h.a)(_,2),C=q[0],T=q[1],A=Object(a.useState)(!1),z=Object(h.a)(A,2),I=z[0],B=z[1],E=Object(a.useState)(!1),Q=Object(h.a)(E,2),D=Q[0],W=Q[1],Y=Object(a.useState)(!1),J=Object(h.a)(Y,2),L=J[0],R=J[1],G=document.querySelector(".time_line"),M=document.querySelector(".quiz_box"),P=Object(a.useState)(!1),U=Object(h.a)(P,2),F=U[0],H=U[1],Z=Object(a.useState)(15),K=Object(h.a)(Z,2),V=K[0],X=K[1],$=Object(a.useState)(0),ee=Object(h.a)($,2),te=ee[0],ne=ee[1];return Object(a.useEffect)((function(){var e;e=t[k],o(1+k+". "+e.question),j(e.options),B(e.answer),ne(document.querySelector(".quiz_box").clientHeight)}),[k]),ie(),document.querySelector(".quiz_box")&&0===te&&ne(document.querySelector(".quiz_box").clientHeight),F?Object(d.jsx)(m,{correctAnswerMarker:f,totalQuestions:t.length,navigateStart:function(){window.location=p},navigateQuit:function(){window.location=O}}):Object(d.jsx)("div",{className:"single_container",children:Object(d.jsxs)("div",{className:"quiz_box single_quiz",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("div",{className:"title",children:"YOS QUIZ"}),Object(d.jsxs)("div",{className:"timer",children:[Object(d.jsx)("div",{className:"time_left_txt",children:"Time Left"}),Object(d.jsx)("div",{className:"timer_sec",children:V})]}),Object(d.jsx)("div",{className:"time_line"})]}),Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{className:"que_text",children:Object(d.jsx)("span",{children:c})}),Object(d.jsx)("div",{className:"option_list",children:Object(d.jsxs)("div",{className:"option_list",children:[Object(d.jsxs)("div",{className:x?se("A")?"option correct disabled":ae("A")?"option incorrect disabled":"option disabled":"option",onClick:function(){return ce("A")},children:[Object(d.jsx)("span",{children:u[0]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]}),Object(d.jsxs)("div",{className:x?se("B")?"option correct disabled":ae("B")?"option incorrect disabled":"option disabled":"option",onClick:function(){return ce("B")},children:[Object(d.jsx)("span",{children:u[1]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]}),Object(d.jsxs)("div",{className:x?se("C")?"option correct disabled":ae("C")?"option incorrect disabled":"option disabled":"option",onClick:function(){return ce("C")},children:[Object(d.jsx)("span",{children:u[2]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]}),Object(d.jsxs)("div",{className:x?se("D")?"option correct disabled":ae("D")?"option incorrect disabled":"option disabled":"option",onClick:function(){return ce("D")},children:[Object(d.jsx)("span",{children:u[3]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]})]})})]}),Object(d.jsxs)("footer",{children:[Object(d.jsx)("div",{className:"total_que",children:Object(d.jsxs)("span",{children:[Object(d.jsx)("p",{children:k+1})," of ",Object(d.jsx)("p",{children:t.length})," ","Questions"]})}),Object(d.jsx)("button",{className:D&&k+1<t.length?"next_btn btn":"hidden",onClick:function(){x=!1,y++,k<=t.length&&(S(k+1),W(!1),R(!1),G.style.width="0px",X(15),N="doOnce",ie())},children:"Next Yos"}),Object(d.jsx)("button",{className:L?"next_btn btn":"hidden",onClick:function(){H(!0)},children:"Finish"})]})]})});function ie(){!function(e){if(e){var t=29*e/15,n=15;clearInterval(window.timerInterval),window.timerInterval=setInterval((function(){n>0?(n--,X(n)):ce("Z")}),t)}}(function(){if(G&&"doOnce"===N){var e=function(){t++,G.style.width=t+"px",t===n&&clearInterval(i)};N="stop";var t=0;G.style.width="0px";var n=M.clientWidth;return i=setInterval(e,29),n}}())}function se(e){return e===C&&C===I&&(0===v&&(f++,v++),3===++v&&(v=0)),e===I}function ae(e){return e===C&&C!==I}function ce(e){console.log(""),x=!0,T(e),clearInterval(window.timerInterval),clearInterval(i),k+1<t.length&&W(!0),y===t.length-1&&R(!0)}},w=(n(96),function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(d.jsx)("div",{className:"game_type",children:""!==n?Object(d.jsx)(j,{game_type:n}):Object(d.jsxs)("div",{className:"full",children:[Object(d.jsxs)("div",{className:"start_btn",children:[Object(d.jsx)("button",{className:"start_link game_btn",onClick:function(){return s("Single")},children:"Single Player"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"start_link game_btn",onClick:function(){return s("Multi")},children:"Multi PLayer"})]}),Object(d.jsx)("p",{className:"designedBy",children:"Designed by: Alfred"})]})});function s(e){i(e)}}),k=n(28),S=n.n(k),_=function(e){var t=e.homeScore,n=e.awayScore,i=e.player,s=e.playerName,a=e.navigateStart,c=e.navigateQuit,o="and congrats! \ud83c\udf89 "+s+" You Won! "+t+" - "+n,r="its a draw \ud83d\ude0e "+s+" : "+t+" - "+n,l="and sorry \ud83d\ude10 You lost "+s+" : "+t+" - "+n,u=!1,j=!1;return"home"==i?t>n?u=!0:t==n&&(j=!0):"away"==i&&(n>t?u=!0:t==n&&(j=!0)),Object(d.jsx)("div",{className:"result_container change_bgToPurple",children:Object(d.jsxs)("div",{className:"result_box",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-crown"})}),Object(d.jsx)("div",{className:"complete_text",children:"You've completed the Quiz!"}),Object(d.jsx)("div",{className:"score_text",children:Object(d.jsx)("span",{children:u?o:j?r:l})}),Object(d.jsxs)("div",{className:"buttons multi_btn",children:[Object(d.jsx)("button",{onClick:a,className:"restart btn",children:"Replay Quiz"}),Object(d.jsx)("button",{onClick:c,className:"quit btn",children:"Quit Quiz"})]})]})})},q=S()(),C=!1,T=0,A="doOnce",z=0,I=!1,B=!0,E="home",Q=0,D=0,W=!1,Y={},J=[],L=[],R=!0,G=function(e){var t=e.questions,n=e.player,i=e.homeName,c=e.awayName,o=e.playerName,r=e.bookingCode,l=Object(a.useState)(t[0].question),u=Object(h.a)(l,2),j=u[0],m=u[1],p=a.useState.apply(void 0,Object(b.a)(t[0].options)),x=Object(h.a)(p,2),f=x[0],v=x[1],N=Object(a.useState)(),y=Object(h.a)(N,2),g=y[0],w=y[1],k=Object(a.useState)(0),S=Object(h.a)(k,2),G=S[0],M=S[1],P=Object(a.useState)(""),U=Object(h.a)(P,2),F=U[0],H=U[1],Z=Object(a.useState)(!1),K=Object(h.a)(Z,2),V=K[0],X=K[1],$=Object(a.useState)(!1),ee=Object(h.a)($,2),te=ee[0],ne=ee[1],ie=Object(a.useState)(!1),se=Object(h.a)(ie,2),ae=se[0],ce=se[1],oe=document.querySelector(".time_line"),re=document.querySelector(".quiz_box"),le=Object(a.useState)(!1),ue=Object(h.a)(le,2),de=ue[0],je=ue[1],be=Object(a.useState)(15),he=Object(h.a)(be,2),me=he[0],Oe=he[1],pe=Object(a.useState)(0),xe=Object(h.a)(pe,2),fe=xe[0],ve=xe[1],Ne=Object(a.useState)(""),ye=Object(h.a)(Ne,2),ge=ye[0],we=ye[1],ke=Object(a.useState)(),Se=Object(h.a)(ke,2),_e=Se[0],qe=Se[1],Ce=Object(a.useState)(i),Te=Object(h.a)(Ce,2),Ae=Te[0],ze=Te[1],Ie=Object(a.useState)(c),Be=Object(h.a)(Ie,2),Ee=Be[0],Qe=Be[1],De=n,We=Object(a.useState)(""),Ye=Object(h.a)(We,2),Je=Ye[0],Le=Ye[1],Re=Object(a.useState)(!1),Ge=Object(h.a)(Re,2),Me=Ge[0],Pe=Ge[1];function Ue(){n==E&&(ae&&V==ge&&(D+=1),W=!1,q.emit("message",{stage:"2",player:n,bookingCode:r,numb:g,p2SelectedOption:ge,correctAnswer:V,isCorrect:W,sendGameIsOver:false}))}return Object(a.useEffect)((function(){B&&("home"==n?qe(!1):"away"==n&&qe(!0)),n!==E&&Xe()}),[j]),Object(a.useEffect)((function(){var e;e=t[G],m(1+G+". "+e.question),v(e.options),X(e.answer),w(e.numb),ve(document.querySelector(".quiz_box").clientHeight)}),[G]),He(),document.querySelector(".quiz_box")&&0===fe&&ve(document.querySelector(".quiz_box").clientHeight),Object(a.useEffect)((function(){R&&(""==i&&ze("Home"),""==c&&Qe("Away"),R=!1),q.on("message",(function(e){r===e.bookingCode&&(Y={player:e.player,number:e.numb,isCorrect:e.isCorrect},"home"==e.player?J.push(Y):"away"==e.player&&L.push(Y),""!==n&&(B||n!==e.player&&!I)&&function(e){de||(Q=$e(J),D=$e(L));H(e),Ve(e),qe(!1),C=!0,I=!0}(e.p2SelectedOption)),"3"==e.stage&&r==e.bookingCode&&e.disconnected&&(Le("Partner Disconnected"),Fe(),ce(!0),ne(!1))}))})),de?Object(d.jsx)(_,{homeScore:Q,awayScore:D,player:n,playerName:o,navigateStart:function(){window.location="HOME_URL.urlGame"},navigateQuit:function(){window.location=O}}):Object(d.jsxs)("div",{className:"m_quiz_container",children:[Object(d.jsxs)("div",{className:"whoseTurnDiv",children:[Object(d.jsx)("p",{className:"home",children:Me?"":"home"==De?"home"==E?Ae+" Turn":"":"home"==E?"":Ee+" Turn"}),Object(d.jsx)("span",{className:Me?"messageBox":"hidden",children:Je}),Object(d.jsx)("p",{className:"away",children:Me?"":"home"==De?"home"==E?"":Ee+" Turn":"home"==E?Ae+" Turn":""})]}),Object(d.jsxs)("div",{className:"quiz_box",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("div",{className:"title",children:"YOS QUIZ"}),Object(d.jsxs)("div",{className:"timer",children:[Object(d.jsx)("div",{className:"time_left_txt",children:"Time Left"}),Object(d.jsx)("div",{className:"timer_sec",children:me})]}),Object(d.jsx)("div",{className:"time_line"})]}),Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{className:"que_text",children:Object(d.jsx)("span",{children:j})}),Object(d.jsx)("div",{className:"option_list",children:Object(d.jsxs)("div",{className:"option_list",children:[Object(d.jsxs)("div",{className:_e?"option disabled":C?Ze("A")?"option correct disabled":Ke("A")?"option incorrect disabled":"option disabled":"option",onClick:function(){return Ve("A")},children:[Object(d.jsx)("span",{children:f[0]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]}),Object(d.jsxs)("div",{className:_e?"option disabled":C?Ze("B")?"option correct disabled":Ke("B")?"option incorrect disabled":"option disabled":"option",onClick:function(){return Ve("B")},children:[Object(d.jsx)("span",{children:f[1]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]}),Object(d.jsxs)("div",{className:_e?"option disabled":C?Ze("C")?"option correct disabled":Ke("C")?"option incorrect disabled":"option disabled":"option",onClick:function(){return Ve("C")},children:[Object(d.jsx)("span",{children:f[2]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]}),Object(d.jsxs)("div",{className:_e?"option disabled":C?Ze("D")?"option correct disabled":Ke("D")?"option incorrect disabled":"option disabled":"option",onClick:function(){return Ve("D")},children:[Object(d.jsx)("span",{children:f[3]}),Object(d.jsx)("div",{className:"icon tick hidden",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("div",{className:"icon cross hidden",children:Object(d.jsx)("i",{className:"fas fa-times"})})]})]})})]}),Object(d.jsxs)("footer",{children:[Object(d.jsx)("div",{className:"total_que",children:Object(d.jsxs)("span",{children:[Object(d.jsx)("p",{children:G+1})," of ",Object(d.jsx)("p",{children:t.length})," ","Questions"]})}),Object(d.jsx)("button",{className:te&&G+1<t.length?"next_btn btn":"hidden",onClick:function(){I=!1,B=!1,!1,C=!1,z++,n==E&&Ue();!function(){E="home"==E?"away":"home";n==E?(qe(!1),C=!1):qe(!0);G<=t.length&&(M(G+1),ne(!1),ce(!1),oe.style.width="0px",Oe(15),A="doOnce",He())}()},children:"Next Yos"}),Object(d.jsx)("button",{className:ae?"next_btn btn":"hidden",onClick:function(){Ue(),je(!0)},children:"Result"})]})]})]});function Fe(){Pe(!0),setTimeout((function(){Pe(!1)}),9e3)}function He(){!function(e){if(e){var t=29*e/15,n=15;clearInterval(window.timerInterval),window.timerInterval=setInterval((function(){n>0?(n--,Oe(n)):(Ve("Z"),Le("Timed Out!"),Fe())}),t)}}(function(){if(oe&&"doOnce"===A){var e=function(){t++,oe.style.width=t+"px",t===n&&clearInterval(s)};A="stop";var t=0;oe.style.width="0px";var n=re.clientWidth;return s=setInterval(e,29),n}}())}function Ze(e){return e===F&&F===V&&(0===T&&T++,2===++T&&(T=0)),e===V}function Ke(e){return e===F&&F!==V}function Ve(e){console.log(""),C=!0,H(e),we(e),Xe(),G+1<t.length&&ne(!0),z===t.length-1&&ce(!0)}function Xe(){clearInterval(window.timerInterval),clearInterval(s)}function $e(e){var t=[];return e.forEach((function(e){1==e.isCorrect&&t.push(e.number)})),Object(b.a)(new Set(t)).length}},M=(n(126),[]),P=!0,U="",F=function(e){var t=e.allQuestions,n="",i=Object(a.useState)(!0),s=Object(h.a)(i,2),c=s[0],o=s[1],r=Object(a.useState)(!0),l=Object(h.a)(r,2),u=l[0],j=l[1],b=Object(a.useState)(""),m=Object(h.a)(b,2),O=m[0],p=m[1],x=Object(a.useState)(""),f=Object(h.a)(x,2),v=f[0],N=f[1],y=Object(a.useState)(!0),g=Object(h.a)(y,2),w=g[0],k=g[1],_=Object(a.useState)(""),q=Object(h.a)(_,2),C=q[0],T=q[1],A=Object(a.useState)(""),z=Object(h.a)(A,2),I=z[0],B=z[1],E=Object(a.useState)(!1),Q=Object(h.a)(E,2),D=Q[0],W=Q[1],Y=Object(a.useState)(!1),J=Object(h.a)(Y,2),L=J[0],R=J[1],F=Object(a.useState)(!1),H=Object(h.a)(F,2),Z=H[0],K=H[1],V=Object(a.useState)(!1),X=Object(h.a)(V,2),$=X[0],ee=X[1],te=Object(a.useState)(!1),ne=Object(h.a)(te,2),ie=ne[0],se=ne[1],ae=!1,ce="",oe=Object(a.useState)(""),re=Object(h.a)(oe,2),le=re[0],ue=re[1],de=!1,je=!1,be=S()();function he(){be.emit("message",{stage:"1",isGetBooking:P})}function me(){de&&"waiting for pair"==ce&&(be.emit("message",{stage:"1",bookingCode:le,connectionStatus:ce,concatQuestionNumber:n,player:O,playerName:v}),ae=!0,de=!1),je&&"want to pair"==ce&&be.emit("message",{stage:"1",playerName:v,bookingCode:le,connectionStatus:ce})}return Object(a.useEffect)((function(){be.on("message",(function(e){P?(ue(e),U=e,P=!1):(je||ae)&&("paired"==e.connectionStatus&&e.bookingCode==le?(T(e.homeName),B(e.awayName),ae?(o(!0),p("home")):(n=e.concatQuestionNumber,n.split(" , ").forEach((function(e){t.forEach((function(t){t.numb==e&&M.push(t)}))})),je=!1,o(!0),p("away"))):(je=!1,ee(e.details),se(!0),W(!0),j(!1)))}))})),Object(d.jsx)("div",{className:"multi_container",children:w?Object(d.jsxs)("div",{className:"full",children:[Object(d.jsx)("div",{className:L?"notification fade-out":"hidden_fade",children:"Please, enter your nickname"}),Object(d.jsxs)("div",{className:"join-grp-container",children:[Object(d.jsxs)("div",{className:"join-grp-div",children:[Object(d.jsx)("h2",{children:"Welcome"}),Object(d.jsx)("input",{onChange:function(e){return N(e.target.value)},type:"text",maxLength:"8",placeholder:"nickname..."}),Object(d.jsx)("button",{class:"btn",onClick:function(){""!==v?(he(),k(!1),o(!1),W(!0)):R(!0);pe()},children:"Continue"})]}),Object(d.jsx)("button",{className:"btnJoin",onClick:function(){he(),o(!1),k(!1),W(!0),pe()},children:"Skip"})]}),Object(d.jsx)("p",{className:"designedBy",children:"Designed by: Alfred"})]}):c?Object(d.jsx)(G,{questions:M,player:O,playerName:v,homeName:C,awayName:I,bookingCode:le}):Object(d.jsxs)("div",{className:"full",children:[Object(d.jsx)("div",{className:D?"notification fade-out":"hidden_fade",children:ie?$:Z?"waiting for your partner to connect":u?"Send the code bolow to your partner":$}),Z?Object(d.jsxs)("div",{className:"loader-container",children:[Object(d.jsx)("div",{className:"loader"}),Object(d.jsx)("span",{children:"waiting for partner..."})]}):"",u?""==le?Object(d.jsxs)("div",{className:"loader-container",children:[Object(d.jsx)("div",{className:"loader"}),Object(d.jsx)("span",{children:"loading..."})]}):Object(d.jsxs)("div",{className:"join-grp-container",children:[Object(d.jsxs)("div",{className:"join-grp-div",children:[Object(d.jsx)("h2",{children:"Booking Code"}),Object(d.jsx)("input",{type:"text",value:le,readOnly:!0}),Object(d.jsx)("button",{class:"btn",onClick:function(){ce="waiting for pair";var e=0;M=[],n=" , ",t.forEach((function(t){e<8&&(M.push(t),n=n+" , "+t.numb),e++})),de=!0,me(),K(!0),W(!0),ee("Send the booking code to your partner to Join Game"),se(!0),setTimeout((function(){se(!0)}),9e3),setTimeout((function(){se(!1)}),1e3)},children:"Create Game"})]}),Object(d.jsx)("button",{className:"btnJoin",onClick:Oe,children:"Join Game"})]}):Object(d.jsxs)("div",{className:"join-grp-container",children:[Object(d.jsxs)("div",{className:"join-grp-div",children:[Object(d.jsx)("h2",{children:"Booking Code"}),Object(d.jsx)("input",{value:le,onChange:function(e){ue(e.target.value)},placeholder:"LSDF24"}),Object(d.jsx)("button",{class:"btn",onClick:function(){""==le?(je=!1,ee("enter the booking code from your partner"),se(!0),W(!0),j(!1)):"["==le[0]?(je=!1,se(!0),W(!0),j(!1),ee("please, refresh the page and get a new code")):(ce="want to pair",je=!0,me(),W(!0))},children:"Join Now"})]}),Object(d.jsx)("button",{className:"btnJoin",onClick:Oe,children:"Create Game"})]})]})});function Oe(){ee("enter the booking code from your partner"),ue(u?"":U),j(!u),W(!0),pe()}function pe(){setTimeout((function(){W(!1),R(!1),K(!1)}),9e3)}},H=[{numb:1,question:"Which continent has the biggest population?",answer:"A",options:["ASIA","North America","Europe","Africa"]},{numb:2,question:"Which scientist developed the theory of relativity?",answer:"D",options:["Newton","Galilei","Neil Armstrong","Einstein"]},{numb:3,question:"Which is the highest mountain on Earth?",answer:"B",options:["Mount Kilimanjaro","Mount Everest","Fujiyama","Lhots"]},{numb:4,question:"Who was the first person to walk on the moon?",answer:"C",options:["John Glenn","Jim Lowell","Neil Armstrong","Alan Shepard"]},{numb:5,question:"How many provinces are there in Turkey?",answer:"B",options:["37","81","61","91"]},{numb:6,question:"The modern capital of Turkey is ____ ?",answer:"B",options:["Sakarya","Ankara","Instanbul","Tekirdag"]},{numb:7,question:"Uiugag University is in which side of the Republic of Turkey?",answer:"A",options:["Bursa","Instanbul","Isparta","Burdur"]},{numb:8,question:"Is Sakarya University a private university?",answer:"B",options:["Yes","No","Both","none of the above"]},{numb:9,question:"When was the Republic of Turkey established?",answer:"A",options:["1920","1820","1960","same day I was born :)"]},{numb:10,question:"What is the dialing code of the Repubic of Turkey?",answer:"B",options:["+44","+90","+1","+97"]},{numb:11,question:"The Republic of Turkey practices which type of Government?",answer:"C",options:["Federalism","Aristocracy","Provincial National","Monarchical"]},{numb:12,question:"Who is the president of the Republic of Turkey?",answer:"A",options:["Recep Tayyip Erdogan","Hassan Ipek","Mustafa Tekmen","Erdogan Bektas"]},{numb:13,question:"What currency is used in Turkey?",answer:"C",options:["Euro","Pound sterling","Lira","Rand"]},{numb:14,question:"Sakarya University was established by the Turkish Law No. 3837 dated _____ ?",answer:"C",options:["July 3, 1999","July 3, 1989","July 3, 1992","July 3, 1990"]},{numb:15,question:"Turkey is said to be an international commercial centre, which of these is the republic of Turkey known for?",answer:"A",options:["Textile","Ceramics","Agricultural produce","Auto-mobile"]},{numb:16,question:"Turkey became a republic in _____ ?",answer:"A",options:["1920","1923","1930","1963"]},{numb:17,question:"The European Union is a group of _____ ?",answer:"B",options:["24 countries","27 countries","18 countries","41 countries"]},{numb:18,question:"The dominant currency used by the European Union countries is ?",answer:"C",options:["Pound","Lira","Euro","USD"]},{numb:19,question:"The next presidential and parliamentary elections in Turkey will be held in whay year?",answer:"C",options:["2021","2022","2023","2024"]},{numb:20,question:"Sakarya University is located where?",answer:"D",options:["Bursa","Cankiri","Erzincan","Adapazari"]},{numb:21,question:"What city lies at the economic and cultural heart of Turkey?",answer:"B",options:["Ankara","Istanbul","Karaman","Tokat"]},{numb:22,question:"Turkey is an invaluable bridge between Europe and ____ ?",answer:"D",options:["Europe","Africa","Antarctica","Asia"]},{numb:23,question:"NATO is an international organization which consists of how many countries?",answer:"B",options:["81","27","30","12"]},{numb:24,question:"What is the full meaning of NATO?",answer:"D",options:["North Atlantic Treaty Organization","National Atlantic Treaty Organization","North Atlantic Treaty Organization","Nations Assembly Treaty Operation"]},{numb:25,question:"Turkey is boarded by how many countries?",answer:"D",options:["12","9","6","8"]},{numb:26,question:"Who has Erdogan been using as leverage?",answer:"D",options:["The Syrian rebels that Turkey aides","The Kurd rebels","The Hayat al Tahrir Shams","The Syrian refugees moving through Turkey"]},{numb:27,question:"Who is the head of Al Qaeda?",answer:"A",options:["Ayman Mohammed Rabi al-Zawahiri","Abu Bakr al-Baghdadi","Osama bin Laden","Daud Ibrahim"]},{numb:28,question:"What is the majority religion of Turkey?",answer:"B",options:["Christianity","Sunni Islam","Judaism","Shi'a Islam"]},{numb:29,question:"What are the previous names of Istanbul?",answer:"C",options:["Instanal-Rike city","Polis city  - Tranport","Byzantium - Constantinople","Continople"]},{numb:30,question:"The story of Santa Claus originated in Turkey?",answer:"B",options:["False","True","All of the above","None"]},{numb:31,question:"What is the national sport of Turkey?",answer:"A",options:["Oil wrestling","Football","Table tennis","Basket ball"]},{numb:32,question:"Turkey is the largest producer of hazelnuts?",answer:"A",options:["Yes","No","All of the above","None"]},{numb:33,question:"_____ airport is the major aviation hub?",answer:"C",options:["Karaman","Everest","Istanbul","Tokat"]}],Z=function(){var e=[],t=H.sort((function(){return Math.random()>.5?1:-1})),n=0;return t.forEach((function(t){n<10&&e.push(t),n++})),Object(d.jsx)(l.a,{children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(u.a,{path:"/rules_page",children:Object(d.jsx)(j,{})}),Object(d.jsx)(u.a,{path:"/quiz_page",children:Object(d.jsx)(g,{questions:e})}),Object(d.jsx)(u.a,{path:"/m_quiz",children:Object(d.jsx)(F,{allQuestions:t})}),Object(d.jsx)(u.a,{path:"/result_page",children:Object(d.jsx)(m,{})})]})})};var K=function(){return Object(d.jsx)(Z,{})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),V()},37:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},96:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.5e3a5563.chunk.js.map