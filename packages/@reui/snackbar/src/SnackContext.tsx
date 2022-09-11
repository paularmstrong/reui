import * as React from 'react';

export interface SnackDef {
	children: React.ReactNode;
	priority?: number;
}

const initialState: Array<SnackDef> = [];

interface Context {
	addSnack: (snack: SnackDef) => void;
	removeSnack: (snack: SnackDef) => void;
	snacks: Array<SnackDef>;
}

const SnackContext = React.createContext<Context>({ addSnack: () => {}, removeSnack: () => {}, snacks: [] });

function reducer(state: Array<SnackDef>, action: { type: 'ADD' | 'REMOVE'; snack: SnackDef }) {
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
	function addSnack(snack: SnackDef) {
		dispatch({ type: 'ADD', snack });
	}
	function removeSnack(snack: SnackDef) {
		dispatch({ type: 'REMOVE', snack });
	}
	return (
		<SnackContext.Provider value={{ addSnack, removeSnack, snacks: state }}>{props.children}</SnackContext.Provider>
	);
}

export function useSnacks() {
	return React.useContext(SnackContext);
}
