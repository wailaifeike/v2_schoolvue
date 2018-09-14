// import axios from 'axios'
let base = '';
export const doLogin = (params,that)=> {
  that.$axios.request({
    url: "http://127.0.0.1:8010/login/",
    method: "POST",
    data: params,
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(function (args) {
    if (args.data.code === 1000) {
      // that.$store.commit('saveToken',{token:args.data.token,username:that.ruleForm2.account});
      console.log(args.data.token)
      //console.log(that)
      //console.log(args.data)



      var t = setTimeout(function (){
        that.$message({
          showClose: true,
          message: args.data.msg,
          type: 'success'
        });

        that.logining = false

        that.$router.push({path:'/'})
      }, 1000);


      // return args.data.token
      // var url = that.$route.query.backUrl
      // if (url) {
      //   that.$router.push({path: url})
      // } else {
      //   that.$router.push({path: '/'})
      //   // location.reload()
      //
      // }
    } else {




      var t = setTimeout(function (){
        that.$message({
          showClose: true,
          message: args.data.error,
          type: 'error'
        });
        that.logining = false
      }, 1000);
    }
    // that.logining = false
  }).catch(function (args) {

  })
};

