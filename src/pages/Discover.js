import { Paper, Center, Divider, Text, Space } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { TwitchPlayer } from "react-twitch-embed";
import { useRef } from "react";

export default function Discover() {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e) => {
    embed.current = e;
  };
  return (
    <>
      <Divider
        my="xs"
        label={
          <>
            <Text fw={444} fz="xl">
              Discover
            </Text>
          </>
        }
        labelPosition="center"
      />
      <Space h="xl" />
      <Carousel controlSize={33} loop draggable={false} withIndicators>
        <Carousel.Slide>
          <Center>
            <Paper shadow="xl" radius="md" p="xs">
              <Text
                align="center"
                size="xl"
                lineClamp={4}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              >
                Marved
              </Text>
              <Divider my="sm" variant="dotted" />
              <TwitchPlayer
                channel="Marved6"
                width={333}
                autoplay
                muted
                onReady={handleReady}
                id="1"
              />
            </Paper>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Paper shadow="xl" radius="md" p="xs">
              <Text
                align="center"
                size="xl"
                lineClamp={4}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              >
                Hiko
              </Text>
              <Divider my="sm" variant="dotted" />
              <TwitchPlayer
                channel="Hiko"
                width={333}
                autoplay
                muted
                onReady={handleReady}
                id="2"
              />
            </Paper>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Paper shadow="xl" radius="md" p="xs">
              <Text
                align="center"
                size="xl"
                lineClamp={4}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              >
                A2Guapo
              </Text>
              <Divider my="sm" variant="dotted" />
              <TwitchPlayer
                channel="a2guapo"
                autoplay
                muted
                width={333}
                onReady={handleReady}
                id="3"
              />
            </Paper>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Paper shadow="xl" radius="md" p="xs">
              <Text
                align="center"
                size="xl"
                lineClamp={4}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              >
                Kenny Beats
              </Text>
              <Divider my="sm" variant="dotted" />
              <TwitchPlayer
                channel="kennybeats"
                width={333}
                autoplay
                muted
                onReady={handleReady}
                id="4"
              />
            </Paper>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center>
            <Paper shadow="xl" radius="md" p="xs">
              <Text
                align="center"
                size="xl"
                lineClamp={4}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              >
                Maya
              </Text>
              <Divider my="sm" variant="dotted" />
              <TwitchPlayer
                channel="Maya"
                width={333}
                autoplay
                muted
                onReady={handleReady}
                id="5"
              />
            </Paper>
          </Center>
        </Carousel.Slide>
      </Carousel>
    </>
  );
}
