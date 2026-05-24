
        //    指定计时器到期时间，首先先封装函数antitime()
        function antitime() {
            var now = new Date(); //获取当前时间
            var to = new Date(2023, 1, 1, 0, 0, 0); //指定到期时间
            // 然后拿到当前时间和指定时间的时间差，注意 是毫秒数
            var deltaTime = (to - now) / 1000; //到期时间和当前时间相差的毫秒数/1000换算出总的秒数，方便后边用
            // console.log(deltaTime)
            // 判断 如果时间超了，停止倒计时
            if (deltaTime <= 0) {
                // 停止计时器
                window.clearInterval(antitime);
            }
            // 已知毫秒数，计算天数时分秒
            // 这里用到了取整数的方法，用到哪在哪除，并给其定义赋值，方便后面取用，
            // 用parseInt()取整或者Math.floor()取整,在这里用的是Math.floor()。
            // 计算天数并给其赋值
            var d = Math.floor(deltaTime / 3600 / 24),
                // 计算小时并给其赋值
                h = Math.floor(deltaTime / 3600 % 24),
                // 计算分钟并给其赋值
                m = Math.floor(deltaTime / 60 % 60),
                // 计算秒数并给其赋值
                s = Math.floor(deltaTime % 60);

            //为了增加用户体验，把时间的数字转成字符串，如果分秒毫秒不足10，则前面补0。
            // 这里应该有更好的方法进行封装，为了更好理解，这样写出来。
            if (d < 10) {
                d = '0' + d;
            } else if (h < 10) {
                h = '0' + h;
            } else if (m < 10) {
                m = '0' + m;
            } else if (s < 10) {
                s = '0' + s;
            }
            // 定义一个空的字符串用来接收最后的值
            var timer01 = '';
            timer01 = '距离2023年1月1日还有' + d + '天' + h + '小时' + m + '分' + s + '秒';
            // document.getElementById() 获取DOM元素节点，方便向节点填入数据并显示
            document.getElementById('outtime');
            // 让id拥有outtime属性的元素节点在页面显示timer01中的内容
            outtime.innerHTML = timer01;
        }
        // 开启定时器，并让其1000毫秒更新一次
        setInterval(antitime, 1000);
