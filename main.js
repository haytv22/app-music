const backgroundImg = document.querySelector('.background-img')
const backgroundcolor = document.querySelector('.control')
const nameSong = document.querySelector('.control_container-name')
const audio = document.getElementById('myAudio')

const app = {
    currenIndex: 0,
    isPlaying: false,
    song:[
        {
            namesong: 'Sớm Mai',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Sớm Mai - PiaLinh, Ronboogz, BONN!EX (Official Music Video) (320 kbps).mp3',
            lickimg: './acset/object_music/1.jpg',
            backgroundcolor:'linear-gradient(45deg, #28261b, #0c130f, #dec2b0, #ee7d20)',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Quá Sớm',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Quá Sớm _ Low G _ Rap Nhà Làm (320 kbps).mp3',
            lickimg: './acset/object_music/2.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(26 32 44), rgb(76 152 199), rgb(3 9 29), rgb(106 78 80))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'SỐNG CHO HẾT ĐỜI THANH XUÂN',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - SỐNG CHO HẾT ĐỜI THANH XUÂN _ MUSIC VIDEO _ Dick x Xám x Tuyết (320 kbps).mp3',
            lickimg: './acset/object_music/3.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(89 83 87), rgb(156 84 47), rgb(34 23 19), rgb(154 84 50))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Thằng Mike',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Thằng Mike (Audio) (320 kbps).mp3',
            lickimg: './acset/object_music/4.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(88 96 110), rgb(30 35 48), rgb(50 58 24), rgb(45 26 24))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Trời ơi con chưa muốn chết',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Đen - Trời ơi con chưa muốn chết (Prod. by Tantu Beats) (320 kbps).mp3',
            lickimg: './acset/object_music/5.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(217 217 217), rgb(14 14 14), rgb(218 218 218), rgb(150 150 150))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Lộn Xộn ll',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Đen - Lộn Xộn ll (320 kbps).mp3',
            lickimg: './acset/object_music/6.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(50 55 48), rgb(21 24 31), rgb(58 65 79), rgb(88 69 76))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Trời hôm nay nhiều mây cực!',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Trời hôm nay nhiều mây cực! (320 kbps).mp3',
            lickimg: './acset/object_music/7.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(138 137 186), rgb(145 138 190), rgb(92 128 181), rgb(138 132 178))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: '_Youngz_',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Wxrdie - _Youngz_ ft. Tommy Tèo [Prod. by wokeupat4am] (320 kbps).mp3',
            lickimg: './acset/object_music/8.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(46 62 9), rgb(45 152 40), rgb(118 74 103), rgb(137 11 180))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: ' _KARMA_',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - willistic - _KARMA_ ft. Tommy Tèo _ OFFICIAL AUDIO (320 kbps).mp3',
            lickimg: './acset/object_music/9.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(182 184 183), rgb(54 70 83), rgb(133 142 147)',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Rolling',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Richie D. ICY & AXTROBOY - Rolling (Official Music Video) (320 kbps).mp3',
            lickimg: './acset/object_music/10.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(14 15 11), rgb(63 69 45), rgb(11 10 12), rgb(75 103 112))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'SỐNG CHO HẾT ĐỜI THANH XUÂN 2',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - SỐNG CHO HẾT ĐỜI THANH XUÂN 2 - BCTM x TNS  ( Official Music Video ) (320 kbps).mp3',
            lickimg: './acset/object_music/11.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(255 253 225), rgb(180 189 126), rgb(150 161 107), rgb(255 254 223))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'ghệ iu dấu của em ơi',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - tlinh - ghệ iu dấu của em ơi (feat. 2pillz, wokeup) _ OFFICIAL MUSIC VIDEO (320 kbps).mp3',
            lickimg: './acset/object_music/12.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(146 81 67), rgb(246 82 174), rgb(137 37 68), rgb(231 203 187))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'nếu lúc đó',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - tlinh - nếu lúc đó (ft. 2pillz) _ OFFICIAL MUSIC VIDEO (320 kbps).mp3',
            lickimg: './acset/object_music/13.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(142 92 175), rgb(11 19 22), rgb(179 38 95), rgb(0 1 5))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'TẠI VÌ SAO',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - RPT MCK - TẠI VÌ SAO _ Official Music Video (320 kbps).mp3',
            lickimg: './acset/object_music/14.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(254 254 254), rgb(5 5 5), rgb(199 11 6), rgb(155 155 155))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Waiting For You',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - MONO - Waiting For You (Album 22 - Track No.10) (320 kbps).mp3',
            lickimg: './acset/object_music/15.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(27 46 42), rgb(218 74 51), rgb(209 69 58), rgb(27 32 28))',
            backgroundsize:'400% 400%'
        },
        {
            namesong: 'Có khóc cũng thế thôi',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Hào _ Có khóc cũng thế thôi (Official Visualizer) (320 kbps).mp3',
            lickimg: './acset/object_music/16.jpg',
            backgroundcolor:'linear-gradient(45deg, rgb(108 104 33), rgb(0 0 0), rgb(19 21 17), rgb(216 4 5))',
            backgroundsize:'400% 400%'
        },
    ],
    
    render:function () {
        const html = this.song.map(song => {
            return `
            <div class="list_item">
            <!-- tên và tác giả -->
            <div class="list_item-namesong">
              <!-- ảnh -->
              <div class="namesong-img">
                <div class="list_item-img" style=" background-image: url(${song.lickimg});" ></div>
              </div>
              <div class="list_item-name">
                <p class="namesong-name">${song.namesong}</p>
                <p class="namesong-Author">${song.singer}</p>
              </div>
            </div>
            <!-- dấu 3 chấm -->
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>`
        })
        document.querySelector('.list_items').innerHTML = html.join('')
    },

    handleEvent:function(){
        const img = document.querySelector('.control_header-background');
        const padding = document.querySelector('.control-header')
        const imgwidth = img.offsetWidth
        const initialPadding = 120
        //thu nhỏ ảnh và làm mờ khi cuộn
        document.onscroll = function(){
            const croll =scrollY;               
            const newwidth = (imgwidth - croll) 
            img.style.width = newwidth > 0 ? newwidth + 'px' : 0
            img.style.opacity =  newwidth / imgwidth
            padding.style.paddingTop = newwidth > initialPadding ? (initialPadding) + 'px' : (newwidth > 0 ? newwidth + 'px' : '0');
        }
        const this_ = this
        const playbutton = document.querySelector('.play_js')
        const pausebutton = document.querySelector('.paust_js')
        // nut play và pause nhạc
        playbutton.addEventListener('click', toggleAudio);
        pausebutton.addEventListener('click', toggleAudio);
         function toggleAudio() {
            removeActive()
            if (this_.isPlaying) {
                audio.pause(); // Tạm dừng nhạc nếu đang phát
                
            } else {
                audio.play(); // Chơi nhạc nếu đang tạm dừng
                
            }

        }
        // nhạc khi đang chạy sẽ
        audio.onplay = function(){
            playbutton.classList.remove('active_audio')
            pausebutton.classList.add('active_audio')
            this_.isPlaying = true
        }
        //nhạc khi dừng sẽ
        audio.onpause = function(){
            pausebutton.classList.remove('active_audio')
            playbutton.classList.add('active_audio')
            this_.isPlaying = false
        }
        // xóa active cho nút play,pause
        function removeActive(){
            document.querySelector('.active_audio').classList.remove('active_audio')
        }


       
        const timeline = document.querySelector('.Progress_2')
        const timeduration = document.querySelector('.duration')
        const timecurecurrent = document.querySelector('.curecurrent')
        // thời lượng bài hát thanh timeline
        audio.ontimeupdate = function(){
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const currentTimeString = formatTime(currentTime);
            const durationString = formatTime(duration);
            const progress = (currentTime / duration) * 100

            timeline.style.width = progress + '%'
            timeduration.textContent = durationString
            timecurecurrent.textContent = currentTimeString

             // Kiểm tra hoàn thành âm thanh hiệu quả
            if (Math.floor(currentTime) === Math.floor(duration)) {
                next_song();
            } 
            

        }
        //chuyển giây thành phút
        function formatTime(time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
          }

          

        // tua nhạc
        const progress = document.querySelector('.container-progress')
          function play(newcurrentTime) {
            audio.currentTime = newcurrentTime;
            audio.play();
        }
        // nhấn vào progress để tua nhạc
        progress.addEventListener('click', function(event) {
            const img = document.querySelector('.control-header')
            const widthprogress = progress.offsetWidth;
            const clienx = event.clientX;
            const widthimg = img.offsetWidth;
            const widthtimelint1 = (widthimg - widthprogress) / 2;
        
            const x = ((clienx - widthtimelint1) / widthprogress) * 100;
            const duration = audio.duration;
            const newcurrentTime = (x / 100) * duration;
    
            play(newcurrentTime);

        });

        
        // chỉnh âm lượng
        audio.volume = 0.45454545
        const volumebar = document.querySelector('.volume_bar')
        volumebar.addEventListener('click',function(event){
            const img = document.querySelector('.control-header')
            const control_volume = document.querySelector('.control_container-volume').offsetWidth
            const imgwidth = img.offsetWidth
            const volumeWidth = volumebar.offsetWidth
            const control_Excess = imgwidth - control_volume
            const volume_Excess = control_volume - volumeWidth
            const all_Excess = (control_Excess + volume_Excess) /2
            const x = ((event.clientX) + 6 ) - all_Excess
            const newvolume = x / volumeWidth 
            audio.volume = newvolume
            const Xpercent = newvolume * 100 + '%'
            volume_bar_updata(Xpercent)
       })
       function volume_bar_updata(Xpercent) {
            const volume = document.querySelector('.volume_bar-2')
            volume.style.width = Xpercent
       }


      
       //chuyển bài NEXT
       const next = document.querySelector('.next_song')
       let number = 0
       next.addEventListener('click',function(){next_song()})
       const next_song = function(){
        number = (number + 1) % this_.song.length; 
            const array = this_.song[number]
            backgroundImg.style.backgroundImage = "url('" + array.lickimg + "')";
            backgroundcolor.style.background = array.backgroundcolor;
            backgroundcolor.style.backgroundSize = array.backgroundsize;
            nameSong.textContent = array.namesong
            audio.src = array.linkmusic 
            audio.play()
            acitve_list(number)
            console.log(number);
        }
       //chuyển bài BACK
       const back = document.querySelector('.back_song')
       back.addEventListener('click',function(){
        number = (number - 1 + this_.song.length) % this_.song.length;
            const array = this_.song[number]
            backgroundImg.style.backgroundImage = "url('" + array.lickimg + "')";
            backgroundcolor.style.background = array.backgroundcolor;
            backgroundcolor.style.backgroundSize = array.backgroundsize;
            nameSong.textContent = array.namesong
            audio.src = array.linkmusic 
            audio.play()
            acitve_list(number)
       })



       //acive list song 
       const list_item = document.querySelector(`.list_item:nth-child(1)`)
       list_item.classList.add('active_list')
       function acitve_list(number) {
           const numbers = number + 1
            console.log(numbers);
            const list_item = document.querySelector(`.list_item:nth-child(${numbers})`)
            const acitve_listed = document.querySelector(`.list_item.active_list`)
            acitve_listed.classList.remove('active_list')
            list_item.classList.add('active_list')
       }

       
       

       
    },
    loandIndex0:function(){
        const array0 = this.song[0]
        backgroundImg.style.backgroundImage = "url('" + array0.lickimg + "')";
        backgroundcolor.style.background = array0.backgroundcolor
        backgroundcolor.style.backgroundSize = array0.backgroundsize
        nameSong.textContent = array0.namesong
        audio.src  = array0.linkmusic
    },
    start:function(){
        // reander list song
        this.render()
        // tính năng thu phóng hình
        this.handleEvent()
        // chạy index0 cho hình audio và tên nhạc
        this.loandIndex0()

    }
}
app.start()

// học cái match để đỏi giây sang phút
// học cái  number = (number - 1 + this_.song.length) % this_.song.length; // Đảm bảo số luôn dương bằng cách cộng thêm song.length trước khi lấy phần dư