function requestMethod(method,par2,par3,callback) {


        var xhr =new XMLHttpRequest();

        xhr.open(method,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2,);
        //设置头信息，告诉服务器让数据仪表单的形式传输过去
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

        xhr.send(par3);
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4&&xhr.status==200){
                var responseData= JSON.parse(xhr.responseText);
                var returnstr=responseData.data;
                callback(returnstr);


            }

        }


}