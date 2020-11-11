<style lang="less" scoped>
.release {
    width: 100%;
    min-height: 100%;
    padding: 12px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: left;
    .box {
      width: 100%;
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
    .block {
      width: 100%;
      .main {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        font-size: 14px;
        color: rgba(16, 16, 16, 100);
        .grid-content {
          width: 100%;
          margin-bottom: 20px;
          display: inline-block;
        }
        .grid-left {
          float: left;
          margin-bottom: 20px;
        }
        .grid-img {
          float: left;
          width: 160px;
          height: 97px;
          margin-right: 22px;
        }
        .wrap {
            width: 100%;
            margin-top: 22px;
            box-sizing: border-box;
        }
        .footer {
          margin-top: 60px;
        }
      }
    }
    
}
</style>


<template>
  <div class="release">
    <div class="box" v-if="releaseType">
      <el-row>
          <el-form ref="releaseForm" :model="releaseForm" label-width="120px">
              <el-col :span="8">
                  <el-form-item label="任务ID：">
                      <el-input v-model="releaseForm.name" size="small"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                  <el-form-item label="审核状态：">
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
                  <el-form-item label=" ">
                      <el-button type="primary" size="small" @click="search()">搜索</el-button>
                      <el-button size="small" @click="reset()">重置</el-button>
                  </el-form-item>
              </el-col>
              <el-col :span="10">
                  <el-form-item label="发布时间：">
                      <el-date-picker
                      size="small"
                      v-model="releaseForm.value1"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                      </el-date-picker>
                  </el-form-item>
              </el-col>
              <el-col :span="24">
                  <div class="main_button">
                      <el-button type="primary" size="small" @click="clickTask()"><i class="el-icon-plus"></i>&nbsp;&nbsp;发布任务</el-button>
                  </div>
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
              label="发布人ID"
              width="150">
              </el-table-column>
              <el-table-column
              prop="name"
              label="发布人账号"
              width="120">
              </el-table-column>
              <el-table-column
              prop="province"
              label="发布企业"
              width="120">
              </el-table-column>
              <el-table-column
              prop="city"
              label="联系方式"
              width="120">
              </el-table-column>
              <el-table-column
              prop="address"
              label="任务名称"
              width="300">
              </el-table-column>
              <el-table-column
              prop="zip"
              label="需求人数"
              width="120">
              </el-table-column>
              <el-table-column
              prop=""
              label="年龄要求">
              </el-table-column>
              <el-table-column
              prop=""
              label="工作地点">
              </el-table-column>
              <el-table-column
              prop=""
              label="薪资结算">
              </el-table-column>
              <el-table-column
              prop=""
              label="审核状态">
              </el-table-column>
              <el-table-column
              prop=""
              label="发布时间">
              </el-table-column>
              <el-table-column
              prop=""
              label="截止时间">
              </el-table-column>
              <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                  <el-button
                  @click.native.prevent="detailsRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  详情
                  </el-button>
              </template>
              </el-table-column>
          </el-table>
      </div>
      <div class="wrap">
          <pagination @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></pagination>
      </div>
    </div>
    <div class="block" v-else>
      <el-page-header @back="goBack" content="查看详情">
      </el-page-header>
      <div class="main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <el-row>
              <el-col :span="24"><h4>任务信息</h4></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">任务ID：6789978989</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">任务需求方：上海韵达货运有限公司</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">联系电话：18811051022</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">任务名称：快递配送人员</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">所属行业：零售行业</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">需求人数：50人</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">任务地点：北京海淀</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">工作时间：2020-10-01至2020-12-31</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">性别要求：男</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">学历要求：不限学历</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">年龄要求：18-40周岁</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">薪资结算： 400/天</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">发布时间：2020-09-08 12:44:27</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">截止时间：2020-09-15 23:59:59</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">审核状态：审核通过</span></el-col>
              <el-col :span="24"><span class="grid-content bg-purple">标签：提供食宿、专业技能</span></el-col>
              <el-col :span="24"><span class="grid-content bg-purple"><span class="grid-left">任务说明：</span>普通话流利、思维活跃，擅长交流，普通话流利、思维活跃，擅长交流，普通话流利、思维活跃，擅长交流，普通话流利、思维活跃，擅长交流，普通话流利、思维    
                活跃，擅长交流，普通话流利、思维活跃，擅长交流普通话流利、思维活跃，擅长交流</span></el-col>
              <el-col :span="24"><span class="grid-left">工作环境：</span><img class="grid-img" src="" alt=""><img class="grid-img" src="" alt=""><img class="grid-img" src="" alt=""></el-col>
            </el-row>
            <el-row class="footer">
              <el-col :span="24"><h4>平台发包信息</h4></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">平台发包ID：6728378997992784</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">发布状态：已发布</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">发布方：薪必果平台</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">薪资结算： 400/天</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">发布时间：2020-09-08 12:44:27</span></el-col>
              <el-col :span="8"><span class="grid-content bg-purple">截止时间：2020-09-15 23:59:59</span></el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="投递信息" name="second">
            <div class="wrap">
              <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                  fixed
                  prop="name"
                  label="投递人ID">
                  </el-table-column>
                  <el-table-column
                  prop="province"
                  label="投递人姓名">
                  </el-table-column>
                  <el-table-column
                  prop="city"
                  label="投递人联系电话">
                  </el-table-column>
                  <el-table-column
                  prop="address"
                  label="简历信息"
                  width="150">
                  <template slot-scope="scope">
                      <el-button
                      @click="resume(scope.row)"
                      type="text"
                      size="small">
                      查看简历
                      </el-button>
                  </template>
                  </el-table-column>
                  <el-table-column
                  prop="zip"
                  label="状态">
                  </el-table-column>
                  <el-table-column
                  prop=""
                  label="投递时间">
                  </el-table-column>
                  <el-table-column
                  fixed="right"
                  label="操作"
                  width="200">
                  <template slot-scope="scope">
                      <el-button
                      @click.native.prevent="clickRow(scope.$index, tableData)"
                      type="text"
                      size="small">
                      详情
                      </el-button>
                      <el-button
                      @click="clickRow(1)"
                      type="text"
                      size="small">
                      进度反馈
                      </el-button>
                      <el-button
                      @click.native.prevent="clickRow(2)"
                      type="text"
                      size="small">
                      发起签约
                      </el-button>
                  </template>
                  </el-table-column>
              </el-table>
            </div>
            <div class="wrap">
                <pagination @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-dialog
      title="进度反馈"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="进度状态" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="进度描述" prop="desc">
          <el-input type="textarea" style="width:318px" v-model="ruleForm.desc" placeholder="请输入进度描述" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 发起签约 -->
    <el-dialog
      title="发起签约"
      :visible.sync="dialogVisible1"
      width="600px"
      :before-close="handleClose">
      <el-form :model="ruleForm1" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-alert
          title="请选择签约截止时间，超过签约截止时间，还未完成签约，即签约过期，无法签署"
          type="warning"
          :closable="false"
          show-icon>
        </el-alert>
        <el-form-item label="签约截止时间：" prop="name">
          <el-date-picker
            size="small"
            style="width:318px"
            v-model="ruleForm1.value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 发布任务 -->
    <el-dialog
      title="发布任务"
      :visible.sync="dialogVisible2"
      width="600px"
      :before-close="handleClose">
      <el-form :model="taskForm" :rules="taskRules" ref="taskForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="企业名称：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item label="企业ID：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item label="任务名称：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item label="所属行业：" prop="region">
          <el-select v-model="taskForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需求人数：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item label="任务地点：" prop="region">
          <el-select v-model="taskForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作时间：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item label="性别要求：" prop="region">
          <el-select v-model="taskForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学历要求：" prop="region">
          <el-select v-model="taskForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄要求：" prop="region">
          <el-select v-model="taskForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="截止日期：" prop="name">
          <el-date-picker
            size="small"
            style="width:318px"
            v-model="taskForm.value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="任务说明：" prop="desc">
          <el-input type="textarea" style="width:318px" v-model="taskForm.desc" placeholder="请输入进度描述" size="small"></el-input>
        </el-form-item>
        <el-form-item label="工作场景照片：" prop="desc">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="联系方式：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item label="标签：" prop="region">
          <el-select v-model="taskForm.region" placeholder="请选择进度状态" size="small" style="width:318px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="薪资明细：" prop="name">
          <el-input v-model="taskForm.name" placeholder="请输入" size="small" style="width:318px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import pagination from '../../components/pagination.vue'

export default {
  data() {
    return {
      imageUrl: '',
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      activeName: 'first',
      releaseType: true,
      releaseForm:{},
      options:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
      tableData: [
        {
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
        }
      ],
      ruleForm: {
        region: '',
        desc: ''
      },
      ruleForm1:{},
      rules: {
        region: [
          { required: true, message: '请选择进度状态', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写进度描述', trigger: 'blur' }
        ]
      },
      taskForm:{
        region:'',
        desc: '',
        name: ''
      },
      taskRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择进度状态', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写进度描述', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    clickTask() {
      this.dialogVisible2 = true;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleClose() {
      this.dialogVisible = false;
      this.dialogVisible1 = false;
      this.dialogVisible2 = false
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    resume() {

    },
    goBack () {
      this.releaseType = true;
    },
    handleClick() {

    },
    detailsRow() {
      this.releaseType = false;
    },
    clickRow(val) {
      if (val == 1) {
        this.dialogVisible = true;
      }else if (val == 2) {
        this.dialogVisible1 = true;
      }
    },
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
