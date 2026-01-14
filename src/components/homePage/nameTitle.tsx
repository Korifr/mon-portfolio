interface NameTitleProps {
    firstName: string;
    lastName: string;
}

export function NameTitle({ firstName, lastName }: NameTitleProps) {
    return (
    <div className="sm:absolute sm:bottom-[50%] text-center leading-tight sm:leading-none mt-10 mb-10">
        <h1 className="text-[60px] sm:text-[200px] font-extrabold">
        {firstName}
        </h1>
        <h2 className="text-[60px] sm:text-[200px] font-extrabold text-transparent stroke-text mt-[-20px]">
        {lastName}
        </h2>
    </div>
    );
}