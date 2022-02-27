import React, { useCallback, useRef } from 'react';
import { Form } from 	'@unform/web';
import { FormHandles } from 	'@unform/core';
import * as Yup from 'yup';

/*components*/
import Input from '../../components/input';
import Button from '../../components/button';

/*utils*/
import getValidationErrors from '../../utils/getValidationErrors'

/*icons*/
import { FiArrowLeft, FiLock, FiUser,  FiMail , FiPhone} from 	'react-icons/fi';

/*css*/
import { Container, Content, Background } from './styles';

/*assets*/
import logoImg from '../../assets/logo3.png';

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	console.log(formRef);

	const handleSubmit = useCallback( async (data: object)  => {	
		try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
				cellphone: Yup.string().required('Celular obrigatório'),
				password: Yup.string().min(6, 'No mínimo 6 digitos'),
			});

			await schema.validate(data, { abortEarly: false })

		} catch (err) {
			console.log(err.inner);

			const errors = getValidationErrors(err);

			formRef.current?.setErrors(errors);

			console.log(formRef);
		}
	},[]);

	return(
		<Container>
		<Background />		
		<Content>
			 <img src={logoImg} alt="KahLashes" /> 		
			<Form  ref={formRef} onSubmit={handleSubmit} >
				<h1>Faça seu cadastro</h1>
				<Input 
					icon={FiUser}					
					name="name"					
					placeholder="Nome"
				/>
				<Input 
					icon={FiMail}					
					name="email"					
					placeholder="E-mail"
				/>
				<Input 
					icon={FiPhone}					
					name="cellphone"					
					placeholder="Telefone"
				/>				
				<Input 
					icon={FiLock}
					type="password" 	
					name="password"				
					placeholder="Senha"
				/>
				<Button type="submit">Cadastrar</Button>				
			</Form>

			<a href="login">
				<FiArrowLeft />
				Voltar para logon
			</a>			
		</Content>			
	</Container>
	)
}


export default SignUp;