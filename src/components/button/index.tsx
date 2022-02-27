import React, { ButtonHTMLAttributes } from 'react';

/*css*/
import {Container } from './styles';

/*interfaces*/
//interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest}) => {
	return(		
			<Container type="button" {...rest}>
				{children}
			</Container>		
	)
};

export default Button;