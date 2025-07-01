import type { Meta, StoryObj } from "@storybook/react";
import { Badge, type BadgeProps } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "secondary", "destructive", "outline"],
    },
    children: {
      control: "text",
      description: "Conteúdo exibido dentro do badge",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge padrão",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Badge secundário",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Badge destrutivo",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Badge contornado",
    variant: "outline",
  },
};