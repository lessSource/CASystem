import { defineComponent, h } from "vue";
import type { Menu } from "./menuItem";

export default defineComponent({
  name: "b-menu",

  setup() {
    function toView(url: string) {
      console.log(url);
    }

    const test: Menu.Item = {
      name: "目录",
      id: 1,
      parentId: 0,
      path: "11",
      icon: "",
      orderNum: 0,
      type: 0,
      isShow: 1,
      children: [
        {
          name: "目录1",
          id: 2,
          parentId: 1,
          path: "11",
          icon: "",
          orderNum: 0,
          isShow: 1,
          type: 0,
        },
        {
          name: "目录2",
          id: 3,
          parentId: 1,
          path: "11",
          icon: "",
          orderNum: 0,
          isShow: 1,
          type: 0,
        },
      ],
    };

    const menuList: Menu.Item[] = [test, test, test];

    function renderMenu() {
      function deep(list: Menu.Item[], index: number) {
        return list
          .filter((e) => e.isShow)
          .map((e) => {
            let html = null;
            if (e.type == 0) {
              html = h(
                <el-sub-menu />,
                {
                  index: String(e.id),
                  key: e.id,
                  popperClass: "app-slider__menu",
                },
                {
                  title() {
                    return (
                      <div class="wrap">
                        <cl-svg name={e.icon} />
                        <span v-show={true}> {e.name} </span>
                      </div>
                    );
                  },
                  default() {
                    return deep(e.children || [], index + 1);
                  },
                }
              );
            } else {
              html = h(
                <el-menu-item />,
                {
                  index: e.path,
                  key: e.id,
                },
                {
                  default() {
                    return (
                      <div class="wrap">
                        <cl-svg name={e.icon} />
                        <span v-show={ true }> {e.name} </span>
                      </div>
                    );
                  },
                }
              );
            }
            return html;
          });
      }
      console.log(menuList);
      return deep(menuList, 1);
    }

    return () => {
      return (
        <div class="app-slider__menu">
          <el-menu
            default-action={"ddd"}
            background-color="transparent"
            collapse-transition={true}
            collapse={true}
            onSelect={toView}
          >
            {renderMenu()}
          </el-menu>
        </div>
      );
    };
  },
});
