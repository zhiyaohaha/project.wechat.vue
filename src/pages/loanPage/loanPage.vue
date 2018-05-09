<template>
  <div>
    <scroll>
      <div>
        <div class="loanContent">
          <img src="./img/banner.png">
          <keep-alive>
            <ul class="mform">
              <li v-for="(mformData, index) in mformDatas" :key="index">
                <span class="description">{{mformData.description}}</span>
                <input type="text" v-model="mformData.model"
                       :readonly="mformData.readonly"
                       @focus="pullDown(true,index)"
                       :placeholder="mformData.placeholder"
                       :maxlength="mformData.maxlength"
                       :name="mformData.name">
                <span :class="{purposeList:mformData.purposeList}" v-if="!mformData.sendMsg && !mformData.units"
                      @touchstart="pullDown(true,index)">
                {{mformData.units}}
              </span>
              </li>
            </ul>
          </keep-alive>
          <div class="propertyCase">
            <span>资产情况</span>
            <propertyMod :propertyModDatas="propertyModDatas"/>
          </div>
        </div>
        <div class="footerOccupied">
        </div>
      </div>
    </scroll>
    <mt-popup v-model="shadeIsShow" position="bottom" class="maskLayer">
      <div class="shadeIsShowHeader">
          <span @touchstart="pullDown(false,mformDatasInd,false)" class="cancel">
            取消
          </span>
        <span @touchstart="pullDown(false,mformDatasInd,true)" class="ascertain">
            确定
          </span>
      </div>
      <pickerMod :pickerModDatas="pickerModDatas" :shadeIsShow="shadeIsShowInd" :onValuesChange="onValuesChange"
                 v-show="mformDatasInd < 3"/>
      <linkageMod :linkageModDatas="provinceAndCity" :mformDatasInd="shadeIsShowInd" :onValuesChange="ValuesChange"
                  v-show="mformDatasInd === 3"/>
    </mt-popup>
    <footer class="simulationSubmit" @click="submit">
      <a href="javascript:"></a>
    </footer>
  </div>
</template>

