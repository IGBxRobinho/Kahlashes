import React, {
	InputHTMLAttributes, 
	useRef , 
	useEffect, 
	useState, 
	useCallback} from 	'react';

import { useField } from '@unform/core';

/*Icons*/
import { IconBaseProps } from 'react-icons';

/*css*/
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	name: string,
	icon?: React.ComponentType<IconBaseProps>,
};

const Input: React.FC<InputProps> =({ name, icon: Icon, ...rest }) => {
	//Creat a reference of my component
	const inputRef = useRef<HTMLInputElement>(null);	
	//Get the value from my input where find a prop called name
	const { fieldName, defaultValue, error, registerField } = useField(name);
	//Check if my input has a focus or not
	const [ isFocused, setIsFocused ] = useState(false);
	const [ isFilled, setIsFilled] = useState(false);

	//All the time I have to creat a new function insede other I should have use  callback
	const handleInputFocus = useCallback( () => {
		setIsFocused(true);
	},[]);
	
	const handleInputBlur = useCallback (() =>{
		setIsFocused(false);
		//If it has a value the return is "true" if not the return is "false"
		setIsFilled( !! inputRef.current?.value);	
	},[]);


	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});		
	}, [fieldName, registerField]);


	return(		
		<Container isErrored={!! error } isFilled={isFilled} isFocused={isFocused}>				
			{Icon && <Icon size={20} />}
			<input  
			defaultValue={defaultValue} 
			onFocus={handleInputFocus}
			onBlur={handleInputBlur}
			ref={inputRef} {...rest}
			/>				
			{error}
		</Container>			
	)
};

export default Input;