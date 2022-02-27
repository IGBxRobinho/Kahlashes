import React from 'react';

/*components*/
import Input from '../../components/input/index';
import Button from '../../components/button';

/*icons*/
import { FiLogIn, FiLock, FiMail } from 	'react-icons/fi';

/*css*/
import { Container, Content, Background } from './styles';

/*assets*/
import logoImg from '../../assets/logo3.png';

const SignIn: React.FC = () => (
	<Container>
		<Content>
			 <img src={logoImg} alt="KahLashes" /> 		

			<form>
				<h1>Faça seu logon</h1>

				<Input 
					icon={FiMail}
					type="email" 
					name="email"					
					placeholder="E-mail"
				/>
				
				<Input 
					icon={FiLock}
					type="password" 	
					name="senha"				
					placeholder="Senha"
				/>

				<Button type="submit">Entrar</Button>

				<a href="forgot">Esqueci minha senha</a>

			</form>

			<a href="login">
				<FiLogIn />
				Criar conta
			</a>			
		</Content>	
		<Background />
	</Container>
)


export default SignIn;