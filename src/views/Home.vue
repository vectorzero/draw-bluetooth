<template>
  <div class="home-container">
    <div class="left">
      <h4>组件</h4>
      <div v-for="(item, index) in widgetList" :key="index" class="left-item">
        <span>{{ item.label }}</span>
        <button @click="handleAdd(item)">+</button>
      </div>
    </div>
    <div class="mid">
      <VueDragResize
        v-for="item in renderList"
        :key="item.id"
        :isActive="true"
        :w="item.width"
        :h="item.height"
        :x="item.left"
        :y="item.top"
        @activated="activateEv(item.id)"
        @deactivated="deactivateEv(item.id)"
        @dragging="changeDimensions($event, item.id)"
        @resizing="changeDimensions($event, item.id)"
      >
        <p>{{ item.top }} х {{ item.left }}</p>
        <p>{{ item.width }} х {{ item.height }}</p>
      </VueDragResize>
    </div>
    <div class="right">
      <h4>属性</h4>
      <div v-for="currentWidget in widgetList" :key="currentWidget.id" class="form-box">
        <div>ID：{{ currentWidget.id }}</div>
        <div>类型：{{ currentWidget.typeName }}</div>
        <div>
          <span>字段名：</span>
          <input v-mode="currentWidget.value" />
        </div>
        <div>
          <span>X坐标：</span>
          <input v-model="currentWidget.positionX" />
        </div>
        <div>
          <span>Y坐标：</span>
          <input v-model="currentWidget.positionY" />
        </div>
        <template v-if="currentWidget.type !== 'text'">
          <div>
            <span>宽度：</span>
            <input
              @input="changeInput($event, currentWidget.id, 'width')"
              v-model="currentWidget.width"
            />
          </div>
          <div>
            <span>高度：</span>
            <input
              @input="changeInput($event, currentWidget.id, 'height')"
              v-model="currentWidget.height"
            />
          </div>
        </template>
        <template v-else>
          <div>
            <span>大小：</span>
            <input
              @input="changeInput($event, currentWidget.id, 'size')"
              v-model="currentWidget.size"
            />
          </div>
          <div>
            <span>字重：</span>
            <input
              @input="changeInput($event, currentWidget.id, 'bold')"
              v-model="currentWidget.bold"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import VueDragResize from 'vue-drag-resize'

export default defineComponent({
  name: 'Home',
  components: {
    VueDragResize
  },
  setup() {
    const state = reactive({
      currentWidget: [],
      renderList: [],
      widgetList: []
    })

    onMounted(() => {
      state.widgetList = [
        { name: 'rect', label: '矩形' },
        { name: 'barCode', label: '条形码' },
        { name: 'qrCode', label: '二维码' },
        { name: 'text', label: '文本' }
      ]
    })

    const handleAdd = (item) => {
      console.log('item', item)
      const basicObj = {
        type: item.name,
        typeName: item.label,
        positionX: 0,
        positionY: 0,
        value: '',
        id: new Date().getTime().toString()
      }
      let typeObj = {}
      switch (item.name) {
        case 'rect':
          typeObj = {
            width: 100,
            height: 100
          }
          break
        case 'qrCode':
          typeObj = {
            width: 100,
            height: 100
          }
          break
        case 'barCode':
          typeObj = {
            width: 440,
            height: 100
          }
          break
        case 'text':
          typeObj = {
            size: 1,
            bold: 1
          }
          break
        default:
          typeObj = {}
      }
      const obj = { ...basicObj, ...typeObj }
      state.currentWidget = obj
      state.renderList.push(obj)
    }

    const changeDimensions = (id) => {
      // store.dispatch('rect/setTop', newRect.top)
      // store.dispatch('rect/setLeft', newRect.left)
      // store.dispatch('rect/setWidth', newRect.width)
      // store.dispatch('rect/setHeight', newRect.height)
    }

    const activateEv = (id) => {
      // store.dispatch('rect/setActive', { id: index })
    }

    const deactivateEv = (id) => {
      // store.dispatch('rect/unsetActive', { id: index })
    }

    return {
      ...toRefs(state),
      handleAdd,
      changeDimensions,
      activateEv,
      deactivateEv
    }
  }
})
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.left {
  width: 200px;
  border: 1px solid #ccc;
}

.mid {
  margin: 0 20px;
  flex: 1;
  border: 1px solid #ccc;
}

.right {
  width: 200px;
  border: 1px solid #ccc;
}
</style>
