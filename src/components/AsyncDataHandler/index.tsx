import { Flex, Spinner } from "@chakra-ui/react";

import RenderIf from "components/RenderIf";

import ErrorHandler, { ErrorHandlerProps } from "./components/ErrorHandler";
import NoData, { NoDataProps } from "./components/NoData";

interface AsyncDataHandlerProps
  extends Pick<ErrorHandlerProps, "onClickRetry">,
    Pick<NoDataProps, "noDataText"> {
  children: JSX.Element;
  hasData: boolean;
  hasError: boolean;
  isLoading: boolean;
}

const AsyncDataHandler = ({
  children,
  hasData,
  hasError,
  isLoading,
  noDataText,
  onClickRetry,
}: AsyncDataHandlerProps) => {
  const renderLoading = !hasData && isLoading;

  const renderErrorHandler = hasError && !renderLoading;

  const renderNoData = !renderLoading && !renderErrorHandler && !hasData;

  return (
    <>
      <RenderIf condition={hasData}>{children}</RenderIf>

      <Flex w="100%" h="100%" align="center" justify="center">
        <RenderIf condition={renderLoading}>
          <Spinner color="red.main" />
        </RenderIf>

        <RenderIf condition={renderErrorHandler}>
          <ErrorHandler onClickRetry={onClickRetry} />
        </RenderIf>

        <RenderIf condition={renderNoData}>
          <NoData noDataText={noDataText} />
        </RenderIf>
      </Flex>
    </>
  );
};

export default AsyncDataHandler;