<script>
  import propertyMod from '../../components/propertyMod/propertyMod.vue'
  import linkageMod from '../../components/linkageMod/linkageMod.vue'
  import {getLoanAmount, postLoanDemand} from '../../api'
  import {mapState, mapGetters} from "vuex"

  export default {
    data() {
      return {
        propertyModDatas: [
          {
            character: '我有房',
            imgUrlIsShow: false,
          },
          {
            character: '我有车',
            imgUrlIsShow: false,
          },
          {
            character: '我有信用卡',
            imgUrlIsShow: false,
          },
          {
            character: '我有公积金',
            imgUrlIsShow: false,
          },
          {
            character: '我有社保',
            imgUrlIsShow: false,
          }
        ],
        mformDatas: [
          {
            description: '贷款金额：',
            readonly: true,
            placeholder: '请选择贷款金额',
            name: 'money',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]/,
            regular: /[\s\S]/,
            errorColor: false,
          },
          {
            description: '贷款期限：',
            placeholder: '请选择贷款期限',
            name: 'timeLimit',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]*/,
            regular: /[\s\S]/,
            errorColor: false,
            readonly: true,
          },
          {
            description: '贷款用途：',
            placeholder: '请选择贷款用途',
            name: 'purpose',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]*/,
            regular: /[\s\S]/,
            errorColor: false,
            readonly: true,
          },
          {
            description: '所在城市：',
            placeholder: '请选择所在城市',
            name: 'city',
            model: '',
            purposeList: true,
            sendMsg: false,
            units: '',
            reg: /[\s\S]*/,
            regular: /[\s\S]/,
            errorColor: false,
            readonly: true,
          },
          {
            message: "请正确输入您的姓名",
            description: '姓名：',
            placeholder: '请输入您的姓名',
            name: 'userName',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[\u4e00-\u9fa5]{1,15}$/,
            regular: /^[\u4e00-\u9fa5]{1,15}$/,
            errorColor: false,
            maxlength: '15',
            readonly: true,
          },
          {
            message: "请正确输入您的身份证号",
            description: '身份证号：',
            placeholder: '请输入您的身份证号',
            name: 'IDnumber',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[0-9xX]{1,}$/,
            regular: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            errorColor: false,
            maxlength: '18',
            readonly: true,
          },
          {
            message: "请正确输入您的手机号",
            description: '手机号：',
            placeholder: '请输入您的手机号',
            name: 'phoneNum',
            model: '',
            purposeList: false,
            sendMsg: false,
            units: '',
            reg: /^[0-9]{1,}$/,
            regular: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/,
            errorColor: false,
            maxlength: '11',
            readonly: true,
          },
        ],
        provinceAndCity: [
          {
            "text": "北京市",
            "value": "110000",
            "childrens": [
              {
                "text": "北京城区",
                "value": "110100",
                "childrens": null
              }
            ]
          },
          {
            "text": "河北省",
            "value": "130000",
            "childrens": [
              {
                "text": "石家庄市",
                "value": "130100",
                "childrens": null
              },
              {
                "text": "邯郸市",
                "value": "130400",
                "childrens": null
              },
              {
                "text": "衡水市",
                "value": "131100",
                "childrens": null
              },
              {
                "text": "唐山市",
                "value": "130200",
                "childrens": null
              },
              {
                "text": "邢台市",
                "value": "130500",
                "childrens": null
              },
              {
                "text": "保定市",
                "value": "130600",
                "childrens": null
              },
              {
                "text": "承德市",
                "value": "130800",
                "childrens": null
              },
              {
                "text": "廊坊市",
                "value": "131000",
                "childrens": null
              },
              {
                "text": "秦皇岛市",
                "value": "130300",
                "childrens": null
              },
              {
                "text": "张家口市",
                "value": "130700",
                "childrens": null
              },
              {
                "text": "沧州市",
                "value": "130900",
                "childrens": null
              }
            ]
          },
          {
            "text": "山西省",
            "value": "140000",
            "childrens": [
              {
                "text": "太原市",
                "value": "140100",
                "childrens": null
              },
              {
                "text": "阳泉市",
                "value": "140300",
                "childrens": null
              },
              {
                "text": "朔州市",
                "value": "140600",
                "childrens": null
              },
              {
                "text": "忻州市",
                "value": "140900",
                "childrens": null
              },
              {
                "text": "吕梁市",
                "value": "141100",
                "childrens": null
              },
              {
                "text": "晋城市",
                "value": "140500",
                "childrens": null
              },
              {
                "text": "运城市",
                "value": "140800",
                "childrens": null
              },
              {
                "text": "大同市",
                "value": "140200",
                "childrens": null
              },
              {
                "text": "长治市",
                "value": "140400",
                "childrens": null
              },
              {
                "text": "晋中市",
                "value": "140700",
                "childrens": null
              },
              {
                "text": "临汾市",
                "value": "141000",
                "childrens": null
              }
            ]
          },
          {
            "text": "内蒙古自治区",
            "value": "150000",
            "childrens": [
              {
                "text": "呼和浩特市",
                "value": "150100",
                "childrens": null
              },
              {
                "text": "包头市",
                "value": "150200",
                "childrens": null
              },
              {
                "text": "乌海市",
                "value": "150300",
                "childrens": null
              },
              {
                "text": "赤峰市",
                "value": "150400",
                "childrens": null
              },
              {
                "text": "通辽市",
                "value": "150500",
                "childrens": null
              },
              {
                "text": "鄂尔多斯市",
                "value": "150600",
                "childrens": null
              },
              {
                "text": "呼伦贝尔市",
                "value": "150700",
                "childrens": null
              },
              {
                "text": "巴彦淖尔市",
                "value": "150800",
                "childrens": null
              },
              {
                "text": "乌兰察布市",
                "value": "150900",
                "childrens": null
              },
              {
                "text": "兴安盟",
                "value": "152200",
                "childrens": null
              },
              {
                "text": "锡林郭勒盟",
                "value": "152500",
                "childrens": null
              },
              {
                "text": "阿拉善盟",
                "value": "152900",
                "childrens": null
              }
            ]
          },
          {
            "text": "吉林省",
            "value": "220000",
            "childrens": [
              {
                "text": "长春市",
                "value": "220100",
                "childrens": null
              },
              {
                "text": "白城市",
                "value": "220800",
                "childrens": null
              },
              {
                "text": "辽源市",
                "value": "220400",
                "childrens": null
              },
              {
                "text": "通化市",
                "value": "220500",
                "childrens": null
              },
              {
                "text": "延边朝鲜族自治州",
                "value": "222400",
                "childrens": null
              },
              {
                "text": "四平市",
                "value": "220300",
                "childrens": null
              },
              {
                "text": "松原市",
                "value": "220700",
                "childrens": null
              },
              {
                "text": "吉林市",
                "value": "220200",
                "childrens": null
              },
              {
                "text": "白山市",
                "value": "220600",
                "childrens": null
              }
            ]
          },
          {
            "text": "上海市",
            "value": "310000",
            "childrens": [
              {
                "text": "上海城区",
                "value": "310100",
                "childrens": null
              }
            ]
          },
          {
            "text": "浙江省",
            "value": "330000",
            "childrens": [
              {
                "text": "宁波市",
                "value": "330200",
                "childrens": null
              },
              {
                "text": "湖州市",
                "value": "330500",
                "childrens": null
              },
              {
                "text": "绍兴市",
                "value": "330600",
                "childrens": null
              },
              {
                "text": "金华市",
                "value": "330700",
                "childrens": null
              },
              {
                "text": "衢州市",
                "value": "330800",
                "childrens": null
              },
              {
                "text": "丽水市",
                "value": "331100",
                "childrens": null
              },
              {
                "text": "温州市",
                "value": "330300",
                "childrens": null
              },
              {
                "text": "舟山市",
                "value": "330900",
                "childrens": null
              },
              {
                "text": "杭州市",
                "value": "330100",
                "childrens": null
              },
              {
                "text": "嘉兴市",
                "value": "330400",
                "childrens": null
              },
              {
                "text": "台州市",
                "value": "331000",
                "childrens": null
              }
            ]
          },
          {
            "text": "福建省",
            "value": "350000",
            "childrens": [
              {
                "text": "厦门市",
                "value": "350200",
                "childrens": null
              },
              {
                "text": "三明市",
                "value": "350400",
                "childrens": null
              },
              {
                "text": "福州市",
                "value": "350100",
                "childrens": null
              },
              {
                "text": "莆田市",
                "value": "350300",
                "childrens": null
              },
              {
                "text": "泉州市",
                "value": "350500",
                "childrens": null
              },
              {
                "text": "漳州市",
                "value": "350600",
                "childrens": null
              },
              {
                "text": "南平市",
                "value": "350700",
                "childrens": null
              },
              {
                "text": "龙岩市",
                "value": "350800",
                "childrens": null
              },
              {
                "text": "宁德市",
                "value": "350900",
                "childrens": null
              }
            ]
          },
          {
            "text": "江西省",
            "value": "360000",
            "childrens": [
              {
                "text": "鹰潭市",
                "value": "360600",
                "childrens": null
              },
              {
                "text": "吉安市",
                "value": "360800",
                "childrens": null
              },
              {
                "text": "上饶市",
                "value": "361100",
                "childrens": null
              },
              {
                "text": "景德镇市",
                "value": "360200",
                "childrens": null
              },
              {
                "text": "萍乡市",
                "value": "360300",
                "childrens": null
              },
              {
                "text": "九江市",
                "value": "360400",
                "childrens": null
              },
              {
                "text": "新余市",
                "value": "360500",
                "childrens": null
              },
              {
                "text": "赣州市",
                "value": "360700",
                "childrens": null
              },
              {
                "text": "抚州市",
                "value": "361000",
                "childrens": null
              },
              {
                "text": "南昌市",
                "value": "360100",
                "childrens": null
              },
              {
                "text": "宜春市",
                "value": "360900",
                "childrens": null
              }
            ]
          },
          {
            "text": "河南省",
            "value": "410000",
            "childrens": [
              {
                "text": "郑州市",
                "value": "410100",
                "childrens": null
              },
              {
                "text": "洛阳市",
                "value": "410300",
                "childrens": null
              },
              {
                "text": "平顶山市",
                "value": "410400",
                "childrens": null
              },
              {
                "text": "安阳市",
                "value": "410500",
                "childrens": null
              },
              {
                "text": "新乡市",
                "value": "410700",
                "childrens": null
              },
              {
                "text": "焦作市",
                "value": "410800",
                "childrens": null
              },
              {
                "text": "濮阳市",
                "value": "410900",
                "childrens": null
              },
              {
                "text": "许昌市",
                "value": "411000",
                "childrens": null
              },
              {
                "text": "漯河市",
                "value": "411100",
                "childrens": null
              },
              {
                "text": "南阳市",
                "value": "411300",
                "childrens": null
              },
              {
                "text": "信阳市",
                "value": "411500",
                "childrens": null
              },
              {
                "text": "驻马店市",
                "value": "411700",
                "childrens": null
              },
              {
                "text": "开封市",
                "value": "410200",
                "childrens": null
              },
              {
                "text": "鹤壁市",
                "value": "410600",
                "childrens": null
              },
              {
                "text": "三门峡市",
                "value": "411200",
                "childrens": null
              },
              {
                "text": "商丘市",
                "value": "411400",
                "childrens": null
              },
              {
                "text": "周口市",
                "value": "411600",
                "childrens": null
              },
              {
                "text": "济源市",
                "value": "419001",
                "childrens": null
              }
            ]
          },
          {
            "text": "湖南省",
            "value": "430000",
            "childrens": [
              {
                "text": "长沙市",
                "value": "430100",
                "childrens": null
              },
              {
                "text": "株洲市",
                "value": "430200",
                "childrens": null
              },
              {
                "text": "湘潭市",
                "value": "430300",
                "childrens": null
              },
              {
                "text": "衡阳市",
                "value": "430400",
                "childrens": null
              },
              {
                "text": "邵阳市",
                "value": "430500",
                "childrens": null
              },
              {
                "text": "岳阳市",
                "value": "430600",
                "childrens": null
              },
              {
                "text": "常德市",
                "value": "430700",
                "childrens": null
              },
              {
                "text": "张家界市",
                "value": "430800",
                "childrens": null
              },
              {
                "text": "益阳市",
                "value": "430900",
                "childrens": null
              },
              {
                "text": "郴州市",
                "value": "431000",
                "childrens": null
              },
              {
                "text": "永州市",
                "value": "431100",
                "childrens": null
              },
              {
                "text": "怀化市",
                "value": "431200",
                "childrens": null
              },
              {
                "text": "娄底市",
                "value": "431300",
                "childrens": null
              },
              {
                "text": "湘西土家族苗族自治州",
                "value": "433100",
                "childrens": null
              }
            ]
          },
          {
            "text": "广西壮族自治区",
            "value": "450000",
            "childrens": [
              {
                "text": "南宁市",
                "value": "450100",
                "childrens": null
              },
              {
                "text": "桂林市",
                "value": "450300",
                "childrens": null
              },
              {
                "text": "梧州市",
                "value": "450400",
                "childrens": null
              },
              {
                "text": "北海市",
                "value": "450500",
                "childrens": null
              },
              {
                "text": "防城港市",
                "value": "450600",
                "childrens": null
              },
              {
                "text": "钦州市",
                "value": "450700",
                "childrens": null
              },
              {
                "text": "贵港市",
                "value": "450800",
                "childrens": null
              },
              {
                "text": "百色市",
                "value": "451000",
                "childrens": null
              },
              {
                "text": "河池市",
                "value": "451200",
                "childrens": null
              },
              {
                "text": "来宾市",
                "value": "451300",
                "childrens": null
              },
              {
                "text": "崇左市",
                "value": "451400",
                "childrens": null
              },
              {
                "text": "柳州市",
                "value": "450200",
                "childrens": null
              },
              {
                "text": "玉林市",
                "value": "450900",
                "childrens": null
              },
              {
                "text": "贺州市",
                "value": "451100",
                "childrens": null
              }
            ]
          },
          {
            "text": "重庆市",
            "value": "500000",
            "childrens": [
              {
                "text": "重庆城区",
                "value": "500100",
                "childrens": null
              },
              {
                "text": "重庆郊县",
                "value": "500200",
                "childrens": null
              }
            ]
          },
          {
            "text": "贵州省",
            "value": "520000",
            "childrens": [
              {
                "text": "贵阳市",
                "value": "520100",
                "childrens": null
              },
              {
                "text": "六盘水市",
                "value": "520200",
                "childrens": null
              },
              {
                "text": "遵义市",
                "value": "520300",
                "childrens": null
              },
              {
                "text": "安顺市",
                "value": "520400",
                "childrens": null
              },
              {
                "text": "毕节市",
                "value": "520500",
                "childrens": null
              },
              {
                "text": "铜仁市",
                "value": "520600",
                "childrens": null
              },
              {
                "text": "黔西南布依族苗族自治州",
                "value": "522300",
                "childrens": null
              },
              {
                "text": "黔东南苗族侗族自治州",
                "value": "522600",
                "childrens": null
              },
              {
                "text": "黔南布依族苗族自治州",
                "value": "522700",
                "childrens": null
              }
            ]
          },
          {
            "text": "西藏自治区",
            "value": "540000",
            "childrens": [
              {
                "text": "拉萨市",
                "value": "540100",
                "childrens": null
              },
              {
                "text": "日喀则市",
                "value": "540200",
                "childrens": null
              },
              {
                "text": "昌都市",
                "value": "540300",
                "childrens": null
              },
              {
                "text": "林芝市",
                "value": "540400",
                "childrens": null
              },
              {
                "text": "山南市",
                "value": "540500",
                "childrens": null
              },
              {
                "text": "那曲地区",
                "value": "542400",
                "childrens": null
              },
              {
                "text": "阿里地区",
                "value": "542500",
                "childrens": null
              }
            ]
          },
          {
            "text": "陕西省",
            "value": "610000",
            "childrens": [
              {
                "text": "西安市",
                "value": "610100",
                "childrens": null
              },
              {
                "text": "铜川市",
                "value": "610200",
                "childrens": null
              },
              {
                "text": "宝鸡市",
                "value": "610300",
                "childrens": null
              },
              {
                "text": "咸阳市",
                "value": "610400",
                "childrens": null
              },
              {
                "text": "渭南市",
                "value": "610500",
                "childrens": null
              },
              {
                "text": "延安市",
                "value": "610600",
                "childrens": null
              },
              {
                "text": "汉中市",
                "value": "610700",
                "childrens": null
              },
              {
                "text": "榆林市",
                "value": "610800",
                "childrens": null
              },
              {
                "text": "安康市",
                "value": "610900",
                "childrens": null
              },
              {
                "text": "商洛市",
                "value": "611000",
                "childrens": null
              }
            ]
          },
          {
            "text": "甘肃省",
            "value": "620000",
            "childrens": [
              {
                "text": "兰州市",
                "value": "620100",
                "childrens": null
              },
              {
                "text": "嘉峪关市",
                "value": "620200",
                "childrens": null
              },
              {
                "text": "金昌市",
                "value": "620300",
                "childrens": null
              },
              {
                "text": "白银市",
                "value": "620400",
                "childrens": null
              },
              {
                "text": "天水市",
                "value": "620500",
                "childrens": null
              },
              {
                "text": "武威市",
                "value": "620600",
                "childrens": null
              },
              {
                "text": "张掖市",
                "value": "620700",
                "childrens": null
              },
              {
                "text": "平凉市",
                "value": "620800",
                "childrens": null
              },
              {
                "text": "酒泉市",
                "value": "620900",
                "childrens": null
              },
              {
                "text": "庆阳市",
                "value": "621000",
                "childrens": null
              },
              {
                "text": "定西市",
                "value": "621100",
                "childrens": null
              },
              {
                "text": "陇南市",
                "value": "621200",
                "childrens": null
              },
              {
                "text": "临夏回族自治州",
                "value": "622900",
                "childrens": null
              },
              {
                "text": "甘南藏族自治州",
                "value": "623000",
                "childrens": null
              }
            ]
          },
          {
            "text": "宁夏回族自治区",
            "value": "640000",
            "childrens": [
              {
                "text": "银川市",
                "value": "640100",
                "childrens": null
              },
              {
                "text": "石嘴山市",
                "value": "640200",
                "childrens": null
              },
              {
                "text": "吴忠市",
                "value": "640300",
                "childrens": null
              },
              {
                "text": "固原市",
                "value": "640400",
                "childrens": null
              },
              {
                "text": "中卫市",
                "value": "640500",
                "childrens": null
              }
            ]
          },
          {
            "text": "香港特别行政区",
            "value": "810000",
            "childrens": [
              {
                "text": "中西区",
                "value": "810001",
                "childrens": null
              },
              {
                "text": "湾仔区",
                "value": "810002",
                "childrens": null
              },
              {
                "text": "东区",
                "value": "810003",
                "childrens": null
              },
              {
                "text": "南区",
                "value": "810004",
                "childrens": null
              },
              {
                "text": "油尖旺区",
                "value": "810005",
                "childrens": null
              },
              {
                "text": "深水埗区",
                "value": "810006",
                "childrens": null
              },
              {
                "text": "九龙城区",
                "value": "810007",
                "childrens": null
              },
              {
                "text": "黄大仙区",
                "value": "810008",
                "childrens": null
              },
              {
                "text": "观塘区",
                "value": "810009",
                "childrens": null
              },
              {
                "text": "荃湾区",
                "value": "810010",
                "childrens": null
              },
              {
                "text": "屯门区",
                "value": "810011",
                "childrens": null
              },
              {
                "text": "元朗区",
                "value": "810012",
                "childrens": null
              },
              {
                "text": "北区",
                "value": "810013",
                "childrens": null
              },
              {
                "text": "大埔区",
                "value": "810014",
                "childrens": null
              },
              {
                "text": "西贡区",
                "value": "810015",
                "childrens": null
              },
              {
                "text": "沙田区",
                "value": "810016",
                "childrens": null
              },
              {
                "text": "葵青区",
                "value": "810017",
                "childrens": null
              },
              {
                "text": "离岛区",
                "value": "810018",
                "childrens": null
              }
            ]
          },
          {
            "text": "澳门特别行政区",
            "value": "820000",
            "childrens": [
              {
                "text": "花地玛堂区",
                "value": "820001",
                "childrens": null
              },
              {
                "text": "花王堂区",
                "value": "820002",
                "childrens": null
              },
              {
                "text": "望德堂区",
                "value": "820003",
                "childrens": null
              },
              {
                "text": "大堂区",
                "value": "820004",
                "childrens": null
              },
              {
                "text": "风顺堂区",
                "value": "820005",
                "childrens": null
              },
              {
                "text": "嘉模堂区",
                "value": "820006",
                "childrens": null
              },
              {
                "text": "路凼填海区",
                "value": "820007",
                "childrens": null
              },
              {
                "text": "圣方济各堂区",
                "value": "820008",
                "childrens": null
              }
            ]
          },
          {
            "text": "天津市",
            "value": "120000",
            "childrens": [
              {
                "text": "天津城区",
                "value": "120100",
                "childrens": null
              }
            ]
          },
          {
            "text": "辽宁省",
            "value": "210000",
            "childrens": [
              {
                "text": "大连市",
                "value": "210200",
                "childrens": null
              },
              {
                "text": "本溪市",
                "value": "210500",
                "childrens": null
              },
              {
                "text": "阜新市",
                "value": "210900",
                "childrens": null
              },
              {
                "text": "铁岭市",
                "value": "211200",
                "childrens": null
              },
              {
                "text": "沈阳市",
                "value": "210100",
                "childrens": null
              },
              {
                "text": "抚顺市",
                "value": "210400",
                "childrens": null
              },
              {
                "text": "锦州市",
                "value": "210700",
                "childrens": null
              },
              {
                "text": "辽阳市",
                "value": "211000",
                "childrens": null
              },
              {
                "text": "朝阳市",
                "value": "211300",
                "childrens": null
              },
              {
                "text": "鞍山市",
                "value": "210300",
                "childrens": null
              },
              {
                "text": "丹东市",
                "value": "210600",
                "childrens": null
              },
              {
                "text": "营口市",
                "value": "210800",
                "childrens": null
              },
              {
                "text": "盘锦市",
                "value": "211100",
                "childrens": null
              },
              {
                "text": "葫芦岛市",
                "value": "211400",
                "childrens": null
              }
            ]
          },
          {
            "text": "黑龙江省",
            "value": "230000",
            "childrens": [
              {
                "text": "齐齐哈尔市",
                "value": "230200",
                "childrens": null
              },
              {
                "text": "鸡西市",
                "value": "230300",
                "childrens": null
              },
              {
                "text": "鹤岗市",
                "value": "230400",
                "childrens": null
              },
              {
                "text": "双鸭山市",
                "value": "230500",
                "childrens": null
              },
              {
                "text": "大庆市",
                "value": "230600",
                "childrens": null
              },
              {
                "text": "伊春市",
                "value": "230700",
                "childrens": null
              },
              {
                "text": "七台河市",
                "value": "230900",
                "childrens": null
              },
              {
                "text": "哈尔滨市",
                "value": "230100",
                "childrens": null
              },
              {
                "text": "佳木斯市",
                "value": "230800",
                "childrens": null
              },
              {
                "text": "牡丹江市",
                "value": "231000",
                "childrens": null
              },
              {
                "text": "黑河市",
                "value": "231100",
                "childrens": null
              },
              {
                "text": "绥化市",
                "value": "231200",
                "childrens": null
              },
              {
                "text": "大兴安岭地区",
                "value": "232700",
                "childrens": null
              }
            ]
          },
          {
            "text": "江苏省",
            "value": "320000",
            "childrens": [
              {
                "text": "南京市",
                "value": "320100",
                "childrens": null
              },
              {
                "text": "常州市",
                "value": "320400",
                "childrens": null
              },
              {
                "text": "连云港市",
                "value": "320700",
                "childrens": null
              },
              {
                "text": "扬州市",
                "value": "321000",
                "childrens": null
              },
              {
                "text": "镇江市",
                "value": "321100",
                "childrens": null
              },
              {
                "text": "泰州市",
                "value": "321200",
                "childrens": null
              },
              {
                "text": "无锡市",
                "value": "320200",
                "childrens": null
              },
              {
                "text": "苏州市",
                "value": "320500",
                "childrens": null
              },
              {
                "text": "淮安市",
                "value": "320800",
                "childrens": null
              },
              {
                "text": "徐州市",
                "value": "320300",
                "childrens": null
              },
              {
                "text": "南通市",
                "value": "320600",
                "childrens": null
              },
              {
                "text": "盐城市",
                "value": "320900",
                "childrens": null
              },
              {
                "text": "宿迁市",
                "value": "321300",
                "childrens": null
              }
            ]
          },
          {
            "text": "安徽省",
            "value": "340000",
            "childrens": [
              {
                "text": "合肥市",
                "value": "340100",
                "childrens": null
              },
              {
                "text": "芜湖市",
                "value": "340200",
                "childrens": null
              },
              {
                "text": "蚌埠市",
                "value": "340300",
                "childrens": null
              },
              {
                "text": "淮南市",
                "value": "340400",
                "childrens": null
              },
              {
                "text": "马鞍山市",
                "value": "340500",
                "childrens": null
              },
              {
                "text": "淮北市",
                "value": "340600",
                "childrens": null
              },
              {
                "text": "铜陵市",
                "value": "340700",
                "childrens": null
              },
              {
                "text": "安庆市",
                "value": "340800",
                "childrens": null
              },
              {
                "text": "黄山市",
                "value": "341000",
                "childrens": null
              },
              {
                "text": "滁州市",
                "value": "341100",
                "childrens": null
              },
              {
                "text": "阜阳市",
                "value": "341200",
                "childrens": null
              },
              {
                "text": "宿州市",
                "value": "341300",
                "childrens": null
              },
              {
                "text": "六安市",
                "value": "341500",
                "childrens": null
              },
              {
                "text": "亳州市",
                "value": "341600",
                "childrens": null
              },
              {
                "text": "池州市",
                "value": "341700",
                "childrens": null
              },
              {
                "text": "宣城市",
                "value": "341800",
                "childrens": null
              }
            ]
          },
          {
            "text": "山东省",
            "value": "370000",
            "childrens": [
              {
                "text": "淄博市",
                "value": "370300",
                "childrens": null
              },
              {
                "text": "东营市",
                "value": "370500",
                "childrens": null
              },
              {
                "text": "烟台市",
                "value": "370600",
                "childrens": null
              },
              {
                "text": "潍坊市",
                "value": "370700",
                "childrens": null
              },
              {
                "text": "济宁市",
                "value": "370800",
                "childrens": null
              },
              {
                "text": "威海市",
                "value": "371000",
                "childrens": null
              },
              {
                "text": "莱芜市",
                "value": "371200",
                "childrens": null
              },
              {
                "text": "德州市",
                "value": "371400",
                "childrens": null
              },
              {
                "text": "聊城市",
                "value": "371500",
                "childrens": null
              },
              {
                "text": "滨州市",
                "value": "371600",
                "childrens": null
              },
              {
                "text": "菏泽市",
                "value": "371700",
                "childrens": null
              },
              {
                "text": "济南市",
                "value": "370100",
                "childrens": null
              },
              {
                "text": "青岛市",
                "value": "370200",
                "childrens": null
              },
              {
                "text": "枣庄市",
                "value": "370400",
                "childrens": null
              },
              {
                "text": "泰安市",
                "value": "370900",
                "childrens": null
              },
              {
                "text": "日照市",
                "value": "371100",
                "childrens": null
              },
              {
                "text": "临沂市",
                "value": "371300",
                "childrens": null
              }
            ]
          },
          {
            "text": "湖北省",
            "value": "420000",
            "childrens": [
              {
                "text": "黄石市",
                "value": "420200",
                "childrens": null
              },
              {
                "text": "十堰市",
                "value": "420300",
                "childrens": null
              },
              {
                "text": "宜昌市",
                "value": "420500",
                "childrens": null
              },
              {
                "text": "襄阳市",
                "value": "420600",
                "childrens": null
              },
              {
                "text": "孝感市",
                "value": "420900",
                "childrens": null
              },
              {
                "text": "荆州市",
                "value": "421000",
                "childrens": null
              },
              {
                "text": "黄冈市",
                "value": "421100",
                "childrens": null
              },
              {
                "text": "咸宁市",
                "value": "421200",
                "childrens": null
              },
              {
                "text": "随州市",
                "value": "421300",
                "childrens": null
              },
              {
                "text": "恩施土家族苗族自治州",
                "value": "422800",
                "childrens": null
              },
              {
                "text": "天门市",
                "value": "429006",
                "childrens": null
              },
              {
                "text": "武汉市",
                "value": "420100",
                "childrens": null
              },
              {
                "text": "鄂州市",
                "value": "420700",
                "childrens": null
              },
              {
                "text": "潜江市",
                "value": "429005",
                "childrens": null
              },
              {
                "text": "神农架林区",
                "value": "429021",
                "childrens": null
              },
              {
                "text": "仙桃市",
                "value": "429004",
                "childrens": null
              },
              {
                "text": "荆门市",
                "value": "420800",
                "childrens": null
              }
            ]
          },
          {
            "text": "广东省",
            "value": "440000",
            "childrens": [
              {
                "text": "广州市",
                "value": "440100",
                "childrens": null
              },
              {
                "text": "韶关市",
                "value": "440200",
                "childrens": null
              },
              {
                "text": "深圳市",
                "value": "440300",
                "childrens": null
              },
              {
                "text": "珠海市",
                "value": "440400",
                "childrens": null
              },
              {
                "text": "汕头市",
                "value": "440500",
                "childrens": null
              },
              {
                "text": "佛山市",
                "value": "440600",
                "childrens": null
              },
              {
                "text": "江门市",
                "value": "440700",
                "childrens": null
              },
              {
                "text": "湛江市",
                "value": "440800",
                "childrens": null
              },
              {
                "text": "茂名市",
                "value": "440900",
                "childrens": null
              },
              {
                "text": "肇庆市",
                "value": "441200",
                "childrens": null
              },
              {
                "text": "惠州市",
                "value": "441300",
                "childrens": null
              },
              {
                "text": "梅州市",
                "value": "441400",
                "childrens": null
              },
              {
                "text": "汕尾市",
                "value": "441500",
                "childrens": null
              },
              {
                "text": "河源市",
                "value": "441600",
                "childrens": null
              },
              {
                "text": "阳江市",
                "value": "441700",
                "childrens": null
              },
              {
                "text": "清远市",
                "value": "441800",
                "childrens": null
              },
              {
                "text": "东莞市",
                "value": "441900",
                "childrens": null
              },
              {
                "text": "中山市",
                "value": "442000",
                "childrens": null
              },
              {
                "text": "潮州市",
                "value": "445100",
                "childrens": null
              },
              {
                "text": "揭阳市",
                "value": "445200",
                "childrens": null
              },
              {
                "text": "云浮市",
                "value": "445300",
                "childrens": null
              },
              {
                "text": "东沙群岛",
                "value": "442100",
                "childrens": null
              }
            ]
          },
          {
            "text": "海南省",
            "value": "460000",
            "childrens": [
              {
                "text": "白沙黎族自治县",
                "value": "469025",
                "childrens": null
              },
              {
                "text": "保亭黎族苗族自治县",
                "value": "469029",
                "childrens": null
              },
              {
                "text": "昌江黎族自治县",
                "value": "469026",
                "childrens": null
              },
              {
                "text": "澄迈县",
                "value": "469023",
                "childrens": null
              },
              {
                "text": "海口市",
                "value": "460100",
                "childrens": null
              },
              {
                "text": "三亚市",
                "value": "460200",
                "childrens": null
              },
              {
                "text": "三沙市",
                "value": "460300",
                "childrens": null
              },
              {
                "text": "儋州市",
                "value": "460400",
                "childrens": null
              },
              {
                "text": "定安县",
                "value": "469021",
                "childrens": null
              },
              {
                "text": "东方市",
                "value": "469007",
                "childrens": null
              },
              {
                "text": "乐东黎族自治县",
                "value": "469027",
                "childrens": null
              },
              {
                "text": "临高县",
                "value": "469024",
                "childrens": null
              },
              {
                "text": "陵水黎族自治县",
                "value": "469028",
                "childrens": null
              },
              {
                "text": "琼海市",
                "value": "469002",
                "childrens": null
              },
              {
                "text": "琼中黎族苗族自治县",
                "value": "469030",
                "childrens": null
              },
              {
                "text": "屯昌县",
                "value": "469022",
                "childrens": null
              },
              {
                "text": "万宁市",
                "value": "469006",
                "childrens": null
              },
              {
                "text": "文昌市",
                "value": "469005",
                "childrens": null
              },
              {
                "text": "五指山市",
                "value": "469001",
                "childrens": null
              }
            ]
          },
          {
            "text": "四川省",
            "value": "510000",
            "childrens": [
              {
                "text": "成都市",
                "value": "510100",
                "childrens": null
              },
              {
                "text": "自贡市",
                "value": "510300",
                "childrens": null
              },
              {
                "text": "攀枝花市",
                "value": "510400",
                "childrens": null
              },
              {
                "text": "泸州市",
                "value": "510500",
                "childrens": null
              },
              {
                "text": "德阳市",
                "value": "510600",
                "childrens": null
              },
              {
                "text": "绵阳市",
                "value": "510700",
                "childrens": null
              },
              {
                "text": "广元市",
                "value": "510800",
                "childrens": null
              },
              {
                "text": "遂宁市",
                "value": "510900",
                "childrens": null
              },
              {
                "text": "内江市",
                "value": "511000",
                "childrens": null
              },
              {
                "text": "乐山市",
                "value": "511100",
                "childrens": null
              },
              {
                "text": "南充市",
                "value": "511300",
                "childrens": null
              },
              {
                "text": "眉山市",
                "value": "511400",
                "childrens": null
              },
              {
                "text": "宜宾市",
                "value": "511500",
                "childrens": null
              },
              {
                "text": "广安市",
                "value": "511600",
                "childrens": null
              },
              {
                "text": "达州市",
                "value": "511700",
                "childrens": null
              },
              {
                "text": "雅安市",
                "value": "511800",
                "childrens": null
              },
              {
                "text": "巴中市",
                "value": "511900",
                "childrens": null
              },
              {
                "text": "资阳市",
                "value": "512000",
                "childrens": null
              },
              {
                "text": "阿坝藏族羌族自治州",
                "value": "513200",
                "childrens": null
              },
              {
                "text": "甘孜藏族自治州",
                "value": "513300",
                "childrens": null
              },
              {
                "text": "凉山彝族自治州",
                "value": "513400",
                "childrens": null
              }
            ]
          },
          {
            "text": "云南省",
            "value": "530000",
            "childrens": [
              {
                "text": "昆明市",
                "value": "530100",
                "childrens": null
              },
              {
                "text": "曲靖市",
                "value": "530300",
                "childrens": null
              },
              {
                "text": "玉溪市",
                "value": "530400",
                "childrens": null
              },
              {
                "text": "保山市",
                "value": "530500",
                "childrens": null
              },
              {
                "text": "昭通市",
                "value": "530600",
                "childrens": null
              },
              {
                "text": "丽江市",
                "value": "530700",
                "childrens": null
              },
              {
                "text": "普洱市",
                "value": "530800",
                "childrens": null
              },
              {
                "text": "临沧市",
                "value": "530900",
                "childrens": null
              },
              {
                "text": "楚雄彝族自治州",
                "value": "532300",
                "childrens": null
              },
              {
                "text": "红河哈尼族彝族自治州",
                "value": "532500",
                "childrens": null
              },
              {
                "text": "文山壮族苗族自治州",
                "value": "532600",
                "childrens": null
              },
              {
                "text": "西双版纳傣族自治州",
                "value": "532800",
                "childrens": null
              },
              {
                "text": "大理白族自治州",
                "value": "532900",
                "childrens": null
              },
              {
                "text": "德宏傣族景颇族自治州",
                "value": "533100",
                "childrens": null
              },
              {
                "text": "怒江傈僳族自治州",
                "value": "533300",
                "childrens": null
              },
              {
                "text": "迪庆藏族自治州",
                "value": "533400",
                "childrens": null
              }
            ]
          },
          {
            "text": "青海省",
            "value": "630000",
            "childrens": [
              {
                "text": "西宁市",
                "value": "630100",
                "childrens": null
              },
              {
                "text": "海东市",
                "value": "630200",
                "childrens": null
              },
              {
                "text": "海北藏族自治州",
                "value": "632200",
                "childrens": null
              },
              {
                "text": "黄南藏族自治州",
                "value": "632300",
                "childrens": null
              },
              {
                "text": "海南藏族自治州",
                "value": "632500",
                "childrens": null
              },
              {
                "text": "果洛藏族自治州",
                "value": "632600",
                "childrens": null
              },
              {
                "text": "玉树藏族自治州",
                "value": "632700",
                "childrens": null
              },
              {
                "text": "海西蒙古族藏族自治州",
                "value": "632800",
                "childrens": null
              }
            ]
          },
          {
            "text": "新疆维吾尔自治区",
            "value": "650000",
            "childrens": [
              {
                "text": "阿拉尔市",
                "value": "659002",
                "childrens": null
              },
              {
                "text": "北屯市",
                "value": "659005",
                "childrens": null
              },
              {
                "text": "可克达拉市",
                "value": "659008",
                "childrens": null
              },
              {
                "text": "昆玉市",
                "value": "659009",
                "childrens": null
              },
              {
                "text": "石河子市",
                "value": "659001",
                "childrens": null
              },
              {
                "text": "双河市",
                "value": "659007",
                "childrens": null
              },
              {
                "text": "乌鲁木齐市",
                "value": "650100",
                "childrens": null
              },
              {
                "text": "克拉玛依市",
                "value": "650200",
                "childrens": null
              },
              {
                "text": "吐鲁番市",
                "value": "650400",
                "childrens": null
              },
              {
                "text": "哈密市",
                "value": "650500",
                "childrens": null
              },
              {
                "text": "昌吉回族自治州",
                "value": "652300",
                "childrens": null
              },
              {
                "text": "博尔塔拉蒙古自治州",
                "value": "652700",
                "childrens": null
              },
              {
                "text": "巴音郭楞蒙古自治州",
                "value": "652800",
                "childrens": null
              },
              {
                "text": "阿克苏地区",
                "value": "652900",
                "childrens": null
              },
              {
                "text": "克孜勒苏柯尔克孜自治州",
                "value": "653000",
                "childrens": null
              },
              {
                "text": "喀什地区",
                "value": "653100",
                "childrens": null
              },
              {
                "text": "和田地区",
                "value": "653200",
                "childrens": null
              },
              {
                "text": "伊犁哈萨克自治州",
                "value": "654000",
                "childrens": null
              },
              {
                "text": "塔城地区",
                "value": "654200",
                "childrens": null
              },
              {
                "text": "阿勒泰地区",
                "value": "654300",
                "childrens": null
              },
              {
                "text": "铁门关市",
                "value": "659006",
                "childrens": null
              },
              {
                "text": "图木舒克市",
                "value": "659003",
                "childrens": null
              },
              {
                "text": "五家渠市",
                "value": "659004",
                "childrens": null
              }
            ]
          }
        ],
        shadeIsShow: false,
        mformDatasInd: 0,
        pickerModDatas: [],
        cityValue:null,
        reveal: false,
      }
    },

    components: {
      propertyMod, linkageMod
    },
    watch: {
      //判断
      shadeIsShow(val) {
        if (!val && !this.reveal) {
          this.mformDatas[this.mformDatasInd].model = ""
        }
      },
    },
    computed: {
      ...mapState(["time", "lastOrderInfo"]),
      ...mapGetters(["key"]),
      shadeIsShowInd() {
        return this.shadeIsShow ?
          this.mformDatasInd < 3 ?
            3
            : 4
          : null
      }
    },
    beforeCreate() {

    },
    created() {
      let num=this.getCookie("whether") * 1
      if (num > 1) {
        this.getLoanAmount("LoanAmount").then((res) => {
          this.moneyArr = res
        })
        this.getLoanAmount("LoanTerm").then((res) => {
          this.deadlineArr = res
        })
        this.getLoanAmount("LoanUse").then((res) => {
          this.consumeArr = res
        })
        this.$store.dispatch("getLastOrderInfo").then(() => {
          if (this.lastOrderInfo) {
            this.__findModel("userName").model = this.lastOrderInfo.name
            this.__findModel("IDnumber").model = this.lastOrderInfo.idCard
            this.__findModel("phoneNum").model = this.lastOrderInfo.mobilePhone
          }
        })
      }

    },
    mounted() {
    }
    ,
    updated() {

    }
    ,
    methods: {
      //ValuesChange 二级联动
      ValuesChange(select, pitchOn) {
        let city = this.provinceAndCity[select]
        this.mformDatas[this.mformDatasInd].model = city.text + " " + city.childrens[pitchOn].text
        this.cityValue = city.childrens[pitchOn].value
      },
//      输入框值
      onValuesChange(index) {
//        debugger
        this.mformDatas[this.mformDatasInd].model = this.pickerModDatas[index].name
        switch (this.mformDatasInd) {
          case 0:
            this.applyAmount = this.moneyArr[index].code
            break
          case 1:
            this.consume = this.consumeArr[index].code
            break
          case 2:
            this.applyTerm = this.deadlineArr[index].code
            break
          default:
            break
        }
      },
      //获取用户输入的内容
      __findModel(value) {
        let mformDatas = this.mformDatas
        return mformDatas.find(val => val.name == value)
      },
      //下拉列表数据
      async getLoanAmount(codes) {
        let url = this.apiPrefix + '/api/Values/GetSelectDataSourceLogin'
        this.Arr = await
          getLoanAmount(url, {codes: codes})
        let Arr = []
        Arr = this.Arr.data.map((item) => {
          return item.childrens
        })
        Arr.forEach((item) => {
          Arr = item
        })
        return Arr
      },
      //提交
      submit() {
        let propertyModDatas = this.propertyModDatas
        for (let i = 0; i < this.mformDatas.length; i++) {
          let item = this.mformDatas[i]
          if (item.model === "") {
            this.MessageBox.alert(
              item.placeholder,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
            console.log("这里是看看为空循环几次");
            return
          } else if (!item.regular.test(item.model)) {
            this.MessageBox.alert(
              item.message,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
            console.log("这里是看看输错循环几次");
            return
          }
        }
        this.$store.commit("AWAITTRUE")
        let that = this
        let url = this.apiPrefix + "api/OfficialAccounts/InsertLoanDemand"
        this.$store.dispatch("getIdentify2Auth", {
          realName: that.__findModel("userName").model,
          idCard: that.__findModel("IDnumber").model
        }).then((res) => {
          if (res.data.isSame) {
            postLoanDemand(url, {
              loanDemand: {
                applyAmount: that.applyAmount, //贷款金额编码
                purpose: that.consume,//贷款用途编码
                applyTerm: that.applyTerm, //贷款期限编码
                name: that.__findModel("userName").model,  //贷款人
                idCard: that.__findModel("IDnumber").model,  //身份证
                telphone: that.__findModel("phoneNum").model,  //手机
                city:that.cityValue,//城市
                house: propertyModDatas[0].imgUrlIsShow, //有房
                car: propertyModDatas[1].imgUrlIsShow,  //有车
                creditCard: propertyModDatas[2].imgUrlIsShow,//有信用卡
                providentFund: propertyModDatas[3].imgUrlIsShow, //有公积金
                socialSecurity: propertyModDatas[4].imgUrlIsShow //有社保
              },
              phone: that.__findModel("phoneNum").model,  //手机
              verifyCode: "0000", //验证码
              source: "OfficialAccounts"
            }).then(res => {
              this.$store.commit("AWAITFALSE")
              if (res.success) {
                this.MessageBox.alert(
                  '您的申请已提交,我们会立刻开始处理',
                  '提示',
                  {
                    closeOnClickModal: true
                  }
                ).then(() => {
                  this.$router.replace("/homePage")
                })
              } else {
                this.MessageBox.alert(
                  res.message,
                  '提交失败',
                  {
                    closeOnClickModal: true
                  }
                )
              }
            })
          } else {
            this.$store.commit("AWAITFALSE")
            this.MessageBox.alert(
              res.message,
              '提交失败',
              {
                closeOnClickModal: true
              }
            )
          }
        })


      },

//      三角点击
      pullDown(flag, index, inputValue) {
        this.mformDatasInd = index
        if (this.mformDatas[index].purposeList) {
          this.reveal = inputValue
          switch (index) {
            case 0:
              this.pickerModDatas = this.moneyArr
              break
            case 1:
              this.pickerModDatas = this.consumeArr
              break
            case 2:
              this.pickerModDatas = this.deadlineArr
              break
            default:
              this.pickerModDatas = []
              break
          }
          this.shadeIsShow = flag
          !inputValue ? this.mformDatas[index].model = '' : null
        }

      },
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerOccupied
    width (1080 /$rem)
    height (146 /$rem)

  .loanContent
    img
      width (1080 /$rem)
      height (520 /$rem)
    .mform
      margin: 0 (30 /$rem)
      li:first-child
        border-top 1px solid #f2f2f2
      li
        box-sizing border-box
        position relative
        line-height (119 /$rem)
        width (1020 /$rem)
        height (121 /$rem)
        font-size (42 /$rem)
        border-bottom 1px solid #f2f2f2
        text-align right
        span
          color #333333
        .description
          margin-left 0
          float left
        input
          font-size (42 /$rem)
          outline: none
          border: none
          text-align right
          margin-right (20 /$rem)
          width (540 /$rem)
          caret-color #000
          color #333
        input:
        :-moz-placeholder
          text-align right
          color #bbbbbb
        input:
        :-webkit-input-placeholder
          text-align right
          color #bbbbbb
        input:-ms-input-placeholder
          text-align right
          color #bbbbbb
        .purposeList
          width (40 /$rem)
          background: url("./img/fanhuiicon.png") no-repeat right center
          background-size 100%
          padding-right: (40 /$rem)
        .sendMsg
          border-radius (20 /$rem)
          float right
          margin-top (17 /$rem)
          width (290 /$rem)
          height (86 /$rem)
          background-color #bbb
          color #ffffff
          line-height (86 /$rem)
          text-align center
          &.color
            background-color #efca7d

    .propertyCase
      width (1030 /$rem)
      margin (40 /$rem) (30 /$rem) (40 /$rem)
      span
        font-size (42 /$rem)
        color #333333

  .simulationSubmit
    position fixed
    bottom 0
    left 0
    z-index 11
    a
      width (1080 /$rem)
      height (146 /$rem)
      background-image url("./img/shenqing.png")
      background-repeat no-repeat
      background-size 100%

  .maskLayer
    font-family "Microsoft YaHei UI"
    box-sizing border-box
    width (1080 /$rem)
    height (674 /$rem)

  .shadeIsShowHeader
    font-size (42 /$rem)
    height (120 /$rem)
    line-height (120 /$rem)
    .cancel
      margin-left (59 /$rem)
      float left
      color #bbb
    .ascertain
      margin-right (50 /$rem)
      float right
      color #efca7d
</style>
