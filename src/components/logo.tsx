import logoFs from '../assets/img/logo.png';

interface logoFsProps {
  type?: string;
}

const Logo = ({...props }: logoFsProps) => {
  return (
    <img src={logoFs} alt="Logo" {...props} />
  );
};

export default Logo;