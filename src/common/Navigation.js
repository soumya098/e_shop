import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let navigateTo; // make navigateTo work outside of the react components

const NavigationProvider = ({ children }) => {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	navigateTo = (path) => {
	// 		navigate(path);
	// 	};
	// }, [navigate]);

	// This version explicitly sets navigateTo within the { } braces, meaning it's treated as a block scope. Here, the useEffect function doesn’t return anything, so React treats it as a standard effect function without any cleanup.

	// because the assignment (navigateTo = (path) => navigate(path)) is used as a single expression without { }, JavaScript interprets it as a function that returns this assignment. React interprets this returned assignment as a cleanup function for the effect, which means each time navigate changes, React will call the "cleanup function" that returns navigateTo. This creates a conflict since navigateTo was never intended to act as a cleanup.

	//To fix this, stick with the version that uses { } to avoid returning a value.
	// Or, if you prefer using a concise syntax but don’t want React to interpret it as a cleanup function, add an explicit return undefined;

	useEffect(() => ((navigateTo = (path) => navigate(path)), undefined), [navigate]);
	// By returning undefined, you signal to React that there’s no cleanup function, ensuring useEffect only runs as an effect without triggering a cleanup.

	return <>{children}</>;
};

export { NavigationProvider, navigateTo };
