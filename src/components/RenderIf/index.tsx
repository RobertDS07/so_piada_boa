interface RenderIfProps {
  condition: boolean;

  children: JSX.Element;
}

// não sei se esse componente ajuda ou atrapalha, estou na dúvida
const RenderIf = ({ children, condition }: RenderIfProps) => {
  if (!condition) return null;

  return children;
};

export default RenderIf;
