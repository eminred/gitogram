import avatar from "./avatar.vue";

export default {
  title: "Аватар пользователя",
  components: {
    avatar,
  },
};

export const defaultView = () => ({
  components: { avatar },
  template: `
    <avatar
      avatarUrl="https://picsum.photos/300/300"
      nickname="Peter"
    />
    `,
});

defaultView.story = {
  name: "Стандартный вид",
};
