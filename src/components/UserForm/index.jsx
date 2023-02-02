import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSound } from "use-sound";
import Button from "../Button";
import submitSFX from "../../assets/sfx/notice.mp3";
import useLocalData from "../../hooks/useLocalData";
import Cat from "../Cat.jsx";

export default function UserForm({ message, title }) {
	const [name, setName] = useState({ value: "", isValid: null });
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const nameExpress = new RegExp("^[A-Za-z0-9_ -]{2,15}$");

	// Focused element
	const nameInput = useRef();
	useEffect(() => {
		nameInput.current.focus();
	}, []);

	// Handle submit
	const [getLocalData, setLocalData] = useLocalData();
	const [submitSound] = useSound(submitSFX);
	const thisElement = useRef();

	const submit = useCallback(() => {
		submitSound();
		if (name.isValid) {
			thisElement.current.remove(); 

			const localData = getLocalData();
			localData.dayStart = Date.now();
			localData.name = name.value;
			setLocalData(localData);
		}
	}, [getLocalData, name.isValid, name.value, setLocalData, submitSound]);

	useEffect(() => {
		const keyboardSubmit = (e) => {
			if (e.keyCode === 13) {
				submit();
			}
		};
		window.addEventListener("keydown", keyboardSubmit);

		return () => window.removeEventListener("keydown", keyboardSubmit);
	}, [submit]);

	return (
		<div
			className="fixed lg:absolute lg:max-w-sm mx-auto inset-0 z-[99]"
			ref={thisElement}
		>
			<div className="absolute inset-0 bg-black opacity-95"></div>
			<section className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-md w-[80%]">
				<header className="p-4 mb-2 border-b rounded-t-md bg-blue-100 text-center text-primary font-rowdies">
					<h1>{title}</h1>
				</header>
				<main className="p-4 pt-0">
					<div className="mb-2">
						<Cat
							message="When we first met, what is yu name?"
							time="unset"
						/>
					</div>
					<input
						ref={nameInput}
						type="text"
						placeholder="Enter your name"
						className="w-full p-2 mb-2 border rounded-md outline-primary"
						style={
							name.isValid === false
								? {
										outline: "1px solid #FF5252",
								  }
								: {}
						}
						value={name.value}
						onChange={(e) => {
							if (e.target.value.length <= 15)
								setName({
									value: e.target.value,
									isValid: nameExpress.test(e.target.value),
								});
						}}
					/>
					<Button
						fullWidth
						isPrimary
						onClick={submit}
						disabled={!name.isValid}
					>
						Submit
					</Button>
				</main>
			</section>
		</div>
	);
}
