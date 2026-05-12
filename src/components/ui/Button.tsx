type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
};

function Button({ children, type = 'button' }: ButtonProps) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
}

export default Button;