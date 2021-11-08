import { memo, ReactNode, VFC } from "react";

import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disanled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disanled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disanled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
