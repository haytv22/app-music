const backgroundImg = document.querySelector('.background-img')
const nameSong = document.querySelector('.control_container-name')
const audio = document.getElementById('myAudio')

const app = {
    currenIndex: 0,
    isPlaying: false,
    song:[
        {
            namesong: 'Fall back',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Lithe - Fall Back (Visualizer) (128 kbps).mp3',
            lickimg: './acset/object_music/1.jpg'
        },
        {
            namesong: 'Lụy Tình',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Lụy Tình - Hoàng Lụt (prod. NEMTRAN) _ SPEED UP (128 kbps).mp3',
            lickimg: './acset/object_music/2.jpg'
        },
        {
            namesong: 'mai',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - mai - jimmi ngủyên x michael hư đốn (speedup + reverb) (128 kbps).mp3',
            lickimg: './acset/object_music/3.jpg'
        },
        {
            namesong: 'Ngỏ Lời',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Ngỏ Lời (prod.Kuyo) (128 kbps).mp3',
            lickimg: './acset/object_music/4.jpg'
        },
        {
            namesong: 'PARACHUTE',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - PARACHUTE - PARYS (feat. Ivy) _ SPEED UP (128 kbps).mp3',
            lickimg: './acset/object_music/5.jpg'
        },
        {
            namesong: 'TÌNH YÊU CÓ NGHĨA LÀ EM 2',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - TÌNH YÊU CÓ NGHĨA LÀ EM 2 _ [ Mono x Tlinh ] - DangLil (128 kbps).mp3',
            lickimg: './acset/object_music/6.jpg'
        },
        {
            namesong: 'Gửi mẹ',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Gửi mẹ - Nger (Prod by Shark) _ Lyrics video _ HD1080p _ Video Fanmade (128 kbps).mp3',
            lickimg: './acset/object_music/7.jpg'
        },
        {
            namesong: 'Tình yêu màu nắng',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Tình yêu màu nắng (prod.Kuyo) (128 kbps).mp3',
            lickimg: './acset/object_music/8.jpg'
        },
        {
            namesong: 'Vacole',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Vacole - Parys _ LYRICS _ SPEED UP (128 kbps).mp3',
            lickimg: './acset/object_music/9.jpg'
        },
        {
            namesong: 'Yêu Kiều',
            singer: 'Văn vui vẻ',
            linkmusic: './acset/object_music/y2meta.com - Yêu Kiều - Parys (speedup + reverb) (128 kbps).mp3',
            lickimg: './acset/object_music/10_.jpg'
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
        if (number >= ( this_.song.length)-1) {
         number = 0
        }else {
         number = number + 1
        }
        const array = this_.song[number]
        backgroundImg.style.backgroundImage = "url('" + array.lickimg + "')";
         nameSong.textContent = array.namesong
         audio.src = array.linkmusic 
         audio.play()
    }
       //chuyển bài BACK
       const back = document.querySelector('.back_song')
       back.addEventListener('click',function(){
           number = number - 1
           if (number < 0){
            number = 9
           }else {
           }
           const array = this_.song[number]
           backgroundImg.style.backgroundImage = "url('" + array.lickimg + "')";
            nameSong.textContent = array.namesong
            audio.src = array.linkmusic 
            audio.play()
       })

    },
    loandIndex0:function(){
        const array0 = this.song[0]
        backgroundImg.style.backgroundImage = "url('" + array0.lickimg + "')";
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
