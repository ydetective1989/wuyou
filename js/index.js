var order_type = 1,
  pro_type = null,
  user_provice = null,
  user_city = null;
var sel = new MobileSelect({
  trigger: ' .type_select',
  title: '工单类别',
  wheels: [{
    data: [{
        id: 1,
        value: '安装'
      },
      {
        id: 2,
        value: '维修'
      },
      {
        id: 3,
        value: '换芯'
      }
    ]
  }],
  callback: function(index, data) {
    order_type = data[0].id
    console.log(data[0].id, order_type)

  }
});
var sel1 = new MobileSelect({
  trigger: ' .pro_select',
  title: '新增商品信息',
  wheels: [{
    data: [{
      id: 1,
      value: '净水机'
    }, {
      id: 2,
      value: '纯水机'
    }, {
      id: 3,
      value: '前置过滤器'
    }, {
      id: 4,
      value: '中央机'
    }]
  }],
  callback: function(index, data) {
    pro_type = data[0].id
    console.log(data[0].id, pro_type)

  }
});
var sel3 = new MobileSelect({
  trigger: ' .user_provice',
  title: '省份',
  wheels: [{
    data: [{
        id: '1',
        value: '北京',
        childs: [{
            id: '1',
            value: '东城区'
          },
          {
            id: '2',
            value: '西城区'
          },
          {
            id: '3',
            value: '朝阳区'
          },
          {
            id: '4',
            value: '昌平区'
          },
          {
            id: '5',
            value: '来广营'
          }
        ]
      },
      {
        id: '2',
        value: '上海',
        childs: [{
            id: '1',
            value: '东城区'
          },
          {
            id: '2',
            value: '西城区'
          },
          {
            id: '3',
            value: '朝阳区'
          },
          {
            id: '4',
            value: '昌平区'
          },
          {
            id: '5',
            value: '来广营'
          }
        ]
      },
      {
        id: '3',
        value: '武汉',
        childs: [{
            id: '1',
            value: '东城区'
          },
          {
            id: '2',
            value: '西城区'
          },
          {
            id: '3',
            value: '朝阳区'
          },
          {
            id: '4',
            value: '昌平区'
          },
          {
            id: '5',
            value: '来广营'
          }
        ]
      },
      {
        id: '4',
        value: '四川',
        childs: [{
            id: '1',
            value: '东城区'
          },
          {
            id: '2',
            value: '西城区'
          },
          {
            id: '3',
            value: '朝阳区'
          },
          {
            id: '4',
            value: '昌平区'
          },
          {
            id: '5',
            value: '来广营'
          }
        ]
      },
      {
        id: '5',
        value: '湖南',
        childs: [{
            id: '1',
            value: '东城区'
          },
          {
            id: '2',
            value: '西城区'
          },
          {
            id: '3',
            value: '朝阳区'
          },
          {
            id: '4',
            value: '昌平区'
          },
          {
            id: '5',
            value: '来广营'
          }
        ]
      },
      {
        id: '6',
        value: '江苏',
        childs: [{
            id: '1',
            value: '东城区'
          },
          {
            id: '2',
            value: '西城区'
          },
          {
            id: '3',
            value: '朝阳区'
          },
          {
            id: '4',
            value: '昌平区'
          },
          {
            id: '5',
            value: '来广营'
          }
        ]
      }
    ]
  }],
  callback: function(index, data) {
    user_provice = data[0].id;
    user_city = data[1].id;
    console.log(user_provice,user_city)

  }
});

$('document').ready(function() {
  $('.btn_wrapper').on('click', function() {
    if(!$(".order_ps").val()||!pro_type||!$(".user_name").val()||!user_provice||!user_city||!$(".user_address").val()||!$(".user_lag").val()||!$(".user_cellphone").val()||!$(".user_tel").val()){
      alert("请填写完整信息");
    }else{
      $.ajax({
        type: 'POST',
        url: './test.php',
        data:{
          "order_type":order_type,
          "order_ps":$(".order_ps").val(),
          "pro_type":pro_type,
          "user_name" : $(".user_name").val(),
          "user_provice":user_provice,
          "user_city":user_city,
          "user_address":$(".user_address").val(),
          "user_lag":$(".user_lag").val(),
          "user_cellphone":$(".user_cellphone").val(),
          "user_tel":$(".user_tel").val()
        },
        success:function(res){
          if(res == 1){
            document.cookie = '123'
          }
          }
      })
    }
  })
})
