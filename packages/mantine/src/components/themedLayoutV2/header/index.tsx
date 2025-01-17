import React from "react";
import { useGetIdentity, useActiveAuthProvider } from "@refinedev/core";
import {
    Avatar,
    Flex,
    Header as MantineHeader,
    Title,
    useMantineTheme,
} from "@mantine/core";

import { RefineThemedLayoutV2HeaderProps } from "../types";
import { HamburgerMenu } from "../hamburgerMenu";

export const ThemedHeaderV2: React.FC<RefineThemedLayoutV2HeaderProps> = () => {
    const theme = useMantineTheme();

    const authProvider = useActiveAuthProvider();
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    const borderColor =
        theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[2];

    return (
        <MantineHeader
            zIndex={199}
            height={64}
            py={6}
            px="sm"
            sx={{
                borderBottom: `1px solid ${borderColor}`,
            }}
        >
            <Flex
                align="center"
                justify="space-between"
                sx={{
                    height: "100%",
                }}
            >
                <HamburgerMenu />
                <Flex align="center" gap="sm">
                    <Title
                        order={6}
                        sx={{
                            cursor: "pointer",
                        }}
                    >
                        {user?.name}
                    </Title>
                    <Avatar src={user?.avatar} alt={user?.name} radius="xl" />
                </Flex>
            </Flex>
        </MantineHeader>
    );
};
