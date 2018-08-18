(
    () => {
        return {
            template:`
                <div>
                    <div class="wrap-swipe">
                        <div class="swipe">
                            <div class="stage">
                                <ul ref="box">
                                    <li v-for="(ite,i) of imageList"
                                        :key="i" :style="{'background-image':'url('+ite+')'}"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </div>
                 
            `,
            data(){
                return {
                    imageList:[],
                    timer1:null,
                    timer2:null,
                    myAnimation:null,
                    num:2,
                    dec:['rotateX','rotateY','rotateZ']
                }
            },
            created(){
                fetch('./data/image-data/3d-box.json').then( res => 
                    res.json()
                ).then(res => {
                    this.imageList = res;
                })
            },
            mounted(){
                console.log(this.$refs);
                const _this = this;
                this.myAnimation = function (){
                    _this.timer1 = setInterval(
                        () => {
                            var num = Math.floor(Math.random()*3);
                            while (num == _this.num) {
                                num = Math.floor(Math.random()*3);
                            }
                            _this.num = num;
                            var num1 = Math.floor(Math.random()*4)+1;
                            var derection = _this.dec[_this.num];
                            var iniAngle = 90 * num1 / 100;
                            var angle = 0;
                            _this.timer2 = setInterval(
                                () => {
                                    angle += iniAngle;
                                    _this.$refs.box.style.transform = derection + '(' + angle + 'deg)';
                                }
                            ,10);
                            // debugger;
                            setTimeout(() => {
                                _this.timer2 = null;
                                derection = null;
                                iniAngle = null;
                                angle = null;
                            },1000);
                            
                        }
                    ,2000)                
                }
                this.myAnimation();
            }

        } 
    }
)();