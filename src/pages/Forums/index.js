import React from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import { H1, H3 } from '../../components/Typography';
import { Container, Forum as ForumContainer, Tag, BoxContent } from './styles';

const Forum = () => {
	return (
		<Container>
			<H1>Vamos Conversar</H1>

			<ForumContainer>
				<header>
					<div>
						<H3>Eu tenho uma dúvida</H3>
						<Button className='btn'>Criar novo</Button>
						<Button className='btn-compact'>Novo</Button>
					</div>

					<p>Respondidos Recentemente</p>
				</header>

				<div>
					<Box>
						<BoxContent>
							<div>
								<Tag>Dúvida</Tag>
								<p>Lorem ipsum dolor sit</p>
							</div>

							<span>05/10/202</span>
						</BoxContent>
					</Box>
					<Box>
						<BoxContent>
							<div>
								<Tag>Dúvida</Tag>
								<p>Lorem ipsum dolor sit</p>
							</div>

							<span>05/10/202</span>
						</BoxContent>
					</Box>
					<Box>
						<BoxContent>
							<div>
								<Tag>Dúvida</Tag>
								<p>Lorem ipsum dolor sit</p>
							</div>

							<span>05/10/202</span>
						</BoxContent>
					</Box>

					<div className='button'>
						<Button isGhost>Ver todas</Button>
					</div>
				</div>
			</ForumContainer>

			<ForumContainer>
				<header>
					<div>
						<H3>Foi uma experiência prazerosa</H3>
						<Button className='btn'>Criar novo</Button>
						<Button className='btn-compact'>Novo</Button>
					</div>

					<p>Respondidos Recentemente</p>
				</header>

				<div>
					<Box>
						<BoxContent>
							<div>
								<Tag>Dúvida</Tag>
								<p>Lorem ipsum dolor sit</p>
							</div>

							<span>05/10/202</span>
						</BoxContent>
					</Box>
					<Box>
						<BoxContent>
							<div>
								<Tag>Dúvida</Tag>
								<p>Lorem ipsum dolor sit</p>
							</div>

							<span>05/10/202</span>
						</BoxContent>
					</Box>
					<Box>
						<BoxContent>
							<div>
								<Tag>Dúvida</Tag>
								<p>Lorem ipsum dolor sit</p>
							</div>

							<span>05/10/202</span>
						</BoxContent>
					</Box>

					<div className='button'>
						<Button isGhost>Ver todas</Button>
					</div>
				</div>
			</ForumContainer>
		</Container>
	);
};

export default Forum;
