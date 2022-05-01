import { useMemo } from "react";
import * as AntDesignIcons from "react-icons/ai";
import * as BootstrapIcons from "react-icons/bs";
import * as FontAwesomeIcons from "react-icons/fa";
import * as FeatherIcons from "react-icons/fi";
import * as GithubIconsIcons from "react-icons/go";
import * as Ionic4Icons from "react-icons/io";
import * as MaterialDesignIcons from "react-icons/md";
import * as SimpleIcons from "react-icons/si";

import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";

interface IconProps extends Omit<ChakraIconProps, "as"> {
  as:
    | keyof typeof AntDesignIcons
    | keyof typeof BootstrapIcons
    | keyof typeof FontAwesomeIcons
    | keyof typeof FeatherIcons
    | keyof typeof GithubIconsIcons
    | keyof typeof Ionic4Icons
    | keyof typeof MaterialDesignIcons
    | keyof typeof SimpleIcons;
}

const iconsDictionary = {
  io: Ionic4Icons,
  si: SimpleIcons,
  fi: FeatherIcons,
  ai: AntDesignIcons,
  bs: BootstrapIcons,
  go: GithubIconsIcons,
  fa: FontAwesomeIcons,
  md: MaterialDesignIcons,
};

const Icon = ({ as, ...ChakraIconProps }: IconProps) => {
  const libraryToSearchIcon = useMemo(() => {
    const asInitialCharacters = as.slice(0, 2).toLowerCase();

    return iconsDictionary[asInitialCharacters];
  }, [as]);

  return <ChakraIcon as={libraryToSearchIcon[as]} {...ChakraIconProps} />;
};

export default Icon;
