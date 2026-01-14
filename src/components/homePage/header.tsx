import Logo from '../logo';

export function Header() {
  return (
    <header className="w-full h-0 relative">
      {/* Logo positionné absolument */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-14 w-60 h-60 sm:w-80 sm:h-80">
        <Logo />
      </div>
    </header>
  );
}

