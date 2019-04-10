import React from "react";
import "./Numbers.css";

export class Numbers extends React.Component {
	constructor(props){
		super(props);
			this.state = {
				result :"",
			}
	}

	onClear(e){
		console.log(e.target.value);
		this.setState({clear : e.target.value});
	}

	onClickValue(e){
	var newNumber = e.target.value;
	this.setState({result : this.state.result.concat([newNumber])});
	}

	result = () =>{
		this.setState({
			result: (eval(this.state.result))
		})
	}

	 onClear = () =>{
		this.setState({result : " "})
	};


	render() {
	return(
		<div>
	<div >
		<input type="text" name="result" className="result" value={this.state.result}/>
	</div>
		<div>
		<button value="0" className="btn">0</button>				
			<button value="" className="btn" onClick={this.onClear}>CLR</button>
			<button value="=" className="operator-btn" onClick={this.result}>=</button>
			<button value="/" className="operator-btn" onClick={e=>this.onClickValue(e)}>/</button>
		</div>
		<div>
			<button value="9" className="btn" onClick={e=>this.onClickValue(e)}>9</button>
			<button value="8" className="btn" onClick={e=>this.onClickValue(e)}>8</button>
			<button value="7" className="btn" onClick={e=>this.onClickValue(e)}>7</button>
			<button value="*" className="operator-btn" onClick={e=>this.onClickValue(e)}>*</button>
			</div>

		<div>
			<button value="6" className="btn" onClick={e=>this.onClickValue(e)}>6</button>
			<button value="5" className="btn" onClick={e=>this.onClickValue(e)}>5</button>
			<button value="4" className="btn" onClick={e=>this.onClickValue(e)}>4</button>
			<button value="-" className="operator-btn" onClick={e=>this.onClickValue(e)}>-</button>
			</div>
			

			<div>
			<button value="3" className="btn" onClick={e=>this.onClickValue(e)}>3</button>
			<button value="2" className="btn" onClick={e=>this.onClickValue(e)}>2</button>
			<button value="1" className="btn" onClick={e=>this.onClickValue(e)}>1</button>
			<button value="+" className="operator-btn" onClick={e=>this.onClickValue(e)}>+</button>

		</div>
		</div>
	);

	}
}

