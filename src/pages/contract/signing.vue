<style lang="less" scoped>
.signing {
    width: 100%;
    min-height: 100%;
    padding: 12px;
    box-sizing: border-box;
    background-color: #fff;
    .main_button {
        margin-left: 36px;
    }
    .wrap {
        width: 100%;
        margin-top: 22px;
        padding: 0px 30px;
        box-sizing: border-box;
    }
}
</style>


<template>
  <div class="signing">
    <el-row>
        <el-form ref="releaseForm" :model="releaseForm" label-width="120px">
            <el-col :span="8">
                <el-form-item label="发起方：">
                    <el-input v-model="releaseForm.name" size="small"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="签署方：">
                    <el-input v-model="releaseForm.name" size="small"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="状态：">
                    <el-select v-model="releaseForm.value" style="width:100%" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="发起签约时间：">
                    <el-date-picker
                    style="width:100%"
                    size="small"
                    v-model="releaseForm.value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label=" " style="text-align: left;">
                    <el-button type="primary" size="small" @click="search()">搜索</el-button>
                    <el-button size="small" @click="reset()">重置</el-button>
                </el-form-item>
            </el-col>
        </el-form>
    </el-row>
    <div class="wrap">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="经办人ID"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="经办人账号"
            width="120">
            </el-table-column>
            <el-table-column
            prop="province"
            label="合同发起方"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="合同签署方"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="状态"
            width="300">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="合同发起时间"
            width="120">
            </el-table-column>
            <el-table-column
            prop=""
            label="签约结束时间">
            </el-table-column>
            <el-table-column
            prop=""
            label="签约完成时间">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                合同
                </el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
    <div class="wrap">
        <pagination @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/pagination.vue'

export default {
  data() {
    return {
        releaseForm:{

        },
        options:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  },
  methods: {
    search() {

    },
    reset() {

    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  },
  components: {
      pagination:pagination
  }
}
</script>
