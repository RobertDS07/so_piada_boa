interface RenderIfProps {
  condition: boolean;

  children: JSX.Element;
}

const RenderIf = ({ children, condition }: RenderIfProps) => {
  if (!condition) return null;

  return children;
};

export default RenderIf;
