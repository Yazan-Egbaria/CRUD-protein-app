const Form = ({ children, onSubmit }) => {
  return (
    <form
      id="form"
      className="flex w-full flex-col items-center justify-center gap-8"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
