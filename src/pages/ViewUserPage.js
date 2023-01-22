import { useLocation } from "react-router-dom";
import Deso from "deso-protocol";
import { useEffect, useState } from "react";
import {
  Avatar,
  Text,
  Center,
  Space,
  Paper,
  Tooltip,
  ActionIcon,
  CopyButton,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons";
const deso = new Deso();

export default function ViewUserPage() {
  useEffect(() => {
    GetProfileInfo();
  });

  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();

  const location = useLocation();
  const { userPublicKey, userName, userProfilePic } = location.state;
  console.log({ userPublicKey });

  const GetProfileInfo = async () => {
    //Follower Count for User
    const request = {
      PublicKeyBase58Check: userPublicKey,
      GetEntriesFollowingUsername: true,
    };
    const FollowerCount = await deso.social.getFollowsStateless(request);

    //Follow Count for User
    const request2 = {
      PublicKeyBase58Check: userPublicKey,
      GetEntriesFollowingUsername: false,
    };
    const FollowCount = await deso.social.getFollowsStateless(request2);

    //Get Posts for User
    const request3 = {
      PublicKeyBase58Check: userPublicKey,
      ReaderPublicKeyBase58Check: userPublicKey,
      NumToFetch: 20,
    };

    const UserPosts = await deso.posts.getPostsForPublicKey(request3);
    console.log(UserPosts);
    setFollowerCount(FollowerCount.NumFollowers);
    setFollowingCount(FollowCount.NumFollowers);
  };

  // Use the userPublicKey to fetch the user's profile information
  return (
    <Center>
      <Paper
        w={444}
        shadow="xl"
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <CopyButton value={userPublicKey} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Copied Public Key" : "Copy Public Key"}
              withArrow
              position="right"
              transitionDuration={333}
              transition="scale-x"
            >
              <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
        <Avatar size={77} radius={77} mx="auto" src={userProfilePic} />
        <Center>
          <Text align="center" size="lg" weight={777} mt="md">
            @{userName}
          </Text>
        </Center>
        <Space h="sm" />
        <Center>
          <Text fz="sm">Following: {followingCount}</Text>
          <Space w="sm" />
          <Text fz="sm">Followers: {followerCount}</Text>
        </Center>
      </Paper>
    </Center>
  );
}
