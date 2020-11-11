<template>
  <div class="Login">
    <div class="dialog" v-if="loginType">
      <div class="main_right">
        <div class="main">
          <div class="name">签必果</div>
          <div class="input">
            <el-input
              v-model="phone"
              prefix-icon="el-icon-user"
              placeholder="请输入手机号"
              clearable
              :disabled="inputType"
            ></el-input>
          </div>
          <div class="validation">
            <div class="left">
              <el-input
                prefix-icon="el-icon-set-up"
                v-model="graphics"
                placeholder="请输入手机号验证码"
              ></el-input>
            </div>
            <div class="obtain" @click="validationSms(phone)">
              {{ countdownHtml }}
            </div>
          </div>
          <div
            :class="phone != '' && graphics != '' ? 'determine' : 'determineNo'"
            @click="homeSkip"
            id="btn"
          >
            登&nbsp;&nbsp;录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";

export default {
  name: "Login",
  data() {
    var phone = (rule, value, callback) => {
      var type = /^1[345678]\d{9}$/;
      // var type = value.replace(/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i);
      if (!type.test(value)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };
    return {
      inputType: false,
      loginType: true,
      phone: "",
      approvetype: 0,
      activeIndex: 0,
      rules: {
        phone: [{ validator: phone, trigger: "blur" }],
        graphics: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ]
      },
      countdownHtml: "获取验证码",
      times: 60,
      timer: null,
      noID: "",
      graphics: "",
      ImageArr: {},
    };
  },
  methods: {
    captchaPost() {
      //   图片验证码
      post(api.captcha, {
        width: 81,
        height: 36,
      }).then(
        (d) => {
          console.log(d, "图片");
          if (d.status === 0) {
            this.ImageArr = d.data;
          } else {
            return console.log(d.msg);
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    quxiaoBtn(formName) {
      this.loginType = true;
      clearInterval(this.timer);
      this.countdownHtml = "获取验证码";
      this.times = 60;
      this.$refs[formName].resetFields();
    },
    validationSms() {
      console.log(this.phone, "33333");
      if (this.times != 60) {
        return;
      }
      if (!this.phone) {
        this.$message.error("请输入手机号");
        return;
      }
      //   短信验证码
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(this.phone)) {
        this.$message.error("该手机号格式错误");
        return;
      }
      this.countdown();
      this.timer = setInterval(this.countdown, 1000);
      post(api.sendMobileCode, {
        mobile: this.phone,
      }).then(
        (d) => {
          if (d.status == 0) {
            this.$message.success("发送成功");
          } else {
            this.$message.error(d.msg);
          }
          //success callback
        },
        (err) => {
          //error callback
        }
      );
    },
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        clearInterval(this.timer);
        that.countdownHtml = "获取验证码";
        that.times = 60;
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
    },
    register() {
      this.$router.push({ path: "/register" });
    },
    homeSkip() {
      if (this.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(this.phone)) {
        this.$message.error("该手机号格式错误");
        return;
      }
      post(api.login, {
        loginName: this.phone,
        password: this.password,
      }).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            this.$message.success("登录成功");
            sessionStorage.setItem("esignmerchantsid", d.data.loginKey);
            sessionStorage.setItem("loginPhone", d.data.ucname);
            // sessionStorage.setItem("account_id", d.data.uc_auth.account_id);
            if (sessionStorage.getItem("taskId")) {
              post(api.findtotaskId, {
                taskId: sessionStorage.getItem("taskId"),
              }).then(
                (d) => {
                  console.log(d, "登录后在调用一次");
                  if (d.status == 0) {
                    console.log(d.data.approvetype, "登录后获取到类型111111");
                    if (d.data.status == "2") {
                      this.$router.push({ path: "/PCusageseal" });
                      return;
                    }
                    if (d.data.approvetype == 1) {
                      this.$message.error("请先进行个人认证");
                      this.$router.push({ path: "/personalShou" });
                    } else if (d.data.approvetype == 2) {
                      this.$message.error("请先进行企业认证");
                      this.$router.push({ path: "/enterprise" });
                    } else if (d.data.approvetype == 0) {
                      sessionStorage.setItem("agent_id", d.data.agent_id);
                      sessionStorage.setItem("main_id", d.data.main_id);
                      this.$router.push({ path: "/nestedContract" });
                    } else {
                      this.$message.error("认证中");
                      this.$router.push({ path: "/" });
                    }
                  } else {
                    this.$message.error(d.msg);
                  }
                  //console.log(d);
                  //success callback
                },
                (err) => {
                  //console.log(err.data.msg);
                  //error callback
                }
              );
            } else {
              this.$router.push({ path: "/" });
            }
          } else {
            this.$message.error(d.msg);
          }
          //console.log(d);

          //success callback
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
  },
  components: {},
  updated() {
    //console.log("???");
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.Login::-webkit-scrollbar {
  width: 0;
}

.Login {
  width: 100%;
  height: 100%;
  background: url("https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_7161595906958578202028112918578背景.png")
    no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  .dialog {
    width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 220px;
    height: 100%;
    .main_right {
      box-sizing: border-box;
      float: right;
      width: 38%;
      height: 40%;
      background: #ffffff;
      box-shadow: 0px 5px 22px 0px rgba(0, 97, 184, 0.65);
      border-radius: 4px;
      min-width: 421px;
      min-height: 385px;
      .main {
        width: 100%;
        padding-top: 47px;
        .name {
          width: 100%;
          height: 100%;
          font-size: 25px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.75);
          text-align: center;
          img {
            width: 31px;
            height: 34px;
            vertical-align: middle;
          }
        }
        .laber {
          width: 100%;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          text-align: left;
          margin-top: 25px;
        }
        .input {
          width: 85%;
          margin: 0 auto;
          height: 42px;
          background: rgb(232, 240, 254);
          border-radius: 6px;
          border: 1px solid rgba(224, 224, 224, 1);
          margin-top: 8%;
          line-height: 42px;
          overflow: hidden;
        }
        .validation {
          width: 85%;
          height: 52px;
          margin: 40px auto;
          .left {
            float: left;
            width: 257px;
            height: 48px;
            line-height: 48px;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
          }
          .obtain {
            float: right;
            width: 104px;
            height: 47px;
            line-height: 47px;
            text-align: center;
            background: white;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
            font-size: 13px;
            font-family: PingFangSC;
            font-weight: 400;
            color: #999999;
            cursor: pointer;
          }
          .right {
            float: right;
            width: 97px;
            height: 52px;
            padding: 8px;
            box-sizing: border-box;
            background: rgba(245, 245, 245, 1);
            div {
              width: 100%;
              height: 100%;
              background-color: #fff;
              cursor: pointer;
            }
          }
        }
        .forget {
          width: 100%;
          font-size: 13px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(77, 194, 248, 1);
          line-height: 18px;
          text-align: right;
          padding: 11px 13px;
          box-sizing: border-box;
          cursor: pointer;
        }
        .determine {
          width: 85%;
          margin: 0 auto;
          height: 40px;
          background: rgba(121, 176, 250, 1);
          box-shadow: 0px 1px 9px 0px rgba(0, 121, 254, 0.54);
          border-radius: 2px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 400;
          color: #ffffff;
          margin-top: 9%;
          cursor: pointer;
        }
        .determineNo {
          width: 85%;
          margin: 0 auto;
          height: 40px;
          background: rgba(121, 176, 250, 0.5);
          border-radius: 2px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 400;
          color: #ffffff;
          margin-top: 9%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<style>
.Login .dialog .el-input > .el-input__inner {
  height: 46px !important;
  line-height: 46px !important;
  border: none !important;
  padding-left: 70px;
}
.Login .dialog2 .el-input > .el-input__inner {
  height: 46px !important;
  line-height: 46px !important;
  border: none !important;
}
.Login .dialog .el-input__icon {
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s !important;
  color: #33aeff !important;
  font-size: 24px !important;
  width: 65px !important;
}
.Login .el-step__head.is-success {
  color: rgba(48, 131, 255, 1);
  border-color: rgba(48, 131, 255, 1);
}
.Login .el-step__title.is-success {
  color: rgba(0, 0, 0, 0.65);
}
.Login .is-process .el-step__icon.is-text {
  background: rgba(48, 131, 255, 1);
  border: none;
  color: #fff;
}
.el-tooltip__popper[x-placement^="right"].is-dark {
  width: 250px !important;
  height: 80px !important;
  background: rgba(255, 255, 255, 1) !important;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15) !important;
  border: 1px solid rgba(235, 238, 245, 1) !important;
  font-size: 14px !important;
  font-family: PingFangSC-Regular, PingFang SC !important;
  font-weight: 400 !important;
  color: rgba(100, 102, 106, 1) !important;
  line-height: 20px !important;
}
.el-tooltip__popper[x-placement^="right"] .popper__arrow {
  border-right-color: rgba(0, 0, 0, 0.15) !important;
}
.el-tooltip__popper[x-placement^="right"] .popper__arrow:after {
  border-right-color: rgba(0, 0, 0, 0.15) !important;
}
</style>
