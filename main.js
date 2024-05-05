const app = {
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
        const imgwidth = img.offsetWidth
        document.onscroll = function(){
            const croll =scrollY;               
            const newwidth = (imgwidth - croll) 
            img.style.width = newwidth > 0 ? newwidth + 'px' : 0
        }
    },
    start:function(){
        this.render()
        this.handleEvent()
    }
}
app.start()
