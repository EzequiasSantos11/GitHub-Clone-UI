import React from 'react';
import  {Link}  from 'react-router-dom';
import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForksIcon, LinkButton, GithubIcon} from './styles';

const Repo: React.FC = () => {
  return(
    <Container>
      <Breadcrumb>
        <RepoIcon/>
        <Link className={"username"} to={"/ezequiasSantos11"}>
          EzequiasSantos11
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={'/ezequiassantos11/:reponame'}>
          repositorio
        </Link>
      </Breadcrumb>
      <p>Contains all of my repositorie.</p>
      <Stats>
        <li>
          <StarIcon/>
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForksIcon/>
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={`https://github.com/users/`}>
        <GithubIcon/>
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;