(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),u=a(7),r=a.n(u),o=(a(14),a(8)),i=a(1),l=a(2),c=a(4),m=a(3),p=a(5);a(16),a(18);function h(e){return s.a.createElement("div",{className:"game-top"},s.a.createElement("h2",null,e.label))}h.defaultProps={label:"Make Your Guess!"};a(20);var b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"game-input"},!this.props.gameWon&&s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.submitGuess(e.props.value)}},s.a.createElement("input",{type:"number",placeholder:"Enter Your Guess",value:this.props.value,min:"1",max:"100",required:!0,onChange:function(t){return e.props.setNumber(t.target.value)}}),s.a.createElement("button",{type:"submit"},"Guess")),s.a.createElement("p",null,"Guess #",s.a.createElement("span",{className:"guess-count"},this.props.guessCount),"!"),this.props.gameWon&&s.a.createElement("p",{className:"new-game-prompt"},"Click New Game to try again!"))}}]),t}(n.Component);a(22);function d(e){var t=e.guesses.map(function(e,t){return s.a.createElement("li",{key:t},e)});return s.a.createElement("div",{className:"game-guesses"},s.a.createElement("ul",null,t))}var g={guessCount:0,guessLabel:"Make Your Guess!",guesses:[],inputNumber:"",gameWon:!1},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state=g,a.answer=Math.floor(100*Math.random())+0,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"resetInput",value:function(){this.setState({inputNumber:""})}},{key:"resetGame",value:function(e){this.answer=Math.floor(100*Math.random())+0,console.log(this.answer),e.preventDefault(),this.setState(g)}},{key:"updateCounter",value:function(){this.setState({guessCount:this.state.guessCount+1})}},{key:"updateGuesses",value:function(e){var t=Number(e);this.setState({guesses:Object(o.a)(this.state.guesses).concat([t])})}},{key:"updateInput",value:function(e){this.setState({inputNumber:e})}},{key:"updateWin",value:function(){this.setState({gameWon:!0})}},{key:"updateGuessLabel",value:function(e,t){var a;if(t)a="You Won!",this.updateWin();else{var n=Math.abs(e-this.answer);a="".concat(e,n>10?" is cold.":" is hot.")}this.setState({guessLabel:a})}},{key:"checkAnswer",value:function(e){this.resetInput(),this.state.guesses.includes(Number(e))?alert("You've already guessed ".concat(e)):Number(e)===this.answer?(this.updateGuessLabel(e,!0),this.updateCounter(),this.updateGuesses(e)):(this.updateGuessLabel(e,!1),this.updateCounter(),this.updateGuesses(e))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"hot-cold-game"},s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",{className:"new-game-link"},s.a.createElement("button",{type:"button",className:"link-button",onClick:function(t){return e.resetGame(t)}},"New Game")))),s.a.createElement("h1",null,"HOT or COLD"),s.a.createElement("section",{className:"game-container"},s.a.createElement(h,{label:this.state.guessLabel}),s.a.createElement(b,{value:this.state.inputNumber,gameWon:this.state.gameWon,guessCount:this.state.guessCount,setNumber:function(t){return e.updateInput(t)},submitGuess:function(t){return e.checkAnswer(t)}}),s.a.createElement(d,{guesses:this.state.guesses})))}}]),t}(n.Component);f.defaultProps={title:"Hot or Cold"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.440de0c6.chunk.js.map