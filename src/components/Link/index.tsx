import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import HandleNextLink, {
  HandleNextLinkProps,
} from "./components/HandleNextLink";
import * as S from "./styles";

export interface LinkProps
  extends Omit<ChakraLinkProps, "href">,
    Pick<HandleNextLinkProps, "isInternalPage" | "href"> {
  children: JSX.Element | string;

  isButtonAsChildren?: boolean;
}

const Link = ({
  href,
  children,
  isInternalPage,
  isButtonAsChildren,
  ...chakraLinkProps
}: LinkProps) => {
  return (
    <HandleNextLink
      href={href}
      passHref={isInternalPage}
      isInternalPage={isInternalPage}
    >
      <S.Link
        href={href}
        textDecor={isButtonAsChildren ? "unset !important" : ""}
        {...chakraLinkProps}
      >
        {children}
      </S.Link>
    </HandleNextLink>
  );
};

export default Link;
