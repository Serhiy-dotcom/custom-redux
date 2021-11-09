const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return {
				count: state.count + 1,
			};
		case "MINUS":
			return {
				count: state.count - 1,
			};
		default:
			return state;
	}
};

class CustomRedux {
	constructor() {
		this.state = {};
	}

	createStore = (fn, state) => {
		this.reducer = fn;
		this.state = state;

		return this;
	};

	dispatch = (actionType) => {
		this.state = this.reducer(this.state, actionType);
	};

	getState = () => {
		return this.state;
	};
}

var Redux = new CustomRedux();
var state = { count: 0 };
var store = Redux.createStore(reducer, state);

store.dispatch({ type: "ADD" });
console.log(store.getState());

store.dispatch({ type: "MINUS" });
console.log(store.getState());

store.dispatch({ type: "MINUS" });
console.log(store.getState());
