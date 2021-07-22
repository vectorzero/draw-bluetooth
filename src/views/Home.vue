<template>
  <div class="home-container">
    <div class="left">
      <h4>组件</h4>
      <div v-for="(item, index) in widgetList" :key="index" class="left-item">
        <el-button @click="handleAdd(item)" type="primary" size="mini" class="btn-item">
          {{ item.label }}
          <i class="el-icon-plus el-icon--right" />
        </el-button>
      </div>
    </div>
    <div class="mid">
      <div class="operate-view">
        <div>
          <el-button type="danger" icon="el-icon-refresh-left" size="mini">
            撤销
          </el-button>
          <el-button type="primary" icon="el-icon-refresh-right" size="mini">
            重做
          </el-button>
        </div>
        <div>
          <el-button type="warning" icon="el-icon-upload2" size="mini">
            导入JSON
          </el-button>
          <el-button type="success" icon="el-icon-download" size="mini">
            生成JSON
          </el-button>
          <el-button type="primary" icon="el-icon-view" size="mini">预览</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">清空</el-button>
        </div>
      </div>
      <div class="content-view">
        <div
          class="canvas-view"
          :style="{ width: bgWidth + 'px', height: bgHeight + 'px' }"
        >
          <VueDragResize
            :style="{
              'border-style': item.borderStyle,
              'border-color': item.borderColor,
              'border-width': `${item.borderTop}px ${item.borderRight}px ${item.borderBottom}px ${item.borderLeft}px`
            }"
            v-for="item in renderList"
            :key="item.id"
            :isActive="true"
            :w="item.width"
            :h="item.height"
            :x="item.left"
            :y="item.top"
            :z="item.zIndex"
            :parentW="bgWidth"
            :parentH="bgHeight"
            :parentLimitation="true"
            :aspectRatio="item.isAspectRatio"
            @dragging="changeDimensions($event, item.id)"
            @resizing="changeDimensions($event, item.id)"
          >
            <div class="filler"></div>
            <!-- <div>{{ item.top }} х {{ item.left }}</div>
            <div>{{ item.width }} х {{ item.height }}</div> -->
          </VueDragResize>
        </div>
      </div>
    </div>
    <div class="right">
      <h4>属性</h4>
      <div v-if="currentWidget.id" class="form-box">
        <el-form ref="form" size="mini" :model="currentWidget" label-width="60px">
          <el-form-item label="属性">
            <el-select
              @change="changeField($event, currentWidget.id)"
              v-model="currentWidget.fieldLabel"
              placeholder="选择绑定的属性"
            >
              <el-option
                v-for="v in fieldList"
                :key="v.label"
                :label="v.label"
                :value="v.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="字段">
            <el-input
              :readonly="Boolean(currentWidget.fieldLabel !== '自定义')"
              @input="changeInput($event, currentWidget.id, 'fieldName')"
              v-model="currentWidget.fieldName"
            ></el-input>
          </el-form-item>
          <el-form-item label="示例值">
            <el-input
              @input="changeInput($event, currentWidget.id, 'fieldValue')"
              v-model="currentWidget.fieldValue"
            ></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-input readonly v-model="currentWidget.typeName"></el-input>
          </el-form-item>
          <el-form-item label="X坐标">
            <el-input
              type="number"
              @input="changeInput($event, currentWidget.id, 'left')"
              v-model="currentWidget.left"
            ></el-input>
          </el-form-item>
          <el-form-item label="Y坐标">
            <el-input
              type="number"
              @input="changeInput($event, currentWidget.id, 'top')"
              v-model="currentWidget.top"
            ></el-input>
          </el-form-item>
          <el-form-item label="层级">
            <el-input
              type="number"
              @input="changeInput($event, currentWidget.id, 'zIndex')"
              v-model="currentWidget.zIndex"
            ></el-input>
          </el-form-item>
          <template v-if="currentWidget.type !== 'text'">
            <el-form-item label="宽度">
              <el-input
                type="number"
                @input="changeInput($event, currentWidget.id, 'width')"
                v-model="currentWidget.width"
              >
                <template #append>px</template>
              </el-input>
            </el-form-item>
            <el-form-item label="高度">
              <el-input
                type="number"
                @input="changeInput($event, currentWidget.id, 'height')"
                v-model="currentWidget.height"
              >
                <template #append>px</template>
              </el-input>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="大小">
              <el-input
                @input="changeInput($event, currentWidget.id, 'size')"
                v-model="currentWidget.size"
              ></el-input>
            </el-form-item>
            <el-form-item label="字重">
              <el-input
                @input="changeInput($event, currentWidget.id, 'bold')"
                v-model="currentWidget.bold"
              ></el-input>
            </el-form-item>
          </template>
          <template v-if="currentWidget.type === 'rect'">
            <h5>边框</h5>
            <el-form-item label="上">
              <el-input
                type="number"
                @input="changeInput($event, currentWidget.id, 'borderTop')"
                v-model="currentWidget.borderTop"
              >
                <template #append>px</template>
              </el-input>
            </el-form-item>
            <el-form-item label="右">
              <el-input
                type="number"
                @input="changeInput($event, currentWidget.id, 'borderRight')"
                v-model="currentWidget.borderRight"
              >
                <template #append>px</template>
              </el-input>
            </el-form-item>
            <el-form-item label="下">
              <el-input
                type="number"
                @input="changeInput($event, currentWidget.id, 'borderBottom')"
                v-model="currentWidget.borderBottom"
              >
                <template #append>px</template>
              </el-input>
            </el-form-item>
            <el-form-item label="左">
              <el-input
                type="number"
                @input="changeInput($event, currentWidget.id, 'borderLeft')"
                v-model="currentWidget.borderLeft"
              >
                <template #append>px</template>
              </el-input>
            </el-form-item>
            <el-form-item label="颜色">
              <el-color-picker
                @change="changeInput($event, currentWidget.id, 'borderColor')"
                v-model="currentWidget.borderColor"
              ></el-color-picker>
            </el-form-item>
          </template>
        </el-form>
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
      color: 'green',
      bgHeight: 750,
      bgWidth: 576,
      currentWidget: {
        id: null,
        fieldLabel: ''
      },
      renderList: [],
      widgetList: [
        { name: 'rect', label: '矩形' },
        { name: 'barCode', label: '条形码' },
        { name: 'qrCode', label: '二维码', isAspectRatio: true },
        { name: 'text', label: '文本' }
      ],
      fieldList: [
        { name: '', label: '自定义' },
        { name: 'proCode', label: '时效类型' },
        { name: 'destRouteLabel', label: '目的地' },
        { name: 'fromName', label: '姓名（寄）' },
        { name: 'fromPhone', label: '电话（寄）' },
        { name: 'fromOrgName', label: '公司（寄）' },
        { name: 'fromAddress', label: '地址（寄）' },
        { name: 'toName', label: '姓名（收）' },
        { name: 'toPhone', label: '电话（收）' },
        { name: 'toOrgName', label: '公司（收）' },
        { name: 'toAddress', label: '地址（收）' }
      ]
    })

    onMounted(() => {})

    const handleAdd = (item) => {
      const basicObj = {
        type: item.name,
        typeName: item.label,
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        zIndex: 1,
        fieldLabel: '自定义',
        isAspectRatio: false,
        id: new Date().getTime().toString()
      }
      let typeObj = {}
      switch (item.name) {
        case 'rect':
          typeObj = {
            width: 100,
            height: 100,
            borderTop: 1,
            borderRight: 1,
            borderBottom: 1,
            borderLeft: 1,
            borderStyle: 'solid'
          }
          break
        case 'qrCode':
          typeObj = {
            width: 100,
            height: 100,
            isAspectRatio: true
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
      const copyObj = Object.assign({}, obj)
      state.currentWidget = obj
      state.renderList.push(copyObj)
    }

    const changeInput = (val, id, prop) => {
      const renderList = []
      state.renderList.forEach((item) => {
        if (item.id === id) {
          const copyItem = Object.assign({}, item)
          copyItem[prop] = val
          renderList.push(copyItem)
        } else {
          renderList.push(item)
        }
      })
      state.renderList = renderList
    }

    const changeField = (val, id) => {
      const fieldList = state.fieldList.slice(0)
      const renderList = []
      const obj = fieldList.find((v) => v.label === val)
      state.renderList.forEach((item) => {
        if (item.id === id) {
          const copyItem = Object.assign({}, item)
          copyItem.fieldLabel = obj.label
          copyItem.fieldName = obj.name
          renderList.push(copyItem)
        } else {
          renderList.push(item)
        }
      })
      state.renderList = renderList
      state.currentWidget.fieldLabel = obj.label
      state.currentWidget.fieldName = obj.name
    }

    const changeDimensions = (obj, id) => {
      let copyItem = {}
      const renderList = []
      state.renderList.forEach((item) => {
        if (item.id === id) {
          renderList.push({ ...item, ...obj })
          copyItem = Object.assign({}, { ...item, ...obj })
        } else {
          renderList.push(item)
        }
      })
      state.renderList = renderList
      state.currentWidget = copyItem
    }

    return {
      ...toRefs(state),
      handleAdd,
      changeDimensions,
      changeInput,
      changeField
    }
  }
})
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  width: 100%;
}
.left {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
}
.btn-item {
  margin-bottom: 20px;
}
.mid {
  margin: 0 20px;
  flex: 1;
  border: 1px solid #ccc;
}
.operate-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #ccc;
}
.content-view {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}
.canvas-view {
  box-sizing: content-box;
  border: 1px solid #000;
  position: relative;
}
.right {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
}
.filler {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
