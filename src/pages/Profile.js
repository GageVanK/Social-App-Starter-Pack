import { ProfileCard } from "../Sections/Profile/ProfileCard";
import { useRecoilValue } from "recoil";
import { PublicKey } from "../State/App.state";
import { Posts } from "../Sections/Posts/Posts";

import { Stream } from "../Components/Stream";
import {
  Paper,
  Space,
  Center,
  Skeleton,
  Tooltip,
  Text,
  ActionIcon,
} from "@mantine/core";

import {
  IconHeart,
  IconDiamond,
  IconRecycle,
  IconMessageCircle,
} from "@tabler/icons";

export default function Profile() {
  const publicKey = useRecoilValue(PublicKey);

  return (
    <>
      <div>
        <ProfileCard />
      </div>
      <Space h="md" />

      {publicKey ? (
        <div>
          <Stream />
          <Posts publicKey={publicKey} />
        </div>
      ) : (
        <Paper m="md" shadow="lg" radius="xl" p="xl" withBorder>
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
          <Space h="md" />
          <Center>
            <Tooltip
              transition="slide-down"
              withArrow
              position="bottom"
              label="Like"
              transitionDuration={11}
            >
              <ActionIcon variant="subtle" radius="md" size={36}>
                <IconHeart size={18} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Text size="xs" color="dimmed">
              0
            </Text>

            <Space w="sm" />

            <Tooltip
              transition="slide-down"
              withArrow
              position="bottom"
              label="Repost"
              transitionDuration={11}
            >
              <ActionIcon variant="subtle" radius="md" size={36}>
                <IconRecycle size={18} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Text size="xs" color="dimmed">
              0
            </Text>

            <Space w="sm" />

            <Tooltip
              transition="slide-down"
              withArrow
              position="bottom"
              label="Diamonds"
              transitionDuration={11}
            >
              <ActionIcon variant="subtle" radius="md" size={36}>
                <IconDiamond size={18} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Text size="xs" color="dimmed">
              0
            </Text>

            <Space w="sm" />

            <Tooltip
              transition="slide-down"
              withArrow
              position="bottom"
              label="Comments"
              transitionDuration={11}
            >
              <ActionIcon variant="subtle" radius="md" size={36}>
                <IconMessageCircle size={18} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Text size="xs" color="dimmed">
              0
            </Text>
          </Center>
        </Paper>
      )}
    </>
  );
}
