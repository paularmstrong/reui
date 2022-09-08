import * as React from 'react';

export interface Snack {
	children: React.ReactNode;
	priority?: number;
}

const initialState: Array<Snack> = [];

interface Context {
	addSnack: (snack: Snack) => void;
	removeSnack: (snack: Snack) => void;
	snacks: Array<Snack>;
}

const SnackContext = React.createContext<Context>({ addSnack: () => {}, removeSnack: () => {}, snacks: [] });

function reducer(state: Array<Snack>, action: { type: 'ADD' | 'REMOVE'; snack: Snack }) {
	const { snack, type } = action;
	switch (type) {
	case 'ADD': {
		const newState = [...state];
		newState.push(snack);
		return newState;
	}
	case 'REMOVE': {
		const index = state.indexOf(snack);

		if (index > -1) {
			const newState = [...state];
			newState.splice(index, 1);
			return newState;
		}
		return state;
	}
	}
}

export function SnackProvider(props: { children: React.ReactNode }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	function addSnack(snack: Snack) {
		dispatch({ type: 'ADD', snack });
	}
	function removeSnack(snack: Snack) {
		dispatch({ type: 'REMOVE', snack });
	}
	return (
		<SnackContext.Provider value={{ addSnack, removeSnack, snacks: state }}>{props.children}</SnackContext.Provider>
	);
}

export function useSnacks() {
	return React.useContext(SnackContext);
}
