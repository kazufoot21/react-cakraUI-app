/* eslint-disable react-hooks/exhaustive-deps  */

import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useLoginUser } from "../..//hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getUsers, users, loading } = useAllUsers();

  const { onSelectUser, selectUser } = useSelectUser();

  const { loginuser } = useLoginUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },

    [users]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectUser}
        isOpen={isOpen}
        isAdmin={loginuser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
