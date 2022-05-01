import Link, { LinkProps } from "next/link";

export interface HandleNextLinkProps extends Pick<LinkProps, "href"> {
  children: JSX.Element;

  passHref?: boolean;
  isInternalPage?: boolean;
}

const HandleNextLink = ({
  href,
  children,
  passHref,
  isInternalPage,
}: HandleNextLinkProps) => {
  if (isInternalPage)
    return (
      <Link href={href} passHref={passHref}>
        {children}
      </Link>
    );

  return children;
};

export default HandleNextLink;
