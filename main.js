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
            console.log(newwidth);
        }
        const this_ = this
        const playbutton = document.querySelector('.play_js')
        const pausebutton = document.querySelector('.paust_js')
        // const active_audio = document.querySelector('.active_audio')

        // nut play và láue nhạc
        playbutton.addEventListener('click', toggleAudio);
        pausebutton.addEventListener('click', toggleAudio);
         function toggleAudio() {
            removeActive()
            if (this_.isPlaying) {
                audio.pause(); // Tạm dừng nhạc nếu đang phát
                
            } else {
                audio.play(); // Chơi nhạc nếu đang tạm dừng
                
            }
            const active_audio = document.querySelector('.active_audio')

            console.log(active_audio);
        }
        audio.onplay = function(){
            playbutton.classList.remove('active_audio')
            pausebutton.classList.add('active_audio')
            this_.isPlaying = true
        }
        audio.onpause = function(){
            pausebutton.classList.remove('active_audio')
            playbutton.classList.add('active_audio')
            this_.isPlaying = false
        }
        console.log(this_.isPlaying);
        function removeActive(){
            document.querySelector('.active_audio').classList.remove('active_audio')

        }
    },
    loandIndex0:function(){
        const array0 = this.song[0]
        backgroundImg.style.backgroundImage = "url('" + array0.lickimg + "')";
        nameSong.textContent = array0.namesong
        audio.scr = array0.linkmusic
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
